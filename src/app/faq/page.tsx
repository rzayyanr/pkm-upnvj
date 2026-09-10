import type { Metadata } from "next";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "FAQ, Pertanyaan Umum",
  description:
    "Pertanyaan yang paling sering diajukan mahasiswa tentang PKM: syarat tim, jumlah proposal, dana, dosen pendamping, uji similaritas, hingga PIMNAS.",
};

const faq = [
  {
    question: "Siapa yang boleh mengikuti PKM?",
    answer:
      "Mahasiswa aktif D-3, D-4, atau S-1 di perguruan tinggi di bawah Kemendiktisaintek yang terdaftar di PDDikti. Yang sudah menyandang gelar (D-3/D-4/S-1) atau sedang mengikuti pendidikan profesi dan koas (kedokteran, farmasi, dan sejenisnya) tidak diperbolehkan mengusulkan proposal.",
  },
  {
    question: "Berapa banyak proposal yang boleh saya usulkan?",
    answer:
      "Satu. Setiap mahasiswa hanya boleh mengusulkan 1 proposal PKM, baik sebagai ketua maupun anggota, dari semua bidang. Melanggar aturan ini berakibat diundurkan diri dari kelompok yang didanai. Pengusul PKM juga tidak boleh sekalian ikut PPK Ormawa atau P2MW di tahun yang sama.",
  },
  {
    question: "Berapa anggota satu tim?",
    answer:
      "3-5 mahasiswa: 1 ketua dan 2-4 anggota. Boleh beda program studi asal masih dalam satu perguruan tinggi; anggota disarankan dari minimal 2 angkatan berbeda agar ada pembinaan berkelanjutan.",
  },
  {
    question: "Berapa dana yang diterima tim?",
    answer:
      "Skema pendanaan (RE, RSH, K, PM, PI, KC, KI, VGK): Rp 6-8 juta per judul + dana pendamping PT wajib maksimum Rp 2 juta + dana institusi lain maksimum Rp 1 juta. Skema insentif (GFT, AI): insentif Rp 1,5 juta, tanpa dana kegiatan.",
  },
  {
    question: "Siapa yang bisa menjadi dosen pendamping?",
    answer:
      "Dosen yang memiliki NUPTK, dosen tanpa NUPTK tidak diperbolehkan. Satu dosen pendamping maksimum mendampingi 10 tim dari semua bidang PKM.",
  },
  {
    question: "Berapa batas uji similaritas proposal?",
    answer:
      "Maksimum 25%. Hasil uji (Turnitin, iThenticate, atau sejenis) untuk bagian inti proposal, pendahuluan sampai daftar pustaka, wajib dilampirkan.",
  },
  {
    question: "Bolehkah menggunakan AI saat menyusun proposal?",
    answer:
      "Boleh, tetapi wajib mengikuti syarat dan ketentuan Panduan GenAI Direktorat Pembelajaran dan Kemahasiswaan (s.id/PanduanGenAI).",
  },
  {
    question: "Berapa lama kegiatan PKM dilaksanakan?",
    answer:
      "Untuk 8 bidang skema pendanaan, jadwal kegiatan dibatasi 3-4 bulan. Pelaksanaan dicatat di Logbook (kegiatan & keuangan) simbelmawa, lalu dievaluasi lewat PKP2 sebelum laporan akhir.",
  },
  {
    question: "Apakah PKM dikonversi menjadi SKS?",
    answer:
      "Perguruan tinggi memiliki kewenangan mengonversi PKM menjadi SKS atau bentuk apresiasi lain, termasuk SKPI, sesuai kurikulum dan kebijakan masing-masing kampus. Untuk kebijakan spesifik UPNVJ, tanyakan ke UPT PKK/CDE (cde@upnvj.ac.id).",
  },
  {
    question: "Kapan dan di mana PIMNAS 39 dilaksanakan?",
    answer:
      "PIMNAS 39 tahun 2026 diselenggarakan 2-7 November 2026 di Universitas Diponegoro, Semarang (sesuai surat resmi Kemdiktisaintek). Pengumuman peserta PIMNAS terbit 12-13 Oktober 2026.",
  },
  {
    question: "Apakah PKM adalah syarat lulus di UPNVJ?",
    answer:
      "Banyak mahasiswa mendengar hal itu, tetapi kami belum menemukan dokumen resmi publik yang mengaturnya, statusnya perlu dikonfirmasi langsung ke UPT PKK/CDE UPNVJ (cde@upnvj.ac.id / @cde.upnvj). Apa pun statusnya, PKM memberi manfaat nyata untuk portofolio dan kariermu.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <SectionHeading
        as="h1"
        title="Pertanyaan yang sering diajukan"
        lead="Jawaban dirangkum dari Panduan PKM 2026. Kalau pertanyaanmu tidak ada di sini, hubungi pengelola PKM UPNVJ."
      />
      <div className="mt-10 max-w-3xl">
        <Accordion items={faq} />
      </div>
      <p className="mt-8 max-w-3xl rounded-xl bg-veteran-50 px-5 py-4 text-sm leading-6 text-veteran-800">
        Masih ada yang mengganjal? Email{" "}
        <a
          href="mailto:cde@upnvj.ac.id"
          className="font-semibold underline-offset-2 hover:underline"
        >
          cde@upnvj.ac.id
        </a>{" "}
        atau DM{" "}
        <a
          href="https://www.instagram.com/cde.upnvj/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline-offset-2 hover:underline"
        >
          @cde.upnvj
        </a>{" "}
       , UPT Pengembangan Karir dan Kewirausahaan (CDE), Gedung R.A. Kartini
        lantai 1.
      </p>
    </div>
  );
}
