import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/*
  MODUL DATA SATU PINTU (seam dari PRD, Keputusan Implementasi #11).
  Satu-satunya jalur halaman membaca konten dinamis dari Supabase.
  Aturan: halaman TIDAK PERNAH memanggil Supabase langsung.

  Hasil berupa union (ok / gagal) agar halaman bisa menampilkan fallback
  santun saat database mati/pause tanpa mematikan halaman (FR-11, NFR-05).

  Klien boleh disuntikkan (inject) untuk pengujian dengan data tiruan.
*/

export type Pengumuman = {
  id: string;
  judul: string;
  isi: string;
  kategori: string;
  penting: boolean;
  tanggal_terbit: string;
};

export type Agenda = {
  id: string;
  judul: string;
  deskripsi: string;
  cakupan: "internal_upnvj" | "nasional";
  tanggal_mulai: string;
  tanggal_selesai: string | null;
  lokasi: string | null;
  tautan: string | null;
};

export type Kontak = {
  id: string;
  nama_unit: string;
  email: string;
  telepon: string | null;
  instagram: string | null;
  alamat: string;
  jam_layanan: string | null;
};

export type TautanCepat = {
  id: string;
  judul: string;
  url: string;
  deskripsi: string | null;
};

export type HasilKonten<T> =
  | { ok: true; data: T }
  | { ok: false; alasan: "tidak_terkonfigurasi" | "gagal_database" | "data_kosong" };

function buatKlien(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const kunci = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !kunci) return null;
  return createClient(url, kunci, { auth: { persistSession: false } });
}

function klienDefault(): SupabaseClient | null {
  // Satu klien dipakai bersama selama umur proses server.
  if (!globalThis.__klienKonten) {
    globalThis.__klienKonten = buatKlien();
  }
  return globalThis.__klienKonten;
}

declare global {
  var __klienKonten: SupabaseClient | null | undefined;
}

export async function ambilPengumumanTerbaru(
  klien: SupabaseClient | null = klienDefault(),
): Promise<HasilKonten<Pengumuman[]>> {
  if (!klien) return { ok: false, alasan: "tidak_terkonfigurasi" };
  const { data, error } = await klien
    .from("pengumuman")
    .select("id, judul, isi, kategori, penting, tanggal_terbit")
    .eq("aktif", true)
    .order("penting", { ascending: false })
    .order("tanggal_terbit", { ascending: false })
    .limit(3);
  if (error) return { ok: false, alasan: "gagal_database" };
  if (!data || data.length === 0) return { ok: false, alasan: "data_kosong" };
  return { ok: true, data: data as Pengumuman[] };
}

export async function ambilAgendaMendatang(
  klien: SupabaseClient | null = klienDefault(),
): Promise<HasilKonten<Agenda[]>> {
  if (!klien) return { ok: false, alasan: "tidak_terkonfigurasi" };
  const hariIni = new Date().toISOString().slice(0, 10);
  const { data, error } = await klien
    .from("agenda_deadline")
    .select(
      "id, judul, deskripsi, cakupan, tanggal_mulai, tanggal_selesai, lokasi, tautan",
    )
    .eq("aktif", true)
    .or(`tanggal_selesai.is.null,tanggal_selesai.gte.${hariIni}`)
    .gte("tanggal_mulai", hariIni)
    .order("tanggal_mulai", { ascending: true })
    .limit(6);
  if (error) return { ok: false, alasan: "gagal_database" };
  if (!data || data.length === 0) return { ok: false, alasan: "data_kosong" };
  return { ok: true, data: data as Agenda[] };
}

export async function ambilKontak(
  klien: SupabaseClient | null = klienDefault(),
): Promise<HasilKonten<Kontak[]>> {
  if (!klien) return { ok: false, alasan: "tidak_terkonfigurasi" };
  const { data, error } = await klien
    .from("kontak")
    .select(
      "id, nama_unit, email, telepon, instagram, alamat, jam_layanan",
    )
    .eq("aktif", true)
    .order("urutan", { ascending: true });
  if (error) return { ok: false, alasan: "gagal_database" };
  if (!data || data.length === 0) return { ok: false, alasan: "data_kosong" };
  return { ok: true, data: data as Kontak[] };
}

export async function ambilTautanCepat(
  klien: SupabaseClient | null = klienDefault(),
): Promise<HasilKonten<TautanCepat[]>> {
  if (!klien) return { ok: false, alasan: "tidak_terkonfigurasi" };
  const { data, error } = await klien
    .from("tautan_cepat")
    .select("id, judul, url, deskripsi")
    .eq("aktif", true)
    .order("urutan", { ascending: true });
  if (error) return { ok: false, alasan: "gagal_database" };
  if (!data || data.length === 0) return { ok: false, alasan: "data_kosong" };
  return { ok: true, data: data as TautanCepat[] };
}
