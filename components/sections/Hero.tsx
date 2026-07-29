import { ArrowRight, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroMedia from "@/components/ui/HeroMedia";
import HeroFloatingShapes from "@/components/ui/HeroFloatingShapes";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import SectionDivider from "@/components/ui/SectionDivider";
import { heroImage } from "@/lib/images";

interface HeroProps {
  /** Optional background video URL; the hero gracefully falls back to the parallax image without one. */
  videoSrc?: string;
}

export default function Hero({ videoSrc }: HeroProps) {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-40 text-white">
      <HeroMedia imageSrc={heroImage} videoSrc={videoSrc} />
      {/* Dark overlay + brand gradient wash for legible text and on-brand tone over the photo */}
      <div className="absolute inset-0 bg-linear-to-b from-brand-950/95 via-brand-950/85 to-brand-950" />
      <div className="absolute inset-0 bg-linear-to-t from-ink-900/60 via-transparent to-ink-900/40" />

      <HeroFloatingShapes />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-md">
              <Sparkles size={16} className="text-accent-400" />
              Building India&apos;s Startup Future
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Empowering Bold Ideas to Build{" "}
              <span className="bg-linear-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                Tomorrow&apos;s Bharat
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Tech4Bharat is a startup incubator helping ambitious founders turn ideas into
              category-defining companies — through mentorship, capital, and community.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/programs" size="lg" className="shadow-2xl shadow-accent-500/20">
                Explore Programs <ArrowRight size={18} />
              </Button>
              <Button
                href="/contact"
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white/10"
              >
                Join Ecosystem
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </Container>

      <ScrollIndicator />
      <SectionDivider color="text-white/5" />
    </section>
  );
}
