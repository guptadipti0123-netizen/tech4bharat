import type { Metadata } from "next";
import { Network } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import TrustedByMarquee from "@/components/sections/partners/TrustedByMarquee";
import FeaturedPartner from "@/components/sections/partners/FeaturedPartner";
import PartnershipMetrics from "@/components/sections/partners/PartnershipMetrics";
import PartnerCategoryGrid from "@/components/sections/partners/PartnerCategoryGrid";
import IndiaReachMap from "@/components/sections/partners/IndiaReachMap";
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
      <PageHero
        eyebrow="Our Network"
        title="Partners"
        description="Trusted by institutions across Bharat."
        image="/images/gallery/gallery-15.jpg"
        icon={Network}
      />
      <TrustedByMarquee />
      <FeaturedPartner />
      <PartnershipMetrics />
      <PartnerCategoryGrid />
      <IndiaReachMap />
      <PartnershipProcess />
      <section className="bg-white py-16 sm:py-24">
        <CTASection
          image="/images/gallery/gallery-10.jpg"
          eyebrow="Join the Network"
          title="Become a Tech4Bharat Partner"
          description="Universities, government bodies, corporates, and investors — help us extend founder support to every corner of India."
          buttons={[
            { label: "Partner With Us", href: "mailto:partnerships@tech4bharat.org", variant: "secondary" },
            { label: "Contact the Team", href: "/contact", variant: "outline" },
          ]}
        />
      </section>
    </>
  );
}
