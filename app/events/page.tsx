import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FeaturedBootcamp from "@/components/sections/events/FeaturedBootcamp";
import EventListSection from "@/components/sections/events/EventListSection";
import BootcampsTimeline from "@/components/sections/events/BootcampsTimeline";
import UpcomingInitiatives from "@/components/sections/events/UpcomingInitiatives";
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
  const upcoming = events.filter((event) => event.status === "Upcoming" && !event.featured);
  const past = events.filter((event) => event.status === "Past");

  return (
    <>
      <PageHero
        eyebrow="Events & Bootcamps"
        title="Where founders learn, connect, and grow"
        description="From flagship bootcamps to focused workshops, our events bring the Tech4Bharat community together."
      />
      <FeaturedBootcamp />
      <EventListSection
        title="Upcoming Events"
        description="Reserve your spot at our next workshops, challenges, and community gatherings."
        events={upcoming}
        tone="muted"
      />
      <EventListSection
        title="Past Events"
        description="A look back at the sessions, summits, and bootcamps that shaped our community."
        events={past}
      />
      <BootcampsTimeline />
      <UpcomingInitiatives />
      <ContactCTA />
    </>
  );
}
