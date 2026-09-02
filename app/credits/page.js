import PageHeader from "@/components/site/PageHeader";
import { Container, Section } from "@/components/ui/Section";
import { imageCredits } from "@/data/image-credits";

export const metadata = {
  title: "Photography credits",
  description:
    "Attribution for the openly licensed photography used on this site.",
  robots: { index: false, follow: true },
};

export default function CreditsPage() {
  return (
    <>
      <PageHeader
        title="Photography credits"
        intro="The photographs on this site are openly licensed images of Kasi and the yatra route, sourced from Wikimedia Commons. Several of these licences require attribution, which is what this page provides. Photographs of our own rooms will replace them as they are taken."
      />

      <Section>
        <Container>
          <ul className="divide-y divide-line border-y border-line">
            {imageCredits.map((c) => (
              <li key={c.slug} className="py-5">
                <p className="font-display text-[17px] font-extrabold tracking-tight">
                  {c.title}
                </p>
                <p className="mt-1 text-[15px] text-muted">
                  {c.author}. Licensed under {c.license}.
                </p>
                <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[14px]">
                  {c.source ? (
                    <a
                      href={c.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-text underline underline-offset-4 transition-colors hover:text-accent-ink"
                    >
                      Source
                    </a>
                  ) : null}
                  {c.licenseUrl ? (
                    <a
                      href={c.licenseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-text underline underline-offset-4 transition-colors hover:text-accent-ink"
                    >
                      Licence terms
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
