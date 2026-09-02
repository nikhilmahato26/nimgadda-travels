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
    <section id={id} className={cn("py-16 lg:py-24", className)}>
      {children}
    </section>
  );
}

/*
  The reference sets section headings in two weights of one family: the subject
  in extrabold, the qualifier in light. `lead` is the bold half, `trail` the
  light half. Both render inside a single heading element so screen readers
  still read one continuous title.
*/
export function TwoTone({ lead, trail, as: As = "h2", className }) {
  return (
    <As
      className={cn(
        "font-display text-3xl leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.6rem]",
        className
      )}
    >
      <span className="font-extrabold">{lead}</span>{" "}
      <span className="font-light">{trail}</span>
    </As>
  );
}

// Heading on the left, supporting control (search, arrows, link) on the right.
export function SectionHead({ lead, trail, children, className }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-end justify-between gap-5",
        className
      )}
    >
      <TwoTone lead={lead} trail={trail} />
      {children ? <div className="flex items-center gap-3">{children}</div> : null}
    </div>
  );
}

/*
  Single-weight section heading, used by the inner pages. The two-tone
  treatment above is reserved for the home page, where the reference uses it.
*/
export function SectionHeading({ eyebrow, title, body, className }) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent-ink">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl">
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
