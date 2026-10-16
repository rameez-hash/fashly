"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Rocket, Sparkles } from "lucide-react";
import Countdown from "./Countdown";
import { LAUNCH_LABEL } from "@/lib/launch";
import { local } from "@/lib/images";

export default function LaunchPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Shows on every page load (home page only — rendered from app/page.tsx).
    const t = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(t);
  }, []);

  const close = () => setOpen(false);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Fashly launch announcement"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-navy-deep/70 backdrop-blur-sm"
        onClick={close}
      />

      <div className="relative max-h-[90vh] w-full max-w-sm overflow-y-auto overflow-x-hidden rounded-3xl bg-white shadow-2xl">
        {/* Image banner */}
        <div className="relative h-56 w-full sm:h-64">
          <Image
            src={local.studioPink}
            alt="Fashly.co — Coming Soon"
            fill
            priority
            sizes="24rem"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-3 top-3 rounded-full bg-black/40 p-1.5 text-white backdrop-blur transition-colors hover:bg-black/60"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="absolute inset-x-0 bottom-0 p-4 text-center text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur">
              <Sparkles className="h-3 w-3" /> Coming Soon
            </span>
            <h2 className="mt-2 flex items-center justify-center gap-2 text-xl font-extrabold sm:text-2xl">
              <Rocket className="h-5 w-5" /> We&apos;re Launching!
            </h2>
            <p className="mt-0.5 text-xs text-white/85">
              Goes live on{" "}
              <span className="font-extrabold text-white">{LAUNCH_LABEL}</span>
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-4 text-center">
          <div className="flex justify-center">
            <Countdown />
          </div>

          <p className="mx-auto mt-3 max-w-sm text-xs text-slate-500">
            Join the waitlist for early access at launch.
          </p>

          <form
            className="mx-auto mt-3 flex max-w-sm flex-col gap-2 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              close();
            }}
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm outline-none focus:border-brand"
            />
            <button
              type="submit"
              className="shrink-0 whitespace-nowrap rounded-full bg-brand px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Notify Me
            </button>
          </form>

          <button
            onClick={close}
            className="mt-2 text-xs font-medium text-slate-400 hover:text-slate-600"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
