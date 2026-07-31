import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import EventListSection from "@/components/sections/events/EventListSection";
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
  return (
    <>
      <PageHero
        eyebrow="Events & Bootcamps"
        title="Events"
        description="Where founders learn, connect, and grow."
      />

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <AnimatedSection>
            <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-slate-600">
              From flagship bootcamps to focused workshops, our events bring the Tech4Bharat
              community together to learn, connect, and grow.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <EventListSection title="Latest Events" description="" events={events} tone="muted" />
    </>
  );
}
