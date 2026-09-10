import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Unduh Panduan PKM 2026",
  description:
    "Unduh 11 buku Panduan PKM 2026 resmi: 1 panduan umum + 10 panduan bidang (RE, RSH, K, PM, PI, KC, KI, VGK, GFT, AI).",
};

const panduan = [
  {
    file: "PANDUAN-PKM-2026_versi_full.pdf",
    kode: "Umum",
    nama: "Panduan Umum PKM 2026 (versi lengkap)",
    isi: "Sejarah, kriteria, tahapan, klasterisasi, ketentuan AI, penilaian, PIMNAS, lampiran format",
  },
  { file: "PKM-RE-2026_fix.pdf", kode: "RE", nama: "PKM Riset Eksakta", isi: "Riset fenomena alamiah — fisika, kimia, biologi, matematika" },
  { file: "PKM-RSH-2026_fix.pdf", kode: "RSH", nama: "PKM Riset Sosial Humaniora", isi: "Riset fenomena sosial & perilaku manusia" },
  { file: "PKM-K-2026_fix.pdf", kode: "K", nama: "PKM Kewirausahaan", isi: "Produk iptek sebagai komoditas usaha mahasiswa" },
  { file: "PKM-PM-2026_fix.pdf", kode: "PM", nama: "PKM Pengabdian kepada Masyarakat", isi: "Solusi iptek bagi mitra non-komersial" },
  { file: "PKM-PI-2026_fix.pdf", kode: "PI", nama: "PKM Penerapan Iptek", isi: "Solusi iptek bagi mitra komersial" },
  { file: "PKM-KC-2026_fix.pdf", kode: "KC", nama: "PKM Karsa Cipta", isi: "Karya konstruksi baru yang fungsional" },
  { file: "PKM-KI-2026_fix.pdf", kode: "KI", nama: "PKM Karya Inovatif", isi: "Produk fungsional inovatif skala penuh" },
  { file: "PKM-VGK-2026_fix.pdf", kode: "VGK", nama: "PKM Video Gagasan Konstruktif", isi: "Gagasan dalam bentuk video" },
  { file: "PKM-GFT-2026_fix.pdf", kode: "GFT", nama: "PKM Gagasan Futuristik Tertulis", isi: "Konsep perubahan masa depan (insentif)" },
  { file: "PKM-AI-2026_fix.pdf", kode: "AI", nama: "PKM Artikel Ilmiah", isi: "Artikel dari hasil kegiatan akademik (insentif)" },
];

export default function UnduhanPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <SectionHeading
        as="h1"
        title="Unduh Panduan PKM 2026"
        lead="Seluruh isi website ini dirangkum dari 11 buku panduan resmi berikut. Untuk menyusun proposal, unduh panduan bidang yang kamu tuju — website hanya ringkasannya."
      />

      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-3xl border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-300 text-zinc-600">
              <th scope="col" className="py-2 pr-4 font-medium">Kode</th>
              <th scope="col" className="py-2 pr-4 font-medium">Buku panduan</th>
              <th scope="col" className="py-2 pr-4 font-medium">Cakupan</th>
              <th scope="col" className="py-2 font-medium">Unduh</th>
            </tr>
          </thead>
          <tbody>
            {panduan.map((p) => (
              <tr key={p.file} className="border-b border-zinc-200">
                <td className="py-3 pr-4 font-heading font-bold text-veteran-700">
                  {p.kode}
                </td>
                <td className="py-3 pr-4 font-medium text-zinc-900">{p.nama}</td>
                <td className="py-3 pr-4 text-zinc-600">{p.isi}</td>
                <td className="py-3">
                  <a
                    href={`/panduan/${p.file}`}
                    download
                    className="rounded-full bg-veteran-700 px-4 py-1.5 text-xs font-semibold text-white hover:bg-veteran-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-veteran-700"
                  >
                    PDF ↓
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-10 max-w-3xl space-y-3 text-sm leading-6 text-zinc-600">
        <p>
          Sumber resmi pendaftaran:{" "}
          <a
            href="https://simbelmawa.kemdiktisaintek.go.id/pkm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-veteran-700 underline-offset-2 hover:underline"
          >
            simbelmawa.kemdiktisaintek.go.id/pkm
          </a>{" "}
          — berhati-hatilah terhadap situs tiruan.
        </p>
        <p>
          Panduan ini diterbitkan Direktorat Pembelajaran dan Kemahasiswaan,
          Kementerian Pendidikan Tinggi, Sains, dan Teknologi (Kemdiktisaintek).
        </p>
      </section>
    </div>
  );
}
