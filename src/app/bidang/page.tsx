import type { Metadata } from "next";
import Link from "next/link";
import { Badge, Card } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { daftarBidang } from "@/data/bidang";

export const metadata: Metadata = {
  title: "Bidang PKM",
  description:
    "Perbandingan 10 bidang Program Kreativitas Mahasiswa: inti kegiatan, komposisi tim, pendanaan, dan luaran wajib.",
};

export default function BidangPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <SectionHeading
        as="h1"
        title="Pilih bidang PKM-mu"
        lead="Sepuluh bidang PKM terbagi dua skema: 8 bidang skema pendanaan (Rp 6-8 juta per tim, berujung PIMNAS) dan 2 bidang skema insentif (Rp 1,5 juta). Kenali karakternya, lalu buka detail untuk sistematika proposalnya."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {daftarBidang.map((b) => (
          <Link
            key={b.slug}
            href={`/bidang/${b.slug}`}
            className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-veteran-700"
          >
            <Card className="h-full transition-colors group-hover:border-veteran-300 group-hover:bg-veteran-50/40">
              <div className="flex items-start justify-between gap-3">
                <span className="font-heading text-2xl font-bold text-veteran-700">
                  {b.kode}
                </span>
                <Badge variant={b.skema === "pendanaan" ? "pendanaan" : "insentif"}>
                  {b.skema === "pendanaan" ? "Pendanaan" : "Insentif"}
                </Badge>
              </div>
              <h2 className="mt-2 font-heading text-lg font-semibold text-zinc-900">
                {b.nama}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {b.intiKegiatan}
              </p>
              <p className="mt-4 text-sm font-medium text-veteran-700">
                {b.skema === "pendanaan"
                  ? "Tim 3-5, Rp 6-8 juta, PIMNAS"
                  : "Tim 3-5, Insentif Rp 1,5 juta"}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
