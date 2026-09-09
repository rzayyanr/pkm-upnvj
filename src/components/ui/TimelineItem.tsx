import { Badge } from "./Badge";

export type TimelineStatus = "selesai" | "berjalan" | "akan-datang";

const statusBadge: Record<TimelineStatus, { label: string; variant: "netral" | "mendesak" | "pendanaan" }> = {
  selesai: { label: "Sudah lewat", variant: "netral" },
  berjalan: { label: "Sedang berjalan", variant: "mendesak" },
  "akan-datang": { label: "Akan datang", variant: "pendanaan" },
};

export function TimelineItem({
  nomor,
  title,
  period,
  status,
  children,
}: {
  nomor: number;
  title: string;
  period?: string;
  status: TimelineStatus;
  children?: React.ReactNode;
}) {
  const badge = statusBadge[status];
  const isDone = status === "selesai";
  return (
    <li className="relative flex gap-4 pb-8 last:pb-0">
      <div className="flex flex-col items-center">
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-heading text-sm font-bold ${
            isDone
              ? "bg-zinc-200 text-zinc-500"
              : status === "berjalan"
                ? "bg-veteran-700 text-white"
                : "bg-white text-veteran-700 border-2 border-veteran-700"
          }`}
        >
          {nomor}
        </span>
        <span className="mt-1 w-px flex-1 bg-zinc-200 last:hidden" aria-hidden />
      </div>
      <div className="pt-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3
            className={`font-heading text-base font-semibold ${
              isDone ? "text-zinc-400" : "text-zinc-900"
            }`}
          >
            {title}
          </h3>
          <Badge variant={badge.variant}>{badge.label}</Badge>
        </div>
        {period ? (
          <p className={`mt-1 text-sm ${isDone ? "text-zinc-400" : "text-zinc-500"}`}>
            {period}
          </p>
        ) : null}
        {children ? (
          <div
            className={`mt-2 text-sm leading-6 ${
              isDone ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            {children}
          </div>
        ) : null}
      </div>
    </li>
  );
}
