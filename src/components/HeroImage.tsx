"use client";

import { useState } from "react";
import Image from "next/image";

// Tries the local poster first (save Image 1 to /public/hero-poster.jpg).
// Falls back to a colorful placeholder until that file exists.
const POSTER = "/hero-poster.jpg";

export default function HeroImage({ fallback }: { fallback: string }) {
  const [src, setSrc] = useState(POSTER);

  return (
    <Image
      src={src}
      alt="Fashly.co — Coming November 2026"
      fill
      priority
      sizes="(max-width: 1024px) 90vw, 30rem"
      className="object-cover"
      onError={() => {
        if (src !== fallback) setSrc(fallback);
      }}
    />
  );
}
