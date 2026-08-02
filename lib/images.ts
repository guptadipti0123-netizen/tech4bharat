/**
 * Local, organized image library — see public/images/{hero,about,domains,startups,mentors,events,blogs,partners}.
 * Every export here is just a path string; swap any file in those folders for a
 * real asset later without touching a single component.
 */

export const ctaBackgroundImage = "/images/cta/cta-background.jpg";

export const aboutImages = {
  team: "/images/about/team.png",
  innovationCenter: "/images/gallery/gallery-8.jpg",
};

/**
 * Focus Areas / domain imagery — one distinct photo per domain. A few of the original
 * `domains/*` assets are either synthetic renders or show non-Indian people, so those
 * are overridden here with verified real-Indian-people photos from the gallery shoot;
 * the remaining `domains/*` files are genuine photographs with no people in them
 * (solar panels, lab equipment, etc.) and are kept as-is.
 */
export const domainImageMap: Record<string, string> = {
  AgriTech: "/images/domains/agritech.jpg",
  "AI/ML": "/images/gallery/hackathons-2.jpg",
  ClimateTech: "/images/domains/climatetech.jpg",
  HealthTech: "/images/domains/healthtech.jpg",
  MedTech: "/images/domains/medtech.jpg",
  "Water & Sanitation": "/images/domains/water-sanitation.jpg",
  "Education Technology": "/images/gallery/gallery-6.jpg",
  "Clean Energy": "/images/domains/clean-energy.jpg",
  "Waste Management": "/images/domains/waste-management.jpg",
  "Rural Development": "/images/gallery/agriculture-3.jpg",
  "Women Empowerment": "/images/programs/mentoring.jpg",
  "Livelihood Generation": "/images/gallery/gallery-9.jpg",
  "Other Social Impact Innovations": "/images/gallery/gallery-5.jpg",
  // Aliases for the homepage's shorter Phase 1 domain labels.
  EdTech: "/images/gallery/gallery-6.jpg",
  FinTech: "/images/gallery/gallery-3.jpg",
  DeepTech: "/images/gallery/hackathons-2.jpg",
};

export function getDomainImage(domain: string | null | undefined): string {
  if (domain && domainImageMap[domain]) return domainImageMap[domain];
  return domainImageMap["Other Social Impact Innovations"];
}

/** Events & Bootcamps imagery — one distinct banner per event, keyed by slug. */
export const eventImageMap: Record<string, string> = {
  "tech4bharat-startup-bootcamp-2026": "/images/gallery/gallery-1.jpg",
  "fundraising-masterclass": "/images/gallery/gallery-7.jpg",
  "agritech-innovation-challenge": "/images/domains/agritech.jpg",
  "healthtech-summit-2025": "/images/domains/healthtech.jpg",
  "product-validation-bootcamp-2025": "/images/gallery/hackathons-1.jpg",
  "women-founders-networking-night": "/images/programs/mentoring.jpg",
};

export function getEventImage(slug: string): string {
  return eventImageMap[slug] || "/images/gallery/gallery-2.jpg";
}

/** Blog cover imagery, keyed by category. */
export const blogCategoryImageMap: Record<string, string> = {
  Ecosystem: "/images/gallery/gallery-9.jpg",
  Fundraising: "/images/gallery/gallery-13.jpg",
  Mentorship: "/images/gallery/gallery-12.jpg",
  Policy: "/images/gallery/gallery-10.jpg",
  Product: "/images/gallery/gallery-3.jpg",
};

export function getBlogImage(category: string | null | undefined): string {
  if (category && blogCategoryImageMap[category]) return blogCategoryImageMap[category];
  return blogCategoryImageMap.Ecosystem;
}

/** Startup Support Programs imagery, keyed by program title. */
export const programImageMap: Record<string, string> = {
  Incubation: "/images/programs/incubation.jpg",
  Acceleration: "/images/gallery/hackathons-2.jpg",
  Mentorship: "/images/programs/mentoring.jpg",
  "Funding Support": "/images/gallery/gallery-4.jpg",
  "Investor Connect": "/images/gallery/gallery-3.jpg",
  "Government Scheme Support": "/images/gallery/gallery-2.jpg",
  "Market Access": "/images/gallery/hackathons-2.jpg",
  "Product Validation": "/images/gallery/hackathons-1.jpg",
  "Innovation Challenges": "/images/gallery/hackathons-1.jpg",
  Bootcamps: "/images/gallery/gallery-1.jpg",
  "Startup Bootcamps": "/images/gallery/gallery-1.jpg",
  Networking: "/images/gallery/hackathons-2.jpg",
};

export function getProgramImage(title: string): string {
  return programImageMap[title] || "/images/programs/incubation.jpg";
}
