import {
  ClipboardCheck,
  Coffee,
  Handshake,
  Layers,
  Mic2,
  PartyPopper,
  Presentation,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { AgendaSession } from "@/lib/events";

interface BootcampScheduleProps {
  agenda: AgendaSession[];
}

const iconByTitle: Record<string, LucideIcon> = {
  Registration: ClipboardCheck,
  "Welcome Session": Handshake,
  "Expert Talks": Mic2,
  "Business Workshops": Layers,
  "Lunch & Networking": Coffee,
  "Investor Readiness Session": TrendingUp,
  "Startup Pitching": Presentation,
  "Closing & Networking": PartyPopper,
};

/** Bootcamp schedule — a clean vertical timeline. A single spine runs down the page, with
 *  sessions alternating left/right of it on wider screens and collapsing to one left-aligned
 *  line on mobile. One accent color only (Deep Green), no gradients, no scrolling, no
 *  carousel, no arrows. */
export default function BootcampSchedule({ agenda }: BootcampScheduleProps) {
  return (
    <section id="schedule" className="bg-secondary-50 py-10 sm:py-11">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Bootcamp Schedule"
            description="A simple, single-day flow from registration to closing."
            className="max-w-3xl"
            titleClassName="text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-[#163B2D] sm:text-[36px] lg:text-[42px]"
            descriptionClassName="mx-auto mt-3 max-w-175 text-[17px] leading-relaxed text-slate-600 sm:text-[18px]"
          />
        </AnimatedSection>

        <div className="relative mx-auto mt-9 max-w-3xl">
          <div
            aria-hidden="true"
            className="absolute left-4 top-0 h-full w-px bg-[#1F5E4B]/15 sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="flex flex-col gap-8">
            {agenda.map((session, i) => {
              const Icon = iconByTitle[session.title] ?? ClipboardCheck;
              const isRight = i % 2 === 1;
              return (
                <AnimatedSection key={session.title} delay={i * 0.04}>
                  <div className="relative flex items-start sm:items-center">
                    <span className="absolute left-4 top-1 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#1F5E4B] bg-white text-[#1F5E4B] sm:left-1/2 sm:top-1/2 sm:-translate-y-1/2">
                      <Icon size={15} strokeWidth={1.75} />
                    </span>

                    <div
                      className={`ml-12 w-full rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_4px_16px_rgba(22,58,58,0.06)] sm:ml-0 sm:w-[calc(50%-2rem)] ${
                        isRight ? "sm:ml-auto" : "sm:mr-auto"
                      }`}
                    >
                      <span className="inline-flex items-center rounded-full bg-[#1F5E4B]/8 px-2.5 py-1 text-xs font-bold text-[#1F5E4B]">
                        {session.time}
                      </span>
                      <h3 className="mt-2 text-base font-bold leading-tight text-ink-900">{session.title}</h3>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
