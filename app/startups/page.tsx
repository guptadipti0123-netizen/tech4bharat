import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import StartupPortfolioClient from "@/components/sections/startups/StartupPortfolioClient";
import ContactCTA from "@/components/sections/ContactCTA";
import { startupProfiles } from "@/lib/startups";

export const metadata: Metadata = {
  title: "Startup Portfolio | Tech4Bharat",
  description:
    "Explore the startups incubated and accelerated through Tech4Bharat, spanning AgriTech, HealthTech, FinTech, ClimateTech, and more.",
  openGraph: {
    title: "Startup Portfolio | Tech4Bharat",
    description: "Explore the startups incubated and accelerated through Tech4Bharat.",
    type: "website",
    locale: "en_IN",
  },
};

export default function StartupsPage() {
  return (
    <>
      <PageHero
        eyebrow="Startup Directory"
        title="Founders building the future of Bharat"
        description="Search and filter the startups across our incubation and acceleration programs, spanning every domain, stage, and state we back."
      />
      <section className="py-24 sm:py-32">
        <Container>
          <StartupPortfolioClient startups={startupProfiles} />
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
