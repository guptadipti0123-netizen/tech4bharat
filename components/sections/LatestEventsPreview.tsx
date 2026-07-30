import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import EventCard from "@/components/sections/events/EventCard";
import { events } from "@/lib/events";

export default function LatestEventsPreview() {
  const latest = events.filter((event) => event.status === "Upcoming").slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section id="events" className="bg-slate-50 py-12 sm:py-16">
      <Container>
        <AnimatedSection>
          <SectionTitle eyebrow="Events" title="Latest events" />
        </AnimatedSection>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((event, i) => (
            <AnimatedSection key={event.id} delay={i * 0.08}>
              <EventCard event={event} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="mt-10 text-center">
          <Button href="/events" variant="outline">
            View All Events
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
