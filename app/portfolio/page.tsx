import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import StartupPortfolioGrid from "@/components/sections/portfolio/StartupPortfolioGrid";
import ContactCTA from "@/components/sections/ContactCTA";

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
        eyebrow="Startup Portfolio"
        title="Founders we've backed"
        description="A growing portfolio of Indian startups building category-defining companies across sectors critical to Bharat's next decade."
      />
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <StartupPortfolioGrid />
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
