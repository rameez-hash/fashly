import Image from "next/image";
import { Heart, ShoppingBag, Play } from "lucide-react";
import { local } from "@/lib/images";

type Reel = { src: string; w: number; h: number; buy?: boolean };

const reels: Reel[] = [
  { src: local.studioPink, w: 1402, h: 1122, buy: true },
  { src: local.communityStore, w: 1024, h: 1024, buy: true },
  { src: local.showcaseRunway, w: 1408, h: 768 },
  { src: local.designerFloral, w: 1408, h: 768 },
  { src: local.everydayStore, w: 1024, h: 1024 },
  { src: local.eventHotel, w: 1408, h: 768, buy: true },
  { src: local.designerBlack, w: 1408, h: 768 },
  { src: local.eventLuxury, w: 1024, h: 1024 },
];

export default function TrendingFeed() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Reels
            </span>
            <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Trending Fashion Feed
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold text-brand hover:underline">
            Scroll →
          </a>
        </div>

        {/* Masonry: each image shown at its full natural ratio */}
        <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4 [column-fill:_balance]">
          {reels.map((r, i) => (
            <figure
              key={i}
              className="reveal group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <Image
                src={r.src}
                alt="Trending fashion look"
                width={r.w}
                height={r.h}
                sizes="(max-width: 640px) 50vw, 25vw"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="absolute right-2 top-2 flex h-8 w-8 scale-90 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                <Play className="h-3.5 w-3.5 fill-current" />
              </span>

              {r.buy && (
                <button className="absolute bottom-2 left-2 flex translate-y-2 items-center gap-1 rounded-md bg-white/95 px-2 py-1 text-[10px] font-bold text-navy opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-brand hover:text-white">
                  <ShoppingBag className="h-3 w-3" /> Click to Buy
                </button>
              )}

              <span className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
                <Heart className="h-3 w-3 text-brand transition-transform group-hover:scale-125" />{" "}
                {120 + i * 37}
              </span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
