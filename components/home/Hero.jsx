import Image from "next/image";
import { Button } from "@/components/ui/Button";

/*
  Asymmetric split hero. Copy sits left on paper, the river runs full-bleed to
  the right edge. Four text elements only: brand line, headline, one sentence,
  two navigational CTAs. Calling lives in the header and the mobile call bar,
  so it is deliberately not repeated here.
*/

export default function Hero() {
  return (
    <section className="relative border-b border-line">
      <div className="mx-auto grid w-full max-w-[1600px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-0">
        <div className="px-5 pb-4 pt-14 sm:px-8 lg:py-24 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-14">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-accent-ink">
            Kasi, Tirupathi and Arunachalam
          </p>

          <h1 className="mt-5 font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Stay a walk from
            <br />
            Kashi Vishwanath
          </h1>

          <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-muted sm:text-lg">
            Air-conditioned deluxe rooms, Andhra meals cooked fresh, and yatra
            packages across the northern circuit.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/rooms">See rooms</Button>
            <Button href="/packages" variant="secondary">
              Yatra packages
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-[min(78vh,720px)]">
          <Image
            src="/images/ganga-sunrise.jpg"
            alt="Boats on the Ganges at sunrise below the ghats of Varanasi"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover lg:rounded-l-surface"
          />
        </div>
      </div>
    </section>
  );
}
