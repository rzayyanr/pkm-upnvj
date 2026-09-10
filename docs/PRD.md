# PRD, Website Informasi PKM UPN Veteran Jakarta

> Disusun dengan skill `to-spec` (mattpocock/skills) dari hasil wawancara `/grill-me`
> pada 2026-09-09. Sumber konten: 11 PDF Panduan PKM 2026.

---

## Problem Statement

Mahasiswa UPN Veteran Jakarta kurang mendapat informasi tentang Program Kreativitas
Mahasiswa (PKM), padahal PKM merupakan **salah satu syarat kelulusan** di kampus.
Informasi yang ada tersebar, tidak terpusat, dan sulit diakses. Akibatnya mahasiswa
bingung mulai dari hal paling dasar: PKM itu apa, bidang mana yang cocok untuk mereka,
bagaimana tahapan pendaftarannya, kapan batas waktunya, ke mana harus bertanya, dan
format proposal seperti apa yang benar, sehingga banyak yang gagal mengikuti atau
terlambat menyiapkan PKM.

## Solution

Website pusat informasi PKM untuk lingkungan UPN Veteran Jakarta yang:

1. **Mengedukasi** mahasiswa yang belum mengenal PKM (beranda + halaman tentang),
2. **Membimbing** mahasiswa yang sudah siap mendaftar (detail 10 bidang, alur tahapan,
   tips proposal, unduhan panduan resmi, FAQ),
3. **Menjadi sumber informasi terkini kampus**, pengumuman, deadline, dan kontak
   pengelola UPNVJ yang bisa di-update pengelola lewat halaman admin tanpa menyentuh kode,
4. Menyajikan seluruh konten dari **Panduan PKM 2026 resmi** (11 PDF), bukan dari
   sumber tidak resmi.

## User Stories

**Mahasiswa (pengunjung umum):**

1. Sebagai mahasiswa UPNVJ yang belum tahu PKM, saya ingin membaca penjelasan singkat apa itu PKM dan mengapa penting, sehingga saya memahami urgensinya (termasuk statusnya sebagai syarat kelulusan).
2. Sebagai mahasiswa yang baru pertama kali mendengar PKM, saya ingin melihat daftar 10 bidang PKM dengan penjelasan singkat, sehingga saya bisa menemukan bidang yang menarik bagi saya.
3. Sebagai mahasiswa yang ragu memilih bidang, saya ingin membuka halaman detail tiap bidang (definisi, inti kegiatan, komposisi tim, dana, luaran), sehingga saya bisa membandingkan dan memutuskan.
4. Sebagai mahasiswa yang ingin mendaftar, saya ingin melihat alur/tahapan PKM dari awal sampai PIMNAS, sehingga saya tahu langkah berikutnya yang harus dilakukan.
5. Sebagai mahasiswa yang ingin mendaftar, saya ingin melihat jadwal penting (deadline UPNVJ dan nasional), sehingga saya tidak terlambat.
6. Sebagai mahasiswa yang menyusun proposal, saya ingin tahu sistematika dan format proposal per bidang, sehingga proposal saya tidak gugur di tahap administrasi.
7. Sebagai mahasiswa yang menyusun proposal, saya ingin tahu ketentuan uji similaritas (maks 25%) dan aturan penggunaan AI, sehingga saya tidak melanggar ketentuan.
8. Sebagai mahasiswa yang ingin belajar lebih dalam, saya ingin mengunduh 11 PDF panduan resmi PKM 2026, sehingga saya membaca sumber resminya langsung.
9. Sebagai mahasiswa yang mencari inspirasi topik, saya ingin melihat 10 tema PKM Tematik 2026 beserta penjelasannya, sehingga topik saya sesuai tema yang ditetapkan.
10. Sebagai mahasiswa yang punya pertanyaan umum (misal: boleh ikut 2 tim?), saya ingin membaca FAQ, sehingga pertanyaan dasar terjawab tanpa harus bertanya ke pengelola.
11. Sebagai mahasiswa yang butuh bantuan lebih, saya ingin melihat kontak pengelola PKM UPNVJ, sehingga saya tahu ke mana bertanya.
12. Sebagai mahasiswa yang membuka website dari HP, saya ingin semua halaman tampil rapi di layar kecil, sehingga saya bisa akses kapan pun.
13. Sebagai mahasiswa yang mengunjungi beranda, saya ingin melihat pengumuman/deadline terbaru UPNVJ di halaman depan, sehingga info penting langsung terlihat.
14. Sebagai mahasiswa, saya ingin tahu link resmi simbelmawa (sistem pendaftaran PKM), sehingga saya tidak salah masuk situs palsu.

**Pengelola/admin PKM UPNVJ (editor konten):**

