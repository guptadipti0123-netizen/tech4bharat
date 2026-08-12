import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#f6fcf8_0%,#ffffff_56%,#fdf9ef_100%)] pb-6 pt-20 sm:pb-8 sm:pt-24 lg:pb-20 lg:pt-28"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top_left,_rgba(31,78,61,0.09),_transparent_60%)]" />
      <div className="absolute -left-10 top-14 h-44 w-44 rounded-full bg-[#D4A017]/12 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#1F4E3D]/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-md lg:text-left">
          <AnimatedSection>
            <h1 className="text-balance text-[clamp(1.8rem,3.2vw,2.7rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-900 lg:text-[clamp(2rem,2.8vw,2.9rem)]">
              Empowering Founders to Build{" "}
              <span className="text-[#D4A017]">Bharat&apos;s Future</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <p className="mx-auto mt-3 max-w-xl text-[14px] leading-6 text-slate-600 sm:mt-4 sm:text-[15px] lg:mx-0 lg:max-w-2xl">
              A startup incubator supporting founders through mentorship, capital access, and
              community.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.18}>
            <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-2 sm:mt-6 sm:gap-3 lg:justify-start">
              <Button href="/programs" size="sm" className="w-fit justify-center px-5 py-2.5 text-[15px] sm:min-w-[164px] sm:w-auto sm:px-4 sm:py-2 sm:text-sm">
                Explore Programs <ArrowRight size={17} />
              </Button>
              <Button href="/contact" size="sm" variant="outline" className="w-fit justify-center px-5 py-2.5 text-[15px] sm:min-w-[164px] sm:w-auto sm:px-4 sm:py-2 sm:text-sm">
                Join Ecosystem
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </Container>

      {/* Hero photo — a single Image whose wrapper switches from an in-flow block below the
          text on mobile to an absolutely-positioned right-side background layer at lg+.
          object-contain everywhere so the full photo is always visible, never cropped. */}
      <AnimatedSection delay={0.14} className="relative z-0 mx-auto mt-8 aspect-3/2 w-full max-w-md px-6 sm:px-8 lg:absolute lg:inset-y-0 lg:right-0 lg:z-0 lg:mx-0 lg:mt-0 lg:aspect-auto lg:w-[45%] lg:max-w-none lg:px-0">
        <Image
          src="/images/gallery/gallery-1.jpg"
          alt="Founders at a Tech4Bharat workshop session"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-contain lg:object-right"
        />
      </AnimatedSection>
    </section>
  );
}
