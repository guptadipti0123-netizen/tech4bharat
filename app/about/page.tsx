import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import OurStory from "@/components/sections/about/OurStory";
import WhyTech4Bharat from "@/components/sections/about/WhyTech4Bharat";
import InnovationGallery from "@/components/sections/about/InnovationGallery";
import VisionMission from "@/components/sections/about/VisionMission";
import Objectives from "@/components/sections/about/Objectives";
import CoreValues from "@/components/sections/about/CoreValues";
import JourneyTimeline from "@/components/sections/about/JourneyTimeline";
import ResearchPublications from "@/components/sections/about/ResearchPublications";
import Careers from "@/components/sections/about/Careers";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "About Us | Tech4Bharat",
  description:
    "Learn about Tech4Bharat's story, vision, mission, and the values driving India's next generation of founder-first startup incubation.",
  openGraph: {
    title: "About Tech4Bharat",
    description:
      "Our story, vision, mission, and the values driving India's next generation of startup incubation.",
    type: "website",
    locale: "en_IN",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Tech4Bharat"
        title="Building the launchpad for India's boldest founders"
        description="We're a startup incubator on a mission to make world-class founder support accessible across every corner of Bharat."
      />
      <OurStory />
      <WhyTech4Bharat />
      <InnovationGallery />
      <VisionMission />
      <Objectives />
      <CoreValues />
      <JourneyTimeline />
      <ResearchPublications />
      <Careers />
      <ContactCTA />
    </>
  );
}
