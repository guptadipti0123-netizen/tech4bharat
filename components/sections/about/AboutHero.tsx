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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#071A2E] via-[#0B2A4A] to-[#0E355D] pb-12 pt-24 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-32">
      {/* Decorative ambient lighting */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Text & CTAs */}
          <AnimatedSection className="lg:col-span-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-300 backdrop-blur-md">
              About Tech4Bharat
            </span>
            <h1 className="mt-3.5 text-balance text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[34px]">
              A National Platform for{" "}
              <span className="text-[#FFE08A]">Social Entrepreneurship</span> & Innovation
            </h1>
            <p className="mt-4 text-balance text-sm leading-relaxed text-slate-200 sm:text-base">
              Tech4Bharat is proposed to be established as a Section 8 Company — a national
              platform for social entrepreneurship and innovation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
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
            <div className="relative mx-auto aspect-4/3 w-full max-w-lg overflow-hidden rounded-2xl border-2 border-white/20 bg-white/5 shadow-2xl shadow-black/40 backdrop-blur-sm sm:rounded-3xl">
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
