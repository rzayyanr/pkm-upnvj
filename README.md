# PKM UPNVJ

Website pusat informasi **Program Kreativitas Mahasiswa (PKM)** untuk lingkungan
**UPN Veteran Jakarta** — dibuat agar mahasiswa menemukan semua yang perlu diketahui
tentang PKM: 10 bidang, tahapan pendaftaran, tema, tips proposal, panduan resmi,
dan info terkini kampus.

> Proyek portofolio — proses lengkapnya terdokumentasi dari riset hingga deployment.

## Tumpukan Teknologi

- **Next.js** (App Router) + **TypeScript** + **Tailwind CSS**
- **Supabase** — PostgreSQL untuk konten dinamis + Auth Google untuk admin
- **Vercel** — hosting (deploy otomatis tiap push)

## Struktur Dokumen

| Dokumen | Isi |
|---|---|
| [docs/PRD.md](docs/PRD.md) | Product Requirements Document (dokumen induk) |
| [docs/BRD.md](docs/BRD.md) | Business Requirements — stakeholder, KPI, risiko |
| [docs/FRS-SRS.md](docs/FRS-SRS.md) | Syarat fungsional & non-fungsional |
| [docs/ERD.md](docs/ERD.md) | Skema database (Supabase) |

## Menjalankan Lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Lihat `AGENTS.md` untuk aturan kontribusi dan konteks proyek.

## Sumber Konten

Seluruh konten panduan bersumber dari **Panduan PKM 2026 resmi** (Direktorat
Pembelajaran dan Kemahasiswaan, Kemendiktisaintek) — 11 PDF. Jadwal terverifikasi
dari simbelmawa.kemdiktisaintek.go.id. Info internal UPNVJ menunggu konfirmasi
UPT PKK/CDE dan ditandai sebagai placeholder.
