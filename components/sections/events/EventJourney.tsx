import Image from "next/image";
import { ClipboardCheck, Compass, Cpu, Lightbulb, Sparkles, Zap, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

interface JourneyDay {
  day: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  tone: "brand" | "sky" | "accent" | "violet" | "orange" | "secondary";
}

const days: JourneyDay[] = [
  {
    day: "Day 1",
    title: "Foundations",
    description: "Inaugural session and an introduction to technology policy fundamentals.",
    image: "/images/legacy/workshops/day1-i2-intro-to-tech-policy.png",
    icon: Sparkles,
    tone: "brand",
  },
  {
    day: "Day 2",
    title: "AI & Digital Governance",
    description: "Exploring digital narratives, blockchain, and AI-driven public infrastructure.",
    image: "/images/legacy/workshops/day2-i1-digital-narratives-blockchain.png",
    icon: Cpu,
    tone: "sky",
  },
  {
    day: "Day 3",
    title: "Innovation",
    description: "Innovation management, policy, and strategic frameworks for emerging tech.",
    image: "/images/legacy/workshops/day3-i2-strategic-innovation-frameworks.png",
    icon: Lightbulb,
    tone: "accent",
  },
  {
    day: "Day 4",
    title: "Cyber-Physical Systems",
    description: "Clean energy systems, UAV simulation, and security analysis.",
    image: "/images/legacy/workshops/day4-i1-clean-energy-cyberphysical-systems.jpg",
    icon: Zap,
    tone: "violet",
  },
  {
    day: "Day 5",
    title: "Strategic Technologies",
    description: "Earth observation, strategic technologies, and a field visit to C-DAC.",
    image: "/images/legacy/workshops/day5-i2-field-visit-advanced-computing.png",
    icon: Compass,
    tone: "orange",
  },
  {
    day: "Day 6",
    title: "Policy Drafting",
    description: "Hands-on policy drafting exercises and the program's concluding session.",
    image: "/images/legacy/policy-workshop-3.jpg",
    icon: ClipboardCheck,
    tone: "secondary",
  },
];

const toneClasses: Record<JourneyDay["tone"], string> = {
  brand: "bg-brand-500",
  sky: "bg-sky-500",
  accent: "bg-accent-500",
  violet: "bg-violet-500",
  orange: "bg-orange-500",
  secondary: "bg-secondary-500",
};

/** Six compact day-cards instead of a long vertical timeline — even-indexed cards are
 *  nudged down slightly so the grid doesn't read as a uniform, repeated block. */
export default function EventJourney() {
  return (
    <section className="bg-white py-8 sm:py-12">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Event Journey"
            title="Event Journey"
            description="Six days, six themes — from foundations to policy drafting."
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {days.map((day, i) => {
            const Icon = day.icon;
            return (
              <AnimatedSection
                key={day.day}
                delay={(i % 6) * 0.06}
                className={cn(i % 2 === 1 && "lg:translate-y-4")}
              >
                <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                  <span className={cn("block h-1.5 w-full", toneClasses[day.tone])} aria-hidden="true" />
                  <div className="relative h-28 w-full overflow-hidden">
                    <Image
                      src={day.image}
                      alt={`${day.day} — ${day.title} at the Digital & Tech Policy Workshop`}
                      fill
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span
                      className={cn(
                        "absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-white shadow-md",
                        toneClasses[day.tone]
                      )}
                    >
                      <Icon size={16} />
                    </span>
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-bold uppercase tracking-wide text-slate-500">{day.day}</span>
                    <h3 className="mt-0.5 text-lg font-bold text-ink-900">{day.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{day.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
