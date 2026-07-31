export interface GalleryCategory {
  slug: string;
  label: string;
}

/**
 * Category list for the Gallery filters. A handful of these (innovation,
 * government, research, awards) have no dedicated real-Indian-photo shoot in
 * the asset library — their images are intentionally borrowed from the
 * closest matching real shoot (see `categories` on each GalleryImage below)
 * rather than left empty or filled with non-Indian stock.
 */
export const galleryCategories: GalleryCategory[] = [
  { slug: "startup", label: "Startup" },
  { slug: "hackathon", label: "Hackathon" },
  { slug: "students", label: "Students" },
  { slug: "women-entrepreneurship", label: "Women Entrepreneurship" },
  { slug: "agriculture", label: "Agriculture" },
  { slug: "mentorship", label: "Mentorship" },
  { slug: "networking", label: "Networking" },
  { slug: "innovation", label: "Innovation" },
  { slug: "government", label: "Government" },
  { slug: "research", label: "Research" },
  { slug: "awards", label: "Awards" },
];

export interface GalleryImage {
  src: string;
  alt: string;
  /** A photo can genuinely belong to more than one theme (e.g. a women-led AgriTech shoot). */
  categories: string[];
  /** Used by the Timeline Gallery. */
  year?: 2023 | 2024 | 2025;
  /** Hand-picked as the Featured Events magazine spread. */
  featured?: "hero" | "side";
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/gallery-1.jpg",
    alt: "Student founders discussing their venture on the campus lawn",
    categories: ["students", "startup"],
    year: 2023,
    featured: "hero",
  },
  {
    src: "/images/gallery/hackathons-1.jpg",
    alt: "Student developers racing the clock at a Tech4Bharat hackathon",
    categories: ["hackathon", "innovation"],
    year: 2024,
    featured: "side",
  },
  {
    src: "/images/domains/agritech.jpg",
    alt: "Women farmers operating a tractor supported by an AgriTech innovation",
    categories: ["agriculture", "women-entrepreneurship"],
    year: 2023,
    featured: "side",
  },
  {
    src: "/images/programs/mentoring.jpg",
    alt: "Student mentees collaborating on a laptop during a mentorship session",
    categories: ["mentorship", "women-entrepreneurship", "students"],
    year: 2025,
    featured: "side",
  },
  {
    src: "/images/gallery/hackathons-2.jpg",
    alt: "Founders pairing on code during a hackathon sprint",
    categories: ["hackathon", "innovation", "research"],
    year: 2024,
  },
  {
    src: "/images/gallery/students-1.jpg",
    alt: "A student researching in the campus library",
    categories: ["students"],
    year: 2023,
  },
  {
    src: "/images/gallery/students-3.jpg",
    alt: "Students reviewing a project together outdoors on campus",
    categories: ["students", "networking"],
    year: 2025,
  },
  {
    src: "/images/programs/incubation.jpg",
    alt: "Founders and mentors in a strategy session at the incubation centre",
    categories: ["startup", "government"],
    year: 2023,
  },
  {
    src: "/images/gallery/gallery-2.jpg",
    alt: "A founder briefing the team at the incubation centre",
    categories: ["startup", "government"],
  },
  {
    src: "/images/gallery/gallery-3.jpg",
    alt: "The team mapping out a product roadmap on a whiteboard",
    categories: ["startup", "networking"],
    year: 2023,
  },
  {
    src: "/images/gallery/gallery-4.jpg",
    alt: "A founder at the Tech4Bharat office",
    categories: ["startup", "awards"],
  },
  {
    src: "/images/gallery/gallery-5.jpg",
    alt: "The team planning sprints on a shared whiteboard",
    categories: ["startup", "networking"],
  },
  {
    src: "/images/gallery/gallery-7.jpg",
    alt: "Founders working through a plan together over coffee",
    categories: ["mentorship", "hackathon"],
    year: 2025,
  },
  {
    src: "/images/gallery/gallery-9.jpg",
    alt: "Colleagues connecting during a team huddle",
    categories: ["networking", "startup"],
  },
  {
    src: "/images/gallery/gallery-10.jpg",
    alt: "Team members networking at the Tech4Bharat office",
    categories: ["networking", "government"],
  },
  {
    src: "/images/gallery/gallery-11.jpg",
    alt: "The team celebrating a new milestone",
    categories: ["awards", "startup"],
    year: 2023,
  },
  {
    src: "/images/gallery/gallery-12.jpg",
    alt: "Mentors and founders in conversation",
    categories: ["networking", "mentorship"],
  },
  {
    src: "/images/gallery/gallery-13.jpg",
    alt: "A founder reflecting between working sessions",
    categories: ["research", "startup"],
  },
  {
    src: "/images/gallery/gallery-14.jpg",
    alt: "The team celebrating together at the office",
    categories: ["awards", "networking"],
  },
  {
    src: "/images/gallery/agriculture-2.jpg",
    alt: "A woman farmer at work in the field",
    categories: ["agriculture", "women-entrepreneurship"],
  },
  {
    src: "/images/gallery/agriculture-3.jpg",
    alt: "Women farmers operating equipment in a cotton field",
    categories: ["agriculture", "women-entrepreneurship"],
  },
  {
    src: "/images/domains/healthtech.jpg",
    alt: "A HealthTech founder and clinician at a partner hospital",
    categories: ["women-entrepreneurship", "research"],
  },
  {
    src: "/images/domains/education-technology.jpg",
    alt: "An EdTech founder from the Tech4Bharat ecosystem",
    categories: ["startup", "mentorship"],
  },
];

export function getGalleryImagesByCategory(slug: string): GalleryImage[] {
  if (slug === "all") return galleryImages;
  return galleryImages.filter((image) => image.categories.includes(slug));
}

export function getGalleryImagesByYear(year: 2023 | 2024 | 2025): GalleryImage[] {
  return galleryImages.filter((image) => image.year === year);
}
