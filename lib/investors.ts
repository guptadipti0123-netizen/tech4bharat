export type InvestorCategory =
  | "Angel Investors"
  | "Venture Capital"
  | "CSR Partners"
  | "Government Funding"
  | "Family Offices";

export interface InvestorProfile {
  name: string;
  category: InvestorCategory;
  focus: string;
  industries: string[];
  ticketSize: string;
  fundingStage: string;
}

export const investorCategories: InvestorCategory[] = [
  "Angel Investors",
  "Venture Capital",
  "CSR Partners",
  "Government Funding",
  "Family Offices",
];

export const investors: InvestorProfile[] = [
  {
    name: "Bharat Angel Network",
    category: "Angel Investors",
    focus: "First-check believers in founder-market fit",
    industries: ["Consumer", "FinTech", "AgriTech"],
    ticketSize: "₹10L – ₹50L",
    fundingStage: "Seed",
  },
  {
    name: "TiE Angel Chapter",
    category: "Angel Investors",
    focus: "Operator-angels backing early product bets",
    industries: ["SaaS", "DeepTech", "HealthTech"],
    ticketSize: "₹15L – ₹75L",
    fundingStage: "Seed",
  },
  {
    name: "Sunrise Capital Partners",
    category: "Venture Capital",
    focus: "Seed to Series A, Bharat-focused consumer and B2B",
    industries: ["Consumer", "FinTech", "SaaS"],
    ticketSize: "₹1Cr – ₹8Cr",
    fundingStage: "Seed – Series A",
  },
  {
    name: "NextGen Ventures",
    category: "Venture Capital",
    focus: "Category leaders in climate and deep tech",
    industries: ["ClimateTech", "DeepTech", "Manufacturing"],
    ticketSize: "₹2Cr – ₹15Cr",
    fundingStage: "Series A – Series B",
  },
  {
    name: "TechCorp Foundation",
    category: "CSR Partners",
    focus: "Grants for education and livelihood-focused ventures",
    industries: ["EdTech", "Livelihood", "Social Impact"],
    ticketSize: "₹5L – ₹40L",
    fundingStage: "Idea – Seed",
  },
  {
    name: "Horizon Industries CSR",
    category: "CSR Partners",
    focus: "Rural health and sanitation innovation grants",
    industries: ["HealthTech", "Water & Sanitation"],
    ticketSize: "₹10L – ₹60L",
    fundingStage: "Idea – Seed",
  },
  {
    name: "Startup India Seed Fund",
    category: "Government Funding",
    focus: "Proof of concept and early commercialization support",
    industries: ["All Sectors"],
    ticketSize: "Up to ₹50L",
    fundingStage: "Idea – Seed",
  },
  {
    name: "SIDBI Fund of Funds",
    category: "Government Funding",
    focus: "Fund-of-funds support routed through partner VCs",
    industries: ["All Sectors"],
    ticketSize: "Varies by VC partner",
    fundingStage: "Seed – Growth",
  },
  {
    name: "Deshmukh Family Office",
    category: "Family Offices",
    focus: "Patient capital for founders building long-term categories",
    industries: ["AgriTech", "Manufacturing", "Consumer"],
    ticketSize: "₹50L – ₹3Cr",
    fundingStage: "Series A – Growth",
  },
  {
    name: "Heritage Family Ventures",
    category: "Family Offices",
    focus: "Multi-generational capital backing mission-driven founders",
    industries: ["Social Impact", "EdTech", "HealthTech"],
    ticketSize: "₹25L – ₹2Cr",
    fundingStage: "Seed – Series A",
  },
];
