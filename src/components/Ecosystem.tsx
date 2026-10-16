import {
  Scissors,
  Store,
  Shirt,
  Camera,
  Sparkles,
  Brush,
  UserPlus,
  MessagesSquare,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

type Card = { icon: LucideIcon; title: string; desc: string };

const professionals: Card[] = [
  { icon: Scissors, title: "Designers", desc: "Publish collections & sell globally." },
  { icon: Store, title: "Boutiques", desc: "Open a storefront in minutes." },
  { icon: Shirt, title: "Fashion Brands", desc: "Launch drops to a global audience." },
  { icon: Camera, title: "Photographers", desc: "Showcase shoots & get hired." },
];

const customers: Card[] = [
  { icon: Sparkles, title: "Salons", desc: "Book beauty & styling services." },
  { icon: Brush, title: "Makeup Artists", desc: "Discover and book MUAs near you." },
  { icon: UserPlus, title: "Follow Designers", desc: "Track favourite creators & drops." },
  { icon: MessagesSquare, title: "Chat with Fashion Experts", desc: "Get styling advice in real time." },
];

type Accent = "brand" | "violet";

function Tile({ icon: Icon, title, desc, accent }: Card & { accent: Accent }) {
  const styles =
    accent === "brand"
      ? {
          icon: "bg-gradient-to-br from-rose-400 to-brand text-white shadow-brand/30",
          bar: "from-rose-400 to-brand",
          hover: "hover:shadow-brand/15 hover:border-brand/30",
          arrow: "text-brand",
        }
      : {
          icon: "bg-gradient-to-br from-violet-400 to-violet text-white shadow-violet/30",
          bar: "from-violet-400 to-violet",
          hover: "hover:shadow-violet/15 hover:border-violet/30",
          arrow: "text-violet",
        };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${styles.hover}`}
    >
      <span
        className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r transition-transform duration-300 group-hover:scale-x-100 ${styles.bar}`}
      />
      <div className="flex items-start justify-between">
        <span
          className={`inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110 ${styles.icon}`}
        >
          <Icon className="h-5 w-5" />
        </span>
        <ArrowUpRight
          className={`h-5 w-5 -translate-y-1 translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 ${styles.arrow}`}
        />
      </div>
      <h3 className="mt-4 text-base font-bold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-500">{desc}</p>
    </div>
  );
}

function ColumnHeader({ label, accent }: { label: string; accent: Accent }) {
  const dot = accent === "brand" ? "bg-brand" : "bg-violet";
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
        {label}
      </h3>
      <span className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
    </div>
  );
}

export default function Ecosystem() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-violet/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand ring-1 ring-slate-200">
            The Ecosystem
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Built for Everyone in Fashion
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            One platform connecting creators, brands and customers — discover,
            create, book and shop in a single place.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <ColumnHeader label="For Fashion Professionals" accent="brand" />
            <div className="grid gap-4 sm:grid-cols-2">
              {professionals.map((c) => (
                <Tile key={c.title} {...c} accent="brand" />
              ))}
            </div>
          </div>

          <div>
            <ColumnHeader label="For Customers" accent="violet" />
            <div className="grid gap-4 sm:grid-cols-2">
              {customers.map((c) => (
                <Tile key={c.title} {...c} accent="violet" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
