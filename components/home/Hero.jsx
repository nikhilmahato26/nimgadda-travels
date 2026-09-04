import Image from "next/image";
import HeroSearchCard from "./HeroSearchCard";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { business } from "@/data/business";

/*
  Inset photograph with rounded corners, the nav floating over it, centred copy
  and a search card near the base, following the reference layout. A scrim sits
  between photo and text so the headline clears AA against any part of the
  image.
*/

export default function Hero() {
  return (
    <section className="px-3 pt-2 sm:px-5">
      <div className="relative isolate overflow-hidden rounded-card">
        <Image
          src="/images/kashi-temple.jpg"
          alt="A carved stone temple shikhara in the Kashi Vishwanath Dham complex, Varanasi"
          fill
          priority
          sizes="100vw"
          className="parallax -z-10 object-cover object-[50%_42%]"
        />
        {/*
          Scrim: without it the white headline fails contrast against the hazy
          sky. Weighted to the lower half so the carving up top keeps its
          detail while the headline band stays dark enough.
        */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgb(17_19_24/0.28),rgb(17_19_24/0.52)_45%,rgb(17_19_24/0.72))]"
        />

        <div className="mx-auto flex min-h-[42rem] w-full max-w-7xl flex-col justify-end px-5 pb-6 pt-28 sm:px-8 lg:min-h-[46rem] lg:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="enter inline-flex items-center rounded-pill bg-white/15 px-4 py-2 text-[14px] font-semibold text-white backdrop-blur-sm">
                Kasi, Tirupathi and Arunachalam
              </span>

              <div className="enter inline-flex items-center gap-2 rounded-pill bg-white/20 px-2.5 py-1.5 backdrop-blur-md shadow-sm">
                <a
                  href={business.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-pill bg-white/20 text-white transition-all hover:bg-white hover:text-ink hover:scale-110 active:scale-95"
                >
                  <InstagramIcon size={20} strokeWidth={1.8} />
                </a>
                <a
                  href={business.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-pill bg-white/20 text-white transition-all hover:bg-white hover:text-ink hover:scale-110 active:scale-95"
                >
                  <FacebookIcon size={20} strokeWidth={1.8} />
                </a>
              </div>
            </div>

            <h1 style={{ "--enter-step": 1 }} className="enter hero-copy mt-6 font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Stay a Walk from Kashi Vishwanath
            </h1>

            <p style={{ "--enter-step": 2 }} className="enter hero-copy mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/90">
              Air-conditioned rooms, Andhra meals cooked fresh, and yatra
              packages across the northern circuit.
            </p>
          </div>

          <div style={{ "--enter-step": 3 }} className="enter mx-auto mt-10 w-full max-w-5xl">
            <HeroSearchCard />
          </div>
        </div>
      </div>
    </section>
  );
}
