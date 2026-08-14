"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Book, Brain, FileText, Globe, Lightbulb, Shield, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

interface JourneyDay {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

const days: JourneyDay[] = [
  {
    title: "Foundations",
    description: "Inaugural session and an introduction to technology policy fundamentals.",
    image: "/images/legacy/workshops/day1-i2-intro-to-tech-policy.png",
    icon: Book,
  },
  {
    title: "AI & Digital Governance",
    description: "Exploring digital narratives, blockchain, and AI-driven public infrastructure.",
    image: "/images/legacy/workshops/day2-i1-digital-narratives-blockchain.png",
    icon: Brain,
  },
  {
    title: "Innovation",
    description: "Innovation management, policy, and strategic frameworks for emerging tech.",
    image: "/images/legacy/workshops/day3-i2-strategic-innovation-frameworks.png",
    icon: Lightbulb,
  },
  {
    title: "Cyber-Physical Systems",
    description: "Clean energy systems, UAV simulation, and security analysis.",
    image: "/images/legacy/workshops/day4-i1-clean-energy-cyberphysical-systems.jpg",
    icon: Shield,
  },
  {
    title: "Strategic Technologies",
    description: "Earth observation, strategic technologies, and a field visit to C-DAC.",
    image: "/images/legacy/workshops/day5-i2-field-visit-advanced-computing.png",
    icon: Globe,
  },
  {
    title: "Policy Drafting",
    description: "Hands-on policy drafting exercises and the program's concluding session.",
    image: "/images/legacy/policy-workshop-3.jpg",
    icon: FileText,
  },
];

/** Event Journey â€” a compact conference-agenda layout: one large image on the left that
 *  swaps to match whichever day is hovered, beside a stacked list of six slim rows
 *  (number, title, one-line description, arrow) on the right. No card grid, no per-item
 *  accent colors, no long timeline â€” everything fits in one compact block. */
export default function EventJourney() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-linear-to-br from-blue-50 via-sky-50 to-blue-50 py-8 sm:py-12">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Event Journey"
            description="Six days, six themes â€” from foundations to policy drafting."
            titleClassName="text-[22px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0B2A4A] sm:text-[26px] lg:text-[30px]"
            descriptionClassName="mt-2 text-[14px] sm:mt-3 sm:text-[18px] font-medium leading-relaxed text-[#526777]"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-9 grid gap-6 lg:grid-cols-[2fr_3fr] lg:items-stretch">
          <div className="relative h-36 w-full overflow-hidden rounded-[14px] shadow-md sm:h-64 sm:rounded-[18px] lg:h-full">
            <Image
              src={days[active].image}
              alt={`${days[active].title} at the Digital & Tech Policy Workshop`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-1.5 sm:gap-2.5">
            {days.map((day, i) => {
              const TopicIcon = day.icon;
              const isActive = active === i;
              return (
                <button
                  key={day.title}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={cn(
                    "group flex items-center gap-2 rounded-xl border bg-linear-to-br from-white to-blue-50/60 px-2.5 py-1.5 text-left shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-2.5",
                    isActive ? "border-2 border-blue-300 from-blue-100 to-sky-100 shadow-lg" : "border-blue-200"
                  )}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-sky-500 text-[9px] font-bold text-white shadow-[0_0_10px_rgba(21,94,154,0.45)] sm:h-9 sm:w-9 sm:text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="inline-block rounded-full bg-blue-100/70 px-1.5 py-0.5 text-[7.5px] font-bold uppercase tracking-wide text-blue-700 sm:px-2 sm:text-[10px]">
                      Day {i + 1}
                    </span>
                    <div className="mt-0.5 flex min-w-0 items-center gap-1 sm:mt-1 sm:gap-1.5">
                      <TopicIcon size={11} className="shrink-0 text-blue-600 sm:hidden" />
                      <TopicIcon size={14} className="hidden shrink-0 text-blue-600 sm:block" />
                      <h3 className="min-w-0 text-[12px] font-semibold leading-snug text-ink-900 sm:text-[17px]">{day.title}</h3>
                    </div>
                    <p className="mt-0.5 line-clamp-2 text-[10px] leading-snug text-[#526777] sm:text-[14px]">{day.description}</p>
                  </div>
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 transition-colors duration-200 group-hover:bg-blue-600 sm:h-7 sm:w-7">
                    <ArrowRight size={11} className="text-blue-600 transition-colors duration-200 group-hover:text-white sm:hidden" />
                    <ArrowRight size={14} className="hidden text-blue-600 transition-colors duration-200 group-hover:text-white sm:block" />
                  </span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
