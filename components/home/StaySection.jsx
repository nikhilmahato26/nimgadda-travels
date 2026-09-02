import Image from "next/image";
import Link from "next/link";
import {
  Wind,
  ShowerHead,
  Tv,
  Wifi,
  ArrowUpDown,
  CircleParking,
  ArrowRight,
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const amenityIcons = {
  "Air conditioning": Wind,
  "Hot water round the clock": ShowerHead,
  "LED television": Tv,
  "Wi-Fi": Wifi,
  "Lift access": ArrowUpDown,
  "Car parking": CircleParking,
};

/*
  Asymmetric split rather than three equal cards: the photograph holds the left,
  the three categories stack on the right as linked rows separated by hairlines.
  Each row goes to its own page.
*/
export default function StaySection({ rooms, amenities }) {
  return (
    <Section id="rooms">
      <Container>
        <SectionHeading
          title="Three room categories, one short walk from the temple"
          body="Every category is air-conditioned, with lift access and parking at the building. Photographs of the rooms are being taken now and will be added here."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card lg:h-full">
              <Image
                src="/images/ganga-sunrise.jpg"
                alt="Boats on the Ganges at sunrise below the ghats of Varanasi"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal step={1}>
            <ul className="divide-y divide-line border-y border-line">
              {rooms.map((room) => (
                <li key={room.slug}>
                  <Link
                    href={`/rooms/${room.slug}`}
                    className="group flex items-start justify-between gap-6 py-6"
                  >
                    <span>
                      <span className="block font-display text-xl font-extrabold tracking-tight transition-colors group-hover:text-accent-ink">
                        {room.name}
                      </span>
                      <span className="mt-1 block text-[13px] font-medium uppercase tracking-[0.1em] text-accent-ink">
                        {room.occupancy}
                      </span>
                      <span className="mt-3 block text-[15px] leading-relaxed text-muted">
                        {room.summary}
                      </span>
                    </span>
                    <ArrowRight
                      size={18}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-muted transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Six amenities read better as a chip row than as a bulleted list. */}
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
        </Reveal>
      </Container>
    </Section>
  );
}
