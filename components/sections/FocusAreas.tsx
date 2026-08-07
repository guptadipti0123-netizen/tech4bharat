import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

/** Focus Areas preview — an asymmetric bento grid (3 cols x 2 rows on desktop): one tall
 *  featured image card spanning both rows, plus four cards filling the remaining cells,
 *  each with its own personality (image, white minimal, soft-green tint, dark premium) —
 *  no borders anywhere, only soft shadows and background color doing the separation. */
export default function FocusAreas() {
  return (
    <section className="bg-white py-6 sm:py-8">
      <Container>
        <AnimatedSection className="mx-auto max-w-162.5 text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight text-ink-900 md:text-4xl">
            Domains we&apos;re doubling down on
          </h2>
          <p className="mt-3 text-balance text-base leading-relaxed text-slate-600">
            We back founders building in sectors critical to India&apos;s growth.
          </p>
        </AnimatedSection>

        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-37.5">
          {/* Card 1 — featured, spans both rows. Real legacy image, glass badge, bottom-aligned content. */}
          <AnimatedSection className="sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <div className="group relative h-56 overflow-hidden rounded-[20px] shadow-sm transition-shadow duration-300 hover:shadow-lg sm:h-64 lg:h-full">
              <Image
                src="/images/legacy/workshops/day2-i2-digital-public-infrastructure-ai.png"
                alt="AI & Machine Learning"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#08121C]/88 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="w-fit rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                  AI / ML
                </span>
                <h3 className="mt-3 text-[20px] font-bold text-white">AI &amp; Machine Learning</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-white/80">
                  Backing founders building applied AI with real-world impact.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 2 — white minimal, category label, arrow button */}
          <AnimatedSection delay={0.08}>
            <div className="group flex h-full min-h-35 flex-col justify-between rounded-[20px] bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#184A3A]">
                HealthTech
              </span>
              <div className="mt-3">
                <h3 className="text-[20px] font-bold text-ink-900">Healthcare</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                  Expanding access to quality, affordable care across India.
                </p>
              </div>
              <div className="mt-3 flex justify-end">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF8F1] text-[#184A3A] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 3 — clean solid card, no image, no label */}
          <AnimatedSection delay={0.14}>
            <div className="flex h-full min-h-35 flex-col justify-center rounded-[20px] bg-[#EEF7F0] p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <h3 className="text-[20px] font-bold text-ink-900">ClimateTech</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                Building climate and environmental resilience.
              </p>
            </div>
          </AnimatedSection>

          {/* Card 4 — soft green tint, category label, thin decorative accent line */}
          <AnimatedSection delay={0.2}>
            <div className="relative flex h-full min-h-35 flex-col justify-between rounded-[20px] bg-[#EEF8F1] p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#184A3A]">
                Education Technology
              </span>
              <div className="mt-3">
                <h3 className="text-[20px] font-bold text-ink-900">EdTech</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                  Reimagining learning for India&apos;s youth.
                </p>
              </div>
              <span className="absolute bottom-6 right-6 h-0.5 w-8 rounded-full bg-[#184A3A]/40" />
            </div>
          </AnimatedSection>

          {/* Card 5 — clean solid card, no image, no label */}
          <AnimatedSection delay={0.26}>
            <div className="flex h-full min-h-35 flex-col justify-center rounded-[20px] bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <h3 className="text-[20px] font-bold text-ink-900">Women Empowerment</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                Expanding opportunity and safety for women.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.32} className="mt-7 text-center">
          <Button href="/about" variant="outline">
            View All <ArrowRight size={16} />
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
