import { NextResponse } from "next/server";
import { buatKlienServer } from "@/lib/supabase/server";
import { cariProfilAdmin } from "@/lib/admin";

/*
  Ekspor cadangan data konten dinamis (JSON) — fitur backup manual
  karena paket gratis Supabase tidak menyediakan backup otomatis.
  Hanya admin terdaftar yang bisa mengunduh.
*/

export async function GET() {
  const klien = await buatKlienServer();
  const { data: sesi } = await klien.auth.getUser();
  const user = sesi?.user;
  if (!user) {
    return NextResponse.json({ error: "Belum masuk." }, { status: 401 });
  }
  const profil = await cariProfilAdmin(klien, user.id);
  if (!profil) {
    return NextResponse.json({ error: "Akses ditolak." }, { status: 403 });
  }

  const [pengumuman, agenda, kontak, tautan] = await Promise.all([
    klien.from("pengumuman").select("*").order("tanggal_terbit", { ascending: false }),
    klien.from("agenda_deadline").select("*").order("tanggal_mulai"),
    klien.from("kontak").select("*").order("urutan"),
    klien.from("tautan_cepat").select("*").order("urutan"),
  ]);

  const cadangan = {
    _info: {
      sumber: "Website PKM UPNVJ",
      diekspor_pada: new Date().toISOString(),
      diekspor_oleh: profil.email,
      catatan: "Cadangan manual konten dinamis. Pulihkan lewat SQL Editor bila diperlukan.",
    },
    pengumuman: pengumuman.data ?? [],
    agenda_deadline: agenda.data ?? [],
    kontak: kontak.data ?? [],
    tautan_cepat: tautan.data ?? [],
  };

  const tanggalBerkas = new Date().toISOString().slice(0, 10);
  return new NextResponse(JSON.stringify(cadangan, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Disposition": `attachment; filename="cadangan-pkm-upnvj-${tanggalBerkas}.json"`,
      "Cache-Control": "no-store",
    },
  });
}
