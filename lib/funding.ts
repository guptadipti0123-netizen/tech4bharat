export interface FundingOption {
  title: string;
  amount: string;
  eligibility: string;
  description: string;
  icon: "PiggyBank" | "Star" | "Gift" | "Landmark" | "TrendingUp" | "Rocket";
}

export const fundingOptions: FundingOption[] = [
  {
    title: "Seed Funding",
    amount: "₹10L – ₹50L",
    eligibility: "Idea to MVP stage, incorporated entity",
    description: "Early-stage capital to build your first product and validate demand.",
    icon: "PiggyBank",
  },
  {
    title: "Angel Investment",
    amount: "₹25L – ₹1Cr",
    eligibility: "Working product with early traction",
    description: "Curated introductions to our network of angel investors and operators.",
    icon: "Star",
  },
  {
    title: "CSR Grants",
    amount: "₹5L – ₹75L",
    eligibility: "Registered social-impact ventures",
    description: "Purpose-aligned grant funding from corporate CSR partners.",
    icon: "Gift",
  },
  {
    title: "Government Grants",
    amount: "Up to ₹1Cr",
    eligibility: "DPIIT-recognized startups",
    description: "Guided access to Startup India Seed Fund and state innovation grants.",
    icon: "Landmark",
  },
  {
    title: "Venture Capital",
    amount: "₹1Cr – ₹10Cr+",
    eligibility: "Proven product-market fit, growth traction",
    description: "Series A/B introductions to VCs actively investing in Bharat-focused startups.",
    icon: "TrendingUp",
  },
  {
    title: "Incubation Support",
    amount: "Non-dilutive",
    eligibility: "Open to all Tech4Bharat cohort startups",
    description: "Workspace, mentorship, and services support — no equity taken.",
    icon: "Rocket",
  },
];
