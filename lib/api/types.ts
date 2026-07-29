export type ContentStatus = "draft" | "published";
export type StartupStage = "Idea Stage" | "Early Stage" | "Growth Stage" | "Scaled";
export type MentorCategory = "Leadership Advisors" | "Industry Experts" | "Academic Mentors" | "Startup Mentors";
export type EventType = "Bootcamp" | "Workshop" | "Summit" | "Webinar" | "Challenge";
export type EventStatus = "Upcoming" | "Past";
export type CategoryType = "startup_domain" | "blog_category" | "partner_category" | "focus_area";

export interface Category {
  id: number;
  name: string;
  slug: string;
  type: CategoryType;
}

export interface Startup {
  id: number;
  slug: string;
  name: string;
  founderName: string;
  categoryId: number | null;
  categoryName: string | null;
  categorySlug: string | null;
  stage: StartupStage;
  tagline: string | null;
  description: string | null;
  logoUrl: string | null;
  website: string | null;
  foundedYear: number | null;
  location: string | null;
  status: ContentStatus;
  isFeatured: boolean;
}

export interface Mentor {
  id: number;
  slug: string;
  name: string;
  designation: string | null;
  organization: string | null;
  category: MentorCategory;
  bio: string | null;
  photoUrl: string | null;
  linkedinUrl: string | null;
  expertise: string[];
  status: ContentStatus;
}

export interface Advisor {
  id: number;
  slug: string;
  name: string;
  designation: string | null;
  organization: string | null;
  bio: string | null;
  photoUrl: string | null;
  linkedinUrl: string | null;
  status: ContentStatus;
}

export interface Partner {
  id: number;
  name: string;
  categoryId: number | null;
  categoryName: string | null;
  categorySlug: string | null;
  logoUrl: string | null;
  website: string | null;
  description: string | null;
  status: ContentStatus;
}

export interface EventSpeaker {
  id?: number;
  name: string;
  designation: string | null;
}

export interface EventItem {
  id: number;
  slug: string;
  title: string;
  type: EventType;
  status: EventStatus;
  eventDateLabel: string;
  startDate: string | null;
  venue: string | null;
  description: string | null;
  longDescription: string | null;
  bannerUrl: string | null;
  isFeatured: boolean;
  speakers: EventSpeaker[];
}

export interface BlogArticle {
  id: number;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  categoryId: number | null;
  categoryName: string | null;
  categorySlug: string | null;
  authorName: string | null;
  coverImageUrl: string | null;
  status: ContentStatus;
  isFeatured: boolean;
  readTimeMinutes: number | null;
  publishedAt: string | null;
}

export interface GalleryImage {
  id: number;
  title: string | null;
  imageUrl: string;
  category: string | null;
  eventId: number | null;
}

export interface Testimonial {
  id: number;
  authorName: string;
  authorRole: string | null;
  organization: string | null;
  quote: string;
  avatarUrl: string | null;
  rating: number | null;
  isFeatured: boolean;
  status: ContentStatus;
}

export interface ImpactMetric {
  label: string;
  value: string;
}

export interface SuccessStory {
  id: number;
  slug: string;
  startupName: string;
  founderName: string;
  categoryName: string | null;
  categorySlug: string | null;
  headline: string;
  excerpt: string | null;
  story: string[];
  impactMetrics: ImpactMetric[];
  coverImageUrl: string | null;
  status: ContentStatus;
}

export interface SearchResultItem {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  type: "startup" | "blog" | "event" | "mentor";
}

export interface SearchResults {
  startups: SearchResultItem[];
  blogs: SearchResultItem[];
  events: SearchResultItem[];
  mentors: SearchResultItem[];
}

export interface HeroContent {
  badgeText: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface ImpactStat {
  label: string;
  value: number;
  suffix: string;
}

export interface ContactCtaContent {
  title: string;
  description: string;
  email: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export interface NewsletterSubscriber {
  id: number;
  email: string;
  isActive: boolean;
  subscribedAt: string;
}

export type Role = {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  permissions: string[];
};

export interface AdminUser {
  id: number;
  name: string;
  email: string;
  roleId: number;
  roleName: string;
  roleSlug: string;
  permissions: string[];
  isActive: boolean;
  lastLoginAt: string | null;
}

export interface DashboardCounts {
  totalStartups: number;
  totalMentors: number;
  totalAdvisors: number;
  totalPartners: number;
  totalEvents: number;
  totalBlogs: number;
  totalTestimonials: number;
  totalSuccessStories: number;
  totalGalleryImages: number;
  totalMessages: number;
  unreadMessages: number;
  newsletterSubscribers: number;
}

export interface RecentActivityItem {
  type: string;
  title: string;
  created_at: string;
}
