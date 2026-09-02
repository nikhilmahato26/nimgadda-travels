import { Container, Section, TwoTone } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/*
  The reference fills this row with growth metrics. A charitable trust has no
  such numbers and inventing them would be a lie on a real business's website,
  so these four tiles carry facts that are true and checkable against the rest
  of the site. One tile is filled with the accent, as in the reference.
*/

export default function TrustStats({ rooms, vehicles, packages, destinations }) {
  const stats = [
    {
      value: String(rooms),
      label: "Room categories, from AC to Super Deluxe",
    },
    {
      value: String(vehicles),
      label: "Vehicles in our own fleet, seating 4 to 49",
      highlight: true,
    },
    { value: String(packages), label: "Yatra packages, all taxes included" },
    { value: String(destinations), label: "Places on the route we drive to" },
  ];

  return (
    <Section>
      <Container>
        <Reveal><div className="grid gap-6 lg:grid-cols-[1fr_minmax(0,26rem)] lg:items-end">
          <TwoTone lead="Get to know more" trail="about the trust" />
          <p className="text-[15px] leading-relaxed text-muted lg:text-right">
            Rooms, a kitchen and a fleet under one roof, so one phone call
            settles the whole trip.
          </p>
        </div></Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} step={i}>
              <div
                className={cn(
                  "lift flex h-full flex-col rounded-card p-6",
                  s.highlight ? "bg-accent" : "border border-line bg-surface-2"
                )}
              >
                <p
                  className={cn(
                    "font-display text-5xl font-extrabold tracking-tight",
                    s.highlight ? "text-on-accent" : "text-text"
                  )}
                >
                  {s.value}
                </p>
                <p
                  className={cn(
                    "mt-3 text-[14px] leading-relaxed",
                    s.highlight ? "text-on-accent/75" : "text-muted"
                  )}
                >
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
