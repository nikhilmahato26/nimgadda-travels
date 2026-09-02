import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, Phone } from "lucide-react";
import { Container, Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/ui/Reveal";
import { getRooms, getRoomBySlug } from "@/lib/content";
import { neighbourhood } from "@/data/rooms";
import { business } from "@/data/business";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

export async function generateStaticParams() {
  const rooms = await getRooms();
  return rooms.map((r) => ({ slug: r.slug }));
}

// params is a promise in Next 16.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const room = await getRoomBySlug(slug);
  if (!room) return { title: "Room not found" };

  return {
    title: room.name,
    description: `${room.summary} At Nimmagadda Vari Charitable Trust, Panday Haweli, Varanasi.`,
  };
}

export default async function RoomDetailPage({ params }) {
  const { slug } = await params;
  const room = await getRoomBySlug(slug);
  if (!room) notFound();

  const allRooms = await getRooms();
  const others = allRooms.filter((r) => r.slug !== room.slug);

  return (
    <>
      <header className="border-b border-line">
        <Container className="py-12 lg:py-16">
          <Link
            href="/rooms"
            className="text-[14px] font-medium text-muted transition-colors hover:text-accent-ink"
          >
            All rooms
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-accent-ink">
                {room.tagline}
              </p>
              <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                {room.name}
              </h1>
              <p className="mt-3 text-[15px] font-medium text-muted">
                {room.occupancy}
              </p>
              <p className="mt-5 max-w-[56ch] text-[17px] leading-relaxed text-muted sm:text-lg">
                {room.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={whatsappLink(whatsappMessages.rooms(room.name))}>
                  Ask about this room
                </Button>
                <Button href={business.phoneTel} variant="outline">
                  <Phone size={16} strokeWidth={1.5} aria-hidden="true" />
                  {business.phoneDisplay}
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card border border-line bg-surface-3">
              {room.image ? (
                <Image
                  src={room.image}
                  alt={`${room.name} at Nimmagadda Vari Charitable Trust`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 p-8 text-center">
                  <span className="font-display text-2xl font-extrabold tracking-tight text-accent-ink">
                    {room.name}
                  </span>
                  <span className="text-[14px] text-muted">
                    Photographs coming shortly
                  </span>
                </div>
              )}
            </div>
          </div>
        </Container>
      </header>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
            <div>
              <h2 className="font-display text-2xl font-extrabold tracking-tight">
                About this room
              </h2>
              <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-muted">
                {room.description.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>

              <h2 className="mt-12 font-display text-2xl font-extrabold tracking-tight">
                Rates
              </h2>
              <p className="mt-4 max-w-[56ch] text-[16px] leading-relaxed text-muted">
                Room rates change with the season and with how long you stay, so
                we quote them on the phone rather than printing a figure that
                turns out to be wrong for your dates. Guests on a yatra package
                already have the room in the package price.
              </p>
              <Link
                href="/packages"
                className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold transition-colors hover:text-accent-ink"
              >
                See the yatra packages
                <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>

            <div className="rounded-card border border-line bg-surface-3 p-7 lg:p-8">
              <h2 className="font-display text-xl font-extrabold tracking-tight">
                What is in the room
              </h2>
              <ul className="mt-5 space-y-3">
                {room.amenities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] leading-relaxed"
                  >
                    <Check
                      size={17}
                      strokeWidth={2}
                      className="mt-0.5 shrink-0 text-accent-ink"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* The rooms are not photographed yet, so this shows the streets around
          the building instead. Captioned so it is never mistaken for the room. */}
      <Section className="border-y border-line">
        <Container>
          <h2 className="font-display text-2xl font-extrabold tracking-tight">
            What is around you
          </h2>
          <p className="mt-3 max-w-[56ch] text-[16px] leading-relaxed text-muted">
            The building is in Panday Haweli, next to Cycle Baba Ashram, inside
            the old city.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {neighbourhood.map((item, i) => (
              <Reveal key={item.image} step={i}>
                <figure>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-[14px] leading-relaxed text-muted">
                    {item.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="font-display text-2xl font-extrabold tracking-tight">
            The other categories
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/rooms/${other.slug}`}
                className="group flex flex-col rounded-card border border-line bg-surface-3 p-6 transition-colors hover:border-accent"
              >
                <h3 className="font-display text-xl font-extrabold tracking-tight transition-colors group-hover:text-accent-ink">
                  {other.name}
                </h3>
                <p className="mt-1 text-[13px] font-medium uppercase tracking-[0.1em] text-accent-ink">
                  {other.occupancy}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {other.summary}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="enquire" className="border-t border-line">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
                Hold a {room.name} for your dates
              </h2>
              <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-muted">
                Leave your number and we will call you back with the rate and
                what is free on the days you want.
              </p>
            </div>
            <EnquiryForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
