import Link from "next/link";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { business, addressLines } from "@/data/business";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";
import { BrandLockup } from "./BrandMark";

export default function Footer() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    business.mapsQuery
  )}`;

  return (
    <footer className="mt-auto bg-panel text-on-panel">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
        <div>
          <BrandLockup tone="panel" />
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-on-panel-muted">
            Rooms, meals and travels for pilgrims in Kasi, looked after by the
            trust. Serving the Kasi, Tirupathi and Arunachalam circuit.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={business.phoneTel}
              className="inline-flex items-center gap-2 rounded-control bg-accent px-4 py-2.5 text-[14px] font-semibold text-on-accent transition-opacity hover:opacity-90"
            >
              <Phone size={16} strokeWidth={1.5} aria-hidden="true" />
              {business.phoneDisplay}
            </a>
            <a
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-control border border-white/25 px-4 py-2.5 text-[14px] font-semibold text-on-panel transition-colors hover:border-accent"
            >
              <MessageCircle size={16} strokeWidth={1.5} aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-accent">
            Pages
          </h2>
          <ul className="mt-5 space-y-3">
            {business.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15px] text-on-panel-muted transition-colors hover:text-on-panel"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-accent">
            Where we are
          </h2>
          <address className="mt-5 not-italic text-[15px] leading-relaxed text-on-panel-muted">
            {addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-on-panel transition-colors hover:text-accent"
          >
            <MapPin size={16} strokeWidth={1.5} aria-hidden="true" />
            Get directions
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-6 text-[13px] text-on-panel-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            {business.name}. {business.trustee.role}: {business.trustee.name}.
          </p>
          <Link href="/credits" className="transition-colors hover:text-accent">
            Photography credits
          </Link>
        </div>
      </div>
    </footer>
  );
}
