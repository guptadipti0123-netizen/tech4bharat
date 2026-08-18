import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import StartupPortfolioGrid from "@/components/sections/portfolio/StartupPortfolioGrid";

export const metadata: Metadata = {
  title: "Social Impact Startup Portfolio | Tech4Bharat",
  description:
    "Explore Tech4Bharat's portfolio of social impact ventures across 13 core sectors — from AgriTech and Water & Sanitation to MedTech, AI/ML, ClimateTech, Clean Energy, Waste Management, and Women Empowerment.",
  openGraph: {
    title: "Social Impact Startup Portfolio | Tech4Bharat",
    description: "The founders and startups Tech4Bharat has incubated and accelerated across 13 social impact domains in India.",
    type: "website",
    locale: "en_IN",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Social Impact Startup Portfolio"
        description="A growing showcase of purpose-driven Indian startups building sustainable, high-impact innovations across 13 critical socio-economic domains."
        icon={Building2}
        titleClassName="font-(family-name:--font-poppins) text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0B2A4A] sm:text-[32px] lg:text-[36px]"
        descriptionClassName="mx-auto mt-3 max-w-175 text-[16px] sm:text-[18px] text-[#526777]"
      />
      <section className="bg-white pb-8 pt-4 sm:pb-12 sm:pt-2">
        <Container>
          <StartupPortfolioGrid />
        </Container>
      </section>
    </>
  );
}
