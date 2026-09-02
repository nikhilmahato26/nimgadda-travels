import { cn } from "@/lib/utils";

/*
  A simple geometric monogram standing in for the trust's printed seal. When the
  client sends the artwork, drop it at /public/logo.png and swap the <svg> for
  a next/image; the sizing and the wordmark beside it stay as they are.
*/

export function BrandMark({ className, tone = "brand" }) {
  const ring = tone === "panel" ? "var(--accent)" : "var(--brand)";
  const fill = tone === "panel" ? "var(--panel)" : "var(--surface-3)";
  const text = tone === "panel" ? "var(--accent)" : "var(--brand)";

  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="Nimmagadda Vari Charitable Trust"
      className={cn("h-10 w-10 shrink-0", className)}
    >
      <circle cx="24" cy="24" r="23" fill={fill} stroke={ring} strokeWidth="1" />
      <circle cx="24" cy="24" r="20" fill="none" stroke={ring} strokeWidth="2" />
      <text
        x="24"
        y="24"
        textAnchor="middle"
        dominantBaseline="central"
        fill={text}
        fontSize="16"
        fontWeight="700"
        fontFamily="var(--font-bricolage), sans-serif"
        letterSpacing="0.5"
      >
        NV
      </text>
    </svg>
  );
}

export function BrandLockup({ tone = "brand", className }) {
  const onPanel = tone === "panel";
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <BrandMark tone={tone} />
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-[15px] font-bold tracking-tight",
            onPanel ? "text-on-panel" : "text-text"
          )}
        >
          Nimmagadda Vari
        </span>
        <span
          className={cn(
            "block text-[11px] font-medium uppercase tracking-[0.14em]",
            onPanel ? "text-on-panel-muted" : "text-muted"
          )}
        >
          Charitable Trust
        </span>
      </span>
    </span>
  );
}
