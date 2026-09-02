import Link from "next/link";
import { cn } from "@/lib/utils";

/*
  Shape lock: every interactive control is a pill.

  Contrast, all checked against WCAG AA:
    accent    ink on yellow ......... 13.2:1
    ink       white on near-black ... 17.4:1
    outline   text on white ......... 15.9:1, plus a visible border
    onPhoto   ink on white ......... 17.4:1, sits over a scrim
*/

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill px-6 py-3 text-[15px] font-semibold tracking-tight transition-all duration-200 active:translate-y-px disabled:pointer-events-none disabled:opacity-60";

const variants = {
  accent: "bg-accent text-on-accent hover:brightness-95 hover:-translate-y-0.5",
  ink: "bg-ink text-on-ink hover:opacity-90 hover:-translate-y-0.5",
  outline:
    "border border-line bg-surface-3 text-text hover:border-ink hover:bg-surface-2",
  onPhoto: "bg-surface text-text hover:bg-surface-2",
};

export function Button({
  as = "link",
  href,
  variant = "accent",
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
