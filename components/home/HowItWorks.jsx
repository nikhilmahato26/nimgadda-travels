import Image from "next/image";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import { AccordionItem } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

/*
  Split section from the reference: media on the left, an accordion of the
  process on the right. The reference overlays a category pill and a play
  button on its image; there is no video here, so the caption sits below the
  photograph instead of faking a player.
*/

const steps = [
  {
    title: "Tell us your dates",
    body: "Call or send a WhatsApp message with when you are arriving, how many are travelling and whether anyone in the group needs a ground floor room. We reply with what is free.",
  },
  {
    title: "We put the trip together",
    body: "Rooms, meals and the vehicle are arranged as one booking. If you are taking a yatra package we set the route around the days you have and the darshans your family wants.",
  },
  {
    title: "Confirm and travel",
    body: "We hold the rooms once you confirm. Send your train number and a vehicle meets you at the station, however late it arrives.",
  },
  {
    title: "Someone is here the whole time",
    body: "We run the rooms, the kitchen and the fleet, so if something needs changing mid trip you are talking to the people who can change it.",
  },
];

export default function HowItWorks() {
  return (
    <Section>
      <Container>
        <Reveal><SectionHead lead="How a booking" trail="actually works">
          <Button href="/contact" variant="accent">
            Start an enquiry
          </Button>
        </SectionHead></Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-10">
          <Reveal>
            <figure>
              <div className="settle-media relative aspect-[4/5] w-full overflow-hidden rounded-card">
                <Image
                  src="/images/dashashwamedh-ghat.jpg"
                  alt="Boats moored at Dashashwamedh Ghat, Varanasi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 26rem"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[14px] leading-relaxed text-muted">
                Dashashwamedh Ghat, a short walk from the building in Panday
                Haweli.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal step={1}>
            <div className="grid content-start gap-3">
              {steps.map((s, i) => (
                <AccordionItem key={s.title} title={s.title} defaultOpen={i === 0}>
                  {s.body}
                </AccordionItem>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
