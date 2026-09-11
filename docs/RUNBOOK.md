# RUNBOOK: Panduan Operasional Website PKM UPNVJ

Panduan untuk pemelihara website (pemilik proyek / pengurus penerus).
Untuk pengelola konten sehari-hari, baca [MANUAL-ADMIN.md](MANUAL-ADMIN.md).

Terakhir diperbarui: 2026-09-11 (rilis v1.1)

---

## 1. Peta Akun & Akses

| Layanan | Akun | Dipakai untuk |
|---|---|---|
| GitHub | akun pribadi pemilik proyek (repo `rzayyanr/pkm-upnvj`) | menyimpan kode, deploy otomatis |
| Vercel | login via GitHub (team `zayyan2`, proyek `pkm-upnvj`) | hosting produksi |
| Supabase | akun GitHub (organisasi `rzayyanr's Org`, proyek `pkm-upnvj`) | database + login admin |
| Google Cloud | akun Google pemilik (proyek `pkm-upnvj`) | OAuth login admin |

**Wajib:** 2FA aktif di akun GitHub dan Google. Kalau akun GitHub hilang,
semuanya hilang, ini kunci induknya.

**Daftar admin konten:** tabel `profil_admin` di Supabase. Menambah admin baru:
pemain minta orang itu login sekali di `/admin/login` lewat Google, lalu jalankan
di SQL Editor:

```sql
insert into public.profil_admin (id, email, nama, peran)
select id, email, coalesce(raw_user_meta_data->>'full_name', email), 'admin'
from auth.users
where email = 'email.orang.baru@gmail.com';
```

## 2. Cara Kerja Deploy

- Setiap **push ke branch `master`** di GitHub → Vercel otomatis membangun
  dan menerbitkan (±1 menit). Tidak perlu perintah apa pun.
- Konten dinamis (pengumuman/agenda/kontak/tautan) diubah lewat `/admin`,
  tampil di publik dalam maksimal 5 menit (ISR), tanpa deploy.
- Environment variables di Vercel (Production):
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
  (dua-duanya bukan rahasia; secret key TIDAK diperlukan di Vercel untuk v1)

## 3. Database Supabase: Hal-hal yang Wajib Tahu

### 3a. Proyek gratis bisa "tidur" (pause)

Proyek Free Supabase otomatis **pause setelah ±7 hari tanpa aktivitas**.
Tanda di dashboard: status proyek "Paused". Akibatnya: konten dinamis
(pengumuman/agenda) sementara kosong; halaman panduan tetap normal.

**Cara mengaktifkan kembali:** dashboard Supabase → pilih proyek → klik
**"Restore project"** → tunggu ±2 menit → selesai. Konten tidak hilang.

### 3b. Backup berkala (WAJIB rutin)

Paket Free tidak punya backup otomatis. Kebiasaan yang benar:

1. Masuk `/admin` di website → klik **"Unduh cadangan data (JSON)"**
2. Simpan berkasnya di tempat aman (Google Drive organisasi), penamaan sudah
   otomatis memuat tanggal
3. Lakukan minimal **sekali seminggu**, dan **sebelum** melakukan eksperimen apa pun

### 3c. Memulihkan data dari cadangan

Bila ada data terhapus (contoh nyata: agenda PKP2 terhapus saat uji coba):

1. Buka berkas cadangan JSON terbaru, cari data yang hilang
2. Di Supabase **SQL Editor**, masukkan ulang lewat INSERT, contoh:

```sql
insert into public.agenda_deadline (judul, deskripsi, cakupan, tanggal_mulai, tanggal_selesai, lokasi)
values ('Judul agenda', 'Deskripsi', 'nasional', '2026-09-14', '2026-09-19', 'Daring');
```

3. Tunggu maksimal 5 menit, konten kembali tampil.

Skema lengkap 5 tabel + kebijakan RLS: `supabase/migration.sql` dan diagram
`docs/ERD.md`. Bila database benar-benar kosong total: jalankan ulang
migration.sql, lalu masukkan ulang data dari berkas cadangan.

## 4. Kredensial & Kunci (apa pun yang jangan disebar)

| Kunci | Letak | Sifat |
|---|---|---|
| Publishable key (`sb_publishable_...`) | `.env.local` + Vercel env | boleh publik, dilindungi RLS |
| Secret key (`sb_secret_...`) | HANYA `.env.local`, tidak di Vercel v1 | rahasia, melewati RLS |
| Database password | simpanan pribadi pemilik | untuk akses DB langsung |
| OAuth Client Secret (Google) | dashboard Supabase (Authentication → Providers) | rahasia |

Kunci apa pun yang pernah bocor ke tempat publik: segera buat baru dan
matikan yang lama (Supabase: API Keys; Google: Credentials).

## 5. Troubleshooting Cepat

| Gejala | Kemungkinan | Obat |
|---|---|---|
| Pengumuman/agenda hilang dari beranda | dipause-kan Supabase / item disembunyikan lewat admin | restore project / cek `/admin` (badge "Disembunyikan") |
| Perubahan admin tak muncul | cache halaman 5 menit | tunggu maksimal 5 menit, lalu refresh |
| Login Google gagal / kembali aneh | redirect URL di Supabase belum benar | Authentication → URL Configuration: Site URL `https://pkm-upnvj.vercel.app` + Redirect URLs `https://pkm-upnvj.vercel.app/**` |
| "Akses ditolak" saat masuk admin | email belum di `profil_admin` | lihat perintah SQL di bagian 1 |
| Build gagal di Vercel | lihat log deploy di dashboard Vercel | perbaiki sesi pesan error, push lagi |

## 6. Prosedur Penyerahan ke Pengurus Berikutnya

1. Transfer repo GitHub: repo → Settings → Danger Zone → Transfer ownership
2. Undang email penerus di Vercel (Settings → Members) dan Supabase (Org members)
3. Serahkan: database password, akses Google Cloud, catatan backup terbaru
4. Minta penerus mengaktifkan 2FA di semua akunnya sebelum menerima
5. Perbarui baris ini di RUNBOOK (siapa memegang apa)
