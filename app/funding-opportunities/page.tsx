import type { Metadata } from "next";
import FundingHero from "@/components/sections/funding/FundingHero";
import FundingCategories from "@/components/sections/funding/FundingCategories";
import FundingTimeline from "@/components/sections/funding/FundingTimeline";

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
    </>
  );
}
