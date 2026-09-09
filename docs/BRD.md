# BRD — Business Requirements Document Website PKM UPNVJ

> Ringkasan tingkat bisnis/proyek. Detail produk ada di [[PRD]] (sumber kebenaran);
> detail syarat di [[FRS-SRS]]; detail data di [[ERD]]. Tanggal: 2026-09-10.

## 1. Latar Belakang

Informasi Program Kreativitas Mahasiswa (PKM) di lingkungan UPN Veteran Jakarta
tersebar dan sulit diakses, padahal PKM didorong kuat oleh kampus dan menjadi
salah satu indikator capaian mahasiswa (status "syarat kelulusan" perlu
konfirmasi resmi — lihat `research/info-publik-upnvj.md`). Situs PKM resmi yang
ada (Google Sites UPT PKK/CDE) sudah usang: tautan unduhan mati, tanpa jadwal
dan kontak terkini.

## 2. Pemangku Kepentingan (Stakeholders)

| Pemangku | Peran | Kepentingan |
|---|---|---|
| Mahasiswa UPNVJ | Pengguna utama | Menemukan info PKM yang benar dengan cepat: bidang, tahapan, deadline |
| UPT PKK / CDE UPNVJ | Pengelola PKM kampus (cde.upnvj.ac.id) | Menyebarkan pengumuman & jadwal internal tanpa bergantung programmer |
| Pengurus penerus (unit pemilik proyek) | Pemelihara | Website tetap hidup & mudah diwariskan: kode terdokumentasi, biaya Rp 0 |
| Dosen pendamping | Pengguna sekunder | Rujukan ketentuan saat membimbing mahasiswa |
| Pemilik proyek (mahasiswa pembuat) | Pengembang | Portofolio: proses terdokumentasi dari riset sampai deployment |

## 3. Tujuan Proyek

1. Menjadi satu pintu informasi PKM yang akurat untuk lingkungan UPNVJ
   (sumber: Panduan PKM 2026 resmi + riset jadwal terverifikasi)
2. Memberi pengelola kampus kemampuan memperbarui konten dinamis
   (pengumuman, agenda, kontak) **tanpa menyentuh kode**
3. Memastikan keberlanjutan: biaya operasional Rp 0, kepemilikan kode
   terlepas dari personel, dokumentasi proses lengkap

## 4. Lingkup

**Termasuk:** 9 halaman informasi (Beranda, Tentang, 10 Bidang, Tema, Alur, Tips,
Unduhan, FAQ), panel admin untuk konten dinamis, hosting publik.
**Di luar lingkup (v1):** dark mode/pencarian/checklist, arsip prestasi, CMS pihak
ketiga, hosting kampus, integrasi simbelmawa, multi-bahasa, aplikasi mobile
(rincian: bagian Out of Scope di [[PRD]]).

## 5. Indikator Keberhasilan

| Indikator | Target | Cara ukur |
|---|---|---|
| Mahasiswa menemukan jadwal/deadline terkini | < 1 menit dari beranda | Uji coba pengguna sederhana (5 mahasiswa) |
| Pengelola memperbarui pengumuman | < 5 menit, tanpa bantuan programmer | Uji tugas di panel admin |
| Biaya operasional bulanan | Rp 0 | Cek tagihan Vercel/Supabase |
| Konten panduan sesuai sumber resmi | 100% sesuai PDF 2026 | Tinjauan per halaman vs `extracted/` |
| Ketahanan | Halaman panduan tetap hidup saat database mati | Simulasi (NFR-05) |

## 6. Risiko Utama & Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Supabase Free pause (7 hari tanpa aktivitas) | Konten dinamis hilang sementara | Website terus dikunjungi; halaman statis tetap tampil (FR-11); aktivasi ulang via dashboard |
| Klaim "PKM syarat lulus" belum terverifikasi | Info menyesatkan | Rumusan hati-hati + konfirmasi ke CDE (pertanyaan siap di riset) |
| Ketergantungan akun pribadi | Website terhenti saat pemilik tidak aktif | Saat ini diterima (proyek portofolio); transfer repo bila diserahkan ke unit |
| Panduan baru terbit (PKM 2027) | Konten basi | Konten terpusat di file data — pembaruan setahun sekali cukup edit data (NFR-08) |
