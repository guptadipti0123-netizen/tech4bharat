import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Blob from "@/components/ui/Blob";
import { getInitials } from "@/lib/utils";
import type { EventItem } from "@/lib/events";

interface SpeakerHighlightsProps {
  events: EventItem[];
}

/** Speaker highlights — glass cards over a softly blobbed backdrop, deduplicated across
 *  every event so a recurring speaker only ever appears once. */
export default function SpeakerHighlights({ events }: SpeakerHighlightsProps) {
  const seen = new Map<string, { name: string; designation: string }>();
  for (const event of events) {
    for (const speaker of event.speakers) {
      if (!seen.has(speaker.name)) seen.set(speaker.name, speaker);
    }
  }
  const speakers = Array.from(seen.values()).slice(0, 8);

  if (speakers.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-secondary-50 py-14 sm:py-20">
      <Blob tone="secondary" className="-right-24 top-0 h-72 w-72" />
      <Blob tone="brand" className="-left-20 bottom-0 h-64 w-64" animate={false} />

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            eyebrow="Who's Speaking"
            title="Voices from the ecosystem"
            description="Operators, investors, and academics who've taken the stage at Tech4Bharat events."
          />
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {speakers.map((speaker, i) => (
            <AnimatedSection key={speaker.name} delay={i * 0.05} animation="scale">
              <div className="glass-surface flex flex-col items-center gap-2 rounded-2xl border border-white/60 p-5 text-center shadow-[0_8px_24px_rgba(31,78,61,0.08)] transition-all duration-300 hover:-translate-y-1.5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                  {getInitials(speaker.name)}
                </span>
                <p className="text-sm font-bold text-ink-900">{speaker.name}</p>
                <p className="text-xs leading-snug text-slate-600">{speaker.designation}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
