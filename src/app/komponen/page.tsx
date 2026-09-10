import type { Metadata } from "next";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Badge, Card } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { Field, Input, Textarea } from "@/components/ui/Form";
import { PlaceholderBanner } from "@/components/ui/PlaceholderBanner";

export const metadata: Metadata = {
  title: "Demo Komponen (internal)",
  robots: { index: false },
};

export default function KomponenPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <SectionHeading
        as="h1"
        title="Demo Komponen"
        lead="Halaman internal untuk menilai design system sebelum konten dibangun. Setiap komponen memakai contoh konten sungguhan."
      />

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-xl font-semibold text-zinc-900">
          Tombol
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <ButtonLink href="/">Kenali PKM</ButtonLink>
          <Button variant="secondary">Unduh Panduan</Button>
          <Button variant="ghost">Lihat selengkapnya</Button>
          <Button size="sm" variant="primary">
            Simpan
          </Button>
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-xl font-semibold text-zinc-900">
          Badge, dua skema PKM
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="pendanaan">Skema Pendanaan, Rp 6-8 juta</Badge>
          <Badge variant="insentif">Skema Insentif, Rp 1,5 juta</Badge>
          <Badge variant="mendesak">Deadline 19 September</Badge>
          <Badge variant="netral">Berujung PIMNAS</Badge>
        </div>
        <p className="text-sm text-zinc-500">
          Hijau = pendanaan, kuning = insentif, merah = mendesak, konsisten di
          seluruh situs.
        </p>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-xl font-semibold text-zinc-900">
          Kartu bidang (contoh: PKM-K)
        </h2>
        <div className="max-w-md">
          <Card>
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-heading text-lg font-semibold text-zinc-900">
                PKM Kewirausahaan
              </h3>
              <Badge variant="pendanaan">Pendanaan</Badge>
            </div>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Menghasilkan komoditas unik dan merintis usaha berorientasi laba
              yang pelaku utamanya mahasiswa.
            </p>
            <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <div>
                <dt className="text-zinc-500">Tim</dt>
                <dd className="font-medium text-zinc-900">3-5 mahasiswa</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Luaran khas</dt>
                <dd className="font-medium text-zinc-900">Katalog produk</dd>
              </div>
            </dl>
          </Card>
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-xl font-semibold text-zinc-900">
          Timeline alur PKM
        </h2>
        <div className="max-w-xl">
          <ol className="list-none">
            <TimelineItem nomor={1} title="Penyusunan proposal" status="selesai" period="9 Mar sampai 9 Apr 2026">
              Pilih tema, susun proposal sesuai sistematika bidang.
            </TimelineItem>
            <TimelineItem nomor={2} title="PKP2, penilaian kemajuan" status="berjalan" period="14-19 September 2026">
              Presentasi kemajuan kegiatan secara daring.
            </TimelineItem>
            <TimelineItem nomor={3} title="PIMNAS 39" status="akan-datang" period="2-7 November 2026, Universitas Diponegoro">
              Panggung final pelaksanaan PKM.
            </TimelineItem>
          </ol>
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-xl font-semibold text-zinc-900">
          Accordion FAQ
        </h2>
        <div className="max-w-xl">
          <Accordion
            items={[
              {
                question: "Boleh ikut lebih dari satu tim PKM?",
                answer:
                  "Tidak. Setiap mahasiswa hanya boleh mengusulkan satu proposal PKM, baik sebagai ketua maupun anggota.",
              },
              {
                question: "Berapa batas uji similaritas proposal?",
                answer:
                  "Maksimum 25%, dan hasil uji (Turnitin/iThenticate atau sejenis) dilampirkan pada bagian inti proposal.",
              },
            ]}
          />
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-xl font-semibold text-zinc-900">
          Placeholder info kampus
        </h2>
        <PlaceholderBanner>
          jadwal seleksi internal UPNVJ tahun 2027 belum diumumkan, halaman ini
          akan diperbarui begitu info resmi dari UPT PKK/CDE terbit.
        </PlaceholderBanner>
      </section>

      <section className="mt-12 space-y-4 pb-8">
        <h2 className="font-heading text-xl font-semibold text-zinc-900">
          Form (untuk panel admin)
        </h2>
        <div className="max-w-md space-y-4">
          <Field label="Judul pengumuman" htmlFor="demo-judul" hint="Maksimal 120 karakter.">
            <Input
              id="demo-judul"
              name="judul"
              autoComplete="off"
              placeholder="Contoh: Pendaftaran PKM 2027 dibuka…"
            />
          </Field>
          <Field label="Isi pengumuman" htmlFor="demo-isi">
            <Textarea
              id="demo-isi"
              name="isi"
              rows={4}
              placeholder="Tulis isi pengumuman di sini…"
            />
          </Field>
          <Button>Simpan pengumuman</Button>
        </div>
      </section>
    </div>
  );
}
