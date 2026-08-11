import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

/** The homepage hero — institutional, not a marketing template. Solid-color heading (no
 *  gradient clip-text), one real workshop photo, two plain CTAs. Height is driven entirely
 *  by padding + content (no min-h viewport lock), so the next section begins almost
 *  immediately after a single scroll. */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pb-6 pt-20 sm:pb-14 sm:pt-28">
      <Container className="relative">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-14">
          <div className="text-center lg:text-left">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#B8860B]">
                <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
                Startup Incubator
              </span>
              <h1 className="mx-auto mt-3 max-w-2xl text-balance text-[clamp(1.875rem,7vw,2.25rem)] font-bold leading-[1.2] text-ink-900 sm:mt-4 md:text-5xl lg:mx-0 lg:text-5xl xl:text-5xl">
                Empowering Founders to Build Bharat&apos;s Future
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="mx-auto mt-2.5 max-w-2xl text-balance text-[15px] leading-relaxed text-slate-600 sm:mt-4 sm:text-lg md:text-xl lg:mx-0">
                A startup incubator supporting founders through mentorship, capital access,
                and community.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="mt-4 flex flex-col items-center justify-center gap-2.5 sm:mt-8 sm:flex-row sm:gap-4 lg:justify-start">
                <Button href="/programs" size="lg">
                  Explore Programs <ArrowRight size={18} />
                </Button>
                <Button href="/contact" size="lg" variant="outline">
                  Join Ecosystem
                </Button>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.15}>
            <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-[28px] border-4 border-white shadow-2xl lg:max-w-none">
              <Image
                src="/images/gallery/gallery-1.jpg"
                alt="Founders at a Tech4Bharat workshop session"
                width={1600}
                height={1067}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-contain"
              />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}