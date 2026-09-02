import Image from "next/image";
import { Container, Section, TwoTone } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/*
  Split feature, photograph right. The page is locked to one light theme, so
  this sits on the surface rather than inverting to a dark band mid scroll.
*/

export default function MealsSection() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <TwoTone lead="You will not have to" trail="hunt for food you can eat" />

            <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-muted">
              Rice, pappu, pachadi, rasam and a curry, cooked in our own kitchen
              by people who cook it at home. For guests on a yatra package,
              breakfast, lunch and dinner in Kasi are part of the price.
            </p>

            <dl className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="rounded-card bg-surface-2 p-5">
                <dt className="font-display text-[16px] font-extrabold tracking-tight">
                  In Kasi
                </dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-muted">
                  Breakfast, lunch and dinner
                </dd>
              </div>
              <div className="rounded-card bg-accent p-5">
                <dt className="font-display text-[16px] font-extrabold tracking-tight text-on-accent">
                  On outstation days
                </dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-on-accent/75">
                  Lunch and evening dinner
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal step={1}>
            <div className="settle-media relative aspect-[4/3] w-full overflow-hidden rounded-card">
              <Image
                src="/images/andhra-meals.jpg"
                alt="A South Indian vegetarian meal served on a plate"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
