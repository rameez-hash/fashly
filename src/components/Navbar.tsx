"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Radio } from "lucide-react";
import { slugify } from "@/lib/launch";
import Logo from "./Logo";

const links = [
  "Home",
  "Marketplace",
  "Live Shopping",
  "Designers",
  "Boutiques",
  "Salons",
  "Community",
  "Events",
  "Mobile App",
  "Go Live",
  "Chat",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center">
          <Logo size="text-2xl" />
        </Link>

        <ul className="hidden items-center gap-4 text-[13px] font-medium text-slate-600 xl:flex">
          {links.map((l) => (
            <li key={l}>
              <Link
                href={l === "Home" ? "/" : `/${slugify(l)}`}
                className="flex items-center gap-1 whitespace-nowrap transition-colors hover:text-brand"
              >
                {l === "Go Live" && <Radio className="h-3.5 w-3.5 text-brand" />}
                {l}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden text-sm font-semibold text-slate-700 transition-colors hover:text-brand sm:block"
          >
            Login
          </Link>
          <Link
            href="/join-free"
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600"
          >
            Join free
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-slate-700 xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white xl:hidden">
          <ul className="grid grid-cols-2 gap-1 px-4 py-3 text-sm font-medium text-slate-700">
            {[...links, "Login"].map((l) => (
              <li key={l}>
                <Link
                  href={l === "Home" ? "/" : `/${slugify(l)}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 hover:bg-slate-50"
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
