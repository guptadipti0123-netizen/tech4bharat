import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#f6fcf8_0%,#ffffff_56%,#fdf9ef_100%)] pb-12 pt-20 sm:pb-14 sm:pt-24 lg:pb-20 lg:pt-28"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top_left,_rgba(31,78,61,0.09),_transparent_60%)]" />
      <div className="absolute -left-10 top-14 h-44 w-44 rounded-full bg-[#D4A017]/12 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#1F4E3D]/10 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 xl:gap-14">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <AnimatedSection>
              <h1 className="text-balance text-[clamp(1.8rem,3.2vw,2.7rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-900 lg:text-[clamp(2rem,2.8vw,2.9rem)]">
                Empowering founders to build{" "}
                <span className="text-[#D4A017]">India&apos;s next wave</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <p className="mx-auto mt-3 max-w-xl text-[14px] leading-6 text-slate-600 sm:mt-4 sm:text-[15px] lg:mx-0 lg:max-w-2xl">
                Tech4Bharat helps ambitious founders turn early-stage ideas into resilient companies through mentorship, capital access, and a connected community.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.18}>
              <div className="mt-6 flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:gap-3 lg:justify-start">
                <Button href="/programs" size="sm" className="w-full justify-center sm:min-w-[164px] sm:w-auto">
                  Explore Programs <ArrowRight size={17} />
                </Button>
                <Button href="/contact" size="sm" variant="outline" className="w-full justify-center sm:min-w-[164px] sm:w-auto">
                  Join Ecosystem
                </Button>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.14}>
            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="absolute inset-0 translate-y-2 rounded-[32px] border border-[#1F4E3D]/10 bg-[#1F4E3D]/8" />
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[32px] border border-[#D4A017]/20 bg-[#D4A017]/10" />
              <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-[linear-gradient(135deg,#fcfdfc_0%,#f4f8f5_100%)] p-1.5 shadow-[0_12px_35px_rgba(22,58,58,0.08)] sm:p-2">
                <div className="relative overflow-hidden rounded-[26px] border border-slate-200/70 bg-white/80">
                  <Image
                    src="/images/gallery/gallery-1.jpg"
                    alt="Founders at a Tech4Bharat workshop session"
                    width={1600}
                    height={1067}
                    priority
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
