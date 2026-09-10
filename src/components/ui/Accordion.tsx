"use client";

import { useState } from "react";
import type { ReactNode } from "react";

/*
  Accordion dengan animasi buka-tutup mulus:
  tinggi jawaban dianimasikan lewat transisi grid-template-rows (0fr ke 1fr),
  konten memudar halus, ikon + berputar menjadi x.
  Hormat prefers-reduced-motion lewat kelas motion-reduce.
*/

export function Accordion({
  items,
}: {
  items: { question: string; answer: ReactNode }[];
}) {
  const [buka, setBuka] = useState<number | null>(null);

  return (
    <div className="divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white">
      {items.map((item, i) => {
        const aktif = buka === i;
        return (
          <div key={i}>
            <button
              type="button"
              aria-expanded={aktif}
              aria-controls={`panel-faq-${i}`}
              onClick={() => setBuka(aktif ? null : i)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-4 text-left font-medium text-zinc-900 transition-colors hover:bg-zinc-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-veteran-700"
            >
              {item.question}
              <span
                aria-hidden
                className="shrink-0 text-xl leading-none text-veteran-700 transition-transform duration-300 ease-out motion-reduce:transition-none"
                style={{ transform: aktif ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </button>
            <div
              id={`panel-faq-${i}`}
              role="region"
              className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
              style={{ gridTemplateRows: aktif ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div
                  className={`px-6 pb-5 text-zinc-600 leading-7 transition-opacity duration-300 motion-reduce:transition-none ${
                    aktif ? "opacity-100" : "opacity-0"
                  }`}
                  inert={aktif ? undefined : true}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
