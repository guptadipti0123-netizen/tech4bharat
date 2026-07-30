import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroMedia from "@/components/ui/HeroMedia";
import { heroImage } from "@/lib/images";

interface HeroProps {
  /** Optional background video URL; the hero gracefully falls back to the parallax image without one. */
  videoSrc?: string;
}

export default function Hero({ videoSrc }: HeroProps) {
  return (
    <section id="top" className="relative flex items-center overflow-hidden py-20 text-white sm:py-24">
      <HeroMedia imageSrc={heroImage} videoSrc={videoSrc} />
      {/* Dark overlay for legible text over the photo */}
      <div className="absolute inset-0 bg-linear-to-b from-brand-950/95 via-brand-950/85 to-brand-950" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Empowering Innovation. Enabling Startups.
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
              Tech4Bharat is a startup incubator helping ambitious founders turn ideas into
              category-defining companies — through mentorship, capital, and community.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/programs" size="lg">
                Explore Programs <ArrowRight size={18} />
              </Button>
              <Button
                href="/contact"
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
