import { Footprints, CircleParking, UtensilsCrossed, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

// Grouped by hairline dividers rather than cards: these are four facts, not
// four things to click.
const assurances = [
  {
    icon: Footprints,
    title: "Walk to the temple",
    body: "Panday Haweli is inside the old city, close enough that elders can walk to Kashi Vishwanath.",
  },
  {
    icon: CircleParking,
    title: "Lift and parking",
    body: "No stairs with luggage, and your vehicle stays parked at the building.",
  },
  {
    icon: UtensilsCrossed,
    title: "Andhra meals",
    body: "Rice, pappu, pachadi and rasam cooked the way you eat at home.",
  },
  {
    icon: HeartHandshake,
    title: "Run by a trust",
    body: "A charitable trust looking after pilgrims, not an agent taking a commission.",
  },
];

export default function Assurances() {
  return (
    <section className="border-b border-line bg-surface-2 py-14 lg:py-16">
      <Container>
        <Reveal>
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-line">
            {assurances.map(({ icon: Icon, title, body }) => (
              <div key={title} className="lg:px-7 lg:first:pl-0 lg:last:pr-0">
                <Icon
                  size={26}
                  strokeWidth={1.5}
                  className="text-accent-ink"
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight">
                  {title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
