import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import EventCard from "@/components/sections/events/EventCard";
import FeaturedEvent from "@/components/sections/events/FeaturedEvent";
import EventTimelineRow from "@/components/sections/events/EventTimelineRow";
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

  const featured = events.find((event) => event.featured) ?? events[0];
  const rest = events.filter((event) => event !== featured);
  const cardEvents = rest.slice(0, 3);
  const timelineEvents = rest.slice(3);

  return (
    <section className={tone === "muted" ? "bg-secondary-50 py-16 sm:py-24" : "bg-white py-16 sm:py-24"}>
      <Container>
        <AnimatedSection>
          <SectionTitle eyebrow="Events" title={title} description={description} />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-12">
          <FeaturedEvent event={featured} />
        </AnimatedSection>

        {cardEvents.length > 0 && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cardEvents.map((event, i) => (
              <AnimatedSection key={event.id} delay={0.15 + i * 0.08}>
                <EventCard event={event} />
              </AnimatedSection>
            ))}
          </div>
        )}

        {timelineEvents.length > 0 && (
          <div className="relative mt-20 space-y-16 lg:space-y-24">
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-brand-100 lg:block"
            />
            {timelineEvents.map((event, i) => (
              <AnimatedSection key={event.id} delay={i * 0.1}>
                <EventTimelineRow event={event} reverse={i % 2 === 1} />
              </AnimatedSection>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
