import { ButtonLink } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <section className="bg-veteran-800 text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-20 sm:px-6 sm:py-28">
          <h1 className="max-w-2xl font-heading text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
            Semua yang perlu kamu tahu tentang PKM di UPNVJ
          </h1>
          <p className="max-w-xl text-lg leading-8 text-veteran-100">
            Dari memilih bidang sampai melangkah ke PIMNAS — panduan resmi,
            jadwal terkini, dan tips proposal dalam satu tempat.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/komponen" size="lg" className="bg-white text-veteran-800 hover:bg-veteran-50">
              Lihat demo komponen
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <p className="rounded-xl bg-emas-50 px-5 py-4 text-sm leading-6 text-emas-700">
          🚧 Website sedang dibangun bertahap — tiket 02 (design system) selesai,
          konten panduan menyusul di tiket berikutnya.
        </p>
      </section>
    </>
  );
}
