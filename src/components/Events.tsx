import Image from "next/image";
import { CalendarDays, Sparkles, Rocket, Trophy, type LucideIcon } from "lucide-react";
import { local } from "@/lib/images";

type Ev = { icon: LucideIcon; title: string; date: string; tag: string; src: string };

const events: Ev[] = [
  { icon: CalendarDays, title: "Fashion Weeks", date: "Feb 12 – Mar 9, 2026", tag: "Global runway", src: local.showcaseRunway },
  { icon: Sparkles, title: "Exhibitions", date: "Aug 7, 2026", tag: "Showcase", src: local.eventHotel },
  { icon: Rocket, title: "Designer Launches", date: "Jan 20, 2027", tag: "New drops", src: local.eventLuxury },
  { icon: Trophy, title: "Competitions", date: "Dec 4, 2026", tag: "Compete & win", src: local.designerBlack },
];

export default function Events() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Fashion Events
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            Upcoming &amp; on-going fashion events across the globe.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((e) => (
            <article
              key={e.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-navy hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={e.src}
                  alt={e.title}
                  fill
                  sizes="(max-width: 640px) 50vw, 22vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute left-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-navy">
                  <e.icon className="h-5 w-5" />
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900">{e.title}</h3>
                <p className="mt-1 text-sm font-semibold text-brand">{e.date}</p>
                <p className="mt-1 text-sm text-slate-500">{e.tag}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            Show more
          </a>
        </div>
      </div>
    </section>
  );
}
