"use client";

import { Button } from "@/components/ui/Button";
import { Field, Input, Textarea } from "@/components/ui/Form";
import type { AgendaAdmin } from "@/lib/admin";
import { simpanAgenda, alihkanAgenda, hapusAgenda } from "@/app/admin/actions";

function FormulirAgenda({ data }: { data?: AgendaAdmin }) {
  const kunci = data?.id ?? "baru";
  return (
    <form action={simpanAgenda} className="space-y-4">
      {data ? <input type="hidden" name="id" value={data.id} /> : null}
      <Field label="Judul agenda" htmlFor={`judul-a-${kunci}`}>
        <Input
          id={`judul-a-${kunci}`}
          name="judul"
          required
          defaultValue={data?.judul ?? ""}
          placeholder="Contoh: Sosialisasi PKM 2027…"
        />
      </Field>
      <Field label="Deskripsi singkat" htmlFor={`desk-${kunci}`}>
        <Textarea
          id={`desk-${kunci}`}
          name="deskripsi"
          rows={2}
          defaultValue={data?.deskripsi ?? ""}
        />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Cakupan" htmlFor={`cakupan-${kunci}`}>
          <select
            id={`cakupan-${kunci}`}
            name="cakupan"
            defaultValue={data?.cakupan ?? "nasional"}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-zinc-900 focus:outline-2 focus:outline-offset-1 focus:outline-veteran-600"
          >
            <option value="nasional">Nasional</option>
            <option value="internal_upnvj">Internal UPNVJ</option>
          </select>
        </Field>
        <Field label="Lokasi (opsional)" htmlFor={`lokasi-${kunci}`}>
          <Input id={`lokasi-${kunci}`} name="lokasi" defaultValue={data?.lokasi ?? ""} />
        </Field>
        <Field label="Tanggal mulai" htmlFor={`mulai-${kunci}`}>
          <Input
            id={`mulai-${kunci}`}
            name="tanggal_mulai"
            type="date"
            required
            defaultValue={data?.tanggal_mulai ?? ""}
          />
        </Field>
        <Field label="Tanggal selesai (opsional)" htmlFor={`selesai-${kunci}`}>
          <Input
            id={`selesai-${kunci}`}
            name="tanggal_selesai"
            type="date"
            defaultValue={data?.tanggal_selesai ?? ""}
          />
        </Field>
      </div>
      <Field label="Tautan (opsional)" htmlFor={`tautan-${kunci}`}>
        <Input
          id={`tautan-${kunci}`}
          name="tautan"
          type="url"
          defaultValue={data?.tautan ?? ""}
          placeholder="https://…"
        />
      </Field>
      <Button type="submit">{data ? "Simpan perubahan" : "Tambah agenda"}</Button>
    </form>
  );
}

export function AgendaPanel({ daftar }: { daftar: AgendaAdmin[] }) {
  return (
    <section aria-labelledby="judul-agenda-admin">
      <h2
        id="judul-agenda-admin"
        className="font-heading text-xl font-semibold text-zinc-900"
      >
        Agenda &amp; Deadline
      </h2>
      <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-6">
        <h3 className="text-sm font-semibold text-zinc-700">Tambah baru</h3>
        <div className="mt-3">
          <FormulirAgenda />
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        {daftar.map((a) => (
          <li key={a.id} className="rounded-2xl border border-zinc-200 bg-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-medium text-zinc-900">{a.judul}</span>
              <span className="flex items-center gap-2">
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                    a.cakupan === "internal_upnvj"
                      ? "bg-emas-100 text-emas-700"
                      : "bg-veteran-100 text-veteran-800"
                  }`}
                >
                  {a.cakupan === "internal_upnvj" ? "Internal UPNVJ" : "Nasional"}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                    a.aktif
                      ? "bg-veteran-100 text-veteran-800"
                      : "bg-zinc-100 text-zinc-500"
                  }`}
                >
                  {a.aktif ? "Tampil" : "Disembunyikan"}
                </span>
              </span>
            </div>
            <p className="mt-1 text-sm text-zinc-500">
              {a.tanggal_mulai}
              {a.tanggal_selesai ? ` s.d. ${a.tanggal_selesai}` : ""}
              {a.lokasi ? ` · ${a.lokasi}` : ""}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <form action={alihkanAgenda.bind(null, a.id, !a.aktif)}>
                <Button type="submit" size="sm" variant="secondary">
                  {a.aktif ? "Sembunyikan" : "Tampilkan"}
                </Button>
              </form>
              <details className="w-full">
                <summary className="cursor-pointer text-sm font-medium text-veteran-700">
                  Edit
                </summary>
                <div className="mt-3 rounded-xl bg-zinc-50 p-4">
                  <FormulirAgenda data={a} />
                </div>
              </details>
              <details className="w-full">
                <summary className="cursor-pointer text-sm font-medium text-api-700">
                  Hapus permanen
                </summary>
                <div className="mt-3 rounded-xl border border-red-200 bg-red-50 p-4">
                  <p className="text-sm leading-6 text-zinc-700">
                    Yakin ingin menghapus permanen? Data tidak bisa
                    dikembalikan. Kalau hanya ingin menyembunyikannya dari
                    pengunjung, gunakan tombol Sembunyikan saja.
                  </p>
                  <form action={hapusAgenda.bind(null, a.id)} className="mt-3">
                    <Button type="submit" size="sm" variant="danger">
                      Ya, hapus permanen
                    </Button>
                  </form>
                </div>
              </details>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
