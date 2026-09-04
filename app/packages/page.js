import PageHeader from "@/components/site/PageHeader";
import { Container, Section } from "@/components/ui/Section";
import { FeaturedPackageCard, PackageCard } from "@/components/PackageCard";
import Reveal from "@/components/ui/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { getPackages } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "Kasi Yatra Packages | Prayagraj, Ayodhya, Gaya, Mathura & Agra Tours",
  description:
    "Complete Kasi yatra tour packages from Varanasi covering Prayagraj, Ayodhya, Naimisaranyam, Gaya, Mathura and Agra. AC rooms, Andhra meals, and vehicle transport included.",
  alternates: {
    canonical: "/packages",
  },
  openGraph: {
    title: "Kasi Yatra Packages | Nimmagadda Vari Varanasi",
    description:
      "All-inclusive pilgrimage packages with AC twin-sharing rooms, authentic Andhra meals, and vehicle transport across Prayagraj, Ayodhya, Gaya, Mathura and Agra.",
    url: "/packages",
    images: [
      {
        url: "/images/prayagraj.jpg",
        width: 1200,
        height: 630,
        alt: "Kasi Yatra Pilgrimage Tour Packages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kasi Yatra Packages | Nimmagadda Vari Varanasi",
    description:
      "All-inclusive Kasi yatra tour packages with AC rooms, Andhra meals and vehicle transport.",
    images: ["/images/prayagraj.jpg"],
  },
};

export default async function PackagesPage() {
  const packages = await getPackages();
  const [featured, ...rest] = packages;

  const packageListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: packages.map((pkg, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: pkg.name,
      description: pkg.summary,
      url: absoluteUrl(`/packages/${pkg.slug}`),
      image: pkg.image ? absoluteUrl(pkg.image) : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packageListSchema) }}
      />
      <PageHeader
        title="Yatra packages from Kasi"
        intro="Rooms, meals and travel arranged end to end. Prices are per person and include all taxes. Special darshan tickets are arranged separately."
      />

      <Section>
        <Container>
          <div className="grid gap-4 lg:grid-cols-[1.25fr_1fr] lg:items-stretch">
            <Reveal>
              <FeaturedPackageCard pkg={featured} />
            </Reveal>
            <div className="grid gap-4">
              {rest.map((pkg, i) => (
                <Reveal key={pkg.slug} step={i + 1} className="h-full">
                  <PackageCard pkg={pkg} />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="enquire" className="border-t border-line">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
                Not sure which one suits your group?
              </h2>
              <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-muted">
                Tell us how many are travelling and how many days you have. We
                will tell you honestly which package fits and what it will cost.
              </p>
            </div>
            <EnquiryForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
