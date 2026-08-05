import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import DotGrid from "@/components/ui/DotGrid";

/** Mixed-layout highlight grid — deliberately no two cards share the same treatment
 *  (photo-only, photo+text, and text-only cards side by side) so it reads as a scannable
 *  wall of moments rather than a repeated card pattern. */
export default function EventHighlightsGrid() {
  return (
    <section className="relative overflow-hidden bg-secondary-50 py-8 sm:py-12">
      <DotGrid className="left-0 top-0 h-full w-full text-secondary-700/6" />

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            eyebrow="Highlights"
            title="Event Highlights"
            description="Key moments from the program."
          />
        </AnimatedSection>

        <div className="mt-10 grid auto-rows-40 grid-cols-2 gap-4 lg:grid-cols-4">
          <AnimatedSection className="col-span-2 row-span-2">
            <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <Image
                src="/images/legacy/workshops/day2-i2-digital-public-infrastructure-ai.png"
                alt="Faculty and students at the close of the Digital Public Infrastructure & AI session"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink-900/60 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-ink-900 shadow-md">
                📸 Image Card
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.06} className="col-span-2 row-span-1 lg:col-span-1">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <div className="relative h-20 w-full shrink-0">
                <Image
                  src="/images/legacy/policy-workshop-2.png"
                  alt="Dr. Chaitanya Giri of Observer Research Foundation speaking at the workshop"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center bg-white p-3">
                <span className="text-[11px] font-bold uppercase tracking-wide text-brand-600">
                  🎤 Speaker Highlight
                </span>
                <p className="mt-1 text-xs leading-snug text-slate-600">
                  Dr. Chaitanya Giri, Fellow, Observer Research Foundation, opened the program.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12} className="col-span-1 row-span-1">
            <div className="flex h-full flex-col justify-center rounded-3xl border border-slate-200 bg-linear-to-br from-accent-50 to-white p-4 shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wide text-accent-700">
                🤝 Networking Moment
              </span>
              <p className="mt-1 text-xs leading-snug text-slate-600">
                Students and faculty connected across sessions, building a cross-institutional
                policy network.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.18} className="col-span-1 row-span-1">
            <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <Image
                src="/images/legacy/workshops/day4-i2-uav-simulation-security-analysis.png"
                alt="Cohort in the lecture hall during the UAV Simulation & Security Analysis session"
                fill
                sizes="25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink-900/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-semibold text-white">
                🧠 Learning Session
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.24} className="col-span-2 row-span-1 lg:col-span-1">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <div className="relative h-20 w-full shrink-0">
                <Image
                  src="/images/legacy/workshops/day5-i1-earth-observation-strategic-tech.png"
                  alt="Cohort on their field visit to C-DAC"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center bg-white p-3">
                <span className="text-[11px] font-bold uppercase tracking-wide text-secondary-700">
                  🏛 Institutional Visit
                </span>
                <p className="mt-1 text-xs leading-snug text-slate-600">Field visit to C-DAC.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
