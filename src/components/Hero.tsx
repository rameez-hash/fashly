import Image from "next/image";
import { Radio, Download, Sparkles } from "lucide-react";
import { local } from "@/lib/images";
import { LAUNCH_LABEL } from "@/lib/launch";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#160a2e] text-white">
      {/* Banner — on desktop the height matches the image ratio so the full
          image is shown without cropping; on mobile it uses a readable height */}
      <div className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-0 lg:aspect-[1717/916]">
        <Image
          src={local.heroBanner}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-left lg:object-center"
        />
        {/* Center vignette — darkens only the middle for text, keeps the model
            (left) and collage (right) of the banner clearly visible */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_50%_50%,_rgba(22,10,46,0.62)_0%,_rgba(22,10,46,0.25)_50%,_transparent_78%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#160a2e]/55 via-transparent to-[#160a2e]/20" />
        {/* Extra darkening on small screens so the centered text stays readable */}
        <div className="absolute inset-0 bg-[#160a2e]/45 lg:hidden" />

        {/* Centered brand + copy */}
        <div className="absolute inset-0 flex items-center justify-center px-4 py-12 sm:px-6">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center [text-shadow:0_2px_14px_rgba(0,0,0,0.45)]">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            <Sparkles className="h-3.5 w-3.5 text-amber-300" /> Coming on {LAUNCH_LABEL}
          </span>

          <h1 className="mt-6 text-6xl font-extrabold lowercase leading-none tracking-tight sm:text-7xl">
            <span className="text-pink-500">f</span>
            <span className="text-orange-500">a</span>
            <span className="text-amber-400">s</span>
            <span className="text-green-500">h</span>
            <span className="text-teal-500">l</span>
            <span className="text-blue-500">y</span>
            <span className="text-indigo-400">.co</span>
          </h1>

          <p className="mt-4 bg-gradient-to-r from-amber-300 via-pink-400 to-fuchsia-400 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">
            Fashion That Defines You
          </p>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            Connect Designers, Salons, Boutiques, Models, Influencers and Fashion
            Lovers Worldwide. Showcase your fashion to the world.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#"
              className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-600/30 transition-transform hover:scale-105"
            >
              Join Free
            </a>
            <a
              href="/go-live"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#160a2e] transition-colors hover:bg-slate-100"
            >
              <Radio className="h-4 w-4 text-pink-500" /> Go Live
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Download className="h-4 w-4" /> Download App
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
