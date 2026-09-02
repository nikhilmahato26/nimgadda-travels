import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { FeaturedPackageCard, PackageCard } from "@/components/PackageCard";
import Reveal from "@/components/ui/Reveal";

// Asymmetric: the full circuit gets the photograph and the width, the two
// shorter routes sit beside it. Not three equal cards.
export default function PackagesSection({ packages }) {
  const [featured, ...rest] = packages;

  return (
    <Section id="packages" className="border-y border-line bg-surface-2">
      <Container>
        <SectionHeading
          eyebrow="All taxes included"
          title="Three ways to make the yatra"
          body="Rooms, meals and travel arranged end to end, so nobody in the group is negotiating with drivers at six in the morning."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.25fr_1fr] lg:items-stretch">
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
  );
}
