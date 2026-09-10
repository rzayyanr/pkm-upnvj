<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes, APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev`, verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Website PKM UPNVJ

Website informasi Program Kreativitas Mahasiswa untuk UPN Veteran Jakarta.
Next.js App Router + TypeScript + Tailwind CSS; hosting Vercel (Hobby); konten dinamis di Supabase (PostgreSQL + Auth Google); seluruh UI berbahasa Indonesia.

## Dokumen sumber kebenaran (folder `docs/`)

- **`docs/PRD.md`**, dokumen induk: masalah, user stories (US-1..24), keputusan implementasi, out of scope. Baca sebelum menambah atau mengubah fitur, setiap fitur harus bisa ditelusuri ke user story.
- **`docs/FRS-SRS.md`**, syarat fungsional (FR-01..12) & non-fungsional (NFR-01..09). Saat mengubah perilaku, cek FR/NFR mana yang terdampak.
- **`docs/ERD.md`**, skema Supabase (5 tabel, RLS). Baca sebelum menyentuh skema, migrasi, atau keamanan database.
- **`docs/BRD.md`**, konteks bisnis & indikator keberhasilan; baca hanya saat memutuskan lingkup.
- **Tiket pengerjaan** berada DI LUAR repo: `../.scratch/pkm-upnvj-website/issues/` (folder induk proyek), kerjakan sesuai frontier, centang acceptance criteria di sana.

## Aturan main (yang tidak tertulis di konfigurasi)

1. **Angka & ketentuan PKM** (pendanaan, kuota, komposisi tim, rumus penilaian) hanya boleh berasal dari Panduan PKM 2026 resmi. Dokumen di `docs/` mengutip sumbernya, jangan pernah mengarang atau mengingat dari pelatihan.
2. **Konten panduan = statis di file data** (`src/data/`), komponen hanya merender. **Konten dinamis** (pengumuman, agenda, kontak, tautan) hanya boleh diakses lewat **modul data satu pintu**, halaman tidak pernah memanggil Supabase langsung.
3. **Placeholder UPNVJ** (jadwal internal, kontak, logo) ditandai eksplisit sampai data resmi ada. Klaim "PKM sebagai syarat kelulusan" berstatus UNVERIFIED, tulis dengan rumusan hati-hati sampai dikonfirmasi UPT PKK/CDE.
4. **Secrets hanya di `.env.local`** (tidak pernah di kode/git). Kunci `service_role` Supabase hanya di server; kunci `anon` boleh di klien karena RLS yang menjaga.
5. **Konten yang diketik admin tidak pernah dirender sebagai HTML mentah**, tanpa `dangerouslySetInnerHTML` untuk data dari database.
6. **Palet warna = identitas UPNVJ: hijau veteran (utama) + kuning emas (aksen)**, di-sampling dari file logo resmi UPNVJ, bukan navy/biru.

## Perintah

Perintah dev/build/lint ada di `package.json` (`npm run dev` / `build` / `lint`). Deploy otomatis via Vercel setiap push ke branch utama.
