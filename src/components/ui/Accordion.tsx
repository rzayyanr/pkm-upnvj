import type { ReactNode } from "react";

export function Accordion({
  items,
}: {
  items: { question: string; answer: ReactNode }[];
}) {
  return (
    <div className="divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white">
      {items.map((item, i) => (
        <details key={i} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-medium text-zinc-900 marker:hidden hover:bg-zinc-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-veteran-700">
            {item.question}
            <span
              aria-hidden
              className="shrink-0 text-veteran-700 transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="px-6 pb-5 text-zinc-600 leading-7">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
