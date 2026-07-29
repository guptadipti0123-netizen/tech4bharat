import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PartnerCategoryGrid from "@/components/sections/partners/PartnerCategoryGrid";
import CSRCollaboration from "@/components/sections/partners/CSRCollaboration";
import PartnershipCTA from "@/components/sections/partners/PartnershipCTA";

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
      <PageHero
        eyebrow="Partners & Collaborators"
        title="Backed by an ecosystem that believes in Bharat"
        description="From academia to government to industry, our partners help us extend founder support across every corner of India."
      />
      <PartnerCategoryGrid />
      <CSRCollaboration />
      <PartnershipCTA />
    </>
  );
}
