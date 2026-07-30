import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import OurStory from "@/components/sections/about/OurStory";
import VisionMission from "@/components/sections/about/VisionMission";
import Objectives from "@/components/sections/about/Objectives";
import { aboutImages } from "@/lib/images";

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
        eyebrow="Who We Are"
        title="About Tech4Bharat"
        description="A startup incubator helping ambitious founders build category-defining companies across India."
        image={aboutImages.innovationCenter}
      />
      <OurStory />
      <VisionMission />
      <Objectives />
    </>
  );
}
