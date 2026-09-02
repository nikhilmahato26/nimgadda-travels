import Image from "next/image";
import Link from "next/link";
import {
  Wind,
  ShowerHead,
  Tv,
  Wifi,
  ArrowUpDown,
  CircleParking,
  Check,
  ArrowRight,
} from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import { Container, Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { getRooms } from "@/lib/content";
import { roomAmenities, stayHighlights } from "@/data/rooms";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

export const metadata = {
  title: "Rooms",
  description:
    "Three room categories in Panday Haweli, Varanasi, a walk from Kashi Vishwanath: AC, Deluxe and Super Deluxe. Lift, car parking, hot water, Wi-Fi and LED televisions.",
};

const amenityIcons = {
  "Air conditioning": Wind,
  "Hot water round the clock": ShowerHead,
  "LED television": Tv,
  "Wi-Fi": Wifi,
  "Lift access": ArrowUpDown,
  "Car parking": CircleParking,
};

export default async function RoomsPage() {
  const rooms = await getRooms();

  return (
    <>
      <PageHeader
        title="Three room categories in the old city"
        intro="AC, Deluxe and Super Deluxe. Every one of them is air-conditioned, has lift access and car parking, and is close enough to Kashi Vishwanath to walk."
      />

      <Section>
        <Container>
          <ul className="flex flex-wrap gap-2.5">
            {roomAmenities.map((item) => {
              const Icon = amenityIcons[item];
              return (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-3 px-4 py-2 text-[14px] font-medium"
                >
                  {Icon ? (
                    <Icon
                      size={15}
                      strokeWidth={1.5}
                      className="text-accent-ink"
                      aria-hidden="true"
                    />
                  ) : null}
                  {item}
                </li>
              );
            })}
          </ul>

          <div className="mt-12 space-y-4">
            {rooms.map((room, i) => (
              <Reveal key={room.slug} step={i}>
                <article className="grid overflow-hidden rounded-card border border-line bg-surface-3 lg:grid-cols-[1fr_1.15fr]">
                  <div className="relative aspect-[16/10] w-full bg-surface-2 lg:aspect-auto lg:min-h-[320px]">
                    {room.image ? (
                      <Image
                        src={room.image}
                        alt={`${room.name} at Nimmagadda Vari Charitable Trust`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-cover"
                      />
                    ) : (
                      // Room photography is still with the client. Rather than
                      // a grey box, the tile carries the room name until the
                      // real picture lands in /public/images/rooms/.
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

                  <div className="p-7 lg:p-10">
                    <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-accent-ink">
                      {room.tagline}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
                      {room.name}
                    </h2>
                    <p className="mt-1 text-[14px] font-medium text-muted">
                      {room.occupancy}
                    </p>
                    <p className="mt-4 text-[16px] leading-relaxed text-muted">
                      {room.summary}
                    </p>

                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {room.amenities.slice(0, 6).map((a) => (
                        <li
                          key={a}
                          className="flex items-center gap-2 text-[15px]"
                        >
                          <Check
                            size={15}
                            strokeWidth={2}
                            className="shrink-0 text-accent-ink"
                            aria-hidden="true"
                          />
                          {a}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                      <Button href={`/rooms/${room.slug}`}>
                        See this room
                        <ArrowRight
                          size={16}
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </Button>
                      <Link
                        href={whatsappLink(whatsappMessages.rooms(room.name))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] font-semibold transition-colors hover:text-accent-ink"
                      >
                        Ask on WhatsApp
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <section className="border-y border-line bg-surface-2 py-16">
        <Container>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stayHighlights.map((h) => (
              <div key={h.title}>
                <h2 className="font-display text-lg font-extrabold tracking-tight">
                  {h.title}
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {h.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section id="enquire">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
                Check availability for your dates
              </h2>
              <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-muted">
                Leave your number and we will call you back with rates and what
                is free on the dates you want.
              </p>
            </div>
            <EnquiryForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
