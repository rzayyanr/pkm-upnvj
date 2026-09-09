export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-6 py-32 px-8 text-center">
        <span className="rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-800">
          Sedang dibangun 🚧
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          PKM UPNVJ
        </h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600">
          Pusat informasi Program Kreativitas Mahasiswa untuk mahasiswa UPN
          Veteran Jakarta — 10 bidang PKM, tahapan pendaftaran, tema, tips
          proposal, dan panduan resmi 2026.
        </p>
        <p className="text-sm text-zinc-400">
          Tiket 01 (Fondasi) — konten menyusul di tiket berikutnya.
        </p>
      </main>
    </div>
  );
}
