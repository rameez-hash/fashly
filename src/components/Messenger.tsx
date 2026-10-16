import Image from "next/image";
import { Check, Send } from "lucide-react";
import { img } from "@/lib/images";

const uses = [
  "Chat with Designers",
  "Chat with Boutiques",
  "Group Discussions",
  "Fashion Communities",
  "Business Collaboration Rooms",
];

const chat = [
  { me: false, text: "Hi! Loved your new collection ✨", avatar: img.avatar2 },
  { me: true, text: "Thank you! Want a custom fit?" },
  { me: false, text: "Yes please — size M, navy.", avatar: img.avatar2 },
  { me: true, text: "On it. I'll share a preview tonight." },
];

export default function Messenger() {
  return (
    <section className="bg-amber-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Unique feature for Fashly
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Fashion Messenger
            </h2>
            <p className="mt-3 max-w-md text-slate-500">
              Connect instantly with the whole fashion world. Users can:
            </p>

            <ul className="mt-6 space-y-3">
              {uses.map((u) => (
                <li key={u} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {u}
                </li>
              ))}
            </ul>
          </div>

          {/* Chat mockup */}
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="flex items-center gap-3 border-b border-slate-100 bg-navy p-4 text-white">
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/30">
                <Image src={img.avatar2} alt="Designer" fill sizes="40px" className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-bold">Fashion Designer</p>
                <p className="text-[11px] text-emerald-300">● Online</p>
              </div>
            </div>

            <div className="space-y-3 bg-slate-50 p-4">
              {chat.map((m, i) => (
                <div
                  key={i}
                  className={`flex items-end gap-2 ${m.me ? "justify-end" : "justify-start"}`}
                >
                  {!m.me && (
                    <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full">
                      <Image src={m.avatar!} alt="" fill sizes="28px" className="object-cover" />
                    </div>
                  )}
                  <p
                    className={`max-w-[75%] rounded-2xl px-3.5 py-2 text-sm ${
                      m.me
                        ? "rounded-br-sm bg-brand text-white"
                        : "rounded-bl-sm bg-white text-slate-700 ring-1 ring-slate-200"
                    }`}
                  >
                    {m.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 border-t border-slate-100 p-3">
              <input
                disabled
                placeholder="Type a message…"
                className="w-full rounded-full bg-slate-100 px-4 py-2 text-sm outline-none"
              />
              <button className="rounded-full bg-brand p-2.5 text-white">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
