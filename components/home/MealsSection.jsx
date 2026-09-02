import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

/*
  The one colour block on the page. Navy is the trust's own colour and the
  footer already carries it, so this band reads as brand structure rather than
  a theme flip. Full-bleed image left, copy right.
*/

export default function MealsSection() {
  return (
    <section className="bg-panel text-on-panel">
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:min-h-[520px]">
          <Image
            src="/images/andhra-meals.jpg"
            alt="A South Indian vegetarian meal served on a plate"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex items-center px-5 py-16 sm:px-8 lg:py-24 lg:pl-16 lg:pr-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">
              You will not have to hunt for food you can eat
            </h2>

            <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-on-panel-muted">
              Rice, pappu, pachadi, rasam and a curry, cooked in our own kitchen
              by people who cook it at home. For guests on a yatra package,
              breakfast, lunch and dinner in Kasi are part of the price. On the
              days you travel out, lunch and evening dinner come with you.
            </p>

            <dl className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <dt className="font-display text-lg font-bold tracking-tight">
                  In Kasi
                </dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-on-panel-muted">
                  Breakfast, lunch and dinner
                </dd>
              </div>
              <div>
                <dt className="font-display text-lg font-bold tracking-tight">
                  On outstation days
                </dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-on-panel-muted">
                  Lunch and evening dinner
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
