import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import VehicleCard from "@/components/VehicleCard";
import Reveal from "@/components/ui/Reveal";

/*
  A card per vehicle, ordered by seats. The home page shows the six most asked
  for; /travels carries the full fleet.
*/

const FEATURED_COUNT = 6;

export default function FleetSection({ vehicles }) {
  const featured = vehicles.slice(0, FEATURED_COUNT);

  return (
    <Section id="travels" className="border-y border-line">
      <Container>
        <SectionHeading
          title={"Vehicles for four people or forty nine"}
          body="Our own fleet, so the same people answering the phone are the ones arranging the driver."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((vehicle, i) => (
            <Reveal key={vehicle.slug} step={i % 3} className="h-full">
              <VehicleCard vehicle={vehicle} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/travels" variant="outline">
            All {vehicles.length} vehicles
          </Button>
        </div>
      </Container>
    </Section>
  );
}
