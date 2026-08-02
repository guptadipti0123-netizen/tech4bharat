import type { Metadata } from "next";
import { Calendar } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import EventStats from "@/components/sections/events/EventStats";
import FeaturedEvent from "@/components/sections/events/FeaturedEvent";
import UpcomingEventsGrid from "@/components/sections/events/UpcomingEventsGrid";
import SpeakerHighlights from "@/components/sections/events/SpeakerHighlights";
import EventTimelineRow from "@/components/sections/events/EventTimelineRow";
import ContactCTA from "@/components/sections/ContactCTA";
import { events } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events & Bootcamps | Tech4Bharat",
  description:
    "Explore upcoming and past Tech4Bharat events, workshops, and the flagship Tech4Bharat Startup Bootcamp.",
  openGraph: {
    title: "Events & Bootcamps | Tech4Bharat",
    description: "Upcoming and past events from Tech4Bharat, including our flagship Startup Bootcamp.",
    type: "website",
    locale: "en_IN",
  },
};

export default function EventsPage() {
  const featured = events.find((event) => event.featured) ?? events[0];
  const upcoming = events.filter((event) => event.status === "Upcoming" && event.id !== featured.id);
  const past = events.filter((event) => event.status === "Past");

  return (
    <>
      <PageHero
        eyebrow="Events & Bootcamps"
        title="Events"
        description="Where founders learn, connect, and grow."
        image="/images/gallery/gallery-1.jpg"
        icon={Calendar}
      />

      <EventStats />

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <AnimatedSection>
            <SectionTitle eyebrow="Flagship" title="Featured Event" align="left" />
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="mt-8">
            <FeaturedEvent event={featured} />
          </AnimatedSection>
        </Container>
      </section>

      <UpcomingEventsGrid events={upcoming} />
      <SpeakerHighlights events={events} />

      {past.length > 0 && (
        <section className="relative overflow-hidden bg-white py-14 sm:py-20">
          <Container>
            <AnimatedSection>
              <SectionTitle
                eyebrow="Look Back"
                title="Past Events"
                description="A timeline of the sessions, summits, and bootcamps that built this community."
              />
            </AnimatedSection>

            <div className="relative mt-16 space-y-16 lg:space-y-20">
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-brand-100 lg:block"
              />
              {past.map((event, i) => (
                <AnimatedSection key={event.id} delay={i * 0.1}>
                  <EventTimelineRow event={event} reverse={i % 2 === 1} />
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      )}

      <ContactCTA />
    </>
  );
}
