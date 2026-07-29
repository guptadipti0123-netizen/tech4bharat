export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export const blogCategories = ["All", "Ecosystem", "Fundraising", "Mentorship", "Policy", "Product"];

// Sample data shaped for a future API integration (e.g. GET /api/blog, GET /api/blog/:slug)
export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    slug: "tier-2-cities-powering-next-startup-wave",
    title: "How India's Tier 2 Cities Are Powering the Next Startup Wave",
    excerpt: "A look at the emerging founder hubs beyond Bengaluru and Mumbai.",
    content: [
      "For years, India's startup narrative has centered on Bengaluru, Mumbai, and Delhi NCR. But the next wave of category-defining companies is increasingly being built in cities like Indore, Nagpur, Coimbatore, and Jaipur.",
      "Lower operating costs, deep domain expertise in regional industries, and a new generation of founders choosing to build close to the problems they're solving are reshaping where Indian startups take root.",
      "At Tech4Bharat, over 60% of our current portfolio is headquartered outside the traditional startup hubs — a trend we expect to accelerate as remote-first operating models mature.",
    ],
    category: "Ecosystem",
    author: "Tech4Bharat Editorial",
    date: "June 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "2",
    slug: "raising-your-first-round-founders-playbook",
    title: "Raising Your First Round: A Founder's Playbook",
    excerpt: "Practical lessons from 150+ startups that raised seed capital.",
    content: [
      "Raising a first round is as much about narrative as it is about numbers. Across 150+ startups in our portfolio, the founders who raised fastest shared a few common habits.",
      "They started building investor relationships months before they needed capital, kept their data room clean from day one, and could explain their unit economics in under two minutes.",
      "This playbook breaks down the exact steps our most successful founders followed — from building a target investor list to negotiating term sheets.",
    ],
    category: "Fundraising",
    author: "Rohan Mehta",
    date: "May 2026",
    readTime: "7 min read",
  },
  {
    id: "3",
    slug: "why-mentorship-matters-more-than-money",
    title: "Why Mentorship Matters More Than Money in Year One",
    excerpt: "Founders and mentors share what actually moves the needle early on.",
    content: [
      "Capital solves some problems, but it can't teach a first-time founder how to run a board meeting, negotiate a term sheet, or know when to pivot.",
      "We surveyed founders across our portfolio's first year, and the pattern was clear: those with an active, engaged mentor made faster, more confident decisions — regardless of how much capital they'd raised.",
      "Here's what our founders and mentors say actually moves the needle in year one.",
    ],
    category: "Mentorship",
    author: "Tech4Bharat Editorial",
    date: "April 2026",
    readTime: "4 min read",
  },
  {
    id: "4",
    slug: "navigating-government-startup-schemes",
    title: "A Founder's Guide to Navigating Government Startup Schemes",
    excerpt: "Demystifying Startup India recognition, tax benefits, and state-level grants.",
    content: [
      "Government schemes can unlock non-dilutive capital and valuable credibility — but the application processes are notoriously confusing for first-time founders.",
      "This guide walks through Startup India recognition, the Fund of Funds for Startups, and state-level seed grant programs, with a checklist for what documentation to prepare in advance.",
      "Tech4Bharat's Government Scheme Support program has helped over 40 startups in our portfolio successfully access these programs.",
    ],
    category: "Policy",
    author: "Tech4Bharat Editorial",
    date: "March 2026",
    readTime: "6 min read",
  },
  {
    id: "5",
    slug: "building-for-bharat-design-lessons",
    title: "Building for Bharat: Design Lessons from Low-Bandwidth Markets",
    excerpt: "What EdTech and HealthTech founders learn building for Tier 2 and Tier 3 India.",
    content: [
      "Designing for India's next 500 million internet users means designing for patchy connectivity, shared devices, and users new to smartphones.",
      "Founders across our EdTech and HealthTech portfolio share the product decisions that made the biggest difference — from WhatsApp-first interfaces to voice-based navigation.",
      "The common thread: simplicity isn't a compromise, it's the unlock.",
    ],
    category: "Product",
    author: "Ananya Das",
    date: "February 2026",
    readTime: "6 min read",
  },
];
