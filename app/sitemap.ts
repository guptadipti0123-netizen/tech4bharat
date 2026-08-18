import type { MetadataRoute } from "next";
import { events } from "@/lib/events";
import { successStories } from "@/lib/data";

const BASE_URL = "https://tech4bharat.org";

const staticRoutes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/programs", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/incubation-acceleration", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/startup-bootcamp", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/portfolio", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/mentors", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/partners", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/success-stories", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/gallery", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/events", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/blogs", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const eventEntries: MetadataRoute.Sitemap = events.map((event) => ({
    url: `${BASE_URL}/events/${event.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const successStoryEntries: MetadataRoute.Sitemap = successStories.map((story) => ({
    url: `${BASE_URL}/success-stories/${story.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...eventEntries, ...successStoryEntries];
}
