import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import EventCard from "@/components/sections/events/EventCard";
import type { EventItem } from "@/lib/events";

interface EventListSectionProps {
  title: string;
  description: string;
  events: EventItem[];
  tone?: "light" | "muted";
}

export default function EventListSection({
  title,
  description,
  events,
  tone = "light",
}: EventListSectionProps) {
  if (events.length === 0) return null;

  return (
    <section className={tone === "muted" ? "bg-slate-50 py-12 sm:py-16" : "py-12 sm:py-16"}>
      <Container>
        <AnimatedSection>
          <SectionTitle eyebrow="Events" title={title} description={description} />
        </AnimatedSection>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, i) => (
            <AnimatedSection key={event.id} delay={(i % 3) * 0.08}>
              <EventCard event={event} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
