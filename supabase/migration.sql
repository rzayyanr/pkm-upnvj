-- ============================================================
-- Migrasi Tiket 07 — Skema Website PKM UPNVJ
-- Sumber: docs/ERD.md (kanaon) — jalankan di SQL Editor Supabase
-- Tabel konten dinamis saja; panduan statis tetap di kode.
-- ============================================================

-- Fungsi updated_at otomatis
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ------------------------------------------------------------
-- 1. PROFIL_ADMIN — daftar putih email yang boleh memakai panel admin
-- ------------------------------------------------------------
create table public.profil_admin (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  nama text not null default '',
  peran text not null default 'editor' check (peran in ('admin', 'editor')),
  aktif boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.profil_admin enable row level security;

-- admin boleh melihat barisnya sendiri; mengelola daftar admin lewat dashboard
create policy "profil_admin lihat sendiri"
  on public.profil_admin for select
  to authenticated
  using (id = auth.uid());

-- ------------------------------------------------------------
-- 2. PENGUMUMAN
-- ------------------------------------------------------------
create table public.pengumuman (
  id uuid primary key default gen_random_uuid(),
  penulis_id uuid references auth.users(id) on delete set null,
  judul text not null check (char_length(judul) <= 200),
  isi text not null,
  kategori text not null default 'pengumuman'
    check (kategori in ('pengumuman', 'pemberitahuan', 'jadwal')),
  penting boolean not null default false,
  aktif boolean not null default true,
  tanggal_terbit timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index pengumuman_aktif_terbit_idx
  on public.pengumuman (aktif, tanggal_terbit desc);

-- ------------------------------------------------------------
-- 3. AGENDA_DEADLINE
-- ------------------------------------------------------------
create table public.agenda_deadline (
  id uuid primary key default gen_random_uuid(),
  judul text not null,
  deskripsi text not null default '',
  cakupan text not null default 'nasional'
    check (cakupan in ('internal_upnvj', 'nasional')),
  tanggal_mulai date not null,
  tanggal_selesai date,
  lokasi text,
  tautan text,
  aktif boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint agenda_tanggal_check
    check (tanggal_selesai is null or tanggal_selesai >= tanggal_mulai)
);

create index agenda_aktif_mulai_idx
  on public.agenda_deadline (aktif, tanggal_mulai);

-- ------------------------------------------------------------
-- 4. KONTAK
-- ------------------------------------------------------------
create table public.kontak (
  id uuid primary key default gen_random_uuid(),
  nama_unit text not null,
  email text not null,
  telepon text,
  instagram text,
  alamat text not null default '',
  jam_layanan text,
  urutan int not null default 0,
  aktif boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ------------------------------------------------------------
-- 5. TAUTAN_CEPAT
-- ------------------------------------------------------------
create table public.tautan_cepat (
  id uuid primary key default gen_random_uuid(),
  judul text not null,
  url text not null,
  deskripsi text,
  urutan int not null default 0,
  aktif boolean not null default true,
  created_at timestamptz not null default now()
);

-- ------------------------------------------------------------
-- Trigger updated_at untuk tabel dengan kolom updated_at
-- ------------------------------------------------------------
create trigger set_updated_at_pengumuman before update on public.pengumuman
  for each row execute function public.set_updated_at();
create trigger set_updated_at_agenda before update on public.agenda_deadline
  for each row execute function public.set_updated_at();
create trigger set_updated_at_kontak before update on public.kontak
  for each row execute function public.set_updated_at();

-- ------------------------------------------------------------
-- ROW LEVEL SECURITY
-- Prinsip (FR/NFR-04): publik hanya BACA baris aktif;
-- tulis hanya oleh pengguna terautentikasi yang terdaftar aktif
-- di profil_admin. Kebijakan dievaluasi per baris.
-- ------------------------------------------------------------
alter table public.pengumuman enable row level security;
alter table public.agenda_deadline enable row level security;
alter table public.kontak enable row level security;
alter table public.tautan_cepat enable row level security;

-- BACA: siapa pun, hanya baris aktif
create policy "publik baca pengumuman aktif" on public.pengumuman
  for select to anon, authenticated using (aktif);
create policy "publik baca agenda aktif" on public.agenda_deadline
  for select to anon, authenticated using (aktif);
create policy "publik baca kontak aktif" on public.kontak
  for select to anon, authenticated using (aktif);
create policy "publik baca tautan aktif" on public.tautan_cepat
  for select to anon, authenticated using (aktif);

-- TULIS: hanya admin terdaftar (dicek per baris lewat profil_admin)
create policy "admin kelola pengumuman" on public.pengumuman
  for all to authenticated
  using (exists (
    select 1 from public.profil_admin p
    where p.id = auth.uid() and p.aktif
  ))
  with check (exists (
    select 1 from public.profil_admin p
    where p.id = auth.uid() and p.aktif
  ));

create policy "admin kelola agenda" on public.agenda_deadline
  for all to authenticated
  using (exists (
    select 1 from public.profil_admin p
    where p.id = auth.uid() and p.aktif
  ))
  with check (exists (
    select 1 from public.profil_admin p
    where p.id = auth.uid() and p.aktif
  ));

create policy "admin kelola kontak" on public.kontak
  for all to authenticated
  using (exists (
    select 1 from public.profil_admin p
    where p.id = auth.uid() and p.aktif
  ))
  with check (exists (
    select 1 from public.profil_admin p
    where p.id = auth.uid() and p.aktif
  ));

create policy "admin kelola tautan" on public.tautan_cepat
  for all to authenticated
  using (exists (
    select 1 from public.profil_admin p
    where p.id = auth.uid() and p.aktif
  ))
  with check (exists (
    select 1 from public.profil_admin p
    where p.id = auth.uid() and p.aktif
  ));

-- ------------------------------------------------------------
-- DATA AWAL (seed) — jadwal resmi siklus PKM 2026 (riset
-- research/jadwal-pkm-2026.md) + kontak CDE + tautan resmi
-- ------------------------------------------------------------
insert into public.agenda_deadline (judul, deskripsi, cakupan, tanggal_mulai, tanggal_selesai, lokasi, tautan)
values
  ('PKP2 — Penilaian Kemajuan Pelaksanaan PKM (daring)',
   'Presentasi kemajuan kegiatan ke 2 penilai Direktorat Pembelajaran dan Kemahasiswaan. Pengumuman judul yang dinilai terbit 28 Agustus 2026.',
   'nasional', '2026-09-14', '2026-09-19', 'Daring', null),
  ('PKM Award 2026',
   'Apresiasi bagi mahasiswa, dosen pendamping, dan perguruan tinggi atas dedikasi selama pelaksanaan PKM.',
   'nasional', '2026-09-19', '2026-09-20', null, null),
  ('Batas unggah laporan akhir',
   'Laporan akhir adalah syarat pencairan dana tahap akhir. Tim yang tidak mengunggah sampai batas waktu wajib mengembalikan dana ke kas negara.',
   'nasional', '2026-09-21', '2026-10-03', null, null),
  ('Pengumuman peserta PIMNAS 39',
   'Penetapan judul PKM yang berhak mengikuti PIMNAS berdasarkan nilai akhir.',
   'nasional', '2026-10-12', '2026-10-13', null, null),
  ('PIMNAS 39 tahun 2026',
   'Pekan Ilmiah Mahasiswa Nasional ke-39 — panggung final pelaksanaan PKM: presentasi, poster, dan gelar produk.',
   'nasional', '2026-11-02', '2026-11-07', 'Universitas Diponegoro, Semarang', null);

insert into public.pengumuman (judul, isi, kategori, penting, tanggal_terbit)
values
  ('Siklus PKM 2026 memasuki tahap PKP2',
   'Penilaian Kemajuan Pelaksanaan PKM (PKP2) dilaksanakan secara daring 14–19 September 2026. Tim yang didanai wajib memastikan laporan kemajuan, Logbook, dan tautan media sosial telah lengkap di simbelmawa sebelum jadwal penilaian.',
   'jadwal', true, now());

insert into public.kontak (nama_unit, email, telepon, instagram, alamat, jam_layanan, urutan)
values
  ('UPT Pengembangan Karir dan Kewirausahaan (CDE)',
   'cde@upnvj.ac.id',
   null,
   'https://www.instagram.com/cde.upnvj/',
   'Gedung R.A. Kartini lantai 1, Kampus UPNVJ',
   null,
   0);

insert into public.tautan_cepat (judul, url, deskripsi, urutan)
values
  ('Simbelmawa PKM', 'https://simbelmawa.kemdiktisaintek.go.id/pkm/', 'Sistem pendaftaran dan pelaporan PKM resmi', 0),
  ('Kemdiktisaintek', 'https://kemdiktisaintek.go.id', 'Kementerian Pendidikan Tinggi, Sains, dan Teknologi', 1),
  ('Panduan GenAI Belmawa', 'https://s.id/PanduanGenAI', 'Ketentuan penggunaan kecerdasan buatan dalam PKM', 2);
