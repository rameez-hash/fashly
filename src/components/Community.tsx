import Image from "next/image";
import { local } from "@/lib/images";

const stats = [
  { label: "Registered Members", value: "1,302,600" },
  { label: "Designers", value: "1,667,053" },
  { label: "Boutiques", value: "1,304,865" },
  { label: "Live Shows", value: "1,305,967" },
  { label: "Countries", value: "1,366,896" },
  { label: "Products Listed", value: "1,265,000" },
];

export default function Community() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-violet/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Global Fashion Community
            </h2>
            <p className="mt-3 max-w-xl text-white/60">
              Join a worldwide network of fashion professionals and lovers.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="bg-navy p-6">
                  <p className="text-2xl font-extrabold text-brand sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/60">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-fuchsia-500/40 via-violet/30 to-brand/40 blur-2xl" />
              <div className="relative aspect-[1402/1122] overflow-hidden rounded-[1.5rem] ring-1 ring-white/20 shadow-2xl">
                <Image
                  src={local.studioPink}
                  alt="Fashly.co fashion community"
                  fill
                  sizes="(max-width: 640px) 80vw, 20rem"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/10 p-3 backdrop-blur">
                  <p className="text-sm font-bold">Join 1.3M+ members</p>
                  <p className="text-xs text-white/70">Designers · Boutiques · Models · Fans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
