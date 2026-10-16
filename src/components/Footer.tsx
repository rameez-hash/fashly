import { Camera, Send, Video, Globe, MessageCircle, type LucideIcon } from "lucide-react";
import Logo from "./Logo";

const columns = [
  { title: "Company", links: ["About", "Careers", "Fashion News", "Blog"] },
  { title: "Support", links: ["Help Center", "Contact", "Terms", "Privacy Policy"] },
  { title: "Explore", links: ["Marketplace", "Live Shopping", "Designers", "Events"] },
];

const socials: { icon: LucideIcon; label: string }[] = [
  { icon: Camera, label: "Instagram" },
  { icon: Send, label: "Telegram" },
  { icon: Video, label: "YouTube" },
  { icon: Globe, label: "Website" },
  { icon: MessageCircle, label: "Chat" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <a href="#" className="inline-flex items-center">
              <Logo size="text-3xl" />
            </a>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              The Global Fashion Social Network &amp; Live Commerce Platform.
              Showcase your fashion to the world.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/80">
                {c.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-white/60">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition-colors hover:text-brand">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Fashly.co. All rights reserved.</p>
          <p>Designed for the global fashion community.</p>
        </div>
      </div>
    </footer>
  );
}
