"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menu = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang PKM" },
  { href: "/bidang", label: "Bidang PKM" },
  { href: "/tema", label: "Tema 2026" },
  { href: "/alur", label: "Alur" },
  { href: "/tips", label: "Tips Proposal" },
  { href: "/unduhan", label: "Unduhan" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Escape menutup menu mobile
  useEffect(() => {
    if (!open) return;
    const tutup = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", tutup);
    return () => window.removeEventListener("keydown", tutup);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-upnvj.png"
            alt="Lambang UPN Veteran Jakarta"
            width={34}
            height={34}
            className="h-8.5 w-auto object-contain"
            priority
          />
          <span className="font-heading text-lg font-bold tracking-tight text-zinc-900">
            PKM <span className="text-veteran-700">UPNVJ</span>
          </span>
        </Link>

        <nav aria-label="Menu utama" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {menu.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-veteran-700 ${
                    isActive(item.href)
                      ? "bg-veteran-50 text-veteran-800"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-700 hover:bg-zinc-100 lg:hidden focus-visible:outline-2 focus-visible:outline-veteran-700"
        >
          <span className="sr-only">{open ? "Tutup menu" : "Buka menu"}</span>
          <span aria-hidden className="relative block h-5 w-5">
            <span
              aria-hidden
              className="absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ease-out motion-reduce:transition-none"
              style={{
                top: open ? "9px" : "3px",
                transform: open ? "rotate(45deg)" : "rotate(0deg)",
              }}
            />
            <span
              aria-hidden
              className="absolute left-0 top-[9px] h-0.5 w-5 rounded bg-current transition-opacity duration-200 motion-reduce:transition-none"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              aria-hidden
              className="absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ease-out motion-reduce:transition-none"
              style={{
                top: open ? "9px" : "15px",
                transform: open ? "rotate(-45deg)" : "rotate(0deg)",
              }}
            />
          </span>
        </button>
      </div>

      {/* Menu mobile: menggulung buka-tutup (teknik grid-rows seperti FAQ) */}
      <div
        id="menu-mobile"
        className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none lg:hidden"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Menu utama"
            aria-hidden={!open}
            inert={open ? undefined : true}
            className="border-t border-zinc-200 bg-white"
          >
            <ul className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
              {menu.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    tabIndex={open ? undefined : -1}
                    className={`block rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-veteran-50 text-veteran-800"
                        : "text-zinc-700 hover:bg-zinc-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
