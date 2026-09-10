import Link from "next/link";
import { ambilKontak, ambilTautanCepat } from "@/lib/konten";
import type { Kontak, TautanCepat } from "@/lib/konten";

/*
  Nilai bawaan saat database gagal/pause (FR-11): footer tetap utuh
  memakai data statis yang sudah terverifikasi dari riset.
*/
const kontakBawaan: Kontak[] = [
  {
    id: "default",
    nama_unit: "UPT Pengembangan Karir dan Kewirausahaan (CDE)",
    email: "cde@upnvj.ac.id",
    telepon: null,
    instagram: "https://www.instagram.com/cde.upnvj/",
    alamat: "Gedung R.A. Kartini lantai 1, Kampus UPNVJ",
    jam_layanan: null,
  },
];

const tautanBawaan: TautanCepat[] = [
  {
    id: "1",
    judul: "Simbelmawa PKM (pendaftaran resmi)",
    url: "https://simbelmawa.kemdiktisaintek.go.id/pkm/",
    deskripsi: null,
  },
  { id: "2", judul: "Kemdiktisaintek", url: "https://kemdiktisaintek.go.id", deskripsi: null },
  { id: "3", judul: "Panduan GenAI Belmawa", url: "https://s.id/PanduanGenAI", deskripsi: null },
];

export async function Footer() {
  const [hasilKontak, hasilTautan] = await Promise.all([
    ambilKontak(),
    ambilTautanCepat(),
  ]);
  const kontak = hasilKontak.ok ? hasilKontak.data : kontakBawaan;
  const tautan = hasilTautan.ok ? hasilTautan.data : tautanBawaan;
  const utama = kontak[0];

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-bold text-zinc-900">
            PKM <span className="text-veteran-700">UPNVJ</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-600">
            Pusat informasi Program Kreativitas Mahasiswa untuk mahasiswa UPN
            Veteran Jakarta.
          </p>
          <p className="mt-4 text-xs leading-5 text-zinc-500">
            Website independen proyek portofolio mahasiswa — bukan situs resmi
            UPNVJ. Rujukan resmi: Simbelmawa dan UPT PKK/CDE UPNVJ.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold text-zinc-900">
            Kontak pengelola PKM UPNVJ
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            {utama ? <li>{utama.nama_unit}</li> : null}
            {utama ? (
              <li>
                <a
                  href={`mailto:${utama.email}`}
                  className="text-veteran-700 underline-offset-2 hover:underline"
                >
                  {utama.email}
                </a>
              </li>
            ) : null}
            {utama?.alamat ? <li>{utama.alamat}</li> : null}
            {utama?.instagram ? (
              <li>
                <a
                  href={utama.instagram}
                  className="text-veteran-700 underline-offset-2 hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Instagram @cde.upnvj
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold text-zinc-900">
            Tautan resmi
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {tautan.map((t) => (
              <li key={t.id}>
                <a
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-veteran-700 underline-offset-2 hover:underline"
                >
                  {t.judul}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-4 text-xs text-zinc-500 sm:px-6">
          <p>© {new Date().getFullYear()} PKM UPNVJ — proyek portofolio.</p>
          <p>
            Konten panduan mengacu{" "}
            <Link href="/unduhan" className="underline-offset-2 hover:underline">
              Panduan PKM 2026 resmi
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
