import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import StartupPortfolioGrid from "@/components/sections/portfolio/StartupPortfolioGrid";

export const metadata: Metadata = {
  title: "Startup Portfolio | Tech4Bharat",
  description:
    "Meet the founders and startups Tech4Bharat has incubated and accelerated — from AgriTech to HealthTech, FinTech, and beyond.",
  openGraph: {
    title: "Startup Portfolio | Tech4Bharat",
    description: "The founders and startups Tech4Bharat has incubated and accelerated across India.",
    type: "website",
    locale: "en_IN",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Founders we've backed"
        description="A growing portfolio of Indian startups building category-defining companies across sectors critical to Bharat's next decade."
        icon={Building2}
        titleClassName="font-(family-name:--font-poppins) text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-[#163B2D] sm:text-[36px] lg:text-[42px]"
        descriptionClassName="mx-auto mt-3 max-w-175 text-[18px] text-[#5B6B73]"
      />
      <section className="bg-white pb-8 pt-4 sm:pb-12 sm:pt-2">
        <Container>
          <StartupPortfolioGrid />
        </Container>
      </section>
    </>
  );
}