15. Sebagai pengelola UPNVJ, saya ingin login ke halaman admin dengan akun Google, sehingga saya bisa mengelola konten tanpa urusan password.
16. Sebagai pengelola UPNVJ, saya ingin menambah/mengedit/menghapus pengumuman lewat form di panel admin, sehingga info terbaru tampil di website tanpa bantuan programmer.
17. Sebagai pengelola UPNVJ, saya ingin mengatur tanggal deadline kegiatan, sehingga mahasiswa selalu melihat jadwal yang benar.
18. Sebagai pengelola UPNVJ, saya ingin memperbarui kontak pengelola/link grup, sehingga mahasiswa menghubungi pihak yang benar.
19. Sebagai pengelola UPNVJ, saya hanya bisa mengubah konten dinamis (pengumuman, deadline, kontak) dan tidak bisa merusak halaman panduan, sehingga website tidak mudah rusak karena salah edit.
20. Sebagai pengelola UPNVJ yang bukan programmer, saya ingin panel admin yang sederhana dan berbahasa Indonesia, sehingga saya bisa bekerja mandiri.

**Pemilik proyek / pengurus penerus (keberlanjutan):**

21. Sebagai pengurus penerus, saya ingin kode dan dokumentasi tersimpan di GitHub organisasi (bukan akun pribadi), sehingga kepemilikan website tidak hilang saat angkatan lulus.
22. Sebagai pengurus penerus yang programmer, saya ingin konten statis terpisah rapi dari komponen tampilan (file data terpusat), sehingga memperbarui panduan tahun baru mudah dilakukan.
23. Sebagai pemilik proyek, saya ingin biaya operasional Rp 0 (Vercel Hobby + Supabase free), sehingga website tidak mati karena tagihan tidak dibayar.
24. Sebagai pengurus penerus, saya ingin dokumentasi cara meng-update konten, sehingga penyerahan jabatan tidak menyulitkan.

## Implementation Decisions

Keputusan berikut sudah disepakati melalui wawancara:

1. **Stack:** Next.js (App Router) + TypeScript + Tailwind CSS. Satu bahasa (TypeScript) untuk frontend, backend, dan admin panel.
2. **Hosting:** Vercel paket Hobby (gratis, non-komersial, terverifikasi 2026-09-09, lihat `research/fakta-teknis-vercel-supabase.md`). Karena Vercel Hobby tidak mendukung repo milik GitHub Organization, kode disimpan di **akun GitHub khusus peran** (misal `pkm-upnvj`) yang kredensialnya dikelola bersama unit pengelola, bukan akun pribadi anggota. Domain awal: subdomain gratis `*.vercel.app`; domain kampus (`pkm.upnvj.ac.id`) dapat ditambahkan nanti tanpa mengubah kode.
3. **Database:** Supabase (PostgreSQL) paket gratis, menyimpan konten dinamis (pengumuman, deadline, kontak). Limit terverifikasi 2026-09-09: 500 MB, 50.000 MAU auth, OAuth Google termasuk, pause setelah 1 minggu tanpa aktivitas.
4. **Autentikasi admin:** login Google (OAuth) via Supabase Auth. Akses admin = daftar email yang diizinkan.
5. **Batasan konten admin:** panel admin hanya mengelola konten dinamis (pengumuman, agenda/deadline, kontak). Konten panduan (10 bidang, tema, alur, tips, FAQ) bersifat statis di file data terpusat, karena hanya berubah setahun sekali saat panduan baru terbit.
6. **Konten statis** disimpan sebagai file data terstruktur terpisah dari komponen UI, bersumber dari ekstraksi 11 PDF Panduan PKM 2026 (folder `extracted/`).
7. **Struktur halaman:** Beranda; Tentang PKM (sejarah, skema pendanaan vs insentif, kriteria); 10 halaman Bidang (RE, RSH, K, PM, PI, KC, KI, VGK, GFT, AI, dari satu template data); Tema 2026; Alur/Tahapan (termasuk jadwal internal UPNVJ placeholder); Tips Proposal (similaritas, AI, kesalahan administrasi, rumus PKP2); Unduhan (11 PDF + link simbelmawa); FAQ.
8. **Desain:** modern dan ramah mahasiswa dengan palet identitas UPNVJ, **hijau veteran sebagai warna utama + kuning emas sebagai aksen** (sesuai logo resmi: topi baja hijau, dasar kuning; dikoreksi pengguna 2026-09-10, spesifikasi warna diambil dari file logo resmi karena situs kampus tidak memuat kode hex); responsif mobile-first; bahasa Indonesia; logo UPNVJ sementara placeholder.
9. **Info UPNVJ dari riset publik (2026-09-09, lihat `research/info-publik-upnvj.md`):** pengelola PKM tingkat universitas adalah **UPT Pengembangan Karir dan Kewirausahaan (UPT PKK / CDE UPNVJ)**, cde.upnvj.ac.id, cde@upnvj.ac.id, Gedung R.A. Kartini lantai 1, IG @cde.upnvj. Alur seleksi internal UPNVJ: 4 tahap (tim → proposal → review fakultas → universitas → SIMBelmawa). Janggal internal 2026 (unggah proposal universitas 10-16 Maret 2026) sudah lewat; jadwal internal berikutnya menunggu konfirmasi pengelola. **Catatan penting:** klaim "PKM sebagai syarat kelulusan" TIDAK ditemukan dokumen publiknya (UNVERIFIED), website harus menuliskannya hati-hati sampai dikonfirmasi pengelola. Situs PKM UPNVJ yang ada (Google Sites resmi) sudah usang: menu unduhan mati, tanpa jadwal/kontak, memperkuat kebutuhan website ini.
10. **Angka dan ketentuan** (pendanaan Rp 6-8 jt / insentif Rp 1,5 jt, tim 3-5 mahasiswa, dosen pendamping maks 10 tim, uji similaritas 25%, rumus NA = 0,3, NP + 0,2, NLK + 0,5, NM, dst.) diambil apa adanya dari Panduan PKM 2026.
11. **Seam utama (titik uji):** akses konten dibungkus satu modul data (satu pintu untuk membaca pengumuman/deadline/kontak dari Supabase dan konten statis dari file data). Halaman hanya bergantung pada modul ini, sehingga halaman dapat diuji dengan data tiruan tanpa database sungguhan.

