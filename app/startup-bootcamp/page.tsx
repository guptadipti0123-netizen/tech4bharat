import type { Metadata } from "next";
import BootcampHero from "@/components/sections/bootcamp/BootcampHero";
import BootcampOverview from "@/components/sections/bootcamp/BootcampOverview";
import BootcampHighlights from "@/components/sections/bootcamp/BootcampHighlights";
import WhoShouldAttend from "@/components/sections/bootcamp/WhoShouldAttend";
import ExpertsSpeakers from "@/components/sections/bootcamp/ExpertsSpeakers";
import BootcampSchedule from "@/components/sections/bootcamp/BootcampSchedule";
import BootcampSessions from "@/components/sections/bootcamp/BootcampSessions";
import { events } from "@/lib/events";

export const metadata: Metadata = {
  title: "One-Day Startup Bootcamp 2026 | Tech4Bharat",
  description:
    "A one-day intensive startup bootcamp in Mumbai this October 2026 — helping early-stage founders validate ideas, build sustainable businesses, connect with experts, and prepare for funding.",
  openGraph: {
    title: "One-Day Startup Bootcamp 2026 | Tech4Bharat",
    description: "A one-day intensive startup bootcamp in Mumbai, October 2026.",
    type: "website",
    locale: "en_IN",
  },
};

export default function StartupBootcampPage() {
  const bootcamp = events.find((event) => event.slug === "tech4bharat-startup-bootcamp-2026");

  return (
    <>
      <BootcampHero />
      <BootcampOverview />
      <BootcampSessions />
      <BootcampHighlights />
      <WhoShouldAttend />
      <ExpertsSpeakers />
      {bootcamp?.agenda && <BootcampSchedule agenda={bootcamp.agenda} />}
    </>
  );
}
