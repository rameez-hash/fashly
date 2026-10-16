import Link from "next/link";
import { ArrowLeft, Construction, Bell } from "lucide-react";
import Countdown from "./Countdown";
import { LAUNCH_LABEL } from "@/lib/launch";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-navy px-4 py-20 text-white">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-violet/30 blur-3xl" />

      <div className="relative w-full max-w-xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
          <Construction className="h-4 w-4 text-brand" /> Coming Soon
        </span>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          This page is under construction. Fashly.co officially launches on{" "}
          <span className="font-bold text-white">{LAUNCH_LABEL}</span>. Stay tuned!
        </p>

        <div className="mt-10 flex justify-center">
          <Countdown dark />
        </div>

        <form className="mx-auto mt-10 flex max-w-md flex-col gap-2 sm:flex-row">
          <input
            type="email"
            required
            placeholder="Enter your email for early access"
            className="w-full rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-brand"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            <Bell className="h-4 w-4" /> Notify Me
          </button>
        </form>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
      </div>
    </section>
  );
}
