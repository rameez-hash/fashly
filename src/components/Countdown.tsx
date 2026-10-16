"use client";

import { useEffect, useState } from "react";
import { getCountdown, type Countdown as C } from "@/lib/launch";

const initial: C = { days: 0, hours: 0, minutes: 0, seconds: 0, done: false };

function Unit({ value, label, dark }: { value: number; label: string; dark?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <span
        className={`flex h-14 w-14 items-center justify-center rounded-xl text-xl font-extrabold tabular-nums sm:h-16 sm:w-16 sm:text-2xl ${
          dark ? "bg-white/10 text-white" : "bg-navy text-white"
        }`}
      >
        {String(value).padStart(2, "0")}
      </span>
      <span
        className={`mt-2 text-[10px] font-semibold uppercase tracking-wider ${
          dark ? "text-white/60" : "text-slate-500"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default function Countdown({ dark = false }: { dark?: boolean }) {
  const [c, setC] = useState<C>(initial);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setC(getCountdown());
    const id = setInterval(() => setC(getCountdown()), 1000);
    return () => clearInterval(id);
  }, []);

  // Avoid hydration mismatch: render zeros until mounted on client.
  const view = mounted ? c : initial;

  if (view.done) {
    return (
      <p className={`text-lg font-bold ${dark ? "text-white" : "text-navy"}`}>
        We are live! 🎉
      </p>
    );
  }

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <Unit value={view.days} label="Days" dark={dark} />
      <Unit value={view.hours} label="Hours" dark={dark} />
      <Unit value={view.minutes} label="Mins" dark={dark} />
      <Unit value={view.seconds} label="Secs" dark={dark} />
    </div>
  );
}
