import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderBanner } from "@/components/ui/PlaceholderBanner";
import { daftarBidang } from "@/data/bidang";

export default function Home() {
  return (
    <>
      <section className="bg-veteran-800 text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-20 sm:px-6 sm:py-24">
          <h1 className="max-w-2xl font-heading text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
            Semua yang perlu kamu tahu tentang PKM di UPNVJ
          </h1>
          <p className="max-w-xl text-lg leading-8 text-veteran-100">
            Dari memilih bidang sampai melangkah ke PIMNAS — panduan resmi,
            jadwal terkini, dan tips proposal dalam satu tempat.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/bidang" size="lg" className="bg-white text-veteran-800 hover:bg-veteran-50">
              Pilih bidang PKM
            </ButtonLink>
            <ButtonLink
              href="/alur"
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-veteran-700"
            >
              Lihat alur &amp; jadwal
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6" aria-label="Info terkini">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="font-heading text-base font-semibold text-zinc-900">
              Pengumuman
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Pengumuman resmi kampus akan tampil di sini.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="font-heading text-base font-semibold text-zinc-900">
              Deadline terdekat
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Agenda dan batas waktu penting akan tampil di sini.
            </p>
          </div>
        </div>
        <div className="mt-4">
          <PlaceholderBanner>
            jadwal seleksi internal UPNVJ tahun 2027 belum diumumkan — bagian
            pengumuman dan deadline di atas akan diisi langsung oleh pengelola
            PKM UPNVJ (UPT PKK/CDE) tanpa perlu deploy ulang, begitu panel admin
            aktif.
          </PlaceholderBanner>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <SectionHeading
            title="Apa itu PKM?"
            lead="Program Kreativitas Mahasiswa (PKM) adalah program Kemdiktisaintek untuk mengasah kreativitas mahasiswa lewat karya nyata — riset, produk iptek, usaha, pengabdian, hingga tulisan dan video — yang puncaknya adalah Pekan Ilmiah Mahasiswa Nasional (PIMNAS)."
          />
          <div className="mt-5">
            <Link
              href="/tentang"
              className="text-sm font-medium text-veteran-700 underline-offset-2 hover:underline"
            >
              Baca selengkapnya tentang PKM
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <SectionHeading
          title="Pilih bidangmu"
          lead="10 bidang, dua skema: 8 bidang pendanaan (Rp 6–8 juta per tim, berujung PIMNAS) dan 2 bidang insentif (Rp 1,5 juta)."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {daftarBidang.map((b) => (
            <Link
              key={b.slug}
              href={`/bidang/${b.slug}`}
              className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-veteran-700"
            >
              <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 transition-colors group-hover:border-veteran-300 group-hover:bg-veteran-50/40">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-heading text-2xl font-bold text-veteran-700">
                    {b.kode}
                  </span>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                      b.skema === "pendanaan"
                        ? "bg-veteran-100 text-veteran-800"
                        : "bg-emas-100 text-emas-700"
                    }`}
                  >
                    {b.skema === "pendanaan" ? "Pendanaan" : "Insentif"}
                  </span>
                </div>
                <h3 className="mt-2 font-heading text-lg font-semibold text-zinc-900">
                  {b.nama}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {b.intiKegiatan}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-2xl bg-veteran-800 px-6 py-8 text-white sm:px-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="font-heading text-2xl font-bold text-balance">
                Siap menyusun proposal?
              </h2>
              <p className="mt-2 text-veteran-100">
                Unduh panduan resmi 2026, pelajari alurnya, dan hindari
                kesalahan administrasi yang menggugurkan.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/unduhan" className="bg-white text-veteran-800 hover:bg-veteran-50">
                Unduh panduan
              </ButtonLink>
              <ButtonLink
                href="/tips"
                variant="secondary"
                className="border-white text-white hover:bg-veteran-700"
              >
                Tips proposal
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
