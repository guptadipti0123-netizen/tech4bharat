import type { GalleryCategory, GalleryPhoto } from "./types";

/**
 * The bundled local photo library — today this is the only `GalleryRepository`
 * implementation's data source. Every entry here is a genuine photograph of Indian
 * people/settings, and deliberately excludes any photo already used elsewhere on the site
 * (see `lib/images.ts`, `lib/data.ts`) so nothing on this page repeats a shot a visitor may
 * have already seen on another page. Nothing outside `repository.ts` should import this
 * file directly.
 */
export const localGalleryPhotos: GalleryPhoto[] = [
  {
    id: "agriculture-2",
    src: "/images/gallery/agriculture-2.jpg",
    alt: "A woman farmer at work in the field",
    categories: ["agriculture", "women-entrepreneurship"],
    source: "local",
  },
  {
    id: "rural-buffalo-herder",
    src: "/images/gallery/rural-buffalo-herder.jpg",
    alt: "A farmer herding water buffaloes along a rural road",
    categories: ["agriculture"],
    source: "local",
  },
  {
    id: "policy-workshop-2",
    src: "/images/legacy/policy-workshop-2.png",
    alt: "Dr. Chaitanya Giri of Observer Research Foundation speaking at the Digital & Tech Policy Workshop",
    categories: ["government", "research"],
    source: "local",
  },
  // Digital & Tech Policy Workshop archive (Dec 18-23, 2025, COEP Technological University),
  // extracted from the old Tech For Bharat website. Grouped under their own
  // "legacy-workshops" category so the day-by-day set has a dedicated home.
  {
    id: "legacy-day1-i2",
    src: "/images/legacy/workshops/day1-i2-intro-to-tech-policy.png",
    alt: "Day 1 — Introduction to Technology Policy: a speaker addresses the cohort at the podium",
    categories: ["legacy-workshops", "government"],
    source: "local",
  },
  {
    id: "legacy-day2-i1",
    src: "/images/legacy/workshops/day2-i1-digital-narratives-blockchain.png",
    alt: "Day 2 — Digital Narratives & Blockchain: the full cohort and faculty in the auditorium",
    categories: ["legacy-workshops", "networking"],
    source: "local",
  },
  {
    id: "legacy-day3-i2",
    src: "/images/legacy/workshops/day3-i2-strategic-innovation-frameworks.png",
    alt: "Day 3 — Strategic Innovation Frameworks: a candid group photo with the cohort",
    categories: ["legacy-workshops", "students"],
    source: "local",
  },
  {
    id: "legacy-day4-i1",
    src: "/images/legacy/workshops/day4-i1-clean-energy-cyberphysical-systems.jpg",
    alt: "Day 4 — Clean Energy & Cyber-Physical Systems: a memento exchange between speakers",
    categories: ["legacy-workshops", "research"],
    source: "local",
  },
  {
    id: "legacy-day4-i2",
    src: "/images/legacy/workshops/day4-i2-uav-simulation-security-analysis.png",
    alt: "Day 4 — UAV Simulation & Security Analysis: the cohort in the lecture hall",
    categories: ["legacy-workshops", "students"],
    source: "local",
  },
  {
    id: "legacy-day5-i2",
    src: "/images/legacy/workshops/day5-i2-field-visit-advanced-computing.png",
    alt: "Day 5 — Field Visit & Advanced Computing: the cohort back in session",
    categories: ["legacy-workshops", "students"],
    source: "local",
  },
];

export const localGalleryCategories: GalleryCategory[] = [
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
  { slug: "legacy-workshops", label: "Legacy Workshops" },
];
