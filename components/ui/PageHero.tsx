import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-brand-950 via-brand-900 to-brand-950 pb-20 pt-40 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-100 w-100 -translate-x-1/2 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl" />
      </div>

      <Container className="relative">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur">
            {eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">{description}</p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
