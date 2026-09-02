import { Container } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { business } from "@/data/business";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-20">
      <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-accent-ink">
        Page not found
      </p>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
        This page is not here
      </h1>
      <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-muted">
        The link may be old or mistyped. Everything about rooms, packages and
        vehicles is a click away, or call the trust and we will help.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Button href="/">Back to the start</Button>
        <Button href={business.phoneTel} variant="outline">
          {business.phoneDisplay}
        </Button>
      </div>
    </Container>
  );
}
