export type StartupStage = "Idea Stage" | "Early Stage" | "Growth Stage" | "Scaled";

export interface StartupProfile {
  id: string;
  slug: string;
  name: string;
  founder: string;
  domain: string;
  stage: StartupStage;
  tagline: string;
  description: string;
  logoInitial: string;
  website: string;
  foundedYear: number;
  location: string;
  linkedin?: string;
  twitter?: string;
}

/** State parsed from the trailing part of `location` (e.g. "Nagpur, Maharashtra" -> "Maharashtra"). */
export function getStartupState(location: string): string {
  const parts = location.split(",");
  return parts[parts.length - 1]?.trim() || location;
}

// Sample data shaped for a future API integration (e.g. GET /api/startups, GET /api/startups/:slug)
export const startupProfiles: StartupProfile[] = [
  {
    id: "1",
    slug: "agrosense",
    name: "AgroSense",
    founder: "Ritika Deshmukh",
    domain: "AgriTech",
    stage: "Growth Stage",
    tagline: "AI-powered crop health monitoring for smallholder farmers.",
    description:
      "AgroSense combines satellite imagery and low-cost IoT sensors to give smallholder farmers real-time insight into soil health, irrigation needs, and pest risk — helping them raise yields while cutting input costs.",
    logoInitial: "AS",
    website: "https://example.com/agrosense",
    foundedYear: 2022,
    location: "Nagpur, Maharashtra",
    linkedin: "#",
  },
  {
    id: "2",
    slug: "medlink",
    name: "MedLink",
    founder: "Aditya Rao",
    domain: "HealthTech",
    stage: "Early Stage",
    tagline: "Telemedicine platform connecting rural India to specialist care.",
    description:
      "MedLink connects patients in underserved regions with verified specialists through low-bandwidth video consultations, and partners with local pharmacies for last-mile medicine delivery.",
    logoInitial: "ML",
    website: "https://example.com/medlink",
    foundedYear: 2023,
    location: "Pune, Maharashtra",
    linkedin: "#",
  },
  {
    id: "3",
    slug: "pathshala",
    name: "PathShala",
    founder: "Neha Kulkarni",
    domain: "EdTech",
    stage: "Growth Stage",
    tagline: "Vernacular micro-learning for Tier 2 & 3 students.",
    description:
      "PathShala delivers bite-sized, vernacular-language lessons over WhatsApp and low-data apps, helping students in smaller towns keep pace with competitive exam prep.",
    logoInitial: "PS",
    website: "https://example.com/pathshala",
    foundedYear: 2021,
    location: "Indore, Madhya Pradesh",
    linkedin: "#",
  },
  {
    id: "4",
    slug: "rupeestack",
    name: "RupeeStack",
    founder: "Karan Mehta",
    domain: "FinTech",
    stage: "Scaled",
    tagline: "Embedded lending infrastructure for small businesses.",
    description:
      "RupeeStack gives small businesses instant access to working-capital credit lines, embedded directly into the point-of-sale and accounting tools they already use.",
    logoInitial: "RS",
    website: "https://example.com/rupeestack",
    foundedYear: 2020,
    location: "Mumbai, Maharashtra",
    linkedin: "#",
  },
  {
    id: "5",
    slug: "greengrid",
    name: "GreenGrid",
    founder: "Sanjana Iyer",
    domain: "ClimateTech",
    stage: "Early Stage",
    tagline: "Decentralized solar micro-grids for last-mile electrification.",
    description:
      "GreenGrid designs and deploys solar micro-grids for villages beyond the reach of the main power grid, with a pay-as-you-go model that makes clean energy affordable.",
    logoInitial: "GG",
    website: "https://example.com/greengrid",
    foundedYear: 2023,
    location: "Jaipur, Rajasthan",
    linkedin: "#",
  },
  {
    id: "6",
    slug: "voxai",
    name: "VoxAI",
    founder: "Rahul Bhatt",
    domain: "DeepTech",
    stage: "Idea Stage",
    tagline: "Multilingual voice AI for public service delivery.",
    description:
      "VoxAI builds voice-first AI assistants in 12 Indian languages, helping government helplines and public services handle citizen queries faster and more accessibly.",
    logoInitial: "VX",
    website: "https://example.com/voxai",
    foundedYear: 2024,
    location: "Bengaluru, Karnataka",
    linkedin: "#",
  },
  {
    id: "7",
    slug: "jalrekha",
    name: "JalRekha",
    founder: "Meera Joshi",
    domain: "Water & Sanitation",
    stage: "Early Stage",
    tagline: "IoT-based groundwater monitoring for rural water security.",
    description:
      "JalRekha deploys low-cost sensors in community borewells to track groundwater levels in real time, helping panchayats plan water usage before shortages hit.",
    logoInitial: "JR",
    website: "https://example.com/jalrekha",
    foundedYear: 2023,
    location: "Ahmedabad, Gujarat",
    linkedin: "#",
  },
  {
    id: "8",
    slug: "punarchakra",
    name: "PunarChakra",
    founder: "Devika Nair",
    domain: "Waste Management",
    stage: "Growth Stage",
    tagline: "Circular-economy platform turning textile waste into raw material.",
    description:
      "PunarChakra partners with garment manufacturers and municipal waste collectors to recycle textile scraps into new yarn, diverting waste from landfills at scale.",
    logoInitial: "PC",
    website: "https://example.com/punarchakra",
    foundedYear: 2022,
    location: "Surat, Gujarat",
    linkedin: "#",
  },
];
