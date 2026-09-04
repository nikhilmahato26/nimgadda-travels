import Image from "next/image";
import { cn } from "@/lib/utils";

/*
  The client's artwork is gold linework on a cream card - true to the printed
  seal, but at the ~36px this renders at in the nav it read as a near-blank
  circle: gold on cream is too close in value to separate at that size. Fixed
  at the source rather than papering over it: logo-mark-transparent.png has
  the cream background removed (see scripts/make-logo-transparent.py) so the
  linework can sit on a real backing instead of its own flat card. --ink is
  already the site's dark token (used on dark pills elsewhere),
  so the mark stays gold-on-dark, close to how it prints, and actually reads
  at nav scale.
*/
export function BrandMark({ className }) {
  return (
    <span
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-ink shadow-xs",
        className
      )}
    >
      <Image
        src="/images/logo-mark-transparent.png"
        alt="Nimmagadda Vari Andhra Tours and Travels emblem"
        width={40}
        height={40}
        className="h-full w-full object-cover"
        priority
      />
    </span>
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
          Andhra Tours &amp; Travels
        </span>
      </span>
    </span>
  );
}
