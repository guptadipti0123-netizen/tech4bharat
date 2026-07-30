import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PartnerCategoryGrid from "@/components/sections/partners/PartnerCategoryGrid";

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
        eyebrow="Our Network"
        title="Partners"
        description="Trusted by institutions across Bharat."
        image="/images/partners/partners-collaboration.jpg"
      />
      <PartnerCategoryGrid />
    </>
  );
}
