# Manual Admin — Mengelola Konten Website PKM UPNVJ

Panduan untuk **pengelola PKM** yang mengurus isi website. Tidak perlu bisa
koding sama sekali; semua lewat form.

Terakhir diperbarui: 2026-09-11 (rilis v1.0)

---

## 1. Masuk ke Panel Admin

1. Buka **https://pkm-upnvj.vercel.app/admin/login**
2. Klik **"Masuk dengan Google"** → pilih akun Google Anda
3. Yang berhasil masuk hanyalah email yang terdaftar. Melihat tulisan
   "Akses ditolak"? Email Anda belum didaftarkan, minta pemilik proyek
   mendaftarkannya (lihat RUNBOOK bagian 1)
4. Dashboard admin menampilkan dua panel: **Pengumuman** dan
   **Agenda & Deadline**

## 2. Menambah Pengumuman

1. Di panel Pengumuman, isi form **"Tambah baru"**:
   - **Judul**: singkat dan jelas (maksimal 200 karakter)
   - **Isi pengumuman**: detail informasinya
   - **Kategori**: pengumuman / pemberitahuan / jadwal
   - **Tandai penting**: centang hanya untuk info yang benar-benar mendesak
     (muncul dengan badge merah di beranda)
2. Klik **"Tambah pengumuman"**
3. Dalam **maksimal 5 menit**, pengumuman tampil di beranda. Selesai!

## 3. Mengubah atau Menyembunyikan

Setiap item di daftar punya tiga kontrol:

| Kontrol | Efek |
|---|---|
| **Sembunyikan / Tampilkan** | menghilangkan/mengembalikan item dari halaman publik; data tetap tersimpan |
| **Edit** | membuka form untuk mengubah isi, lalu "Simpan perubahan" |
| **Hapus permanen** (merah) | menghapus data SELAMANYA; ada konfirmasi dua langkah agar tidak salah klik |

Panduan memilih: pakai **Sembunyikan** untuk info yang mungkin masih perlu
(nanti ditampilkan lagi). Pakai **Hapus permanen** hanya untuk data yang
memang salah/sampah.

## 4. Mengelola Agenda & Deadline

Sama seperti pengumuman, dengan kolom tambahan:

- **Cakupan**: "Nasional" (jadwal resmi Belmawa) atau "Internal UPNVJ"
  (jadwal kampus)
- **Tanggal mulai / selesai**: agenda rentang (misal PKP2 14 sampai 19
  September) diisi dua-duanya; agenda satu hari cukup tanggal mulai saja
- **Lokasi** dan **Tautan**: opsional

Agenda yang tanggalnya sudah lewat otomatis tidak tampil di beranda.

## 5. Rutinitas yang Dianjurkan

- **Update pengumuman**: setiap ada info baru dari fakultas/universitas
- **Cek agenda**: awal bulan, samakan dengan kalimat resmi
- **Unduh cadangan data (JSON)**: sekali seminggu; simpan di Drive
  organisasi. Ini satu-satunya backup, jadi jangan dilewatkan
- **Keluar** dari panel bila memakai komputer bersama

## 6. Kalau Ada Masalah

| Kejadian | Artinya | Yang dilakukan |
|---|---|---|
| Login ditolak terus | email belum terdaftar / sesi kadaluarsa | minta didaftarkan; coba masuk lagi |
| Perubahan tidak muncul-muncul | cache halaman 5 menit | tunggu, lalu refresh (Ctrl+Shift+R) |
| Pengumuman hilang sendiri | kemungkinan database Supabase "tidur" karena jarang diakses | hubungi pemilik proyek (cara hidupkan ada di RUNBOOK) |

Kontak teknis: pemilik proyek (lihat RUNBOOK bagian 1).
Kontak kepengurusan PKM UPNVJ: **cde@upnvj.ac.id** / Instagram **@cde.upnvj**.
