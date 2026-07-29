import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import InvestorCategoryGrid from "@/components/sections/investors/InvestorCategoryGrid";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Investor Network | Tech4Bharat",
  description:
    "Meet the angel investors, venture capital funds, CSR partners, government funding schemes, and family offices backing Tech4Bharat founders.",
  openGraph: {
    title: "Investor Network | Tech4Bharat",
    description: "The capital network backing Tech4Bharat founders, from angels to government funding.",
    type: "website",
    locale: "en_IN",
  },
};

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor Network"
        title="Capital partners for every stage"
        description="From first checks to growth capital, meet the investors and funding partners actively backing Tech4Bharat founders."
      />
      <InvestorCategoryGrid />
      <ContactCTA />
    </>
  );
}
