import { cn } from "@/lib/utils";

export function Container({ className, children }) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({ id, className, children }) {
  return (
    <section id={id} className={cn("py-20 lg:py-28", className)}>
      {children}
    </section>
  );
}

// Section headings stack vertically: headline, then body underneath at a
// readable measure. No floating corner paragraphs.
export function SectionHeading({ eyebrow, title, body, className, align = "left" }) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent-ink">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 max-w-[60ch] text-[17px] leading-relaxed text-muted">
          {body}
        </p>
      ) : null}
    </div>
  );
}
