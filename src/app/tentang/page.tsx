import type { Metadata } from "next";
import { Badge, Card } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Tentang PKM",
  description:
    "Sejarah Program Kreativitas Mahasiswa, dua skema (pendanaan dan insentif), kriteria umum, dan peran dosen pendamping.",
};

const skema = [
  {
    nama: "Skema Pendanaan",
    isi: "8 bidang: RE, RSH, K, PM, PI, KC, KI, VGK. Proposal lolos seleksi mendapat dana kegiatan Rp 6–8 juta per tim (plus dana pendamping PT maks Rp 2 juta dan institusi lain maks Rp 1 juta). Kegiatan dilaksanakan 3–4 bulan, dievaluasi lewat PKP2, dan tim terbaik berlanjut ke PIMNAS.",
    variant: "pendanaan" as const,
  },
  {
    nama: "Skema Insentif",
    isi: "2 bidang: GFT (Gagasan Futuristik Tertulis) dan AI (Artikel Ilmiah). Tidak ada dana kegiatan — tim yang lolos seleksi menerima insentif Rp 1,5 juta. Tidak dipresentasikan di PIMNAS.",
    variant: "insentif" as const,
  },
];

export default function TentangPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <SectionHeading
        as="h1"
        title="Apa itu Program Kreativitas Mahasiswa?"
        lead="PKM adalah program bidang kemahasiswaan Kementerian Pendidikan Tinggi, Sains, dan Teknologi (Kemdiktisaintek) yang mengasah kreativitas, kepekaan, dan daya inovasi mahasiswa — dimulai sejak tahun 2001 dan berujung pada Pekan Ilmiah Mahasiswa Nasional (PIMNAS)."
      />

      <section className="mt-12 max-w-3xl space-y-4 leading-7 text-zinc-700">
        <p>
          Lewat PKM, mahasiswa belajar memecahkan masalah nyata di masyarakat,
          dunia usaha, atau pemerintah dengan karya aplikatif: riset, produk
          iptek, kewirausahaan, pengabdian, hingga karya tulis dan video.
          Selain menghasilkan karya, PKM melatih kerja sama tim — salah satu
          soft skills utama yang diharapkan tumbuh lewat program ini.
        </p>
        <p>
          Sejak 2025, PKM menjadi <strong>tematik</strong>: semua topik wajib
          merujuk salah satu dari 10 tema yang ditetapkan setiap tahun,
          selaras dengan program prioritas pemerintah (lihat halaman{" "}
          <a href="/tema" className="text-veteran-700 underline-offset-2 hover:underline">
            Tema 2026
          </a>
          ).
        </p>
        <p>
          Perguruan tinggi juga dianjurkan mengakui partisipasi PKM — antara
          lain lewat konversi SKS atau penerbitan Surat Keterangan Pendamping
          Ijazah (SKPI) — sesuai kebijakan masing-masing kampus. Untuk
          kebijakan spesifik UPNVJ, konfirmasikan ke UPT PKK/CDE.
        </p>
      </section>

      <section className="mt-12">
        <SectionHeading title="Dua skema PKM" />
        <div className="mt-4 grid gap-5 md:grid-cols-2">
          {skema.map((s) => (
            <Card key={s.nama}>
              <Badge variant={s.variant}>{s.nama}</Badge>
              <p className="mt-3 text-sm leading-6 text-zinc-700">{s.isi}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading
          title="Kriteria umum 10 bidang"
          lead="Ringkasan dari Tabel 1 Panduan Umum PKM 2026. Detail tiap bidang ada di halaman bidangnya."
        />
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-3xl border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-300 text-zinc-600">
                <th scope="col" className="py-2 pr-4 font-medium">Bidang</th>
                <th scope="col" className="py-2 pr-4 font-medium">Inti kegiatan</th>
                <th scope="col" className="py-2 pr-4 font-medium">Skema</th>
                <th scope="col" className="py-2 pr-4 font-medium">Luaran khas</th>
              </tr>
            </thead>
            <tbody className="text-zinc-700">
              {(
                [
                  ["RE", "Riset Eksakta", "Riset fenomena alamiah (fisika, kimia, biologi, matematika)", "pendanaan", "Artikel ilmiah"],
                  ["RSH", "Riset Sosial Humaniora", "Riset fenomena sosial & perilaku manusia", "pendanaan", "Artikel ilmiah"],
                  ["K", "Kewirausahaan", "Produk iptek sebagai komoditas usaha mahasiswa", "pendanaan", "Katalog produk/jasa"],
                  ["PM", "Pengabdian kepada Masyarakat", "Solusi iptek bagi mitra non-komersial", "pendanaan", "Buku panduan mitra"],
                  ["PI", "Penerapan Iptek", "Solusi iptek bagi mitra komersial", "pendanaan", "Buku pedoman mitra"],
                  ["KC", "Karsa Cipta", "Karya konstruksi baru yang fungsional", "pendanaan", "Prototipe"],
                  ["KI", "Karya Inovatif", "Produk fungsional inovatif siap produksi massal", "pendanaan", "Produk skala penuh + dokumen teknis"],
                  ["VGK", "Video Gagasan Konstruktif", "Gagasan dalam bentuk video tentang isu aktual", "pendanaan", "Video YouTube"],
                  ["GFT", "Gagasan Futuristik Tertulis", "Konsep perubahan di masa depan yang berpotensi direalisasikan", "insentif", "Artikel gagasan"],
                  ["AI", "Artikel Ilmiah", "Artikel ilmiah dari hasil kegiatan akademik mahasiswa", "insentif", "Artikel ilmiah"],
                ] as const
              ).map(([kode, nama, inti, sk, luaran]) => (
                <tr key={kode} className="border-b border-zinc-200">
                  <td className="py-3 pr-4 font-medium text-zinc-900">
                    {kode} — {nama}
                  </td>
                  <td className="py-3 pr-4">{inti}</td>
                  <td className="py-3 pr-4">
                    <Badge variant={sk === "pendanaan" ? "pendanaan" : "insentif"}>
                      {sk === "pendanaan" ? "Pendanaan" : "Insentif"}
                    </Badge>
                  </td>
                  <td className="py-3">{luaran}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12 max-w-3xl">
        <SectionHeading title="Peran dosen pendamping" />
        <div className="mt-4 space-y-4 leading-7 text-zinc-700">
          <p>
            Dosen pendamping mendampingi penyusunan proposal, pelaksanaan
            kegiatan dan persiapan PKP2 (bila didanai), sampai persiapan
            presentasi di PIMNAS (bila lolos). Satu dosen pendamping maksimum
            mendampingi <strong>10 tim</strong>, dan wajib memiliki NUPTK.
          </p>
          <p>
            Bagi dosen, pendampingan PKM diakui sebagai pembinaan kegiatan
            mahasiswa dalam kinerja BKD (Keputusan Dirjen Dikti No.
            12/E/KPT/2021) — sekaligus peluang berinteraksi dengan masyarakat
            dan industri.
          </p>
        </div>
      </section>

      <section className="mt-12 max-w-3xl rounded-2xl bg-veteran-800 px-6 py-8 text-white sm:px-10">
        <h2 className="font-heading text-2xl font-bold text-balance">
          Sudah kenal PKM?
        </h2>
        <p className="mt-2 text-veteran-100">
          Lanjutkan ke halaman bidang untuk memilih yang cocok, atau lihat
          alurnya dari penyusunan proposal sampai PIMNAS.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <ButtonLink href="/bidang" className="bg-white text-veteran-800 hover:bg-veteran-50">
            Lihat 10 bidang
          </ButtonLink>
          <ButtonLink href="/alur" variant="secondary" className="border-white text-white hover:bg-veteran-700">
            Lihat alur PKM
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
