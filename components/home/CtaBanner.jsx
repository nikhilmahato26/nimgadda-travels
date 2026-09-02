import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/*
  Full-bleed photograph with centred copy, as in the reference. The scrim is
  what keeps the white heading above AA against the bright sky in the picture.
*/

export default function CtaBanner() {
  return (
    <section className="px-3 pb-4 sm:px-5">
      <div className="relative isolate overflow-hidden rounded-card">
        <Image
          src="/images/ganga-sunrise.jpg"
          alt="Boats on the Ganges at sunrise below the ghats of Varanasi"
          fill
          sizes="100vw"
          className="parallax -z-10 object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[rgb(17_19_24/0.5)]"
        />

        <Container className="py-20 text-center lg:py-28">
          <Reveal>
          <h2 className="hero-copy mx-auto max-w-3xl font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Make the yatra without arranging it yourself
          </h2>
          <p className="hero-copy mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/90">
            Rooms, meals and the vehicle, settled in one phone call.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="onPhoto">
              Start an enquiry
            </Button>
          </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
