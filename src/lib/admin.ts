import "server-only";
import type { SupabaseClient } from "@supabase/supabase-js";

/*
  Modul data panel ADMIN: membaca SEMUA status (termasuk nonaktif)
  dan memeriksa daftar putih profil_admin. Halaman publik tetap
  memakai src/lib/konten.ts (satu pintu konten publik).
*/

export type PengumumanAdmin = {
  id: string;
  judul: string;
  isi: string;
  kategori: string;
  penting: boolean;
  aktif: boolean;
  tanggal_terbit: string;
};

export type AgendaAdmin = {
  id: string;
  judul: string;
  deskripsi: string;
  cakupan: string;
  tanggal_mulai: string;
  tanggal_selesai: string | null;
  lokasi: string | null;
  tautan: string | null;
  aktif: boolean;
};

export type ProfilAdmin = {
  id: string;
  email: string;
  nama: string;
  peran: string;
};

export async function cariProfilAdmin(
  klien: SupabaseClient,
  userId: string,
): Promise<ProfilAdmin | null> {
  const { data } = await klien
    .from("profil_admin")
    .select("id, email, nama, peran")
    .eq("id", userId)
    .eq("aktif", true)
    .maybeSingle();
  return (data as ProfilAdmin) ?? null;
}

export async function daftarPengumumanSemua(
  klien: SupabaseClient,
): Promise<PengumumanAdmin[]> {
  const { data } = await klien
    .from("pengumuman")
    .select("id, judul, isi, kategori, penting, aktif, tanggal_terbit")
    .order("tanggal_terbit", { ascending: false })
    .limit(50);
  return (data as PengumumanAdmin[]) ?? [];
}

export async function daftarAgendaSemua(
  klien: SupabaseClient,
): Promise<AgendaAdmin[]> {
  const { data } = await klien
    .from("agenda_deadline")
    .select(
      "id, judul, deskripsi, cakupan, tanggal_mulai, tanggal_selesai, lokasi, tautan, aktif",
    )
    .order("tanggal_mulai", { ascending: true })
    .limit(50);
  return (data as AgendaAdmin[]) ?? [];
}
