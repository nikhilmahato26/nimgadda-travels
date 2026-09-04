import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { rupees } from "@/lib/utils";
import { packageGroupSize } from "@/data/packages";

// Where a detail has not been confirmed we say so, rather than printing a
// duration or a route that nobody promised.
const UNCONFIRMED = "Duration confirmed when you book";

// One line, one middle-dot: duration next to the group size every package
// shares, so the card states it without adding a row.
function DurationLine({ pkg, className }) {
  return (
    <p className={className}>
      {pkg.duration ?? UNCONFIRMED} · {packageGroupSize.min}-
      {packageGroupSize.max} travellers
    </p>
  );
}

export function PackagePrice({ amount, className = "" }) {
  return (
    <p className={className}>
      <span className="font-display text-3xl font-extrabold tracking-tight">
        {rupees(amount)}
      </span>{" "}
      <span className="text-[14px] font-medium text-muted">per person</span>
    </p>
  );
}

// The featured, image-led treatment. One per page.
export function FeaturedPackageCard({ pkg }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface-3">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={pkg.image}
          alt={pkg.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-7 lg:p-8">
        <h3 className="font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
          {pkg.name}
        </h3>
        <DurationLine pkg={pkg} className="mt-1 text-[14px] font-medium text-muted" />

        <p className="mt-4 text-[16px] leading-relaxed text-muted">
          {pkg.summary}
        </p>

        {pkg.places ? (
          <ul className="mt-5 flex flex-wrap gap-2">
            {pkg.places.map((place) => (
              <li
                key={place}
                className="rounded-full bg-surface-2 px-3 py-1.5 text-[13px] font-medium text-text"
              >
                {place}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-8">
          <PackagePrice amount={pkg.pricePerPerson} />
          <Link
            href={`/packages/${pkg.slug}`}
            className="inline-flex items-center gap-2 rounded-pill bg-accent px-5 py-3 text-[15px] font-semibold text-on-accent transition-opacity hover:opacity-90 active:translate-y-px"
          >
            What is included
            <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

// The compact treatment used alongside the featured card and on /packages.
// Image-led like the featured card, just smaller and lighter on text, so all
// three packages read as one family rather than one "real" card and two
// afterthoughts.
export function PackageCard({ pkg }) {
  return (
    <article className="lift flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface-3">
      <div className="zoom-media relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 30vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-extrabold tracking-tight">
          {pkg.name}
        </h3>
        <DurationLine pkg={pkg} className="mt-1 text-[14px] font-medium text-muted" />

        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          {pkg.summary}
        </p>

        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <PackagePrice amount={pkg.pricePerPerson} />
          <Link
            href={`/packages/${pkg.slug}`}
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-text transition-colors hover:text-accent-ink"
          >
            What is included
            <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
