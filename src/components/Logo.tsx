// Colorful "fashly.co" wordmark (matches the rainbow brand logo).
// Each letter carries its own brand color.

const letters: { ch: string; className: string }[] = [
  { ch: "f", className: "text-pink-500" },
  { ch: "a", className: "text-orange-500" },
  { ch: "s", className: "text-amber-400" },
  { ch: "h", className: "text-green-500" },
  { ch: "l", className: "text-teal-500" },
  { ch: "y", className: "text-blue-500" },
];

export default function Logo({
  className = "",
  size = "text-2xl",
}: {
  className?: string;
  size?: string;
}) {
  return (
    <span
      className={`select-none font-extrabold lowercase tracking-tight ${size} ${className}`}
      aria-label="fashly.co"
    >
      {letters.map((l, i) => (
        <span key={i} className={l.className}>
          {l.ch}
        </span>
      ))}
      <span className="text-indigo-600">.co</span>
    </span>
  );
}
