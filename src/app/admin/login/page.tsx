import type { Metadata } from "next";
import Link from "next/link";
import { masukDenganGoogle } from "../actions";

export const metadata: Metadata = {
  title: "Masuk Admin",
  robots: { index: false },
};

export default async function HalamanLoginAdmin({
  searchParams,
}: {
  searchParams: Promise<{ gagal?: string }>;
}) {
  const { gagal } = await searchParams;
  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center px-4 py-24 text-center">
      <h1 className="font-heading text-2xl font-bold text-zinc-900">
        Panel Admin PKM UPNVJ
      </h1>
      <p className="mt-2 text-sm leading-6 text-zinc-600">
        Halaman khusus pengelola. Masuk dengan akun Google yang terdaftar
        sebagai admin.
      </p>
      {gagal ? (
        <p className="mt-4 w-full rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-api-700">
          Proses masuk gagal atau dibatalkan. Silakan coba lagi.
        </p>
      ) : null}
      <form action={masukDenganGoogle} className="mt-6 w-full">
        <button
          type="submit"
          className="w-full rounded-full bg-veteran-700 px-6 py-3 font-medium text-white hover:bg-veteran-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-veteran-700"
        >
          Masuk dengan Google
        </button>
      </form>
      <p className="mt-4 text-xs leading-5 text-zinc-500">
        Bukan pengelola? Halaman ini bukan untuk Anda, silakan kembali ke{" "}
        <Link href="/" className="text-veteran-700 underline-offset-2 hover:underline">
          beranda
        </Link>
        .
      </p>
    </div>
  );
}
