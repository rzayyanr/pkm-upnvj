"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { buatKlienServer } from "@/lib/supabase/server";
import { cariProfilAdmin } from "@/lib/admin";

/*
  Semua aksi admin WAJIB melewati wajibAdmin(): sesi Google + daftar
  putih profil_admin. RLS di database memeriksa ulang, lapisan ini
  hanya untuk pesan galat yang bersih.
*/

async function wajibAdmin() {
  const klien = await buatKlienServer();
  const { data: sesi } = await klien.auth.getUser();
  const user = sesi?.user;
  if (!user) throw new Error("Belum masuk. Silakan login dengan Google.");
  const profil = await cariProfilAdmin(klien, user.id);
  if (!profil) throw new Error("Email Anda tidak terdaftar sebagai admin.");
  return { klien, profil };
}

function teks(formData: FormData, nama: string): string {
  const nilai = formData.get(nama);
  return typeof nilai === "string" ? nilai.trim() : "";
}

async function asalSitus(): Promise<string> {
  const h = await headers();
  const proto = h.get("x-forwarded-proto") ?? "http";
  const host = h.get("host") ?? "localhost:3000";
  return `${proto}://${host}`;
}

export async function masukDenganGoogle() {
  const klien = await buatKlienServer();
  const { data, error } = await klien.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: `${await asalSitus()}/admin/callback` },
  });
  if (error || !data.url) redirect("/admin/login?gagal=1");
  redirect(data.url);
}

export async function keluar() {
  const klien = await buatKlienServer();
  await klien.auth.signOut();
  redirect("/admin/login");
}

export async function simpanPengumuman(formData: FormData) {
  const { klien } = await wajibAdmin();
  const id = teks(formData, "id");
  const judul = teks(formData, "judul");
  const isi = teks(formData, "isi");
  const kategori = teks(formData, "kategori") || "pengumuman";
  const penting = formData.get("penting") === "on";
  if (!judul || !isi) throw new Error("Judul dan isi wajib diisi.");

  if (id) {
    await klien
      .from("pengumuman")
      .update({ judul, isi, kategori, penting })
      .eq("id", id);
  } else {
    await klien.from("pengumuman").insert({ judul, isi, kategori, penting });
  }
  revalidatePath("/", "layout");
}

export async function alihkanPengumuman(id: string, aktif: boolean) {
  const { klien } = await wajibAdmin();
  await klien.from("pengumuman").update({ aktif }).eq("id", id);
  revalidatePath("/", "layout");
}

export async function simpanAgenda(formData: FormData) {
  const { klien } = await wajibAdmin();
  const id = teks(formData, "id");
  const judul = teks(formData, "judul");
  const deskripsi = teks(formData, "deskripsi");
  const cakupan = teks(formData, "cakupan") === "internal_upnvj" ? "internal_upnvj" : "nasional";
  const tanggal_mulai = teks(formData, "tanggal_mulai");
  const tanggal_selesai = teks(formData, "tanggal_selesai") || null;
  const lokasi = teks(formData, "lokasi") || null;
  const tautan = teks(formData, "tautan") || null;
  if (!judul || !tanggal_mulai) throw new Error("Judul dan tanggal mulai wajib diisi.");

  const nilai = { judul, deskripsi, cakupan, tanggal_mulai, tanggal_selesai, lokasi, tautan };
  if (id) {
    await klien.from("agenda_deadline").update(nilai).eq("id", id);
  } else {
    await klien.from("agenda_deadline").insert(nilai);
  }
  revalidatePath("/", "layout");
}

export async function alihkanAgenda(id: string, aktif: boolean) {
  const { klien } = await wajibAdmin();
  await klien.from("agenda_deadline").update({ aktif }).eq("id", id);
  revalidatePath("/", "layout");
}
