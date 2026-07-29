export interface PressRelease {
  title: string;
  date: string;
  excerpt: string;
}

export const pressReleases: PressRelease[] = [
  {
    title: "Tech4Bharat crosses 150 startups incubated milestone",
    date: "May 2026",
    excerpt: "Marking five years of founder-first support across 10+ states.",
  },
  {
    title: "Tech4Bharat partners with Atal Innovation Mission on rural innovation challenge",
    date: "March 2026",
    excerpt: "A new joint program to fund AgriTech and CleanTech ventures in Tier 2/3 India.",
  },
  {
    title: "Tech4Bharat launches Women Entrepreneurs Fellowship",
    date: "January 2026",
    excerpt: "A dedicated cohort and mentorship track for women-led early-stage startups.",
  },
];

export interface MediaMention {
  outlet: string;
  title: string;
  date: string;
}

export const mediaCoverage: MediaMention[] = [
  { outlet: "YourStory", title: "How Tech4Bharat is taking incubation beyond metro India", date: "April 2026" },
  { outlet: "Inc42", title: "Inside the incubator backing Bharat's Tier 2 founders", date: "February 2026" },
  { outlet: "The Economic Times", title: "Tech4Bharat's founder-first model, explained", date: "November 2025" },
  { outlet: "Business Standard", title: "Why mentorship, not just capital, wins for early founders", date: "August 2025" },
];

export interface Interview {
  name: string;
  role: string;
  outlet: string;
  title: string;
}

export const interviews: Interview[] = [
  {
    name: "Ritika Deshmukh",
    role: "Founder, AgroSense",
    outlet: "YourStory",
    title: "\"Building for farmers first\" — a founder's perspective on rural AgriTech",
  },
  {
    name: "Aditya Rao",
    role: "Founder, MedLink",
    outlet: "Inc42",
    title: "Navigating healthcare regulation as a first-time founder",
  },
  {
    name: "Tech4Bharat Leadership",
    role: "Founding Team",
    outlet: "The Economic Times",
    title: "Why founder-first mentorship matters more than capital alone",
  },
];

export interface FeaturedVideo {
  title: string;
  description: string;
}

export const featuredVideos: FeaturedVideo[] = [
  { title: "Founder Stories: Building AgroSense", description: "How one team scaled farmer income across Maharashtra." },
  { title: "Inside the Ignite Bootcamp", description: "A look inside our flagship 8-week incubation sprint." },
  { title: "Mentor Spotlight: Building for Bharat", description: "Operators share what it takes to build outside metro India." },
];
