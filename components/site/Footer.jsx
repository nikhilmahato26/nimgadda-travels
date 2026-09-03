import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { business, addressLines } from "@/data/business";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";
import { BrandLockup } from "./BrandMark";

/*
  Light footer, as in the reference. Its newsletter box is replaced with the
  two ways we are actually reached, because a subscribe field that collects
  addresses nobody sends to would be a dead control.
*/

export default function Footer() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    business.mapsQuery
  )}`;

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-8 border-b border-line pb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <h2 className="max-w-xl font-display text-3xl leading-[1.08] tracking-tight sm:text-4xl">
            <span className="font-extrabold">Kasi is easier</span>{" "}
            <span className="font-light">with somebody expecting you</span>
          </h2>

          <address className="not-italic text-[15px] leading-relaxed text-muted lg:text-right">
            {addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <a
              href={business.phoneTel}
              className="mt-2 inline-block font-semibold text-text hover:text-accent-ink"
            >
              {business.phoneDisplay}
            </a>
          </address>
        </div>

        <div className="grid gap-10 pt-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <BrandLockup />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
              Rooms, meals and travels for pilgrims in Kasi, run by one
              family. Serving the Kasi, Tirupathi and Arunachalam circuit.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={business.phoneTel}
                className="inline-flex items-center gap-2 rounded-pill bg-accent px-5 py-2.5 text-[14px] font-bold text-on-accent transition-all hover:brightness-95"
              >
                <Phone size={16} strokeWidth={1.5} aria-hidden="true" />
                Call us
              </a>
              <a
                href={whatsappLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-pill border border-line px-5 py-2.5 text-[14px] font-semibold transition-colors hover:border-ink"
              >
                <MessageCircle size={16} strokeWidth={1.5} aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-[14px] font-extrabold tracking-tight">
              Pages
            </h3>
            <ul className="mt-5 space-y-3">
              {business.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-muted transition-colors hover:text-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[14px] font-extrabold tracking-tight">
              Visit
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[15px] text-muted transition-colors hover:text-text"
                >
                  <MapPin size={15} strokeWidth={1.5} aria-hidden="true" />
                  Get directions
                </a>
              </li>
              <li>
                <Link
                  href="/credits"
                  className="text-[15px] text-muted transition-colors hover:text-text"
                >
                  Photography credits
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-line pt-6 text-[13px] text-muted">
          {business.name}. {business.owner.role}: {business.owner.name}.
        </p>
      </div>
    </footer>
  );
}
