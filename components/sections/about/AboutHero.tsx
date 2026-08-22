import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

/**
 * About page hero — modern 2-column split layout.
 * Left: Badge, heading, description, and action buttons.
 * Right: A beautifully framed, uncropped photo card in natural proportions.
 */
export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#071A2E] via-[#0B2A4A] to-[#0E355D] pb-8 pt-18 sm:pb-14 sm:pt-26 lg:pb-20 lg:pt-32">
      {/* Decorative ambient lighting */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-5 sm:gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Text & CTAs */}
          <AnimatedSection className="lg:col-span-6">
            <h1 className="text-balance text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              About Tech4Bharat
            </h1>
            <p className="mt-3 text-balance text-[13px] leading-relaxed text-slate-200 sm:mt-4 sm:text-[15px]">
              Tech4Bharat is proposed to be established as a Section 8 Company — a national
              platform for social entrepreneurship and innovation.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
              <Button href="/programs" size="sm">
                Explore Programs <ArrowRight size={16} />
              </Button>
              <Button href="/contact" size="sm" variant="outline">
                Contact Us
              </Button>
            </div>
          </AnimatedSection>

          {/* Right Column: Framed Natural Photo Card */}
          <AnimatedSection delay={0.1} className="lg:col-span-6">
            <div className="relative mx-auto aspect-16/10 sm:aspect-4/3 w-full max-w-sm sm:max-w-lg overflow-hidden rounded-xl border border-white/20 bg-white/5 shadow-xl shadow-black/30 backdrop-blur-sm sm:rounded-3xl sm:border-2">
              <Image
                src="/images/about/team.png"
                alt="Tech4Bharat team collaborating at the innovation centre"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
