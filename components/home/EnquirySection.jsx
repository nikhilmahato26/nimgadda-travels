import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/ui/Reveal";
import { business, addressLines } from "@/data/business";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

export default function EnquirySection() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    business.mapsQuery
  )}`;

  return (
    <Section id="enquire">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Reservations"
              title="Tell us when you are coming"
              body="Leave your number and we will call you back. If you would rather talk now, the trust answers the phone directly."
            />

            <div className="mt-9 space-y-1">
              <a
                href={business.phoneTel}
                className="group flex items-center gap-4 border-b border-line py-5"
              >
                <Phone
                  size={20}
                  strokeWidth={1.5}
                  className="text-accent-ink"
                  aria-hidden="true"
                />
                <span>
                  <span className="block font-display text-lg font-bold tracking-tight transition-colors group-hover:text-accent-ink">
                    {business.phoneDisplay}
                  </span>
                  <span className="text-[14px] text-muted">
                    {business.trustee.name}, {business.trustee.role}
                  </span>
                </span>
              </a>

              <a
                href={whatsappLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border-b border-line py-5"
              >
                <MessageCircle
                  size={20}
                  strokeWidth={1.5}
                  className="text-accent-ink"
                  aria-hidden="true"
                />
                <span>
                  <span className="block font-display text-lg font-bold tracking-tight transition-colors group-hover:text-accent-ink">
                    Message on WhatsApp
                  </span>
                  <span className="text-[14px] text-muted">
                    Photos, rates and availability
                  </span>
                </span>
              </a>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 py-5"
              >
                <MapPin
                  size={20}
                  strokeWidth={1.5}
                  className="mt-1 text-accent-ink"
                  aria-hidden="true"
                />
                <span>
                  <span className="block font-display text-lg font-bold tracking-tight transition-colors group-hover:text-accent-ink">
                    Get directions
                  </span>
                  <span className="text-[14px] leading-relaxed text-muted">
                    {addressLines.join(", ")}
                  </span>
                </span>
              </a>
            </div>
          </div>

          <Reveal>
            <EnquiryForm />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
