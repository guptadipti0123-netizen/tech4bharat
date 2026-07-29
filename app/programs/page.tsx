import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProgramGrid from "@/components/sections/programs/ProgramGrid";
import FundingOpportunities from "@/components/sections/programs/FundingOpportunities";
import Resources from "@/components/sections/programs/Resources";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Startup Support Programs | Tech4Bharat",
  description:
    "From incubation and acceleration to mentorship, funding support, and investor connect — explore Tech4Bharat's full suite of startup support programs.",
  openGraph: {
    title: "Startup Support Programs | Tech4Bharat",
    description:
      "Explore Tech4Bharat's full suite of startup support programs, from incubation to investor connect.",
    type: "website",
    locale: "en_IN",
  },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Startup Support Programs"
        title="Everything a founder needs, in one ecosystem"
        description="Eleven pillars of support designed to take founders from first idea to sustained growth."
      />
      <ProgramGrid />
      <FundingOpportunities />
      <Resources />
      <ContactCTA />
    </>
  );
}
