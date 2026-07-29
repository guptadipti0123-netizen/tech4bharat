import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import EventCard from "@/components/sections/events/EventCard";
import { events } from "@/lib/events";

export default function UpcomingEventsPreview() {
  const upcoming = events.filter((event) => event.status === "Upcoming").slice(0, 3);
  if (upcoming.length === 0) return null;

  return (
    <section id="events" className="bg-white py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <SectionTitle
              eyebrow="Upcoming Events"
              title="Where founders learn, connect, and grow"
              align="left"
              className="mx-0 text-left"
            />
            <Button href="/events" variant="outline" className="shrink-0">
              View All Events
            </Button>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((event, i) => (
            <AnimatedSection key={event.id} delay={i * 0.08}>
              <EventCard event={event} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
