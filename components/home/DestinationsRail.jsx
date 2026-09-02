import Image from "next/image";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/*
  Eight places is too many for a grid and too few for a filter. A snap rail
  shows breadth without demanding a decision, and it bleeds off the right edge
  so it reads as scrollable. Keyboard users can focus the rail and use the
  arrow keys.
*/

export default function DestinationsRail({ destinations }) {
  return (
    <Section id="places" className="overflow-hidden">
      <Container>
        <SectionHeading
          title="Where the yatra takes you"
          body="From the ghats at your doorstep out to Prayagraj, Ayodhya, Gaya, Mathura and Agra."
        />
      </Container>

      <Reveal>
        <div
          tabIndex={0}
          role="group"
          aria-label="Places covered on the yatra, scroll horizontally"
          // scroll-padding must match padding, or snap-start pulls the first
          // card flush to the viewport edge and eats the gutter.
          className="rail mt-11 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-5 pb-4 pl-5 pr-5 sm:scroll-pl-8 sm:pl-8 sm:pr-8 lg:scroll-pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        >
          {destinations.map((place) => (
            <article
              key={place.slug}
              className="w-[76vw] shrink-0 snap-start sm:w-[340px]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-surface">
                <Image
                  src={place.image}
                  alt={place.alt}
                  fill
                  sizes="(max-width: 640px) 76vw, 340px"
                  className="object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-display text-lg font-bold tracking-tight">
                  {place.name}
                </h3>
                <p className="mt-0.5 text-[13px] font-medium uppercase tracking-[0.1em] text-accent-ink">
                  {place.where}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {place.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
