export interface GalleryCategory {
  slug: string;
  label: string;
}

export const galleryCategories: GalleryCategory[] = [
  { slug: "startup-events", label: "Startup Events" },
  { slug: "bootcamps", label: "Bootcamps" },
  { slug: "workshops", label: "Workshops" },
  { slug: "mentorship", label: "Mentorship" },
  { slug: "innovation-labs", label: "Innovation Labs" },
  { slug: "hackathons", label: "Hackathons" },
  { slug: "students", label: "Students" },
  { slug: "women-entrepreneurship", label: "Women Entrepreneurship" },
  { slug: "technology", label: "Technology" },
  { slug: "research", label: "Research" },
  { slug: "agriculture", label: "Agriculture" },
  { slug: "award-ceremonies", label: "Award Ceremonies" },
  { slug: "demo-day", label: "Demo Day" },
];

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const IMAGES_PER_CATEGORY = 3;

// Categories with hand-picked image paths (reusing existing assets from other
// folders) instead of the default `gallery/<slug>-<n>.jpg` auto-generated pattern.
const CATEGORY_IMAGE_OVERRIDES: Record<string, string[]> = {
  workshops: [
    "/images/programs/business-workshop.jpg",
    "/images/events/event-fundraising.jpg",
    "/images/events/event-product-validation.jpg",
  ],
};

export const galleryImages: GalleryImage[] = galleryCategories.flatMap((category) => {
  const overrides = CATEGORY_IMAGE_OVERRIDES[category.slug];
  if (overrides) {
    return overrides.map((src) => ({ src, alt: `${category.label} at Tech4Bharat`, category: category.slug }));
  }
  return Array.from({ length: IMAGES_PER_CATEGORY }, (_, i) => ({
    src: `/images/gallery/${category.slug}-${i + 1}.jpg`,
    alt: `${category.label} at Tech4Bharat`,
    category: category.slug,
  }));
});
