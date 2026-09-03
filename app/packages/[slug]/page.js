import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Check,
  X,
  ArrowRight,
  CalendarDays,
  MapPin,
  BedDouble,
  UtensilsCrossed,
  Milestone,
} from "lucide-react";
import { Container, Section } from "@/components/ui/Section";
import { PackageCard } from "@/components/PackageCard";
import PackageBookingCard from "@/components/PackageBookingCard";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/ui/Reveal";
import { getPackages, getPackageBySlug } from "@/lib/content";
import { rupees } from "@/lib/utils";

const UNCONFIRMED_DURATION = "Duration confirmed when you book";

export async function generateStaticParams() {
  const packages = await getPackages();
  return packages.map((p) => ({ slug: p.slug }));
}

// params is a promise in Next 16.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pkg = await getPackageBySlug(slug);
  if (!pkg) return { title: "Package not found" };

  return {
    title: pkg.name,
    description: `${pkg.summary} ${rupees(pkg.pricePerPerson)} per person, all taxes included.`,
  };
}

export default async function PackageDetailPage({ params }) {
  const { slug } = await params;
  const pkg = await getPackageBySlug(slug);
  if (!pkg) notFound();

  const allPackages = await getPackages();
  const others = allPackages.filter((p) => p.slug !== pkg.slug);

  // Quick facts, four tiles to match the icon-grid pattern used elsewhere on
  // the site (the room pages' "The space"). Duration and route status repeat
  // what is in the meta row above, which is normal for a page like this: the
  // meta row is the quick read, this grid is the scannable one.
  const quickFacts = [
    { icon: CalendarDays, label: pkg.duration ?? UNCONFIRMED_DURATION },
    {
      icon: Milestone,
      label: pkg.places ? `${pkg.places.length} places` : "Route on request",
    },
    { icon: BedDouble, label: pkg.stay },
    { icon: UtensilsCrossed, label: pkg.meals },
  ];

  return (
    <>
      <Section className="pb-0">
        <Container>
          <Link
            href="/packages"
            className="text-[14px] font-medium text-muted transition-colors hover:text-accent-ink"
          >
            All packages
          </Link>

          <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl">
            {pkg.name}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] text-muted">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={15} strokeWidth={1.5} aria-hidden="true" />
              {pkg.duration ?? UNCONFIRMED_DURATION}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} strokeWidth={1.5} aria-hidden="true" />
              {pkg.places
                ? `${pkg.places[0]} to ${pkg.places[pkg.places.length - 1]}`
                : "Route on request"}
            </span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_20rem] lg:items-start lg:gap-12">
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-card border border-line bg-surface-2">
                <Image
                  src={pkg.image}
                  alt={pkg.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 62vw"
                  className="object-cover"
                />
              </div>

              {/* Jump links rather than JS-swapped tabs: every section stays
                  in the server HTML and readable without clicking anything,
                  the nav just scrolls to it. Same pattern as the room pages. */}
              <nav
                aria-label="Package sections"
                className="mt-8 flex gap-2 border-b border-line"
              >
                {[
                  ["#overview", "Overview"],
                  ["#route", "Route"],
                  ["#included", "What is included"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="border-b-2 border-transparent px-1 pb-3 text-[14px] font-semibold text-muted transition-colors hover:border-accent-ink hover:text-text"
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <div id="overview" className="pt-8">
                <p className="text-[16px] leading-relaxed text-muted">
                  {pkg.summary}
                </p>

                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {quickFacts.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="flex flex-col items-center gap-2 rounded-card border border-line bg-surface-3 px-4 py-5 text-center"
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.5}
                        className="text-accent-ink"
                        aria-hidden="true"
                      />
                      <span className="text-[14px] font-medium">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div id="route" className="border-t border-line pt-8 mt-10">
                <h2 className="font-display text-xl font-extrabold tracking-tight">
                  Where you go
                </h2>

                {pkg.places ? (
                  <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-3">
                    {pkg.places.map((place, i) => (
                      <li key={place} className="flex items-center gap-2">
                        <span className="rounded-pill border border-line bg-surface-3 px-4 py-2 text-[15px] font-medium">
                          {place}
                        </span>
                        {i < pkg.places.length - 1 ? (
                          <ArrowRight
                            size={15}
                            strokeWidth={1.5}
                            className="shrink-0 text-muted"
                            aria-hidden="true"
                          />
                        ) : null}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="mt-4 max-w-[56ch] text-[16px] leading-relaxed text-muted">
                    The route is set with you when you book, around the days
                    you have and the darshans your family wants. Call us and
                    we will walk you through it.
                  </p>
                )}
              </div>

              <div id="included" className="border-t border-line pt-8 mt-10">
                <h2 className="font-display text-xl font-extrabold tracking-tight">
                  What the price covers
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {pkg.inclusions.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-[15px] leading-relaxed"
                    >
                      <Check
                        size={16}
                        strokeWidth={2}
                        className="shrink-0 text-accent-ink"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 font-display text-[15px] font-bold tracking-tight">
                  What it does not cover
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {pkg.exclusions.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-[15px] leading-relaxed text-muted"
                    >
                      <X
                        size={16}
                        strokeWidth={2}
                        className="shrink-0"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24">
              <PackageBookingCard
                packageName={pkg.name}
                pricePerPerson={pkg.pricePerPerson}
              />
            </aside>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-line">
        <Container>
          <h2 className="font-display text-2xl font-extrabold tracking-tight">
            Compare the other packages
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {others.map((other, i) => (
              <Reveal key={other.slug} step={i}>
                <PackageCard pkg={other} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="enquire" className="border-t border-line">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
                Book the {pkg.name}
              </h2>
              <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-muted">
                Leave your number and how many are travelling. We will call
                you back with dates, the vehicle and the final figure.
              </p>
            </div>
            <EnquiryForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
