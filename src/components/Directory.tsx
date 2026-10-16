import { Search } from "lucide-react";

const categories = [
  "Designers",
  "Boutiques",
  "Salons",
  "Fashion Schools",
  "Makeup Artists",
  "Models",
  "Photographers",
  "Fabric Materials",
  "Accessories",
];

export default function Directory() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Fashion Industry Directory
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          Designers, Boutiques, Salons, Fashion Schools, Makeup Artists &amp; more.
        </p>

        <div className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm focus-within:border-brand">
          <Search className="h-5 w-5 text-slate-400" />
          <input
            type="search"
            placeholder="Search designers, boutiques, salons…"
            className="w-full bg-transparent py-1.5 text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
          <button className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600">
            Search
          </button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {categories.map((c) => (
            <a
              key={c}
              href="#"
              className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-navy hover:text-white"
            >
              {c}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
