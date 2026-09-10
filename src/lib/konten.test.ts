import assert from "node:assert/strict";
import { test } from "node:test";
import {
  ambilAgendaMendatang,
  ambilPengumumanTerbaru,
} from "./konten.ts";
import type { SupabaseClient } from "@supabase/supabase-js";

/*
  Test perilaku LUAR modul data (sesuai Testing Decisions di PRD):
  jalur sukses, gagal database → fallback, data kosong → fallback,
  dan tidak terkonfigurasi → fallback. Menggunakan klien tiruan , 
  tidak menyentuh Supabase sungguhan.
*/

type Panggilan = { tabel: string; metode: string; arg: unknown };

function buatKlienPalsu(jawaban: { data: unknown; error: unknown }) {
  const panggilan: Panggilan[] = [];
  const builder = {
    select() {
      panggilan.push({ tabel: "", metode: "select", arg: null });
      return this;
    },
    eq(kolom: string, nilai: unknown) {
      panggilan.push({ tabel: "", metode: `eq:${kolom}`, arg: nilai });
      return this;
    },
    or(expr: string) {
      panggilan.push({ tabel: "", metode: "or", arg: expr });
      return this;
    },
    gte(kolom: string, nilai: unknown) {
      panggilan.push({ tabel: "", metode: `gte:${kolom}`, arg: nilai });
      return this;
    },
    order() {
      return this;
    },
    limit() {
      return this;
    },
    then(
      resolve: (v: { data: unknown; error: unknown }) => void,
    ) {
      // supabase-js menyelesaikan error lewat nilai, bukan rejection
      return Promise.resolve(jawaban).then(resolve);
    },
  };
  const klien = {
    from(tabel: string) {
      panggilan.push({ tabel, metode: "from", arg: null });
      return builder;
    },
  } as unknown as SupabaseClient;
  return { klien, panggilan };
}

test("pengumuman: jalur sukses mengembalikan data", async () => {
  const { klien } = buatKlienPalsu({
    data: [{ id: "1", judul: "Uji", isi: "Isi", kategori: "pengumuman", penting: false, tanggal_terbit: "2026-09-10" }],
    error: null,
  });
  const hasil = await ambilPengumumanTerbaru(klien);
  assert.equal(hasil.ok, true);
  if (hasil.ok) assert.equal(hasil.data[0].judul, "Uji");
});

test("pengumuman: gagal database → fallback", async () => {
  const { klien } = buatKlienPalsu({ data: null, error: { message: "koneksi gagal" } });
  const hasil = await ambilPengumumanTerbaru(klien);
  assert.deepEqual(hasil, { ok: false, alasan: "gagal_database" });
});

test("pengumuman: data kosong → fallback data_kosong", async () => {
  const { klien } = buatKlienPalsu({ data: [], error: null });
  const hasil = await ambilPengumumanTerbaru(klien);
  assert.deepEqual(hasil, { ok: false, alasan: "data_kosong" });
});

test("pengumuman: klien null → fallback tidak_terkonfigurasi", async () => {
  const hasil = await ambilPengumumanTerbaru(null);
  assert.deepEqual(hasil, { ok: false, alasan: "tidak_terkonfigurasi" });
});

test("agenda: hanya mengambil agenda aktif dari hari ini ke depan", async () => {
  const { klien, panggilan } = buatKlienPalsu({
    data: [{ id: "a1", judul: "PIMNAS", deskripsi: "", cakupan: "nasional", tanggal_mulai: "2026-11-02", tanggal_selesai: "2026-11-07", lokasi: "Undip", tautan: null }],
    error: null,
  });
  const hasil = await ambilAgendaMendatang(klien);
  assert.equal(hasil.ok, true);
  const hariIni = new Date().toISOString().slice(0, 10);
  const adaAktif = panggilan.some((p) => p.metode === "eq:aktif" && p.arg === true);
  const adaBatas = panggilan.some(
    (p) => p.metode === "gte:tanggal_mulai" && p.arg === hariIni,
  );
  const adaAtauSelesai = panggilan.some(
    (p) => p.metode === "or" && String(p.arg).includes("tanggal_selesai"),
  );
  assert.ok(adaAktif, "harus memfilter aktif = true");
  assert.ok(adaBatas, "harus memfilter tanggal_mulai >= hari ini");
  assert.ok(adaAtauSelesai, "harus menyertakan agenda yang belum selesai");
});
