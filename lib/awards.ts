export interface AwardEntry {
  year: string;
  title: string;
  issuer: string;
  description: string;
}

export const awards: AwardEntry[] = [
  {
    year: "2022",
    title: "Startup India Recognized Incubator",
    issuer: "Department for Promotion of Industry and Internal Trade",
    description: "Formally recognized as a Startup India-affiliated incubator for social impact ventures.",
  },
  {
    year: "2023",
    title: "Best Incubator — Rural Innovation",
    issuer: "Atal Innovation Mission",
    description: "Recognized for the AgriTech Innovation Challenge and its reach into Tier 2/3 India.",
  },
  {
    year: "2024",
    title: "Excellence in Founder Support Award",
    issuer: "NSRCEL, IIM Bangalore",
    description: "Awarded for our founder-first mentorship model across 100+ startups.",
  },
  {
    year: "2025",
    title: "National Recognition for Women Entrepreneurship",
    issuer: "NITI Aayog",
    description: "Honored for the Women Entrepreneurs Fellowship's impact across five states.",
  },
  {
    year: "2026",
    title: "Top 10 Startup Incubators in India",
    issuer: "Inc42",
    description: "Ranked among India's leading incubators for founder outcomes and portfolio growth.",
  },
];
