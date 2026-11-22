// Text-based placeholder logo. Replace with the real logo (SVG) when available.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-extrabold tracking-tight ${className}`}>
      <span aria-hidden className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-white text-base">
        S
      </span>
      <span className="text-xl">
        Signi<span className="text-brand">City</span>
      </span>
    </span>
  );
}
