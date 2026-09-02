import Image from "next/image";
import { Wind, ShowerHead, Tv, Wifi, ArrowUpDown, CircleParking, Check } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const amenityIcons = {
  "Air conditioning": Wind,
  "Hot water round the clock": ShowerHead,
  "LED television": Tv,
  "Wi-Fi": Wifi,
  "Lift access": ArrowUpDown,
  "Car parking": CircleParking,
};

// Four cells over a six slot grid: photo, room, room, photo. The alternation
// keeps the block from reading as a row of identical cards.
export default function StaySection({ rooms, amenities }) {
  const [deluxe, superDeluxe] = rooms;

  return (
    <Section id="rooms">
      <Container>
        <SectionHeading
          title="Rooms that suit families travelling with elders"
          body="Two categories, both air-conditioned, both minutes from the temple. Photographs of the rooms are being taken now and will be added here."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-surface">
              <Image
                src="/images/kashi-vishwanath.jpg"
                alt="Shri Kashi Vishwanath temple, a short walk from the rooms"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal step={1}>
            <RoomCard room={deluxe} />
          </Reveal>

          <Reveal step={2}>
            <RoomCard room={superDeluxe} />
          </Reveal>

          <Reveal className="lg:col-span-2" step={3}>
            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-surface">
              <Image
                src="/images/assi-ghat.jpg"
                alt="Temples in the lanes near Assi Ghat, Varanasi"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Six amenities are better as a chip row than as a bulleted list. */}
        <Reveal>
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {amenities.map((item) => {
              const Icon = amenityIcons[item];
              return (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-3 px-4 py-2 text-[14px] font-medium text-text"
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

          <div className="mt-9">
            <Button href="/rooms" variant="secondary">
              Room details and amenities
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

function RoomCard({ room }) {
  return (
    <article className="flex h-full flex-col rounded-surface border border-line bg-surface-3 p-6">
      <h3 className="font-display text-xl font-bold tracking-tight">
        {room.name}
      </h3>
      <p className="mt-1 text-[13px] font-medium uppercase tracking-[0.1em] text-accent-ink">
        {room.occupancy}
      </p>
      <p className="mt-4 text-[15px] leading-relaxed text-muted">
        {room.summary}
      </p>

      <ul className="mt-auto space-y-2 pt-6">
        {room.amenities.map((a) => (
          <li key={a} className="flex items-center gap-2 text-[14px]">
            <Check
              size={14}
              strokeWidth={2}
              className="shrink-0 text-accent-ink"
              aria-hidden="true"
            />
            {a}
          </li>
        ))}
      </ul>
    </article>
  );
}
