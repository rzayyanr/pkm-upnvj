import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge, Card } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { cariBidang, daftarBidang } from "@/data/bidang";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return daftarBidang.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const bidang = cariBidang(slug);
  if (!bidang) return { title: "Bidang tidak ditemukan" };
  return {
    title: `${bidang.nama} (${bidang.kode})`,
    description: `${bidang.intiKegiatan} Ketahui komposisi tim, pendanaan, luaran wajib, dan sistematika proposal ${bidang.nama}.`,
  };
}

export default async function DetailBidangPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const bidang = cariBidang(slug);
  if (!bidang) notFound();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <nav aria-label="Kembali" className="mb-6 text-sm">
        <Link
          href="/bidang"
          className="text-veteran-700 underline-offset-2 hover:underline"
        >
          Semua bidang PKM
        </Link>
      </nav>

      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-xl bg-veteran-700 px-3 py-1.5 font-heading text-xl font-bold text-white">
          {bidang.kode}
        </span>
        <Badge variant={bidang.skema === "pendanaan" ? "pendanaan" : "insentif"}>
          {bidang.skema === "pendanaan"
            ? "Skema Pendanaan · berujung PIMNAS"
            : "Skema Insentif"}
        </Badge>
      </div>

      <SectionHeading as="h1" title={bidang.nama} lead={bidang.intiKegiatan} />

      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        <Card>
          <h2 className="text-sm font-medium text-zinc-500">Komposisi tim</h2>
          <p className="mt-1 font-heading text-lg font-semibold text-zinc-900">
            3–5 mahasiswa
          </p>
          <p className="text-sm text-zinc-600">1 ketua + 2–4 anggota</p>
        </Card>
        <Card>
          <h2 className="text-sm font-medium text-zinc-500">Dana utama</h2>
          <p className="mt-1 font-heading text-lg font-semibold text-zinc-900">
            {bidang.skema === "pendanaan" ? "Rp 6–8 juta" : "Insentif Rp 1,5 juta"}
          </p>
          <p className="text-sm text-zinc-600">
            {bidang.skema === "pendanaan"
              ? "+ pendamping PT wajib maks Rp 2 juta"
              : "tanpa pendanaan kegiatan"}
          </p>
        </Card>
        <Card>
          <h2 className="text-sm font-medium text-zinc-500">Berujung</h2>
          <p className="mt-1 font-heading text-lg font-semibold text-zinc-900">
            {bidang.skema === "pendanaan" ? "PIMNAS" : "Insentif nasional"}
          </p>
          <p className="text-sm text-zinc-600">
            {bidang.skema === "pendanaan"
              ? "PIMNAS 39 · 2–7 Nov 2026 · Undip"
              : "tidak dipresentasikan di PIMNAS"}
          </p>
        </Card>
      </div>

      <section className="mt-12">
        <SectionHeading title={`Mengenal ${bidang.nama}`} />
        <div className="mt-4 max-w-3xl space-y-4 text-zinc-700 leading-7">
          {bidang.deskripsi.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {bidang.bidangKajian ? (
        <section className="mt-12">
          <SectionHeading title="Ruang lingkup bidang kajian" />
          <div className="mt-4 overflow-x-auto">
            <table className="w-full max-w-3xl border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-300 text-zinc-600">
                  <th scope="col" className="py-2 pr-6 font-medium">
                    Klaster / Jenis
                  </th>
                  <th scope="col" className="py-2 font-medium">
                    Contoh bidang ilmu
                  </th>
                </tr>
              </thead>
              <tbody>
                {bidang.bidangKajian.map((k) => (
                  <tr key={k.klaster} className="border-b border-zinc-200">
                    <td className="py-3 pr-6 font-medium text-zinc-900">
                      {k.klaster}
                    </td>
                    <td className="py-3 text-zinc-600">{k.contoh}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      <section className="mt-12">
        <SectionHeading title="Ketentuan tim & pengusulan" />
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-zinc-700 leading-7">
          {bidang.ketentuanTim.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <SectionHeading title="Sumber pendanaan" />
        <div className="mt-4 max-w-3xl space-y-3 text-zinc-700 leading-7">
          <p>
            <strong className="font-semibold text-zinc-900">Dana utama: </strong>
            {bidang.pendanaan.utama}.
          </p>
          <p>
            <strong className="font-semibold text-zinc-900">
              Dana pendamping PT:{" "}
            </strong>
            {bidang.pendanaan.pendampingPt}.
          </p>
          <p>
            <strong className="font-semibold text-zinc-900">
              Dana institusi lain:{" "}
            </strong>
            {bidang.pendanaan.institusiLain}.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading title="Luaran wajib" />
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-zinc-700 leading-7">
          {bidang.luaran.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
        {bidang.catatanLuaran ? (
          <p className="mt-4 max-w-3xl rounded-xl bg-veteran-50 px-5 py-4 text-sm leading-6 text-veteran-800">
            {bidang.catatanLuaran}
          </p>
        ) : null}
      </section>

      <section className="mt-12">
        <SectionHeading
          title="Sistematika proposal"
          lead={bidang.sistematika.judul}
        />
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <Card>
            <h3 className="font-heading text-base font-semibold text-zinc-900">
              Format penulisan
            </h3>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-zinc-700 leading-6">
              {bidang.sistematika.format.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="font-heading text-base font-semibold text-zinc-900">
              Struktur isi utama
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-zinc-700 leading-6">
              {bidang.sistematika.struktur.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </Card>
        </div>
        {bidang.sistematika.catatanKhas ? (
          <div className="mt-5 max-w-3xl">
            <h3 className="font-heading text-base font-semibold text-zinc-900">
              Catatan khas bidang ini
            </h3>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-zinc-700 leading-6">
              {bidang.sistematika.catatanKhas.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        ) : null}
        <div className="mt-5 max-w-3xl rounded-xl border-2 border-red-200 bg-red-50 px-5 py-4">
          <h3 className="font-heading text-base font-semibold text-api-700">
            Proposal gugur di Tahap 1 (administrasi) jika:
          </h3>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-zinc-700">
            {bidang.sistematika.catatanGugur.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-veteran-800 px-6 py-8 text-white sm:px-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="font-heading text-2xl font-bold text-balance">
              Baca langsung panduan resmi {bidang.kode}
            </h2>
            <p className="mt-2 text-veteran-100">
              Website ini ringkasan — untuk menyusun proposal, panduan resmi
              tetap sumber utamamu.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink
              href={bidang.filePanduan}
              size="lg"
              className="bg-white text-veteran-800 hover:bg-veteran-50"
            >
              Unduh PDF {bidang.kode}
            </ButtonLink>
            <ButtonLink
              href="/alur"
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-veteran-700"
            >
              Lihat alur PKM
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
