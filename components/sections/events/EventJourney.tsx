"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

interface JourneyDay {
  title: string;
  description: string;
  image: string;
}

const days: JourneyDay[] = [
  {
    title: "Foundations",
    description: "Inaugural session and an introduction to technology policy fundamentals.",
    image: "/images/legacy/workshops/day1-i2-intro-to-tech-policy.png",
  },
  {
    title: "AI & Digital Governance",
    description: "Exploring digital narratives, blockchain, and AI-driven public infrastructure.",
    image: "/images/legacy/workshops/day2-i1-digital-narratives-blockchain.png",
  },
  {
    title: "Innovation",
    description: "Innovation management, policy, and strategic frameworks for emerging tech.",
    image: "/images/legacy/workshops/day3-i2-strategic-innovation-frameworks.png",
  },
  {
    title: "Cyber-Physical Systems",
    description: "Clean energy systems, UAV simulation, and security analysis.",
    image: "/images/legacy/workshops/day4-i1-clean-energy-cyberphysical-systems.jpg",
  },
  {
    title: "Strategic Technologies",
    description: "Earth observation, strategic technologies, and a field visit to C-DAC.",
    image: "/images/legacy/workshops/day5-i2-field-visit-advanced-computing.png",
  },
  {
    title: "Policy Drafting",
    description: "Hands-on policy drafting exercises and the program's concluding session.",
    image: "/images/legacy/policy-workshop-3.jpg",
  },
];

/** Event Journey — a compact conference-agenda layout: one large image on the left that
 *  swaps to match whichever day is hovered, beside a stacked list of six slim rows
 *  (number, title, one-line description, arrow) on the right. No card grid, no per-item
 *  accent colors, no long timeline — everything fits in one compact block. */
export default function EventJourney() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-8 sm:py-12">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Event Journey"
            description="Six days, six themes — from foundations to policy drafting."
            titleClassName="text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-[#163B2D] sm:text-[38px] lg:text-[44px]"
            descriptionClassName="mt-3 text-[18px] sm:text-[18px] font-medium leading-relaxed text-[#5F6B68]"
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
            {days.map((day, i) => (
              <button
                key={day.title}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={cn(
                  "group flex h-15 items-center gap-3 rounded-[14px] border border-slate-200 bg-white px-4 text-left shadow-sm transition-colors duration-200 hover:border-[#1F4E3D] hover:bg-[#F2F8F5]",
                  active === i && "border-[#1F4E3D] bg-[#F2F8F5]"
                )}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1F4E3D] text-xs font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-[17px] font-semibold text-ink-900">{day.title}</h3>
                  <p className="truncate text-[14px] text-[#667085]">{day.description}</p>
                </div>
                <ArrowRight
                  size={16}
                  className="shrink-0 text-slate-400 transition-colors duration-200 group-hover:text-[#1F4E3D]"
                />
              </button>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
