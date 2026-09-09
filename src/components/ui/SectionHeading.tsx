import type { ReactNode } from "react";

export function SectionHeading({
  title,
  lead,
  as: Tag = "h2",
  id,
}: {
  title: ReactNode;
  lead?: ReactNode;
  as?: "h1" | "h2" | "h3";
  id?: string;
}) {
  return (
    <div className="max-w-2xl">
      <Tag
        id={id}
        className="font-heading text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl"
      >
        {title}
      </Tag>
      {lead ? (
        <p className="mt-3 text-base leading-7 text-zinc-600">{lead}</p>
      ) : null}
    </div>
  );
}
