const words = [
  "Designers",
  "Boutiques",
  "Live Shopping",
  "Salons",
  "Models",
  "Influencers",
  "Makeup Artists",
  "Photographers",
  "Fashion Schools",
  "Stylists",
];

export default function BrandMarquee() {
  const row = [...words, ...words];
  return (
    <div className="border-y border-slate-200 bg-white py-5">
      <div className="group relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-10 group-hover:[animation-play-state:paused]">
          {row.map((w, i) => (
            <span
              key={i}
              className="flex items-center gap-10 text-lg font-extrabold uppercase tracking-tight text-slate-300"
            >
              {w}
              <span className="text-brand">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
