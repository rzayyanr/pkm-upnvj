import type { Metadata } from "next";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { PlaceholderBanner } from "@/components/ui/PlaceholderBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Alur PKM 2026",
  description:
    "Tahapan PKM 2026 dari penyusunan proposal sampai PIMNAS: evaluasi internal, unggah simbelmawa, penilaian 2 tahap, pelaksanaan, PKP2, laporan akhir.",
};

export default function AlurPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <SectionHeading
        as="h1"
        title="Alur PKM dari awal sampai PIMNAS"
        lead="Tahapan resmi PKM 2026 (8 bidang skema pendanaan). Untuk skema insentif (GFT & AI), alurnya berhenti di pengumuman insentif."
      />

      <div className="mt-10">
        <PlaceholderBanner>
          jadwal seleksi internal UPNVJ (sosialisasi, unggah proposal tingkat
          universitas, evaluasi internal) akan ditampilkan di sini begitu
          dikonfirmasi UPT PKK/CDE. Jadwal nasional di bawah terverifikasi dari
          pengumuman resmi.
        </PlaceholderBanner>
      </div>

      <ol className="mt-10 max-w-2xl list-none">
        <TimelineItem
          nomor={1}
          title="Penyusunan proposal"
          status="selesai"
          period="9 Maret – 9 April 2026"
        >
          Pilih bidang dan tema, susun proposal sesuai sistematika, lakukan
          evaluasi internal kampus, lalu operator PT mendaftarkan usulan di
          simbelmawa.
        </TimelineItem>
        <TimelineItem
          nomor={2}
          title="Unggah & validasi proposal"
          status="selesai"
          period="satu jendela dengan poin 1"
        >
          Unggah isi utama (daftar isi, bagian inti, lampiran) ke
          simbelmawa/pkm — divalidasi dosen pendamping, disahkan pimpinan PT
          bidang kemahasiswaan.
        </TimelineItem>
        <TimelineItem
          nomor={3}
          title="Penilaian 2 tahap"
          status="selesai"
          period="Tahap 1 administrasi → Tahap 2 substansi"
        >
          Tahap 1: kesesuaian administrasi & format. Tahap 2: kreativitas,
          kekinian topik, tantangan intelektual (2 penilai).
        </TimelineItem>
        <TimelineItem
          nomor={4}
          title="Pengumuman pendanaan"
          status="selesai"
          period="23 Mei 2026"
        >
          21.237 usulan didanai + 4.016 insentif; kontrak & pencairan dana
          mengikuti mekanisme simbelmawa.
        </TimelineItem>
        <TimelineItem
          nomor={5}
          title="Pelaksanaan kegiatan"
          status="selesai"
          period="3–4 bulan"
        >
          Kegiatan luring sesuai jadwal proposal; Logbook kegiatan & keuangan
          diunggah berkala; akun media sosial aktif dengan 3 unggahan
          ber-iklan serentak.
        </TimelineItem>
        <TimelineItem
          nomor={6}
          title="Laporan kemajuan"
          status="selesai"
          period="1–12 September 2026"
        >
          Unggah laporan kemajuan (bagian inti maks 10 halaman) + tautan medsos
          + draft artikel ilmiah.
        </TimelineItem>
        <TimelineItem
          nomor={7}
          title="PKP2 — penilaian kemajuan (daring)"
          status="berjalan"
          period="14 – 19 September 2026"
        >
          Presentasi kemajuan kegiatan ke 2 penilai; pengumuman judul yang
          dinilai terbit 28 Agustus 2026. Nilai akhir: NA = 0,3·NP + 0,2·NLK +
          0,5·NM.
        </TimelineItem>
        <TimelineItem
          nomor={8}
          title="PKM Award & Laporan akhir"
          status="akan-datang"
          period="Award 19–20 Sep · Laporan akhir 21 Sep – 3 Okt 2026"
        >
          Laporan akhir = syarat pencairan dana tahap akhir; telat = wajib
          mengembalikan dana ke kas negara.
        </TimelineItem>
        <TimelineItem
          nomor={9}
          title="Pengumuman peserta PIMNAS"
          status="akan-datang"
          period="12 – 13 Oktober 2026"
        >
          Judul terbaik dari nilai akhir ditetapkan mengikuti kuota PIMNAS.
        </TimelineItem>
        <TimelineItem
          nomor={10}
          title="PIMNAS 39"
          status="akan-datang"
          period="2 – 7 November 2026 · Universitas Diponegoro, Semarang"
        >
          Panggung final: presentasi, poster, gelar produk — medali emas,
          perak, perunggu, dan Piala Adhikarta Kertawidya bagi juara umum.
        </TimelineItem>
      </ol>

      <p className="mt-10 max-w-2xl rounded-xl bg-emas-50 px-5 py-4 text-sm leading-6 text-emas-700">
        Tanggal di atas adalah jadwal resmi siklus PKM 2026 (siklusnya sedang
        berjalan). Untuk persiapan PKM 2027, pola tahapannya sama — panduan dan
        jadwal baru biasanya terbit sekitar Maret. Status jadwal akan
        dimutakhirkan dari halaman admin kampus.
      </p>
    </div>
  );
}
