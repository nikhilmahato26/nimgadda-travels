import Link from "next/link";
import { cn } from "@/lib/utils";

/*
  Shape lock: every button uses --r-control (10px).
  Contrast: `primary` is brand navy on white (15.6:1 light / gold-on-navy 9.2:1
  dark), `secondary` is body text on paper with a visible border. Both clear
  WCAG AA comfortably.
*/

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-control px-5 py-3 text-[15px] font-semibold tracking-tight transition-all duration-200 active:translate-y-px disabled:pointer-events-none disabled:opacity-60";

const variants = {
  primary: "bg-brand text-on-brand hover:opacity-90 shadow-[var(--shadow-soft)]",
  secondary:
    "border border-line bg-surface-3 text-text hover:border-accent hover:bg-surface-2",
  onPanel:
    "border border-white/25 bg-white/5 text-on-panel hover:border-accent hover:bg-white/10",
  accent: "bg-accent text-on-accent hover:opacity-90",
};

export function Button({
  as = "link",
  href,
  variant = "primary",
  className,
  children,
  ...props
}) {
  const classes = cn(base, variants[variant], className);

  if (as === "button") {
    return (
      <button className={classes} {...props}>
        {children}
      </button>
    );
  }

  // External links (tel:, wa.me) must not go through the client router.
  const isExternal = href?.startsWith("http") || href?.startsWith("tel:");
  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
