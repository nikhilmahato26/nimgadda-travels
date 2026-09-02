import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, X, ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import EnquiryForm from "@/components/EnquiryForm";
import { getPackages, getPackageBySlug } from "@/lib/content";
import { rupees } from "@/lib/utils";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

const UNCONFIRMED = "Duration confirmed when you book";

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

  return (
    <>
      <header className="border-b border-line bg-surface-2">
        <Container className="py-12 lg:py-16">
          <Link
            href="/packages"
            className="text-[14px] font-medium text-muted transition-colors hover:text-accent-ink"
          >
            All packages
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
            <div>
              <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
                {pkg.name}
              </h1>
              <p className="mt-3 text-[15px] font-medium text-muted">
                {pkg.duration ?? UNCONFIRMED}
              </p>
              <p className="mt-5 max-w-[56ch] text-[17px] leading-relaxed text-muted sm:text-lg">
                {pkg.summary}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <p>
                  <span className="font-display text-4xl font-bold tracking-tight">
                    {rupees(pkg.pricePerPerson)}
                  </span>{" "}
                  <span className="text-[15px] font-medium text-muted">
                    per person
                  </span>
                </p>
                <Button href={whatsappLink(whatsappMessages.package(pkg.name))}>
                  Ask on WhatsApp
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-surface">
              <Image
                src={pkg.image}
                alt={pkg.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </header>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight">
                Where you go
              </h2>
              {pkg.places ? (
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {pkg.places.map((place) => (
                    <li
                      key={place}
                      className="rounded-full border border-line bg-surface-3 px-4 py-2 text-[15px] font-medium"
                    >
                      {place}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 max-w-[56ch] text-[16px] leading-relaxed text-muted">
                  The route is set with you when you book, around the days you
                  have and the darshans your family wants. Call the trust and we
                  will walk you through it.
                </p>
              )}

              <h2 className="mt-12 font-display text-2xl font-bold tracking-tight">
                Rooms and meals
              </h2>
              <dl className="mt-5 space-y-5">
                <div>
                  <dt className="text-[14px] font-semibold uppercase tracking-[0.1em] text-accent-ink">
                    Stay
                  </dt>
                  <dd className="mt-1.5 text-[16px] leading-relaxed text-muted">
                    {pkg.stay}
                  </dd>
                </div>
                <div>
                  <dt className="text-[14px] font-semibold uppercase tracking-[0.1em] text-accent-ink">
                    Meals
                  </dt>
                  <dd className="mt-1.5 text-[16px] leading-relaxed text-muted">
                    {pkg.meals}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-surface border border-line bg-surface-3 p-7 lg:p-8">
              <h2 className="font-display text-xl font-bold tracking-tight">
                What the price covers
              </h2>
              <ul className="mt-5 space-y-3">
                {pkg.inclusions.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed">
                    <Check
                      size={17}
                      strokeWidth={2}
                      className="mt-0.5 shrink-0 text-accent-ink"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 border-t border-line pt-7 font-display text-xl font-bold tracking-tight">
                What it does not cover
              </h3>
              <ul className="mt-5 space-y-3">
                {pkg.exclusions.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] leading-relaxed text-muted"
                  >
                    <X
                      size={17}
                      strokeWidth={2}
                      className="mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="enquire" className="border-t border-line bg-surface-2">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">
                Book the {pkg.name}
              </h2>
              <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-muted">
                Leave your number and how many are travelling. We will call you
                back with dates, the vehicle and the final figure.
              </p>
              <Link
                href="/packages"
                className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold transition-colors hover:text-accent-ink"
              >
                Compare the other packages
                <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>
            <EnquiryForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
