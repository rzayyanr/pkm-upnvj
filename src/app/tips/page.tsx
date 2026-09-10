import type { Metadata } from "next";
import { Card } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Tips Proposal PKM",
  description:
    "Hal-hal yang menggugurkan proposal di seleksi administrasi: uji similaritas 25%, ketentuan AI, daftar pustaka Harvard, format penulisan, dan rumus penilaian PKP2.",
};

export default function TipsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <SectionHeading
        as="h1"
        title="Agar proposalmu tidak gugur di administrasi"
        lead="Penilaian proposal dilakukan daring dalam 2 tahap. Tahap 1 = seleksi administrasi, satu saja aspek yang tidak sesuai bisa menggugurkan. Tahap 2 = seleksi substansi oleh 2 penilai, menilai kreativitas, kekinian topik, dan tantangan intelektual."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Card>
          <h2 className="font-heading text-lg font-semibold text-zinc-900">
            1. Uji similaritas maksimum 25%
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-700">
            Lampirkan hasil uji periksa similaritas (Turnitin, iThenticate, atau
            sejenisnya) untuk <strong>bagian inti proposal</strong>, pendahuluan
            sampai daftar pustaka. Indeks di atas 25% = gugur.
          </p>
        </Card>
        <Card>
          <h2 className="font-heading text-lg font-semibold text-zinc-900">
            2. Penggunaan AI mengikuti ketentuan
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-700">
            Kecerdasan buatan boleh dipakai, tetapi harus mengikuti{" "}
            <a
              href="https://s.id/PanduanGenAI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-veteran-700 underline-offset-2 hover:underline"
            >
              Panduan GenAI Direktorat Pembelajaran dan Kemahasiswaan
            </a>
            . Pelajari batas penggunaannya sebelum menulis.
          </p>
        </Card>
        <Card>
          <h2 className="font-heading text-lg font-semibold text-zinc-900">
            3. Daftar pustaka wajib Harvard style
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-700">
            Format perujukan: nama belakang, tahun, diurutkan alfabetis. Setiap
            pustaka yang dirujuk harus muncul di daftar pustaka, dan
            sebaliknya. Bukan Harvard = <strong>gugur di Tahap 1</strong>.
          </p>
        </Card>
        <Card>
          <h2 className="font-heading text-lg font-semibold text-zinc-900">
            4. Berkas isi utama: tanpa sampul & pengesahan
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-700">
            Isian kelengkapan dientri di simbelmawa; berkas PDF yang diunggah
            hanya berisi daftar isi, bagian inti (maks 10 halaman), dan lampiran.
            Ada halaman sampul/pengesahan/ringkasan/abstrak?{" "}
            <strong>Gugur.</strong>
          </p>
        </Card>
        <Card>
          <h2 className="font-heading text-lg font-semibold text-zinc-900">
            5. Administrasi kecil yang sering telanjur
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
            <li>Nama pengusul persis seperti terdaftar di PDDikti</li>
            <li>Tanggal-bulan-tahun, tanda tangan, biodata bertanda tangan</li>
            <li>Jumlah & nomor halaman lengkap</li>
            <li>Surat pernyataan ketua (dan mitra, untuk PM/PI)</li>
            <li>Judul sesuai tema yang dipilih</li>
          </ul>
        </Card>
        <Card>
          <h2 className="font-heading text-lg font-semibold text-zinc-900">
            6. Media sosial: serentak & ber-iklan
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-700">
            Tim didanai wajib membuat akun medsos khusus topik PKM (Instagram,
            TikTok, X, Facebook, atau YouTube). Ada 3 unggahan wajib ber-iklan
            serentak, 23 Mei, 20 Juni, 8 Agustus 2026, total anggaran Ads
            maksimum Rp 500 ribu. Aktivitas medsos masuk penilaian PKP2.
          </p>
        </Card>
      </div>

      <section className="mt-12 max-w-3xl">
        <SectionHeading
          title="Rumus nilai akhir PKP2"
          lead="Bagi tim yang didanai, lolos ke PIMNAS ditentukan dari nilai akhir berikut:"
        />
        <div className="mt-4 rounded-2xl bg-veteran-800 px-6 py-6 text-white">
          <p className="font-heading text-xl font-bold">
            NA = 0,3, NP + 0,2, NLK + 0,5, NM
          </p>
          <ul className="mt-3 space-y-1 text-sm leading-6 text-veteran-100">
            <li>NP = nilai proposal, NLK = nilai laporan kemajuan</li>
            <li>
              NM = nilai PKP2 (presentasi), untuk KI: 10% dokumen teknis + 40%
              presentasi; untuk VGK: 25% video + 25% presentasi
            </li>
          </ul>
        </div>
        <p className="mt-4 text-sm leading-6 text-zinc-600">
          Artinya presentasi saat PKP2 punya bobot terbesar (50%), jangan hanya
          fokus ke proposal, siapkan juga pelaksanaan dan catatannya (Logbook
          kegiatan & keuangan di simbelmawa).
        </p>
      </section>
    </div>
  );
}
