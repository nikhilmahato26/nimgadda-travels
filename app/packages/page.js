import PageHeader from "@/components/site/PageHeader";
import { Container, Section } from "@/components/ui/Section";
import { FeaturedPackageCard, PackageCard } from "@/components/PackageCard";
import Reveal from "@/components/ui/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { getPackages } from "@/lib/content";

export const metadata = {
  title: "Yatra packages",
  description:
    "Yatra packages from Kasi covering Prayagraj, Ayodhya, Naimisaranyam, Gaya, Mathura and Agra. Twin sharing air-conditioned rooms, Andhra meals and all taxes included.",
};

export default async function PackagesPage() {
  const packages = await getPackages();
  const [featured, ...rest] = packages;

  return (
    <>
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

      <Section id="enquire" className="border-t border-line bg-surface-2">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">
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
