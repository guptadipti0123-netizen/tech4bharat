import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import OurStory from "@/components/sections/about/OurStory";
import VisionMissionObjectives from "@/components/sections/about/VisionMissionObjectives";
import CoreValues from "@/components/sections/about/CoreValues";
import WhereWeFocus from "@/components/sections/about/WhereWeFocus";

export const metadata: Metadata = {
  title: "About Us | Tech4Bharat",
  description:
    "Tech4Bharat is being established as a national platform to support social entrepreneurship, innovation, and startup development across Bharat.",
  openGraph: {
    title: "About Tech4Bharat",
    description:
      "A national platform to support social entrepreneurship, innovation, and startup development across Bharat.",
    type: "website",
    locale: "en_IN",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <VisionMissionObjectives />
      <CoreValues />
      <WhereWeFocus />
    </>
  );
}
