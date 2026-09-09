import type { ComponentProps, ReactNode } from "react";

type BadgeVariant = "pendanaan" | "insentif" | "mendesak" | "netral";

const variants: Record<BadgeVariant, string> = {
  pendanaan: "bg-veteran-100 text-veteran-800",
  insentif: "bg-emas-100 text-emas-700",
  mendesak: "bg-red-100 text-api-700",
  netral: "bg-zinc-100 text-zinc-700",
};

export function Badge({
  variant = "netral",
  children,
  className = "",
}: {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export function Card({
  className = "",
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={`rounded-2xl border border-zinc-200 bg-white p-6 ${className}`}
      {...props}
    />
  );
}
