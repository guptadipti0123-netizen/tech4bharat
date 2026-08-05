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
    <section id="top" className="relative overflow-hidden bg-white pb-10 pt-24 sm:pb-14 sm:pt-28">
      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="text-center lg:text-left">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
                <span className="h-px w-8 bg-current opacity-50" aria-hidden="true" />
                Tech4Bharat
              </span>
              <h1 className="mt-4 text-balance text-[40px] font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-[52px] lg:text-[64px]">
                Empowering Founders to Build Bharat&apos;s Future
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="mx-auto mt-5 max-w-lg text-balance text-lg leading-relaxed text-slate-600 sm:text-xl lg:mx-0">
                A startup incubator supporting founders through mentorship, capital access,
                and community.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
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
            <div className="relative mx-auto aspect-4/3 w-full max-w-lg overflow-hidden rounded-[28px] border-4 border-white shadow-2xl lg:max-w-none">
              <Image
                src="/images/gallery/gallery-1.jpg"
                alt="Founders at a Tech4Bharat workshop session"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
