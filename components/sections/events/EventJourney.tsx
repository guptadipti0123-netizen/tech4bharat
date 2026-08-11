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

/** Event Journey — a compact conference-agenda layout: one large image on the left that
 *  swaps to match whichever day is hovered, beside a stacked list of six slim rows
 *  (number, title, one-line description, arrow) on the right. No card grid, no per-item
 *  accent colors, no long timeline — everything fits in one compact block. */
export default function EventJourney() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8 sm:py-12">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Event Journey"
            description="Six days, six themes — from foundations to policy drafting."
            titleClassName="text-[27px] font-bold leading-[1.1] tracking-[-0.02em] text-[#163B2D] sm:text-[38px] lg:text-[44px]"
            descriptionClassName="mt-2 text-[14px] sm:mt-3 sm:text-[18px] font-medium leading-relaxed text-[#5F6B68]"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-9 grid gap-6 lg:grid-cols-[2fr_3fr] lg:items-stretch">
          <div className="relative h-64 w-full overflow-hidden rounded-[18px] shadow-md lg:h-full">
            <Image
              src={days[active].image}
              alt={`${days[active].title} at the Digital & Tech Policy Workshop`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-2.5">
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
                    "group flex items-center gap-3 rounded-2xl border bg-linear-to-br from-white to-emerald-50/60 px-4 py-2.5 text-left shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-lg",
                    isActive ? "border-2 border-emerald-300 from-emerald-100 to-teal-100 shadow-lg" : "border-emerald-200"
                  )}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-emerald-600 to-teal-500 text-xs font-bold text-white shadow-[0_0_10px_rgba(16,185,129,0.45)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="inline-block rounded-full bg-emerald-100/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                      Day {i + 1}
                    </span>
                    <div className="mt-1 flex items-center gap-1.5">
                      <TopicIcon size={14} className="shrink-0 text-emerald-600" />
                      <h3 className="truncate text-[17px] font-semibold text-ink-900">{day.title}</h3>
                    </div>
                    <p className="mt-0.5 truncate text-[14px] text-[#667085]">{day.description}</p>
                  </div>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 transition-colors duration-200 group-hover:bg-emerald-600">
                    <ArrowRight size={14} className="text-emerald-600 transition-colors duration-200 group-hover:text-white" />
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
