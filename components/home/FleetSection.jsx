import Image from "next/image";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

/*
  Ten vehicle models would make a dull spec table. Families choose by group
  size, so the list is grouped into three clusters, each led by a photograph of
  the vehicle type and followed by the model names as chips.
*/

export default function FleetSection({ groups }) {
  return (
    <Section id="travels" className="border-b border-line bg-surface-2">
      <Container>
        <SectionHeading
          title={"Vehicles for four people or forty\u00A0nine"}
          body="Our own fleet, so the same people answering the phone are the ones arranging the driver."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal key={group.slug} step={i} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-surface border border-line bg-surface-3">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={group.image}
                    alt={group.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    {group.label}
                  </h3>
                  <p className="mt-1 text-[14px] font-medium text-accent-ink">
                    {group.range}
                  </p>

                  <ul className="mt-5 flex flex-wrap content-start gap-2">
                    {group.vehicles.map((v) => (
                      <li
                        key={v.name}
                        className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-[14px]"
                      >
                        <span className="font-semibold">{v.name}</span>
                        <span className="text-muted"> · {v.seats} seats</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
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
