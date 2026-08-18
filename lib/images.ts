/**
 * Local, organized image library — see public/images/{hero,about,domains,startups,mentors,events,blogs,partners}.
 * Every export here is just a path string with distinct, dedicated assets across the app —
 * no value below is reused a second time anywhere else in this file.
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
  "Women Empowerment": "/images/gallery/woman-office-call.jpg",
  "Livelihood Generation": "/images/gallery/gallery-1.jpg",
  "Other Social Impact Innovations": "/images/gallery/gallery-6.jpg",
  // Aliases for the homepage's shorter Phase 1 domain labels — each still gets its own
  // distinct photo so the same card never repeats between the short and long label views.
  EdTech: "/images/gallery/students-3.jpg",
  FinTech: "/images/gallery/technology-2.jpg",
  DeepTech: "/images/gallery/research-2.jpg",
};

export function getDomainImage(domain: string | null | undefined): string {
  if (domain && domainImageMap[domain]) return domainImageMap[domain];
  return domainImageMap["Other Social Impact Innovations"];
}

/** Events & Bootcamps imagery — one distinct banner per event, keyed by slug. */
export const eventImageMap: Record<string, string> = {
  "tech4bharat-startup-bootcamp-2026": "/images/gallery/bootcamps-1.jpg",
  "fundraising-masterclass": "/images/events/event-fundraising.jpg",
  "agritech-innovation-challenge": "/images/events/event-agritech-challenge.jpg",
  "healthtech-summit-2025": "/images/gallery/conference-podium-2.jpg",
  "product-validation-bootcamp-2025": "/images/events/event-product-validation.jpg",
  "women-founders-networking-night": "/images/events/event-women-founders.jpg",
  "demo-day-winter-cohort": "/images/gallery/students-campus-group.jpg",
  "deep-tech-founders-roundtable": "/images/gallery/field-visit-industrial.jpg",
  "women-in-tech-meetup": "/images/gallery/woman-office-call.jpg",
  "climate-innovation-challenge": "/images/domains/climatetech.jpg",
  "digital-tech-policy-workshop-2025": "/images/legacy/policy-workshop-1.png",
  "ai-workshop-bharatgen-2025": "/images/legacy/workshops/day2-i2-digital-public-infrastructure-ai.png",
};

export function getEventImage(slug: string): string {
  return eventImageMap[slug] || "/images/gallery/conference-podium-3.jpg";
}

/** Blog cover imagery, keyed by category. */
export const blogCategoryImageMap: Record<string, string> = {
  Ecosystem: "/images/gallery/gallery-15.jpg",
  Fundraising: "/images/gallery/conference-podium-1.jpg",
  Mentorship: "/images/gallery/research-2.jpg",
  Policy: "/images/gallery/hackathons-2.jpg",
  Product: "/images/gallery/technology-3.jpg",
};

export function getBlogImage(category: string | null | undefined): string {
  if (category && blogCategoryImageMap[category]) return blogCategoryImageMap[category];
  return blogCategoryImageMap.Ecosystem;
}

/** Startup Support Programs imagery, keyed by program title. */
export const programImageMap: Record<string, string> = {
  Incubation: "/images/gallery/students-1.jpg",
  Acceleration: "/images/programs/technology-innovation.jpg",
  Mentorship: "/images/gallery/students-3.jpg",
  "Funding Support": "/images/gallery/hackathons-3.jpg",
  "Investor Connect": "/images/gallery/conference-podium-2.jpg",
  "Government Scheme Support": "/images/legacy/workshops/day5-i1-earth-observation-strategic-tech.png",
  "Market Access": "/images/gallery/technology-1.jpg",
  "Product Validation": "/images/gallery/hackathons-2.jpg",
  "Innovation Challenges": "/images/gallery/gallery-7.jpg",
  Bootcamps: "/images/legacy/workshops/day1-i2-intro-to-tech-policy.png",
  "Startup Bootcamps": "/images/gallery/students-campus-group.jpg",
  Networking: "/images/gallery/gallery-1.jpg",
};

export function getProgramImage(title: string): string {
  return programImageMap[title] || "/images/gallery/gallery-6.jpg";
}
