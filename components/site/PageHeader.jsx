import { Container } from "@/components/ui/Section";

export default function PageHeader({ title, intro, children }) {
  return (
    <header className="border-b border-line py-14 lg:py-20">
      <Container>
        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-muted sm:text-lg">
            {intro}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </header>
  );
}
