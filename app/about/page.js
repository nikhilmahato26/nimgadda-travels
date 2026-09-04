import Image from "next/image";
import PageHeader from "@/components/site/PageHeader";
import { Container, Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { business, addressLines } from "@/data/business";

export const metadata = {
  title: "About Us | Nimmagadda Vari Andhra Tours & Travels in Kasi",
  description:
    "Learn about Nimmagadda Vari Andhra Tours and Travels in Varanasi. Providing Telugu pilgrims with rooms near Kashi Vishwanath, home-style Andhra meals, and dedicated travel services.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Nimmagadda Vari Andhra Tours & Travels",
    description:
      "A trusted family-run business looking after pilgrims in Varanasi with AC accommodation, Andhra meals, and complete yatra circuits.",
    url: "/about",
    images: [
      {
        url: "/images/ghats-pilgrims.jpg",
        width: 1200,
        height: 630,
        alt: "Pilgrims on the ghats in Varanasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Nimmagadda Vari Varanasi",
    description:
      "Dedicated to serving Telugu pilgrims with rooms, home-style Andhra meals, and travels in Kasi.",
    images: ["/images/ghats-pilgrims.jpg"],
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        name: "About Nimmagadda Vari Andhra Tours and Travels",
        url: "https://nimmagaddavari.in/about",
        description:
          "Nimmagadda Vari Andhra Tours and Travels runs rooms, a kitchen and a fleet of vehicles in Varanasi for Telugu families on the Kasi, Tirupathi and Arunachalam circuit.",
        mainEntity: {
          "@type": "LodgingBusiness",
          name: business.name,
          telephone: business.phoneDisplay,
          address: {
            "@type": "PostalAddress",
            streetAddress: `${business.address.line1}, ${business.address.line2}`,
            addressLocality: "Varanasi",
            addressRegion: "Uttar Pradesh",
            postalCode: business.address.pincode,
            addressCountry: "IN",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://nimmagaddavari.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About Us",
            item: "https://nimmagaddavari.in/about",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <PageHeader
        title="A family business looking after pilgrims in Kasi"
        intro="Nimmagadda Vari Andhra Tours and Travels runs rooms, a kitchen and a fleet of vehicles in Varanasi, mainly for Telugu families making the Kasi, Tirupathi and Arunachalam yatra."
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20">
            <Reveal>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card">
                <Image
                  src="/images/ghats-pilgrims.jpg"
                  alt="Pilgrims on the ghats at Varanasi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div>
              <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
                Everything under one roof, on purpose
              </h2>
              <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-muted">
                <p>
                  A yatra usually means three different arrangements: somewhere
                  to sleep, somewhere to eat, and someone to drive. Families
                  reach Kasi after two days on a train and then have to sort all
                  three out in an unfamiliar city, in a language they may not
                  speak.
                </p>
                <p>
                  We keep all three in one place. The rooms are ours, the
                  kitchen is ours, and the vehicles are ours. The person who
                  answers the phone is the person who arranges it.
                </p>
                <p>
                  We are on the Kasi, Tirupathi and Arunachalam circuit, and the
                  building sits in Panday Haweli, inside the old city, next to
                  Cycle Baba Ashram.
                </p>
              </div>

              <div className="mt-9 rounded-card border border-line bg-surface-3 p-6">
                <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-ink">
                  {business.owner.role}
                </p>
                <p className="mt-2 font-display text-xl font-extrabold tracking-tight">
                  {business.owner.name}
                </p>
                <address className="mt-3 not-italic text-[15px] leading-relaxed text-muted">
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button href={business.phoneTel}>
                    {business.phoneDisplay}
                  </Button>
                  <Button href="/contact" variant="outline">
                    Contact page
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
