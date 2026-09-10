# ERD, Skema Database Website PKM UPNVJ

> Turunan dari [[PRD]] (Keputusan Implementasi #3, #5). Sumber kebenaran tetap PRD.
> Database: **Supabase (PostgreSQL)**, hanya menyimpan **konten dinamis** (Keputusan Q10).
> Konten panduan (10 bidang, tema, alur, FAQ) **tidak** ada di database, berupa file data statis.
> Tanggal: 2026-09-10.

## Diagram

```mermaid
erDiagram
    PROFIL_ADMIN ||--o{ PENGUMUMAN : "menulis"
    PENGUMUMAN {
        uuid id PK
        uuid penulis_id FK "→ auth.users.id (Supabase Auth)"
        text judul
        text isi
        text kategori "pengumuman | pemberitahuan | jadwal"
        boolean penting "tampilkan di hero beranda"
        boolean aktif "soft delete"
        timestamptz tanggal_terbit
        timestamptz created_at
        timestamptz updated_at
    }
    AGENDA_DEADLINE {
        uuid id PK
        text judul
        text deskripsi
        text cakupan "internal_upnvj | nasional"
        date tanggal_mulai
        date tanggal_selesai "nullable, untuk rentang (mis. PKP2 14-19 Sep)"
        text lokasi "nullable"
        text tautan "nullable"
        boolean aktif
        timestamptz created_at
        timestamptz updated_at
    }
    KONTAK {
        uuid id PK
        text nama_unit "mis. UPT PKK / CDE UPNVJ"
        text email
        text telepon "nullable"
        text instagram "nullable"
        text alamat
        text jam_layanan "nullable"
        int urutan "urutan tampil"
        boolean aktif
        timestamptz updated_at
    }
    PROFIL_ADMIN {
        uuid id PK "→ auth.users.id (login Google)"
        text email "harus terdaftar di sini untuk boleh akses admin"
        text nama
        text peran "admin | editor"
        boolean aktif
        timestamptz created_at
    }
    TAUTAN_CEPAT {
        uuid id PK
        text judul "mis. Simbelmawa"
        text url
        text deskripsi "nullable"
        int urutan
        boolean aktif
    }
```

## Catatan Desain

1. **`PROFIL_ADMIN` membatasi siapa boleh login admin.** Login Google lewat Supabase Auth membuat entri di `auth.users`; seseorang hanya bisa masuk panel admin jika emailnya terdaftar dan `aktif = true` di `PROFIL_ADMIN` (Keputusan Q9: ganti pengurus = ganti daftar email, tanpa ganti kode).
2. **`aktif` (soft delete)** di semua tabel konten, pengelola tidak bisa menghapus permanen secara tak sengaja; data historis tetap ada.
3. **`cakupan` di AGENDA_DEADLINE** memisahkan jadwal internal UPNVJ vs jadwal nasional, mendukung kebutuhan halaman Alur menampilkan keduanya berbeda gaya (nasional = resmi terverifikasi, internal = menunggu konfirmasi CDE).
4. **Row Level Security (RLS):** tabel konten dapat dibaca publik (anon) hanya baris `aktif = true`; tulis/hapus hanya oleh pengguna terautentikasi yang ada di `PROFIL_ADMIN aktif`.
5. **Timestamps** (`created_at`/`updated_at`) otomatis via trigger Postgres.
6. Tidak ada tabel untuk konten panduan/PDF, itu statis di kode (Keputusan #5 PRD); tidak ada tabel media, PDF panduan di-host sebagai file statis di `public/`.
