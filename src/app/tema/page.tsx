import type { Metadata } from "next";
import { Card } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "10 Tema PKM 2026",
  description:
    "Sepuluh tema PKM Tematik 2026 yang wajib dirujuk setiap proposal: kemandirian pangan, kesehatan, pemberantasan korupsi, hingga ekonomi kreatif.",
};

/*
  Ringkasan 10 tema dari Panduan Umum PKM 2026 (bagian Karakteristik Umum,
  halaman 6–8). Setiap ringkasan dipadatkan dari penjelasan resmi tema.
*/

const tema = [
  {
    nomor: 1,
    nama: "Kemandirian Pangan, Energi, dan Air",
    ringkas:
      "Ide untuk mendukung Indonesia mandiri pangan, penyedia energi hijau (biodiesel, bioavtur, bioetanol, mikroalga, EBT angin-matahari-panas bumi), serta pemanfaatan air secara bijaksana dan berkelanjutan.",
  },
  {
    nomor: 2,
    nama: "Kesehatan dan Gizi Masyarakat",
    ringkas:
      "Teknologi tepat guna dan pengembangan sistem untuk meningkatkan kesehatan dan gizi — kunci kualitas SDM, karena kesehatan masa awal kehidupan menentukan kualitas hidup selanjutnya.",
  },
  {
    nomor: 3,
    nama: "Pencegahan dan Pemberantasan Korupsi",
    ringkas:
      "Gagasan untuk mencegah dan memberantas korupsi, sehingga anggaran pembangunan lebih efisien dan reputasi Indonesia membaik di mata dunia.",
  },
  {
    nomor: 4,
    nama: "Pemberantasan Kemiskinan",
    ringkas:
      "Pemikiran multidimensi untuk menekan angka kemiskinan relatif — target: di bawah 6% pada akhir 2029 — dari berbagai sisi penyebabnya yang kompleks.",
  },
  {
    nomor: 5,
    nama: "Pencegahan dan Pemberantasan Narkoba",
    ringkas:
      "Program aksi terarah untuk mencegah dan memberantas peredaran serta penyalahgunaan narkoba, termasuk membangun kesadaran sejak tingkat keluarga.",
  },
  {
    nomor: 6,
    nama: "Penguatan Pendidikan, Sains, dan Teknologi",
    ringkas:
      "Ide untuk memecahkan permasalahan pendidikan-sains-teknologi sekaligus meningkatkan daya saing bangsa, termasuk gagasan investasi dan peningkatan kualitasnya.",
  },
  {
    nomor: 7,
    nama: "Kesetaraan Gender & Perlindungan Hak Perempuan, Anak, dan Penyandang Disabilitas",
    ringkas:
      "Kebijakan dan inisiatif untuk masyarakat adil dan inklusif: hak atas pendidikan, pekerjaan, partisipasi politik, serta tumbuh kembang anak.",
  },
  {
    nomor: 8,
    nama: "Pelestarian Lingkungan dan Mitigasi Bencana",
    ringkas:
      "Langkah menuju pembangunan berkelanjutan: zero emission, pengurangan jejak karbon dan jejak air, bioplastik, hingga mitigasi bencana akibat kerusakan lingkungan.",
  },
  {
    nomor: 9,
    nama: "Pemerataan Ekonomi, Penguatan UMKM, dan Pembangunan IKN",
    ringkas:
      "Gagasan mempercepat pemerataan ekonomi, memperkuat kelembagaan UMKM dan kewirausahaan, serta mewujudkan IKN yang ramah lingkungan, berteknologi, dan mandiri energi.",
  },
  {
    nomor: 10,
    nama: "Pelestarian Seni Budaya dan Peningkatan Ekonomi Kreatif",
    ringkas:
      "Melestarikan seni budaya sebagai jati diri bangsa lewat kearifan lokal, sekaligus mengangkatnya menjadi motor ekonomi kreatif yang berkelanjutan.",
  },
];

export default function TemaPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <SectionHeading
        as="h1"
        title="10 Tema PKM Tematik 2026"
        lead="Sejak 2025, setiap proposal PKM wajib merujuk salah satu tema berikut — dirumuskan dari program prioritas pemerintah dan masalah yang dihadapi masyarakat menuju Indonesia Emas."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {tema.map((t) => (
          <Card key={t.nomor} className="flex gap-4">
            <span
              aria-hidden
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-veteran-700 font-heading text-sm font-bold text-white"
            >
              {t.nomor}
            </span>
            <div>
              <h2 className="font-heading text-base font-semibold text-balance text-zinc-900">
                {t.nama}
              </h2>
              <p className="mt-1.5 text-sm leading-6 text-zinc-600">
                {t.ringkas}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <p className="mt-10 max-w-3xl rounded-xl bg-emas-50 px-5 py-4 text-sm leading-6 text-emas-700">
        Tips: kesesuaian judul dengan tema yang dipilih adalah salah satu aspek
        seleksi administrasi — pastikan topikmu benar-benar menjawab tema, bukan
        sekadar menyentuh permukaannya.
      </p>
    </div>
  );
}
