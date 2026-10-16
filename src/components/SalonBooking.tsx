import { MapPin, CalendarCheck, Radio, ShoppingBag, type LucideIcon } from "lucide-react";

type Step = { icon: LucideIcon; title: string; desc: string };

const steps: Step[] = [
  { icon: MapPin, title: "Find Salons", desc: "Discover top-rated salons near you." },
  { icon: CalendarCheck, title: "Book Appointments", desc: "Reserve a slot in seconds." },
  { icon: Radio, title: "Watch Beauty Live Streams", desc: "Tutorials & demos in real time." },
  { icon: ShoppingBag, title: "Purchase Beauty Products", desc: "Shop pro-grade products." },
];

export default function SalonBooking() {
  return (
    <section className="bg-gradient-to-br from-violet-600 via-violet to-brand py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Salon &amp; Beauty Booking
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Everything beauty — find, book, watch and shop in one place.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl bg-white/10 p-6 backdrop-blur transition-colors hover:bg-white/15"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <s.icon className="h-6 w-6" />
                </span>
                <span className="text-3xl font-extrabold text-white/20">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-1 text-sm text-white/75">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
