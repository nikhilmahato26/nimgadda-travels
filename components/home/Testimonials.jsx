import Image from "next/image";
import { Quote } from "lucide-react";
import { Container, Section, TwoTone } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

/*
  Renders nothing while data/testimonials.js is empty. The trust has not given
  us real guest quotes and writing fictional ones for a real business is not
  something to ship, so the section stays off until it has something true to
  show. Add an entry to that file and it appears here.
*/

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section>
      <Container>
        <TwoTone lead="What guests" trail="say afterwards" />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} step={i % 3} className="h-full">
              <figure className="flex h-full flex-col rounded-card bg-surface-2 p-6">
                <Quote
                  size={26}
                  strokeWidth={1.5}
                  className="text-accent-ink"
                  aria-hidden="true"
                />
                <blockquote className="mt-4 flex-1 text-[16px] leading-relaxed">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  {t.image ? (
                    <span className="relative size-10 overflow-hidden rounded-pill">
                      <Image
                        src={t.image}
                        alt=""
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </span>
                  ) : null}
                  <span>
                    <span className="block font-display text-[15px] font-extrabold tracking-tight">
                      {t.name}
                    </span>
                    <span className="block text-[13px] text-muted">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
