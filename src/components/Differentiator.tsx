import {
  Compass,
  Briefcase,
  Radio,
  Tag,
  CalendarCheck,
  Users,
  Globe2,
  type LucideIcon,
} from "lucide-react";

const features: { icon: LucideIcon; label: string; color: string }[] = [
  { icon: Compass, label: "Discover fashion", color: "bg-amber-100 text-amber-700" },
  { icon: Briefcase, label: "Build businesses", color: "bg-sky-100 text-sky-700" },
  { icon: Radio, label: "Stream live", color: "bg-rose-100 text-rose-700" },
  { icon: Tag, label: "Sell products", color: "bg-emerald-100 text-emerald-700" },
  { icon: CalendarCheck, label: "Book services", color: "bg-violet-100 text-violet-700" },
  { icon: Users, label: "Network with professionals", color: "bg-indigo-100 text-indigo-700" },
  { icon: Globe2, label: "Chat worldwide", color: "bg-cyan-100 text-cyan-700" },
];

export default function Differentiator() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          What Makes Fashly Different?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          The Global Fashion Social Network &amp; Live Commerce Platform.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {features.map((f) => (
            <span
              key={f.label}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold ${f.color}`}
            >
              <f.icon className="h-4 w-4" />
              {f.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
