import type { Bidang } from "./types";
import { pkmRe } from "./pkm-re";
import { pkmRsh } from "./pkm-rsh";
import { pkmK } from "./pkm-k";
import { pkmPm } from "./pkm-pm";
import { pkmPi } from "./pkm-pi";
import { pkmKc } from "./pkm-kc";
import { pkmKi } from "./pkm-ki";
import { pkmVgk } from "./pkm-vgk";
import { pkmGft } from "./pkm-gft";
import { pkmAi } from "./pkm-ai";

/** Semua 10 bidang PKM — urutan mengikuti Panduan Umum (Tabel Kriteria). */
export const daftarBidang: Bidang[] = [
  pkmRe,
  pkmRsh,
  pkmK,
  pkmPm,
  pkmPi,
  pkmKc,
  pkmKi,
  pkmVgk,
  pkmGft,
  pkmAi,
];

export function cariBidang(slug: string): Bidang | undefined {
  return daftarBidang.find((b) => b.slug === slug);
}

export type { Bidang };
