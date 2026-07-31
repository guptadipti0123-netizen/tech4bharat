import { ArrowRight, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionDivider from "@/components/ui/SectionDivider";
import Blob from "@/components/ui/Blob";

interface HeroProps {
  /** Optional background video URL; the hero gracefully falls back to the parallax image without one. */
  videoSrc?: string;
}

export default function Hero({ videoSrc }: HeroProps) {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-44">
      {/* Bright, airy gradient wash with soft organic blobs */}
      <div className="absolute inset-0 bg-linear-to-b from-brand-50 via-white to-secondary-50" />
      <Blob tone="brand" className="-left-32 top-16 h-96 w-96" />
      <Blob tone="secondary" className="-right-24 top-1/3 h-80 w-80" />
      <Blob tone="accent" className="bottom-0 left-1/3 h-72 w-72" animate={false} />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <span className="inline-flex animate-float items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm backdrop-blur-md">
              <Sparkles size={16} className="text-accent-500" />
              Building India&apos;s Startup Future
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="mt-8 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              Empowering Bold Ideas to Build{" "}
              <span className="bg-linear-to-r from-brand-500 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
                Tomorrow&apos;s Bharat
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Tech4Bharat is a startup incubator helping ambitious founders turn ideas into
              category-defining companies — through mentorship, capital, and community.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/programs" size="lg">
                Explore Programs <ArrowRight size={18} />
              </Button>
              <Button href="/contact" size="lg" variant="outline">
                Join Ecosystem
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </Container>

      <SectionDivider color="text-white" />

    </section>
  );
}
