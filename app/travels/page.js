import PageHeader from "@/components/site/PageHeader";
import { Container, Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import VehicleCard from "@/components/VehicleCard";
import Reveal from "@/components/ui/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { getVehicles } from "@/lib/content";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

export const metadata = {
  title: "Vehicle Hire & Fleet in Kasi | Dzire, Innova, Urbania, Tempo Traveller & Bus",
  description:
    "Private vehicle fleet hire in Varanasi for pilgrimage trips across Kasi, Prayagraj, Ayodhya, and Gaya. Sedans, 7-seater SUVs, luxury Tempo Travellers, and 49-seater buses.",
  alternates: {
    canonical: "/travels",
  },
  openGraph: {
    title: "Vehicle Hire & Fleet in Kasi | Nimmagadda Vari",
    description:
      "Reliable cars, tempo travellers and buses for pilgrims in Varanasi. Dedicated Andhra drivers who know the northern pilgrimage circuit.",
    url: "/travels",
    images: [
      {
        url: "/images/fleet-traveller.jpg",
        width: 1200,
        height: 630,
        alt: "Pilgrim vehicle fleet in Varanasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vehicle Hire & Fleet in Kasi | Nimmagadda Vari",
    description:
      "Sedans, 7-seater SUVs, Tempo Travellers, and buses for Kasi, Prayagraj, Ayodhya, and Gaya trips.",
    images: ["/images/fleet-traveller.jpg"],
  },
};

export default async function TravelsPage() {
  const vehicles = await getVehicles();

  const fleetSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: "Nimmagadda Vari Fleet & Travels",
    description:
      "Vehicle fleet hire in Varanasi for pilgrimage circuits across Kasi, Prayagraj, Ayodhya, and Gaya.",
    url: "https://nimmagaddavari.in/travels",
    provider: {
      "@type": "TravelAgency",
      name: "Nimmagadda Vari Andhra Tours and Travels",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pilgrim Vehicles",
      itemListElement: vehicles.map((v) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Vehicle",
          name: v.name,
          description: `${v.seats} seats. ${v.blurb}`,
          image: v.image ? `https://nimmagaddavari.in${v.image}` : undefined,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fleetSchema) }}
      />
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

      <Section id="enquire" className="border-t border-line">
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
