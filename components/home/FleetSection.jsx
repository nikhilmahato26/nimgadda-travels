import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

/*
  Ten vehicle models would make a dull spec table. Families choose by group
  size, so the list is grouped into three clusters with one heading each and a
  single divider between them. Names sit as chips, not as bordered rows.
*/

export default function FleetSection({ groups }) {
  return (
    <Section id="travels" className="border-b border-line bg-surface-2">
      <Container>
        <SectionHeading
          title="Vehicles for four people or forty nine"
          body="Our own fleet, so the same people answering the phone are the ones arranging the driver."
        />

        <div className="mt-12 divide-y divide-line border-y border-line">
          {groups.map((group, i) => (
            <Reveal key={group.slug} step={i}>
              <div className="grid gap-5 py-9 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-12">
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    {group.label}
                  </h3>
                  <p className="mt-1 text-[14px] font-medium text-accent-ink">
                    {group.range}
                  </p>
                </div>

                <ul className="flex flex-wrap content-start gap-2.5">
                  {group.vehicles.map((v) => (
                    <li
                      key={v.name}
                      className="rounded-full border border-line bg-surface-3 px-4 py-2 text-[15px]"
                    >
                      <span className="font-semibold">{v.name}</span>
                      <span className="text-muted"> · {v.seats} seats</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/travels" variant="secondary">
            Full vehicle list
          </Button>
        </div>
      </Container>
    </Section>
  );
}
