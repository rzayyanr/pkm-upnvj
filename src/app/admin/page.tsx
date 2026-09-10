import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { buatKlienServer } from "@/lib/supabase/server";
import {
  cariProfilAdmin,
  daftarAgendaSemua,
  daftarPengumumanSemua,
} from "@/lib/admin";
import { keluar } from "./actions";
import { PengumumanPanel } from "@/components/admin/PengumumanPanel";
import { AgendaPanel } from "@/components/admin/AgendaPanel";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Panel Admin",
  robots: { index: false },
};

export default async function HalamanAdmin() {
  const klien = await buatKlienServer();
  const { data: sesi } = await klien.auth.getUser();
  const user = sesi?.user;
  if (!user) redirect("/admin/login");

  const profil = await cariProfilAdmin(klien, user.id);
  if (!profil) {
    return (
      <div className="mx-auto w-full max-w-xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-heading text-2xl font-bold text-zinc-900">
          Akses ditolak
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
          Anda masuk sebagai{" "}
          <strong className="text-zinc-900">{user.email}</strong>, tetapi email
          ini belum terdaftar di daftar admin. Hubungi pemilik proyek untuk
          pendaftaran.
        </p>
        <form action={keluar} className="mt-6">
          <Button type="submit" variant="secondary">
            Keluar
          </Button>
        </form>
      </div>
    );
  }

  const [pengumuman, agenda] = await Promise.all([
    daftarPengumumanSemua(klien),
    daftarAgendaSemua(klien),
  ]);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-heading text-2xl font-bold text-zinc-900">
            Panel Admin
          </h1>
          <p className="text-sm text-zinc-600">
            Masuk sebagai {profil.email} ({profil.peran})
          </p>
        </div>
        <form action={keluar}>
          <Button type="submit" variant="secondary" size="sm">
            Keluar
          </Button>
        </form>
      </div>

      <p className="mt-4 rounded-xl bg-veteran-50 px-5 py-3 text-sm leading-6 text-veteran-800">
        Perubahan yang disimpan langsung tampil di beranda dan halaman Alur
        dalam maksimal 5 menit.
      </p>

      <div className="mt-10 space-y-12 pb-16">
        <PengumumanPanel daftar={pengumuman} />
        <AgendaPanel daftar={agenda} />
      </div>
    </div>
  );
}
