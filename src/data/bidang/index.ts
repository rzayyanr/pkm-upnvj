import type { Bidang } from "./types";
import { pkmRe } from "./pkm-re";
import { pkmRsh } from "./pkm-rsh";

/** Semua bidang PKM — bertambah bertahap per tiket (3b: 8 bidang sisanya). */
export const daftarBidang: Bidang[] = [pkmRe, pkmRsh];

export function cariBidang(slug: string): Bidang | undefined {
  return daftarBidang.find((b) => b.slug === slug);
}

export type { Bidang };
