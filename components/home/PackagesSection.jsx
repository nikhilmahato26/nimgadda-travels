import Image from "next/image";
import Link from "next/link";
import { MapPin, CalendarDays } from "lucide-react";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { rupees } from "@/lib/utils";

/*
  Card grid in the reference's event-card shape: photograph, title, a meta row,
  then price beside a view-details pill.

  The reference cards carry a star rating. The trust has no collected ratings,
  so that slot shows the duration instead of an invented score.
*/

const UNCONFIRMED = "Duration on request";

export default function PackagesSection({ packages }) {
  return (
    <Section>
      <Container>
        <Reveal><SectionHead lead="Explore" trail="yatra packages">
          <Link
            href="/packages"
            className="rounded-pill bg-accent px-5 py-2.5 text-[14px] font-bold text-on-accent transition-all hover:brightness-95"
          >
            All packages
          </Link>
        </SectionHead></Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.slug} step={i} className="h-full">
              <article className="lift flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface-3 shadow-[var(--shadow-card)]">
                <div className="zoom-media relative aspect-[16/11] w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-[17px] font-extrabold leading-snug tracking-tight">
                    {pkg.name}
                  </h3>

                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} strokeWidth={1.5} aria-hidden="true" />
                      {pkg.places ? `${pkg.places.length} places` : "Route on request"}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays
                        size={14}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      {pkg.duration ?? UNCONFIRMED}
                    </span>
                  </div>

                  <p className="mt-3 text-[14px] leading-relaxed text-muted">
                    {pkg.summary}
                  </p>

                  <div className="mt-auto flex items-end justify-between gap-4 pt-6">
                    <p>
                      <span className="font-display text-xl font-extrabold tracking-tight">
                        {rupees(pkg.pricePerPerson)}
                      </span>
                      <span className="block text-[12px] text-muted">
                        per person, taxes included
                      </span>
                    </p>
                    <Link
                      href={`/packages/${pkg.slug}`}
                      className="rounded-pill border border-line px-4 py-2 text-[14px] font-semibold transition-colors hover:border-ink hover:bg-surface-2"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
