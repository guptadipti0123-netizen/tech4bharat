import type { Metadata } from "next";
import FundingHero from "@/components/sections/funding/FundingHero";
import FundingCategories from "@/components/sections/funding/FundingCategories";
import FundingTimeline from "@/components/sections/funding/FundingTimeline";
import WhoCanApply from "@/components/sections/funding/WhoCanApply";
import SupportProvided from "@/components/sections/funding/SupportProvided";
import FundingCTA from "@/components/sections/funding/FundingCTA";

export const metadata: Metadata = {
  title: "Funding Opportunities | Tech4Bharat",
  description:
    "Discover grants, investors, government schemes, CSR funding, and accelerator programs for social impact startups.",
  openGraph: {
    title: "Funding Opportunities | Tech4Bharat",
    description:
      "Grants, investors, government schemes, CSR funding, and accelerator programs for social impact startups.",
    type: "website",
    locale: "en_IN",
  },
};

export default function FundingOpportunitiesPage() {
  return (
    <>
      <FundingHero />
      <FundingCategories />
      <FundingTimeline />
      <WhoCanApply />
      <SupportProvided />
      <FundingCTA />
    </>
  );
}
