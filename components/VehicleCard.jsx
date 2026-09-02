import Image from "next/image";
import { Car } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { business } from "@/data/business";

/*
  One card per vehicle. Where a photograph exists it fills a 4:3 frame; where
  the trust has not sent one yet the frame carries the vehicle name instead of
  a broken tile, matching how the room cards behave.
*/

export default function VehicleCard({ vehicle }) {
  const enquire = whatsappLink(
    `Namaste, I would like to book the ${vehicle.name} through ${business.shortName} in Kasi.`
  );

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-surface border border-line bg-surface-3">
      <div className="relative aspect-[4/3] w-full bg-surface-2">
        {vehicle.image ? (
          <Image
            src={vehicle.image}
            alt={vehicle.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
            <Car
              size={30}
              strokeWidth={1.5}
              className="text-accent-ink"
              aria-hidden="true"
            />
            <span className="font-display text-lg font-bold tracking-tight text-accent-ink">
              {vehicle.name}
            </span>
            <span className="text-[13px] text-muted">
              Photograph coming shortly
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold tracking-tight">
          {vehicle.name}
        </h3>
        <p className="mt-1 text-[13px] font-medium uppercase tracking-[0.1em] text-accent-ink">
          {vehicle.seats}
        </p>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
          {vehicle.description}
        </p>

        <a
          href={enquire}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center rounded-control border border-line bg-surface px-4 py-2.5 text-[15px] font-semibold text-text transition-colors hover:border-accent hover:bg-surface-2"
        >
          Ask about this vehicle
        </a>
      </div>
    </article>
  );
}
