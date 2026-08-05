import Image from "next/image";
import { CheckCircle2, Handshake, Layers, Network, Sparkles, TrendingUp, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
  tone: "brand" | "sky" | "accent" | "secondary" | "violet" | "orange";
}

const highlights: Highlight[] = [
  {
    icon: Network,
    title: "Strong Startup Ecosystem",
    description: "Connecting founders with mentors, investors, and experts.",
    tone: "brand",
  },
  {
    icon: Layers,
    title: "Practical Learning",
    description: "Hands-on workshops and real-world startup guidance.",
    tone: "sky",
  },
  {
    icon: TrendingUp,
    title: "Investor Readiness",
    description: "Helping startups prepare for funding opportunities.",
    tone: "accent",
  },
  {
    icon: Handshake,
    title: "Strategic Networking",
    description: "Meaningful connections across academia, industry, and government.",
    tone: "secondary",
  },
  {
    icon: Sparkles,
    title: "Innovation & Collaboration",
    description: "Encouraging cross-sector partnerships for long-term impact.",
    tone: "violet",
  },
  {
    icon: CheckCircle2,
    title: "Actionable Outcomes",
    description: "Participants leave with practical knowledge, confidence, and valuable connections.",
    tone: "orange",
  },
];

const toneClasses: Record<Highlight["tone"], { border: string; icon: string }> = {
  brand: { border: "border-l-brand-400", icon: "bg-brand-50 text-brand-700" },
  sky: { border: "border-l-sky-400", icon: "bg-sky-50 text-sky-700" },
  accent: { border: "border-l-accent-400", icon: "bg-accent-50 text-accent-700" },
  secondary: { border: "border-l-secondary-400", icon: "bg-secondary-50 text-secondary-700" },
  violet: { border: "border-l-violet-400", icon: "bg-violet-50 text-violet-700" },
  orange: { border: "border-l-orange-400", icon: "bg-orange-50 text-orange-700" },
};

/** Compact "Impact & Outcomes" closer for the Events page — replaces the old standalone
 *  /impact page (11 sections, stats, timeline, testimonials) with one premium split
 *  container: a real workshop photo beside six scannable highlight cards. */
export default function ImpactOutcomes() {
  return (
    <section id="impact-outcomes" className="bg-sand-50 py-8 sm:py-12">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Event Outcomes"
            title="Impact & Outcomes"
            description="Key outcomes and learnings from Tech4Bharat programs and workshops."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-8">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
            <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-[0_8px_24px_rgba(22,58,58,0.1)] lg:col-span-2">
                <Image
                  src="/images/legacy/policy-workshop-3.jpg"
                  alt="Students and faculty at the closing session of a Tech4Bharat workshop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
                {highlights.map((highlight) => {
                  const Icon = highlight.icon;
                  const tone = toneClasses[highlight.tone];
                  return (
                    <div
                      key={highlight.title}
                      className={cn(
                        "rounded-2xl border border-slate-200 border-l-4 bg-white p-4 shadow-sm",
                        tone.border
                      )}
                    >
                      <span className={cn("flex h-9 w-9 items-center justify-center rounded-full", tone.icon)}>
                        <Icon size={17} />
                      </span>
                      <h3 className="mt-3 text-base font-bold text-ink-900">{highlight.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{highlight.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
