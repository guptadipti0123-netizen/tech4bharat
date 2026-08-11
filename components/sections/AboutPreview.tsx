import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { aboutImages } from "@/lib/images";

const pillars = [
  { title: "Mentorship", description: "Hands-on guidance for early-stage teams" },
  { title: "Capital access", description: "Support to navigate fundraising pathways" },
  { title: "National reach", description: "Programs and partnerships across India" },
];

export default function AboutPreview() {
  return (
    <section id="about" className="bg-white py-14 sm:py-16 lg:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 xl:gap-10">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-[32px] border border-[#1F4E3D]/12 bg-[#F5FAF7] p-2 shadow-[0_8px_24px_rgba(31,78,61,0.06)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-[#1F4E3D]/10 bg-[#FCF7EA]">
                <Image
                  src={aboutImages.team}
                  alt="The Tech4Bharat team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-contain"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="flex h-full flex-col rounded-[32px] border border-[#1F4E3D]/12 bg-[#F7FBF8] p-6 shadow-[0_8px_24px_rgba(31,78,61,0.05)] sm:p-8">
              <h2 className="max-w-2xl text-balance text-[clamp(1.45rem,2.4vw,2rem)] font-semibold leading-tight text-ink-900">
                A startup incubator built for founders with ambition and urgency
              </h2>

              <p className="mt-3 text-[14px] leading-6 text-slate-600 sm:text-[15px]">
                Tech4Bharat helps founders build category-defining companies across India through a blend of practical support and long-term ecosystem access.
              </p>

              <div className="mt-6 space-y-3">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-[18px] border border-[#1F4E3D]/10 bg-[#FCF7EA] px-4 py-3 shadow-[0_4px_12px_rgba(31,78,61,0.04)]">
                    <p className="text-sm font-semibold text-[#1F4E3D]">{pillar.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{pillar.description}</p>
                  </div>
                ))}
              </div>

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
