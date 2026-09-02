import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Check,
  ArrowRight,
  MapPin,
  Users,
  Wind,
  ShowerHead,
  Tv,
  Wifi,
  ArrowUpDown,
  CircleParking,
  ShieldCheck,
  CalendarCheck,
  PhoneCall,
  RefreshCcw,
} from "lucide-react";
import { Container, Section } from "@/components/ui/Section";
import RoomHeroGallery from "@/components/RoomHeroGallery";
import RoomBookingCard from "@/components/RoomBookingCard";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/ui/Reveal";
import { getRooms, getRoomBySlug } from "@/lib/content";
import { neighbourhood, roomPolicies } from "@/data/rooms";

const amenityIcons = {
  "Air conditioning": Wind,
  "Hot water round the clock": ShowerHead,
  "LED television": Tv,
  "Wi-Fi": Wifi,
  "Lift access": ArrowUpDown,
  "Car parking": CircleParking,
};

const policyIcons = [ShieldCheck, CalendarCheck, PhoneCall, RefreshCcw];

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

  // "The space": occupancy plus the room's first three amenities, four tiles
  // to match how this fact grid reads elsewhere on the room's card.
  const spaceHighlights = [
    { icon: Users, label: room.occupancy },
    ...room.amenities.slice(0, 3).map((label) => ({
      icon: amenityIcons[label],
      label,
    })),
  ];

  return (
    <>
      <Section className="pb-0">
        <Container>
          <Link
            href="/rooms"
            className="text-[14px] font-medium text-muted transition-colors hover:text-accent-ink"
          >
            All rooms
          </Link>

          <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl">
            {room.name}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} strokeWidth={1.5} aria-hidden="true" />
              Panday Haweli, Varanasi
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users size={15} strokeWidth={1.5} aria-hidden="true" />
              {room.occupancy}
            </span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_20rem] lg:items-start lg:gap-12">
            <div>
              <RoomHeroGallery images={room.gallery} name={room.name} />

              {/* Jump links rather than JS-swapped tabs: every section stays
                  in the server HTML and readable without clicking anything,
                  the nav just scrolls to it. */}
              <nav
                aria-label="Room sections"
                className="mt-8 flex gap-2 border-b border-line"
              >
                {[
                  ["#overview", "Overview"],
                  ["#amenities", "Amenities"],
                  ["#policies", "Policies"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="border-b-2 border-transparent px-1 pb-3 text-[14px] font-semibold text-muted transition-colors hover:border-accent-ink hover:text-text"
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <div id="overview" className="pt-8">
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-accent-ink">
                  {room.tagline}
                </p>
                <h2 className="mt-2 font-display text-xl font-extrabold tracking-tight">
                  The space
                </h2>
                <ul className="mt-4 grid grid-cols-2 gap-3">
                  {spaceHighlights.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="flex flex-col items-center gap-2 rounded-card border border-line bg-surface-3 px-4 py-5 text-center"
                    >
                      {Icon ? (
                        <Icon
                          size={20}
                          strokeWidth={1.5}
                          className="text-accent-ink"
                          aria-hidden="true"
                        />
                      ) : null}
                      <span className="text-[14px] font-medium">{label}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="mt-10 font-display text-xl font-extrabold tracking-tight">
                  About this room
                </h2>
                <div className="mt-4 space-y-4 text-[16px] leading-relaxed text-muted">
                  {room.description.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </div>

              <div id="amenities" className="border-t border-line pt-8 mt-10">
                <h2 className="font-display text-xl font-extrabold tracking-tight">
                  What is in the room
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {room.amenities.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-[15px] leading-relaxed"
                    >
                      <Check
                        size={16}
                        strokeWidth={2}
                        className="shrink-0 text-accent-ink"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div id="policies" className="border-t border-line pt-8 mt-10">
                <h2 className="font-display text-xl font-extrabold tracking-tight">
                  How this room is booked
                </h2>
                <ul className="mt-5 grid gap-5 sm:grid-cols-2">
                  {roomPolicies.map((policy, i) => {
                    const Icon = policyIcons[i % policyIcons.length];
                    return (
                      <li key={policy.title} className="flex gap-3">
                        <Icon
                          size={18}
                          strokeWidth={1.5}
                          className="mt-0.5 shrink-0 text-accent-ink"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="font-display text-[15px] font-bold tracking-tight">
                            {policy.title}
                          </p>
                          <p className="mt-1 text-[14px] leading-relaxed text-muted">
                            {policy.body}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <Link
                  href="/packages"
                  className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold transition-colors hover:text-accent-ink"
                >
                  See the yatra packages
                  <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24">
              <RoomBookingCard roomName={room.name} />
            </aside>
          </div>
        </Container>
      </Section>

      {/* The rooms are not all photographed yet, so this shows the streets
          around the building too, captioned so it is never mistaken for the
          room itself. */}
      <Section className="border-t border-line">
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
