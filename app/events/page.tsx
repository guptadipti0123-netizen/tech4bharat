import type { Metadata } from "next";
import RecentEventSpotlight from "@/components/sections/events/RecentEventSpotlight";
import UpcomingEventsMarquee from "@/components/sections/events/UpcomingEventsMarquee";
import EventHighlightsGrid from "@/components/sections/events/EventHighlightsGrid";
import EventJourney from "@/components/sections/events/EventJourney";
import PastEventSpotlight from "@/components/sections/events/PastEventSpotlight";
import EventGalleryMarquee from "@/components/sections/events/EventGalleryMarquee";
import ImpactOutcomes from "@/components/sections/events/ImpactOutcomes";
import { events } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events | Tech4Bharat",
  description:
    "Explore upcoming and past Tech4Bharat workshops, challenges, hackathons, networking nights, pitch events, demo days, and webinars.",
  openGraph: {
    title: "Events | Tech4Bharat",
    description: "Upcoming and past workshops, challenges, hackathons, and founder events from Tech4Bharat.",
    type: "website",
    locale: "en_IN",
  },
};

export default function EventsPage() {
  // The Startup Bootcamp now has its own dedicated page (/startup-bootcamp) — it, and any
  // other Bootcamp-typed event, is deliberately excluded from every section of this page.
  const visibleEvents = events.filter((event) => event.type !== "Bootcamp");
  const upcoming = visibleEvents.filter((event) => event.status === "Upcoming");

  return (
    <>
      <RecentEventSpotlight />
      <UpcomingEventsMarquee events={upcoming} />
      <EventHighlightsGrid />
      <EventJourney />
      <PastEventSpotlight />
      <EventGalleryMarquee />
      <ImpactOutcomes />
    </>
  );
}
