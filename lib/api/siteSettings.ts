import { apiFetch } from "./client";
import type { HeroContent, ImpactStat, ContactCtaContent } from "./types";

interface RawSiteSetting<T> {
  section_key: string;
  content: T;
}

async function getSection<T>(sectionKey: string, fallback: T): Promise<T> {
  try {
    const { data } = await apiFetch<RawSiteSetting<T>>(`/site-settings/${sectionKey}`);
    return data.content;
  } catch {
    // No live backend, or the section hasn't been configured yet — fall back to shipped defaults
    // so the homepage never renders blank while an admin sets things up.
    return fallback;
  }
}

const DEFAULT_HERO: HeroContent = {
  badgeText: "Building India's Startup Future",
  title: "Empowering Bold Ideas to Build Tomorrow's Bharat",
  description:
    "Tech4Bharat is a startup incubator helping ambitious founders turn ideas into category-defining companies — through mentorship, capital, and community.",
  primaryCta: { label: "Explore Programs", href: "/programs" },
  secondaryCta: { label: "Partner With Us", href: "/contact" },
};

const DEFAULT_IMPACT_STATS: ImpactStat[] = [
  { label: "Startups Incubated", value: 150, suffix: "+" },
  { label: "Funding Raised (₹ Cr)", value: 120, suffix: "+" },
  { label: "Jobs Created", value: 3200, suffix: "+" },
  { label: "Mentor Network", value: 80, suffix: "+" },
];

const DEFAULT_CONTACT_CTA: ContactCtaContent = {
  title: "Have a bold idea? Let's build it together.",
  description: "Whether you're a founder, mentor, or partner — we'd love to hear from you.",
  email: "hello@tech4bharat.org",
};

export async function getHeroContent(): Promise<HeroContent> {
  return getSection("hero", DEFAULT_HERO);
}

export async function getImpactStats(): Promise<ImpactStat[]> {
  return getSection("impact_stats", DEFAULT_IMPACT_STATS);
}

export async function getContactCtaContent(): Promise<ContactCtaContent> {
  return getSection("contact_cta", DEFAULT_CONTACT_CTA);
}
