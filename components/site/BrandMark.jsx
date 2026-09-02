import { cn } from "@/lib/utils";

/*
  A simple geometric monogram standing in for the trust's printed seal. When the
  client sends the artwork, drop it at /public/logo.png and swap the <svg> for
  a next/image; the sizing and the wordmark beside it stay as they are.
*/

export function BrandMark({ className }) {
  return (
    <svg
      viewBox="0 0 40 40"
      role="img"
      aria-label="Nimmagadda Vari Charitable Trust"
      className={cn("h-9 w-9 shrink-0", className)}
    >
      <circle cx="20" cy="20" r="20" fill="var(--accent)" />
      <text
        x="20"
        y="20.5"
        textAnchor="middle"
        dominantBaseline="central"
        fill="var(--on-accent)"
        fontSize="15"
        fontWeight="800"
        fontFamily="var(--font-jakarta), sans-serif"
        letterSpacing="-0.3"
      >
        NV
      </text>
    </svg>
  );
}

export function BrandLockup({ className }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <BrandMark />
      <span className="leading-tight">
        <span className="block font-display text-[15px] font-extrabold tracking-tight text-text">
          Nimmagadda Vari
        </span>
        <span className="block text-[11px] font-medium text-muted">
          Charitable Trust
        </span>
      </span>
    </span>
  );
}
