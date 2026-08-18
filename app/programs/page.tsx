import type { Metadata } from "next";
import { Lightbulb } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ProgramGrid from "@/components/sections/programs/ProgramGrid";

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
        title="Startup Support Programs"
        description="Comprehensive support for social impact entrepreneurs — mentoring, incubation, funding opportunities, and ecosystem networking."
        icon={Lightbulb}
      />
      <ProgramGrid />
    </>
  );
}
