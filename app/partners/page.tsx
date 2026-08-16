import type { Metadata } from "next";
import PartnersHero from "@/components/sections/partners/PartnersHero";
import TrustedByMarquee from "@/components/sections/partners/TrustedByMarquee";
import PartnerCategoryGrid from "@/components/sections/partners/PartnerCategoryGrid";
import PartnersLegacyMoments from "@/components/sections/partners/PartnersLegacyMoments";
import PartnershipProcess from "@/components/sections/partners/PartnershipProcess";

export const metadata: Metadata = {
  title: "Partners & Collaborators | Tech4Bharat",
  description:
    "Tech4Bharat will initiate partnerships with academic institutions, incubators, research organizations, industries, government agencies, and NGOs from August 2026.",
  openGraph: {
    title: "Partners & Collaborators | Tech4Bharat",
    description:
      "Tech4Bharat will initiate partnerships with academic institutions, incubators, research organizations, industries, government agencies, and NGOs from August 2026.",
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
      <PartnersLegacyMoments />
      <PartnershipProcess />
    </>
  );
}
