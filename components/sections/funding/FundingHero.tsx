import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Blob from "@/components/ui/Blob";
import DotGrid from "@/components/ui/DotGrid";

/** Split hero â€” label/heading/subtitle/CTA on the left, a real fundraising-themed photo
 *  on the right, framed and never cropped. Replaces the generic centered `PageHero`. */
export default function FundingHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-brand-50 via-white to-white pb-10 pt-24 sm:pb-14 sm:pt-28">
      <DotGrid className="left-0 top-0 h-full w-full text-brand-700/6" />
      <Blob tone="brand" className="-left-32 top-10 h-96 w-96" />
      <Blob tone="accent" className="-right-24 bottom-0 h-80 w-80" animate={false} />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <AnimatedSection>
            <h1 className="text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0B2A4A] sm:text-[32px] lg:text-[36px]">
              Funding Opportunities
            </h1>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-slate-600">
              Helping startups discover grants, investors, accelerator programs, CSR
              support, and government funding opportunities.
            </p>
            <div className="mt-7">
              <Button href="/contact" size="lg">
                Talk to Our Team <ArrowRight size={18} />
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} animation="scale">
            <div className="relative mx-auto w-full max-w-xl">
              <div
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[36px] opacity-70"
                style={{ background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(21,94,154,0.16), transparent 70%)" }}
                aria-hidden="true"
              />
              <div className="relative h-80 w-full overflow-hidden rounded-[28px] border-4 border-white bg-white shadow-2xl sm:h-96">
                <Image
                  src="/images/events/event-fundraising.jpg"
                  alt="Founders at a Tech4Bharat fundraising session"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center brightness-105"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
