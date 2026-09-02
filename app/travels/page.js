import Image from "next/image";
import PageHeader from "@/components/site/PageHeader";
import { Container, Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { getFleetGroups } from "@/lib/content";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

export const metadata = {
  title: "Travels and vehicles",
  description:
    "Cars, tempo travellers and buses for pilgrims in Kasi. Dzire, Ertiga, Innova Crysta, Urbania, Maharaja, Tempo Traveller and a 49 seat glass pack bus.",
};

export default async function TravelsPage() {
  const groups = await getFleetGroups();

  return (
    <>
      <PageHeader
        title={"Vehicles for four people or forty\u00A0nine"}
        intro="Our own fleet, driven by people who know the roads between Kasi, Prayagraj, Ayodhya and Gaya. Pick by how many are travelling."
      >
        <Button href={whatsappLink(whatsappMessages.travels)}>
          Ask about a vehicle
        </Button>
      </PageHeader>

      <Section>
        <Container>
          <div className="divide-y divide-line border-y border-line">
            {groups.map((group, i) => (
              <Reveal key={group.slug} step={i}>
                <div className="grid gap-6 py-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-12">
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-surface">
                      <Image
                        src={group.image}
                        alt={group.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 20rem"
                        className="object-cover"
                      />
                    </div>
                    <h2 className="mt-5 font-display text-2xl font-bold tracking-tight">
                      {group.label}
                    </h2>
                    <p className="mt-1 text-[15px] font-medium text-accent-ink">
                      {group.range}
                    </p>
                  </div>

                  <ul className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {group.vehicles.map((v) => (
                      <li
                        key={v.name}
                        className="rounded-surface border border-line bg-surface-3 px-5 py-4"
                      >
                        <p className="font-display text-lg font-bold tracking-tight">
                          {v.name}
                        </p>
                        <p className="mt-0.5 text-[14px] text-muted">
                          {v.seats} seats
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 max-w-[62ch] text-[15px] leading-relaxed text-muted">
            Rates depend on the route and the number of days, so we quote them
            over the phone rather than printing a figure that turns out to be
            wrong for your trip.
          </p>
        </Container>
      </Section>

      <Section id="enquire" className="border-t border-line bg-surface-2">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">
                Tell us the route and the group size
              </h2>
              <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-muted">
                We will come back with the right vehicle and what it costs for
                your days on the road.
              </p>
            </div>
            <EnquiryForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
