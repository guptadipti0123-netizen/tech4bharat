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
import Badge from "@/components/ui/Badge";
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

/** Bootcamp schedule — a compact horizontal roadmap (icon + time + title per stop,
 *  connected by a line) instead of a tall vertical timeline. Fits in one row on wider
 *  screens; scrolls horizontally only where it has to (narrow viewports). */
export default function BootcampSchedule({ agenda }: BootcampScheduleProps) {
  return (
    <section id="schedule" className="bg-secondary-50 py-6 sm:py-8">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="The Day"
            title="Bootcamp Schedule"
            description="A simple, single-day flow from registration to closing."
          />
        </AnimatedSection>

        <div className="mt-6 flex items-start overflow-x-auto pb-2">
          {agenda.map((session, i) => {
            const Icon = iconByTitle[session.title] ?? ClipboardCheck;
            return (
              <div key={session.title} className="flex items-start">
                <AnimatedSection delay={i * 0.06} animation="scale">
                  <div className="group relative flex w-28 shrink-0 flex-col items-center gap-2 rounded-[20px] border border-slate-200 bg-white px-3 py-4 text-center shadow-[0_2px_12px_rgba(22,58,58,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_14px_28px_rgba(22,58,58,0.13)] sm:w-32">
                    <span
                      className="absolute inset-x-0 top-0 h-1 rounded-t-[20px] bg-linear-to-r from-brand-500 to-secondary-500 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white shadow-md shadow-brand-700/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon size={17} />
                    </span>
                    <Badge variant="brand" className="px-2 py-0.5 text-[10px]">
                      {session.time}
                    </Badge>
                    <h3 className="text-xs font-bold leading-tight text-ink-900 sm:text-sm">
                      {session.title}
                    </h3>
                  </div>
                </AnimatedSection>

                {i < agenda.length - 1 && (
                  <span
                    className="mt-9 h-px w-5 shrink-0 bg-linear-to-r from-brand-300 to-brand-200 sm:w-8"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
