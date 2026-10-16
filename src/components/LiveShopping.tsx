"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, ShoppingBag } from "lucide-react";
import { local } from "@/lib/images";

const shows = [
  {
    src: local.showcaseRunway,
    title: "Live Fashion Shows",
    tags: ["Currently Live", "Upcoming Fashion Events", "Trending Live Streams"],
  },
  {
    src: local.boutiqueSage,
    title: "Live Boutique Sales",
    tags: ["Flash Sale", "New Arrivals", "Limited Stock"],
  },
  {
    src: local.liveStream,
    title: "Live Salon Demonstrations",
    tags: ["Hair & Makeup", "Tutorials", "Book Now"],
  },
];

export default function LiveShopping() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: -1 | 1) => {
    trackRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section className="bg-navy-deep py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Live Shopping
            </h2>
            <p className="mt-2 text-white/60">
              Watch, interact and buy in real time.
            </p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="rounded-full border border-white/20 p-2 transition-colors hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next"
              className="rounded-full border border-white/20 p-2 transition-colors hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar mt-10 flex snap-x gap-5 overflow-x-auto pb-2"
        >
          {shows.map((s) => (
            <article
              key={s.title}
              className="group relative w-[300px] shrink-0 snap-start overflow-hidden rounded-2xl bg-white/[0.03] ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-brand/20 hover:ring-brand/40 sm:w-[360px]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.src}
                  alt={s.title}
                  fill
                  sizes="360px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Animated LIVE badge */}
                <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide shadow-lg shadow-brand/40">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                  </span>
                  Live
                </span>

                <button className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[11px] font-bold text-navy shadow-md transition-all duration-300 hover:scale-105 hover:bg-brand hover:text-white">
                  <ShoppingBag className="h-3 w-3" /> Buy Instantly
                </button>

                {/* Watching pill slides up on hover */}
                <span className="absolute bottom-3 left-3 flex translate-y-2 items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-semibold text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  1.1k watching now
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold transition-colors group-hover:text-brand">
                  {s.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/80 transition-colors group-hover:bg-white/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-4 text-xs text-white/60">
                  <span className="flex items-center gap-1">
                    <Heart className="h-3.5 w-3.5 text-brand transition-transform group-hover:scale-125" />{" "}
                    2.4k
                  </span>
                  <span>1.1k watching</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
