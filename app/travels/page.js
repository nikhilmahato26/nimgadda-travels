import PageHeader from "@/components/site/PageHeader";
import { Container, Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import VehicleCard from "@/components/VehicleCard";
import Reveal from "@/components/ui/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { getVehicles } from "@/lib/content";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

export const metadata = {
  title: "Travels and vehicles",
  description:
    "Cars, tempo travellers and buses for pilgrims in Kasi. Dzire, Tavera, Ertiga, Innova Crysta, Wings, Cruiser, Urbania, Maharaja, Tempo Traveller and a 49 seat glass pack bus.",
};

export default async function TravelsPage() {
  const vehicles = await getVehicles();

  return (
    <>
      <PageHeader
        title={"Vehicles for four people or forty nine"}
        intro="Our own fleet, driven by people who know the roads between Kasi, Prayagraj, Ayodhya and Gaya. Pick by how many are travelling."
      >
        <Button href={whatsappLink(whatsappMessages.travels)}>
          Ask about a vehicle
        </Button>
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((vehicle, i) => (
              <Reveal key={vehicle.slug} step={i % 3} className="h-full">
                <VehicleCard vehicle={vehicle} />
              </Reveal>
            ))}
          </div>

          <p className="mt-10 max-w-[62ch] text-[15px] leading-relaxed text-muted">
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
              <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
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
