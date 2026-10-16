"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { local } from "@/lib/images";

const categories = [
  "Women's Fashion",
  "Men's Fashion",
  "Kids Fashion",
  "Luxury Fashion",
  "Bridal Fashion",
  "Accessories",
];

const filters = ["Featured Products", "New Arrivals", "Best Sellers"];

type Product = { src: string; name: string; price: string; old?: string; tag?: string };

const products: Product[] = [
  { src: local.boutiquePastel, name: "Coral Embroidered Kurta", price: "$95.99", old: "$120.00", tag: "-20%" },
  { src: local.boutiqueLilac, name: "Lilac Floral Festive Suit", price: "$129.99", tag: "New" },
  { src: local.boutiqueWine, name: "Wine Luxe Embroidered Suit", price: "$149.99", old: "$189.99", tag: "-21%" },
  { src: local.designerFloral, name: "Ivory Tailored Jacket", price: "$119.00", tag: "New" },
  { src: local.boutiqueLilac2, name: "Mauve Chiffon 3-Piece", price: "$103.00" },
];

export default function Marketplace() {
  const [cat, setCat] = useState(categories[0]);
  const [filter, setFilter] = useState(filters[0]);

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Marketplace
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            Shop curated collections from designers and boutiques worldwide.
          </p>
        </div>

        {/* Category tabs */}
        <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                cat === c
                  ? "bg-navy text-white"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Sub filters */}
        <div className="mt-5 flex flex-wrap gap-4 border-b border-slate-200 pb-3 text-sm font-semibold">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative pb-2 transition-colors ${
                filter === f ? "text-brand" : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {f}
              {filter === f && (
                <span className="absolute -bottom-[13px] left-0 h-0.5 w-full rounded bg-brand" />
              )}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {products.map((p, i) => (
            <article
              key={i}
              className="reveal group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {p.tag && (
                  <span
                    className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-bold text-white ${
                      p.tag === "New" ? "bg-violet" : "bg-brand"
                    }`}
                  >
                    {p.tag}
                  </span>
                )}

                <button
                  aria-label="Add to wishlist"
                  className="absolute right-2 top-2 flex h-8 w-8 -translate-y-1 items-center justify-center rounded-full bg-white/90 text-slate-600 opacity-0 shadow transition-all duration-300 hover:text-brand group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <Heart className="h-4 w-4" />
                </button>

                <button className="absolute bottom-2 left-1/2 flex -translate-x-1/2 translate-y-3 items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-navy opacity-0 shadow-lg transition-all duration-300 hover:bg-navy hover:text-white group-hover:translate-y-0 group-hover:opacity-100">
                  <Eye className="h-3.5 w-3.5" /> Quick View
                </button>
              </div>

              <div className="p-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3 w-3 fill-current" />
                  ))}
                  <span className="ml-1 text-[10px] font-medium text-slate-400">
                    ({120 + i * 23})
                  </span>
                </div>
                <h3 className="mt-1 truncate text-sm font-semibold text-slate-800">
                  {p.name}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-bold text-navy">{p.price}</span>
                    {p.old && (
                      <span className="text-xs font-medium text-slate-400 line-through">
                        {p.old}
                      </span>
                    )}
                  </div>
                  <button
                    aria-label="Add to cart"
                    className="rounded-lg bg-brand p-1.5 text-white transition-all duration-300 hover:bg-brand-600 hover:scale-110 active:scale-95"
                  >
                    <ShoppingCart className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
