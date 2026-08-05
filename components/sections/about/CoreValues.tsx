import { Building2, Landmark, Lightbulb, Rocket, Sprout, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import DotGrid from "@/components/ui/DotGrid";
import { cn } from "@/lib/utils";

interface ValueCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: ValueCard[] = [
  {
    icon: Rocket,
    title: "Future-Ready Skills",
    description: "Equipping youth with cutting-edge technology capabilities.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Driving technological advancement and creative solutions.",
  },
  {
    icon: Building2,
    title: "Capacity Building",
    description: "Strengthening innovation and entrepreneurial capabilities.",
  },
  {
    icon: Sprout,
    title: "Meaningful Impact",
    description: "Creating sustainable technology-driven social impact.",
  },
];

const accentGradients = [
  "from-brand-500 to-brand-700",
  "from-accent-400 to-accent-600",
  "from-brand-400 to-accent-500",
  "from-accent-500 to-brand-600",
];

const researchAreas = [
  "Artificial Intelligence & Machine Learning",
  "Cyberspace Operations",
  "Digital Defence",
  "Critical Cyber Technologies",
  "National Security",
  "Strategic Technologies",
  "Technology Governance",
  "Tech Policy",
];

const knowledgePartners = [
  { name: "COEP Tech University", location: "Pune" },
  { name: "VJTI", location: "Mumbai" },
];

/** Core Values — a 40/60 split: four compact value cards on the left, two premium
 *  information containers (research-area pills, knowledge-partner cards) on the right,
 *  instead of a single repeated 6-card grid. */
export default function CoreValues() {
  return (
    <section
      id="core-values"
      className="relative overflow-hidden bg-linear-to-br from-brand-50 via-white to-accent-50/40 py-8 sm:py-12"
    >
      <DotGrid className="left-0 top-0 h-full w-full text-brand-700/4" />

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            eyebrow="Our Foundation"
            title="Core Values"
            description="The principles and focus areas that guide every Tech4Bharat initiative."
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-6 lg:grid-cols-5 lg:gap-8">
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {values.map((value, i) => {
              const Icon = value.icon;
              const accent = accentGradients[i % accentGradients.length];
              return (
                <AnimatedSection key={value.title} delay={i * 0.06} animation="scale">
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#E4F3ED] bg-white/70 p-5 shadow-[0_4px_20px_rgba(22,58,58,0.07)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_16px_36px_rgba(22,58,58,0.14)]">
                    <span
                      className={cn("absolute inset-x-0 top-0 h-1 bg-linear-to-r opacity-80", accent)}
                      aria-hidden="true"
                    />
                    <span
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br text-white shadow-sm",
                        accent
                      )}
                    >
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-3 text-base font-bold leading-snug text-ink-900">{value.title}</h3>
                    <p className="mt-1 flex-1 text-sm leading-relaxed text-slate-600">{value.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <div className="flex flex-col gap-5 lg:col-span-3">
            <AnimatedSection delay={0.1}>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                  Research Areas
                </span>
                <h3 className="mt-2 text-xl font-bold text-ink-900">Emerging Technologies</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {researchAreas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-700"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.16}>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                  Knowledge Partners
                </span>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {knowledgePartners.map((partner) => (
                    <div
                      key={partner.name}
                      className="flex flex-col items-center gap-2 rounded-2xl border border-slate-100 bg-slate-50/60 px-3 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:bg-white hover:shadow-md"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                        <Landmark size={20} />
                      </span>
                      <p className="text-sm font-bold leading-tight text-ink-900">{partner.name}</p>
                      <p className="text-xs text-slate-500">{partner.location}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
