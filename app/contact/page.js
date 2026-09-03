import { Phone, MessageCircle, MapPin } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import { Container, Section } from "@/components/ui/Section";
import EnquiryForm from "@/components/EnquiryForm";
import { business, addressLines } from "@/data/business";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

export const metadata = {
  title: "Contact",
  description:
    "Call or message Nimmagadda Vari Andhra Tours and Travels in Panday Haweli, Varanasi 221001, for rooms, yatra packages and vehicles in Kasi.",
};

export default function ContactPage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    business.mapsQuery
  )}`;

  const channels = [
    {
      icon: Phone,
      title: business.phoneDisplay,
      body: `${business.owner.name}, ${business.owner.role}`,
      href: business.phoneTel,
      external: false,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      body: "Photographs, rates and availability",
      href: whatsappLink(whatsappMessages.general),
      external: true,
    },
    {
      icon: MapPin,
      title: "Panday Haweli, Varanasi",
      body: addressLines.join(", "),
      href: mapsUrl,
      external: true,
    },
  ];

  return (
    <>
      <PageHeader
        title="Talk to us"
        intro="The quickest way is a phone call. If you would rather write, leave your number below and we will call you back."
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <ul className="space-y-1">
                {channels.map(({ icon: Icon, title, body, href, external }) => (
                  <li key={title}>
                    <a
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-start gap-4 border-b border-line py-5"
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.5}
                        className="mt-1 shrink-0 text-accent-ink"
                        aria-hidden="true"
                      />
                      <span>
                        <span className="block font-display text-lg font-extrabold tracking-tight transition-colors group-hover:text-accent-ink">
                          {title}
                        </span>
                        <span className="text-[14px] leading-relaxed text-muted">
                          {body}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-card border border-line bg-surface-3 p-6">
                <h2 className="font-display text-lg font-extrabold tracking-tight">
                  Coming by train
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  Tell us your train number and arrival time and we will have a
                  vehicle waiting at the station. Late night arrivals are fine,
                  somebody will be awake.
                </p>
              </div>
            </div>

            <EnquiryForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
