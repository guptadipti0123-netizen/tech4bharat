import type { Metadata } from "next";
import PartnersHero from "@/components/sections/partners/PartnersHero";
import TrustedByMarquee from "@/components/sections/partners/TrustedByMarquee";
import PartnerCategoryGrid from "@/components/sections/partners/PartnerCategoryGrid";
import IndiaReachMap from "@/components/sections/partners/IndiaReachMap";
import PartnersLegacyMoments from "@/components/sections/partners/PartnersLegacyMoments";
import PartnershipProcess from "@/components/sections/partners/PartnershipProcess";

export const metadata: Metadata = {
  title: "Partners & Collaborators | Tech4Bharat",
  description:
    "Meet the academic institutions, government bodies, NGOs, industry partners, research organizations, and investor networks collaborating with Tech4Bharat.",
  openGraph: {
    title: "Partners & Collaborators | Tech4Bharat",
    description: "The ecosystem of institutions and organizations collaborating with Tech4Bharat.",
    type: "website",
    locale: "en_IN",
  },
};

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <TrustedByMarquee />
      <PartnerCategoryGrid />
      <IndiaReachMap />
      <PartnersLegacyMoments />
      <PartnershipProcess />
    </>
  );
}