## Testing Decisions

- Yang diuji adalah **perilaku luar**, bukan detail internal: "halaman bidang menampilkan komposisi tim 3-5 orang", bukan "fungsi X dipanggil".
- **Halaman statis** diuji dengan data tiruan melalui modul data (seam tunggal), memastikan rendering benar tanpa ketergantungan Supabase.
- **Modul data** diuji terhadap perilaku: mengambil daftar pengumuman terurut, mengembalikan error yang jelas saat Supabase gagal, dan menampilkan placeholder saat data kosong.
- **Panel admin** diuji manual: login Google, tambah/edit/hapus pengumuman, verifikasi perubahan tampil di beranda.
- **Verifikasi visual** tiap halaman dilakukan lewat screenshot browser (desktop + mobile viewport) sebelum dirilis.
- Tidak ada test sebelumnya di codebase (proyek baru), modul data menjadi pola acuan untuk test berikutnya.

## Out of Scope

- Fitur interaktif tambahan: dark mode, pencarian konten, checklist kesiapan proposal (ditunda ke versi selanjutnya).
- Arsip prestasi/galeri juara PKM UPNVJ.
- Panel admin untuk mengedit panduan 10 bidang/FAQ (tetap statis).
- CMS pihak ketiga (Sanity/Keystatic), diganti admin buatan sendiri.
- Hosting kampus/server sendiri dan urusan pengurusan domain `.ac.id`.
- Integrasi/migrasi data dari/ke simbelmawa.
- Versi bahasa Inggris; aplikasi mobile; akun untuk mahasiswa (hanya pengelola yang login).

## Further Notes

- Sumber kebenaran konten: 11 PDF Panduan PKM 2026 di folder proyek (teks hasil ekstraksi di `extracted/`). Jika ada perbedaan dengan website, PDF yang benar.
- **Risiko Supabase gratis:** proyek otomatis pause setelah ±7 hari tanpa aktivitas (terverifikasi), dimitigasi karena website terus dikunjungi; bila terjadi, aktifkan kembali lewat dashboard.
- **Jadwal resmi PKM 2026 (terverifikasi, lihat `research/jadwal-pkm-2026.md`):** per 2026-09-09 tahap yang sedang/akan berjalan: PKP2 daring 14-19 Sep, PKM Award 19-20 Sep, laporan akhir 21 Sep-3 Okt, pengumuman peserta PIMNAS 12-13 Okt, **PIMNAS 39 di Universitas Diponegoro 2-7 Nov 2026**. PKM 2027: belum ada pengumuman resmi apa pun, halaman Alur menampilkan siklus generik + riwayat 2026 sampai jadwal 2027 terbit.
- **Klaim "PKM syarat lulus" UPNVJ belum terverifikasi publik**, gunakan rumusan hati-hati (mis. "PKM menjadi salah satu indikator kelulusan yang didorong kampus") sampai dikonfirmasi UPT PKK/CDE. Pertanyaan konfirmasi sudah disiapkan di file riset UPNVJ.
- **Arsip prestasi UPNVJ** (Emas PKM-K PIMNAS 36, 2 gelar PIMNAS 37, poster PIMNAS 38) ditemukan di riset, tetap out of scope v1 sesuai keputusan, tapi layak jadi kandidat fitur v2.
