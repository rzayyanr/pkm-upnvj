"use client";

import { Button } from "@/components/ui/Button";
import { Field, Input, Textarea } from "@/components/ui/Form";
import type { PengumumanAdmin } from "@/lib/admin";
import { simpanPengumuman, alihkanPengumuman } from "@/app/admin/actions";

const formatTanggal = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

function FormulirPengumuman({ data }: { data?: PengumumanAdmin }) {
  return (
    <form action={simpanPengumuman} className="space-y-4">
      {data ? <input type="hidden" name="id" value={data.id} /> : null}
      <Field label="Judul" htmlFor={`judul-${data?.id ?? "baru"}`}>
        <Input
          id={`judul-${data?.id ?? "baru"}`}
          name="judul"
          maxLength={200}
          required
          defaultValue={data?.judul ?? ""}
          placeholder="Contoh: Pendaftaran PKM 2027 dibuka…"
        />
      </Field>
      <Field label="Isi pengumuman" htmlFor={`isi-${data?.id ?? "baru"}`}>
        <Textarea
          id={`isi-${data?.id ?? "baru"}`}
          name="isi"
          rows={3}
          required
          defaultValue={data?.isi ?? ""}
        />
      </Field>
      <div className="flex items-center gap-4">
        <Field label="Kategori" htmlFor={`kategori-${data?.id ?? "baru"}`}>
          <select
            id={`kategori-${data?.id ?? "baru"}`}
            name="kategori"
            defaultValue={data?.kategori ?? "pengumuman"}
            className="rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-zinc-900 focus:outline-2 focus:outline-offset-1 focus:outline-veteran-600"
          >
            <option value="pengumuman">Pengumuman</option>
            <option value="pemberitahuan">Pemberitahuan</option>
            <option value="jadwal">Jadwal</option>
          </select>
        </Field>
        <label className="mt-5 flex items-center gap-2 text-sm text-zinc-800">
          <input
            type="checkbox"
            name="penting"
            defaultChecked={data?.penting ?? false}
            className="h-4 w-4 accent-veteran-700"
          />
          Tandai penting
        </label>
      </div>
      <Button type="submit">{data ? "Simpan perubahan" : "Tambah pengumuman"}</Button>
    </form>
  );
}

export function PengumumanPanel({ daftar }: { daftar: PengumumanAdmin[] }) {
  return (
    <section aria-labelledby="judul-pengumuman-admin">
      <h2
        id="judul-pengumuman-admin"
        className="font-heading text-xl font-semibold text-zinc-900"
      >
        Pengumuman
      </h2>
      <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-6">
        <h3 className="text-sm font-semibold text-zinc-700">Tambah baru</h3>
        <div className="mt-3">
          <FormulirPengumuman />
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        {daftar.map((p) => (
          <li key={p.id} className="rounded-2xl border border-zinc-200 bg-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-medium text-zinc-900">{p.judul}</span>
              <span className="flex items-center gap-2">
                {p.penting ? (
                  <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-api-700">
                    Penting
                  </span>
                ) : null}
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                    p.aktif
                      ? "bg-veteran-100 text-veteran-800"
                      : "bg-zinc-100 text-zinc-500"
                  }`}
                >
                  {p.aktif ? "Tampil" : "Disembunyikan"}
                </span>
              </span>
            </div>
            <p className="mt-1 text-sm leading-6 text-zinc-600">{p.isi}</p>
            <p className="mt-1 text-xs text-zinc-400">
              Terbit {formatTanggal.format(new Date(p.tanggal_terbit))} · kategori {p.kategori}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <form action={alihkanPengumuman.bind(null, p.id, !p.aktif)}>
                <Button type="submit" size="sm" variant="secondary">
                  {p.aktif ? "Sembunyikan" : "Tampilkan"}
                </Button>
              </form>
              <details className="w-full">
                <summary className="cursor-pointer text-sm font-medium text-veteran-700">
                  Edit
                </summary>
                <div className="mt-3 rounded-xl bg-zinc-50 p-4">
                  <FormulirPengumuman data={p} />
                </div>
              </details>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
