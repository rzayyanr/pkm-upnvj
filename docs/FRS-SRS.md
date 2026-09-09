# FRS/SRS — Syarat Fungsional & Non-Fungsional Website PKM UPNVJ

> Turunan dari [[PRD]] (User Stories + Keputusan Implementasi). Sumber kebenaran tetap PRD.
> Tanggal: 2026-09-10. Diagram data: lihat [[ERD]].

## A. Syarat Fungsional (FRS)

Setiap syarat ditelusuri balik ke User Story (US) di PRD — tidak ada syarat tanpa alasan pengguna.

| ID | Syarat Fungsional | Traced ke | Prioritas |
|---|---|---|---|
| FR-01 | Website menampilkan halaman-halaman statis: Tentang PKM, 10 halaman Bidang (RE, RSH, K, PM, PI, KC, KI, VGK, GFT, AI) dari satu template data, Tema 2026, Tips Proposal, Unduhan (11 PDF + tautan Simbelmawa), FAQ | US 1–4, 6–10, 14 | Wajib |
| FR-02 | Beranda menampilkan: hero pengantar PKM, pengumuman terpenting aktif, grid 10 bidang, agenda/deadline mendatang, tautan unduhan | US 1, 2, 5, 13 | Wajib |
| FR-03 | Halaman Alur menampilkan tahapan PKM 2026 dengan status (sudah lewat / berjalan / akan datang) berdasarkan tanggal sistem, memisahkan agenda `internal_upnvj` dan `nasional` | US 4, 5 | Wajib |
| FR-04 | Pengelola dapat login admin via **Google OAuth** (Supabase Auth); hanya email terdaftar-aktif di `PROFIL_ADMIN` yang bisa masuk | US 15 | Wajib |
| FR-05 | Panel admin: CRUD **Pengumuman** (judul, isi, kategori, penanda penting, aktif/nonaktif) | US 16 | Wajib |
| FR-06 | Panel admin: CRUD **Agenda/Deadline** (judul, deskripsi, cakupan, tanggal mulai–selesai, tautan) | US 17 | Wajib |
| FR-07 | Panel admin: CRUD **Kontak** (nama unit, email, telepon, Instagram, alamat, urutan) | US 18 | Wajib |
| FR-08 | Panel admin: kelola **Tautan Cepat** (judul, URL, urutan) | US 18 | penting |
| FR-09 | Panel admin tidak menyediakan pengeditan konten panduan statis (tidak ada menu untuk itu) | US 19 | Wajib |
| FR-10 | Konten dinamis yang `aktif = false` tidak tampil di sisi publik, tapi tetap tersimpan di database | US 16, 19 | Wajib |
| FR-11 | Jika database gagal/tercapai limit, halaman panduan statis **tetap** tampil penuh; area konten dinamis menampilkan pesan santun | US 1–14 | Wajib |
| FR-12 | Antarmuka panel admin berbahasa Indonesia, form sederhana | US 20 | Wajib |

## B. Syarat Non-Fungsional (SRS)

| ID | Kategori | Syarat | Ukuran keberhasilan |
|---|---|---|---|
| NFR-01 | Responsif | Mobile-first; seluruh halaman rapi di layar 360px hingga desktop | Tidak ada horizontal scroll di 360px; kartu bidang 2 kolom di HP |
| NFR-02 | Performa | Konten statis ter-prerender (SSG); halaman terasa instan di koneksi kampus | Prerender untuk semua halaman panduan; fetch dinamis hanya beranda/Alur |
| NFR-03 | Biaya | Operasional Rp 0 | Vercel Hobby + Supabase Free (limit terverifikasi di `research/fakta-teknis-vercel-supabase.md`) |
| NFR-04 | Keamanan | Write access hanya untuk admin terverifikasi; RLS aktif di semua tabel; tidak ada service key di kode klien | Uji: anon user tidak bisa tulis; API key rahasia hanya di environment variables |
| NFR-05 | Ketahanan | Kegagalan Supabase tidak mematikan website (lihat FR-11); Supabase pause 7 hari tidak merusak halaman panduan | Simulasi database mati → halaman statis tetap 100% |
| NFR-06 | Aksesibilitas | Kontras teks memenuhi WCAG AA; navigasi keyboard berfungsi; struktur heading benar | Audit manual per halaman |
| NFR-07 | Bahasa & isi | Seluruh UI berbahasa Indonesia; angka panduan persis dari PDF 2026 | Tinjauan konten per halaman |
| NFR-08 | Keberlanjutan | Konten statis terpusat di file data; satu orang baru bisa memperbarui panduan tanpa menyentuh komponen | Update satu bidang = edit 1 file data |
| NFR-09 | SEO dasar | Metadata tiap halaman (title, description); struktur URL bersih | Inspeksi `<head>` per halaman |

## C. Batasan (Constraints)

1. Logo UPNVJ memakai **placeholder** (keputusan 2026-09-10) — slot terpisah agar mudah diganti.
2. Domain: `*.vercel.app` gratis; domain kampus menyusul bila ada izin.
3. Repo GitHub di akun pribadi pemilik proyek (portofolio); dapat ditransfer nanti.
4. Vercel Hobby = non-komersial; Supabase Free = pause 7 hari tanpa aktivitas — keduanya terverifikasi & dimitigasi.
5. Info internal UPNVJ yang belum terkonfirmasi CDE ditampilkan dengan penanda eksplisit (rumusan hati-hati untuk klaim "syarat kelulusan").
