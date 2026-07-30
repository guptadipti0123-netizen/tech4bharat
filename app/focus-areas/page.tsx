import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FocusAreaGrid from "@/components/sections/focus-areas/FocusAreaGrid";

export const metadata: Metadata = {
  title: "Focus Areas | Tech4Bharat",
  description:
    "Explore the focus areas Tech4Bharat backs — from AgriTech and AI/ML to Clean Energy, Women Empowerment, and social impact innovation.",
  openGraph: {
    title: "Focus Areas | Tech4Bharat",
    description: "The sectors and domains Tech4Bharat's startup incubator backs across India.",
    type: "website",
    locale: "en_IN",
  },
};

export default function FocusAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Focus Areas"
        title="Domains where we back bold founders"
        description="The sectors where Tech4Bharat invests mentorship, capital, and ecosystem support."
      />
      <FocusAreaGrid />
    </>
  );
}
