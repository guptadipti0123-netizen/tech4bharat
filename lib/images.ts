/**
 * Local, organized image library — see public/images/{hero,about,domains,startups,mentors,events,blogs,partners}.
 * Every export here is just a path string with distinct, dedicated assets across the app.
 */

export const aboutImages = {
  team: "/images/about/team.png",
  innovationCenter: "/images/programs/innovation-lab.jpg",
};

/**
 * Focus Areas / domain imagery — one distinct photo per domain.
 */
export const domainImageMap: Record<string, string> = {
  AgriTech: "/images/domains/agritech.jpg",
  "AI/ML": "/images/gallery/technology-1.jpg",
  ClimateTech: "/images/domains/climatetech.jpg",
  HealthTech: "/images/domains/healthtech.jpg",
  MedTech: "/images/domains/medtech.jpg",
  "Water & Sanitation": "/images/domains/water-sanitation.jpg",
  "Education Technology": "/images/gallery/students-1.jpg",
  "Clean Energy": "/images/domains/clean-energy.jpg",
  "Waste Management": "/images/domains/waste-management.jpg",
  "Rural Development": "/images/gallery/agriculture-3.jpg",
  "Women Empowerment": "/images/gallery/women-entrepreneurship-2.jpg",
  "Livelihood Generation": "/images/gallery/gallery-9.jpg",
  "Other Social Impact Innovations": "/images/gallery/gallery-5.jpg",
  // Aliases for the homepage's shorter Phase 1 domain labels.
  EdTech: "/images/gallery/students-1.jpg",
  FinTech: "/images/gallery/technology-2.jpg",
  DeepTech: "/images/gallery/research-1.jpg",
};

export function getDomainImage(domain: string | null | undefined): string {
  if (domain && domainImageMap[domain]) return domainImageMap[domain];
  return domainImageMap["Other Social Impact Innovations"];
}

/** Events & Bootcamps imagery — one distinct banner per event, keyed by slug. */
export const eventImageMap: Record<string, string> = {
  "tech4bharat-startup-bootcamp-2026": "/images/events/event-bootcamp.jpg",
  "fundraising-masterclass": "/images/events/event-fundraising.jpg",
  "agritech-innovation-challenge": "/images/events/event-agritech-challenge.jpg",
  "healthtech-summit-2025": "/images/events/event-healthtech-summit.jpg",
  "product-validation-bootcamp-2025": "/images/events/event-product-validation.jpg",
  "women-founders-networking-night": "/images/events/event-women-founders.jpg",
  "demo-day-winter-cohort": "/images/gallery/demo-day-3.jpg",
  "deep-tech-founders-roundtable": "/images/gallery/research-2.jpg",
  "women-in-tech-meetup": "/images/gallery/women-entrepreneurship-3.jpg",
  "climate-innovation-challenge": "/images/domains/climatetech.jpg",
  "digital-tech-policy-workshop-2025": "/images/legacy/policy-workshop-1.png",
  "ai-workshop-bharatgen-2025": "/images/legacy/workshops/day2-i2-digital-public-infrastructure-ai.png",
};

export function getEventImage(slug: string): string {
  return eventImageMap[slug] || "/images/events/event-bootcamp.jpg";
}

/** Blog cover imagery, keyed by category. */
export const blogCategoryImageMap: Record<string, string> = {
  Ecosystem: "/images/gallery/startup-events-1.jpg",
  Fundraising: "/images/gallery/gallery-13.jpg",
  Mentorship: "/images/gallery/mentorship-2.jpg",
  Policy: "/images/gallery/gallery-10.jpg",
  Product: "/images/gallery/technology-3.jpg",
};

export function getBlogImage(category: string | null | undefined): string {
  if (category && blogCategoryImageMap[category]) return blogCategoryImageMap[category];
  return blogCategoryImageMap.Ecosystem;
}

/** Startup Support Programs imagery, keyed by program title. */
export const programImageMap: Record<string, string> = {
  Incubation: "/images/programs/incubation.jpg",
  Acceleration: "/images/programs/technology-innovation.jpg",
  Mentorship: "/images/programs/mentoring.jpg",
  "Funding Support": "/images/gallery/gallery-4.jpg",
  "Investor Connect": "/images/gallery/gallery-3.jpg",
  "Government Scheme Support": "/images/gallery/gallery-2.jpg",
  "Market Access": "/images/gallery/startup-events-2.jpg",
  "Product Validation": "/images/gallery/hackathons-2.jpg",
  "Innovation Challenges": "/images/gallery/hackathons-3.jpg",
  Bootcamps: "/images/events/event-bootcamp.jpg",
  "Startup Bootcamps": "/images/events/event-bootcamp.jpg",
  Networking: "/images/gallery/gallery-14.jpg",
};

export function getProgramImage(title: string): string {
  return programImageMap[title] || "/images/programs/incubation.jpg";
}
