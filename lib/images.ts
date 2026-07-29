/**
 * Local, organized image library — see public/images/{hero,about,domains,startups,mentors,events,blogs,partners}.
 * Every export here is just a path string; swap any file in those folders for a
 * real asset later without touching a single component.
 */

export const heroImage = "/images/hero/hero-main.jpg";
export const ctaBackgroundImage = "/images/cta/cta-background.jpg";

export const aboutImages = {
  team: "/images/about/about-team.jpg",
  innovationCenter: "/images/about/about-innovation-center.jpg",
  meeting: "/images/about/about-meeting.jpg",
  office: "/images/about/office-contact.jpg",
};

/** Focus Areas / domain imagery — one distinct photo per domain. */
export const domainImageMap: Record<string, string> = {
  AgriTech: "/images/domains/agritech.jpg",
  "AI/ML": "/images/domains/ai-ml.jpg",
  ClimateTech: "/images/domains/climatetech.jpg",
  HealthTech: "/images/domains/healthtech.jpg",
  MedTech: "/images/domains/medtech.jpg",
  "Water & Sanitation": "/images/domains/water-sanitation.jpg",
  "Education Technology": "/images/domains/education-technology.jpg",
  "Clean Energy": "/images/domains/clean-energy.jpg",
  "Waste Management": "/images/domains/waste-management.jpg",
  "Rural Development": "/images/domains/rural-development.jpg",
  "Women Empowerment": "/images/domains/women-empowerment.jpg",
  "Livelihood Generation": "/images/domains/livelihood-generation.jpg",
  "Other Social Impact Innovations": "/images/domains/social-impact.jpg",
  // Aliases for the homepage's shorter Phase 1 domain labels.
  EdTech: "/images/domains/education-technology.jpg",
  FinTech: "/images/domains/livelihood-generation.jpg",
  DeepTech: "/images/domains/ai-ml.jpg",
};

export function getDomainImage(domain: string | null | undefined): string {
  if (domain && domainImageMap[domain]) return domainImageMap[domain];
  return domainImageMap["Other Social Impact Innovations"];
}

/** Startup Portfolio imagery — deliberately distinct from the Focus Areas domain photos. */
export const startupImageMap: Record<string, string> = {
  AgriTech: "/images/startups/startup-agritech.jpg",
  HealthTech: "/images/startups/startup-healthtech.jpg",
  EdTech: "/images/startups/startup-edtech.jpg",
  FinTech: "/images/startups/startup-fintech.jpg",
  ClimateTech: "/images/startups/startup-climatetech.jpg",
  DeepTech: "/images/startups/startup-deeptech.jpg",
  "Water & Sanitation": "/images/startups/startup-water.jpg",
  "Waste Management": "/images/startups/startup-waste.jpg",
};

export function getStartupImage(domain: string | null | undefined): string {
  if (domain && startupImageMap[domain]) return startupImageMap[domain];
  return startupImageMap.DeepTech;
}

/** Professional headshot-style portraits — assigned round-robin to mentor/testimonial records. */
export const headshotImages: string[] = [
  "/images/mentors/mentor-01.jpg",
  "/images/mentors/mentor-02.jpg",
  "/images/mentors/mentor-03.jpg",
  "/images/mentors/mentor-04.jpg",
  "/images/mentors/mentor-05.jpg",
  "/images/mentors/mentor-06.jpg",
  "/images/mentors/mentor-07.jpg",
  "/images/mentors/mentor-08.jpg",
  "/images/mentors/mentor-09.jpg",
  "/images/mentors/mentor-10.jpg",
  "/images/mentors/mentor-11.jpg",
  "/images/mentors/mentor-12.jpg",
  "/images/mentors/mentor-13.jpg",
  "/images/mentors/mentor-14.jpg",
  "/images/mentors/mentor-15.jpg",
  "/images/mentors/mentor-16.jpg",
];

export function getHeadshot(index: number): string {
  const i = ((index % headshotImages.length) + headshotImages.length) % headshotImages.length;
  return headshotImages[i];
}

/** Events & Bootcamps imagery — one distinct banner per event, keyed by slug. */
export const eventImageMap: Record<string, string> = {
  "tech4bharat-startup-bootcamp-2026": "/images/events/event-bootcamp.jpg",
  "fundraising-masterclass": "/images/events/event-fundraising.jpg",
  "agritech-innovation-challenge": "/images/events/event-agritech-challenge.jpg",
  "healthtech-summit-2025": "/images/events/event-healthtech-summit.jpg",
  "product-validation-bootcamp-2025": "/images/events/event-product-validation.jpg",
  "women-founders-networking-night": "/images/events/event-women-founders.jpg",
};

export function getEventImage(slug: string): string {
  return eventImageMap[slug] || "/images/events/event-bootcamp.jpg";
}

/** Blog cover imagery, keyed by category. */
export const blogCategoryImageMap: Record<string, string> = {
  Ecosystem: "/images/blogs/blog-ecosystem.jpg",
  Fundraising: "/images/blogs/blog-fundraising.jpg",
  Mentorship: "/images/blogs/blog-mentorship.jpg",
  Policy: "/images/blogs/blog-policy.jpg",
  Product: "/images/blogs/blog-product.jpg",
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
  "Funding Support": "/images/programs/investors-meeting.jpg",
  "Investor Connect": "/images/programs/startup-pitching.jpg",
  "Government Scheme Support": "/images/programs/business-workshop.jpg",
  "Market Access": "/images/programs/entrepreneurs-working.jpg",
  "Product Validation": "/images/programs/innovation-lab.jpg",
  "Innovation Challenges": "/images/programs/technology-innovation.jpg",
  Bootcamps: "/images/programs/business-workshop.jpg",
  "Startup Bootcamps": "/images/programs/business-workshop.jpg",
  Networking: "/images/programs/entrepreneurs-working.jpg",
};

export function getProgramImage(title: string): string {
  return programImageMap[title] || "/images/programs/incubation.jpg";
}
