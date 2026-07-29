export interface Publication {
  title: string;
  description: string;
  category: "Annual Reports" | "Research Papers" | "Innovation Reports" | "Case Studies";
  year: string;
  icon: "FileBarChart" | "Microscope" | "Lightbulb" | "BookOpen";
}

export const publications: Publication[] = [
  {
    title: "Tech4Bharat Annual Report 2026",
    description: "A full year in review — portfolio growth, funding facilitated, and founder outcomes.",
    category: "Annual Reports",
    year: "2026",
    icon: "FileBarChart",
  },
  {
    title: "Tech4Bharat Annual Report 2025",
    description: "Our second annual report, covering national expansion and mentor network growth.",
    category: "Annual Reports",
    year: "2025",
    icon: "FileBarChart",
  },
  {
    title: "Founder Resilience in Tier 2/3 India",
    description: "A research paper on how founders outside metro hubs build durable companies.",
    category: "Research Papers",
    year: "2026",
    icon: "Microscope",
  },
  {
    title: "The Economics of Founder-First Mentorship",
    description: "A study on how structured mentorship correlates with startup survival rates.",
    category: "Research Papers",
    year: "2025",
    icon: "Microscope",
  },
  {
    title: "State of Deep Tech Commercialization in India",
    description: "An innovation report on translating academic research into venture-backed startups.",
    category: "Innovation Reports",
    year: "2026",
    icon: "Lightbulb",
  },
  {
    title: "AgroSense: Scaling Farmer Incomes",
    description: "A case study on how AgroSense raised yields for 12,000+ smallholder farmers.",
    category: "Case Studies",
    year: "2025",
    icon: "BookOpen",
  },
];

export const publicationCategories = ["Annual Reports", "Research Papers", "Innovation Reports", "Case Studies"] as const;
