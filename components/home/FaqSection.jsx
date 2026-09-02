import { Container, Section, TwoTone } from "@/components/ui/Section";
import { AccordionItem } from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";
import { faqs } from "@/data/faqs";

export default function FaqSection() {
  return (
    <Section id="faq" className="bg-surface-2">
      <Container>
        <div className="max-w-2xl">
          <TwoTone lead="Questions" trail="we get asked" />
          <p className="mt-4 text-[16px] leading-relaxed text-muted">
            If the answer you need is not here, the trust answers the phone
            directly.
          </p>
        </div>

        <div className="mt-10 grid gap-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} step={i % 3}>
              <AccordionItem title={f.q} defaultOpen={i === 0}>
                {f.a}
              </AccordionItem>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
