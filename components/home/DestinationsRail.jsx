import Image from "next/image";
import { ArrowLeftRight } from "lucide-react";
import { Container, Section, SectionHead } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/*
  Eight places is too many for a grid and too few for a filter, so they run in a
  snap rail that bleeds off the right edge. Each card mirrors the reference's
  route card: photograph, then the leg written as Kasi to <place>.

  scroll-padding matches the padding, or snap-start pulls the first card flush
  to the viewport edge and eats the gutter.
*/

export default function DestinationsRail({ destinations }) {
  return (
    <Section className="overflow-hidden">
      <Container>
        <SectionHead lead="Popular" trail="destinations" />
      </Container>

      <Reveal>
        <div
          tabIndex={0}
          role="group"
          aria-label="Places on the yatra route, scroll horizontally"
          className="rail mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-5 pb-4 pl-5 pr-5 sm:scroll-pl-8 sm:pl-8 sm:pr-8 lg:scroll-pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        >
          {destinations.map((place) => (
            <article
              key={place.slug}
              className="w-[74vw] shrink-0 snap-start sm:w-[19rem]"
            >
              <div className="zoom-media relative aspect-[4/5] w-full overflow-hidden rounded-card">
                <Image
                  src={place.image}
                  alt={place.alt}
                  fill
                  sizes="(max-width: 640px) 74vw, 19rem"
                  className="object-cover"
                />
              </div>

              <div className="mt-4 flex items-center gap-2">
                <h3 className="font-display text-[17px] font-extrabold tracking-tight">
                  Kasi
                </h3>
                <ArrowLeftRight
                  size={15}
                  strokeWidth={2}
                  className="text-muted"
                  aria-hidden="true"
                />
                <h3 className="font-display text-[17px] font-extrabold tracking-tight">
                  {place.where}
                </h3>
              </div>
              <p className="mt-1 text-[14px] font-medium text-muted">
                {place.name}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                {place.note}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
