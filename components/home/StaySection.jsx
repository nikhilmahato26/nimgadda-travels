import Image from "next/image";
import {
  Wind,
  ShowerHead,
  Tv,
  Wifi,
  ArrowUpDown,
  CircleParking,
  Users,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const amenityIcons = {
  "Air conditioning": Wind,
  "Hot water round the clock": ShowerHead,
  "LED television": Tv,
  "Wi-Fi": Wifi,
  "Lift access": ArrowUpDown,
  "Car parking": CircleParking,
};

/*
  One card per room, alternating photo left/right down the page. Each card
  states occupancy and five amenities as a small icon grid rather than a
  price, since no room rate has been quoted, only the per-person package
  price. The tagline pill stands in for the "% off" tag a hotel template
  would show here.
*/
export default function StaySection({ rooms }) {
  return (
    <Section id="rooms">
      <Container>
        <Reveal>
          <SectionHeading
            title="Three room categories, one short walk from the temple"
            body="Every category is air-conditioned, with lift access and parking at the building. Photographs of the rooms are being taken now and will be added here."
          />
        </Reveal>

        <div className="mt-12 grid gap-6">
          {rooms.map((room, i) => {
            const reversed = i % 2 === 1;
            const stats = [
              { icon: Users, label: room.occupancy },
              ...room.amenities.slice(0, 5).map((label) => ({
                icon: amenityIcons[label],
                label,
              })),
            ];

            return (
              <Reveal key={room.slug} step={i}>
                <article className="grid overflow-hidden rounded-card border border-line bg-surface-3 lg:grid-cols-2">
                  <div
                    className={cn(
                      "zoom-media relative aspect-[4/3] w-full overflow-hidden bg-surface-2 lg:aspect-auto lg:min-h-[22rem]",
                      reversed && "lg:order-2"
                    )}
                  >
                    {room.image ? (
                      <Image
                        src={room.image}
                        alt={`${room.name} at Nimmagadda Vari Charitable Trust`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    ) : (
                      // Room photography is still with the client. Rather than
                      // a grey box, the tile carries the room name until the
                      // real picture lands in /public/images/room-<slug>.jpg
                      // (see the header comment in data/rooms.js).
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

                  <div
                    className={cn(
                      "flex flex-col justify-center p-6 sm:p-8 lg:p-10",
                      reversed && "lg:order-1"
                    )}
                  >
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-pill bg-accent/15 px-3 py-1 text-[12px] font-semibold text-accent-ink">
                      <Sparkles size={12} strokeWidth={2} aria-hidden="true" />
                      {room.tagline}
                    </span>

                    <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
                      {room.name}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                      {room.summary}
                    </p>

                    <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">
                      {stats.map(({ icon: Icon, label }) => (
                        <li
                          key={label}
                          className="flex items-center gap-2 text-[14px] text-muted"
                        >
                          {Icon ? (
                            <Icon
                              size={16}
                              strokeWidth={1.5}
                              className="shrink-0 text-accent-ink"
                              aria-hidden="true"
                            />
                          ) : null}
                          <span className="text-text">{label}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                      <div>
                        <p className="font-display text-lg font-extrabold tracking-tight">
                          Rates on request
                        </p>
                        <p className="text-[13px] text-muted">
                          Call or WhatsApp for the current price
                        </p>
                      </div>
                      <Button href={`/rooms/${room.slug}`} variant="ink">
                        Room details
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
