import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { aboutImages } from "@/lib/images";

export default function AboutPreview() {
  return (
    <section id="about" className="bg-white py-14 sm:py-16 lg:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 xl:gap-10">
          <AnimatedSection>
            {/* aspect-3/2 matches the source photo's real 612x408 ratio exactly, so
                object-contain fills the frame with no letterboxing. */}
            <div className="relative overflow-hidden rounded-[32px] border border-[#1F4E3D]/12 bg-[#F5FAF7] p-2 shadow-[0_8px_24px_rgba(31,78,61,0.06)]">
              <div className="relative aspect-3/2 overflow-hidden rounded-[24px] border border-[#1F4E3D]/10 bg-[#FCF7EA]">
                <Image
                  src={aboutImages.team}
                  alt="The Tech4Bharat team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="flex h-full flex-col rounded-[32px] border border-[#1F4E3D]/12 bg-[#F7FBF8] p-6 shadow-[0_8px_24px_rgba(31,78,61,0.05)] sm:p-8">
              <h2 className="max-w-2xl text-balance text-[clamp(1.45rem,2.4vw,2rem)] font-semibold leading-tight text-ink-900">
                A startup incubator built for Indian founders
              </h2>

              <p className="mt-3 text-[14px] leading-6 text-slate-600 sm:text-[15px]">
                Tech4Bharat is a startup incubator helping ambitious founders build
                category-defining companies across India.
              </p>
              <p className="mt-3 text-[14px] leading-6 text-slate-600 sm:text-[15px]">
                We support founders through mentorship, capital access, and a thriving
                nationwide startup ecosystem.
              </p>

              <div className="mt-6">
                <Button href="/about" variant="outline">
                  Learn More <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
