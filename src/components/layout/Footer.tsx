import Link from "next/link";

const tautanResmi = [
  {
    href: "https://simbelmawa.kemdiktisaintek.go.id/pkm/",
    label: "Simbelmawa PKM (pendaftaran resmi)",
  },
  { href: "https://kemdiktisaintek.go.id", label: "Kemdiktisaintek" },
  { href: "https://s.id/PanduanGenAI", label: "Panduan GenAI Belmawa" },
];

export function Footer() {
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
            <li>UPT Pengembangan Karir dan Kewirausahaan (CDE)</li>
            <li>
              <a
                href="mailto:cde@upnvj.ac.id"
                className="text-veteran-700 underline-offset-2 hover:underline"
              >
                cde@upnvj.ac.id
              </a>
            </li>
            <li>Gedung R.A. Kartini lantai 1, Kampus UPNVJ</li>
            <li>
              <a
                href="https://www.instagram.com/cde.upnvj/"
                className="text-veteran-700 underline-offset-2 hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram @cde.upnvj
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold text-zinc-900">
            Tautan resmi
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {tautanResmi.map((t) => (
              <li key={t.href}>
                <a
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-veteran-700 underline-offset-2 hover:underline"
                >
                  {t.label}
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
