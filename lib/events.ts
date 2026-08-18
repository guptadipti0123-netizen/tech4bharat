/** Pulls a { day, month } pair out of a formatted date string like "September 12–14, 2026"
 *  or "August 20, 2026" — enough to power a compact calendar-style date badge. */
export function getDateParts(dateStr: string): { day: string; month: string } {
  const match = dateStr.match(/([A-Za-z]+)\s+(\d+)/);
  if (!match) return { day: "--", month: dateStr.slice(0, 3).toUpperCase() };
  const [, monthName, day] = match;
  return { day, month: monthName.slice(0, 3).toUpperCase() };
}

// "Bootcamp" is kept only for the Tech4Bharat Startup Bootcamp's own data (it now lives on
// its dedicated /startup-bootcamp page); the Events page filters every Bootcamp-typed event
// out, so it never appears there. Every other event should use one of the remaining types.
export type EventType =
  | "Bootcamp"
  | "Workshop"
  | "Challenge"
  | "Hackathon"
  | "Networking"
  | "Pitch Event"
  | "Demo Day"
  | "Webinar";
export type EventStatus = "Upcoming" | "Past";

export interface EventSpeaker {
  name: string;
  designation: string;
}

export interface AgendaSession {
  time: string;
  title: string;
  speaker?: string;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  type: EventType;
  status: EventStatus;
  date: string;
  time?: string;
  venue: string;
  description: string;
  longDescription: string;
  speakers: EventSpeaker[];
  featured?: boolean;
  agenda?: AgendaSession[];
}

// Sample data shaped for a future API integration (e.g. GET /api/events, GET /api/events/:slug)
export const events: EventItem[] = [
  {
    id: "1",
    slug: "tech4bharat-startup-bootcamp-2026",
    title: "One-Day Startup Bootcamp 2026",
    type: "Bootcamp",
    status: "Upcoming",
    date: "October 2026",
    time: "9:00 AM – 6:00 PM",
    venue: "Mumbai",
    description:
      "A one-day intensive bootcamp helping early-stage founders validate ideas, build sustainable businesses, and prepare for funding.",
    longDescription:
      "The Tech4Bharat One-Day Startup Bootcamp brings together early-stage and social impact founders for a single, intensive day of expert-led sessions, mentoring, networking, and investor readiness — covering fundraising, business model development, product validation, market access, and government schemes.",
    speakers: [
      { name: "Priya Nair", designation: "Founder & CEO, NimbusPay" },
      { name: "Rohan Mehta", designation: "Partner, Blume Ventures" },
      { name: "Dr. Suresh Menon", designation: "Professor, IIT Bombay" },
    ],
    agenda: [
      { time: "9:00 AM", title: "Registration" },
      { time: "9:30 AM", title: "Welcome Session" },
      { time: "10:00 AM", title: "Expert Talks" },
      { time: "11:30 AM", title: "Business Workshops" },
      { time: "1:00 PM", title: "Lunch & Networking" },
      { time: "2:00 PM", title: "Investor Readiness Session" },
      { time: "3:30 PM", title: "Startup Pitching" },
      { time: "5:00 PM", title: "Closing & Networking" },
    ],
  },
  {
    id: "2",
    slug: "fundraising-masterclass",
    title: "Fundraising Masterclass",
    type: "Workshop",
    status: "Upcoming",
    date: "August 20, 2026",
    time: "10:00 AM – 12:00 PM",
    venue: "Online",
    description: "A hands-on session on building an investor-ready data room and pitch narrative.",
    longDescription:
      "Join Blume Ventures Partner Rohan Mehta for a deep-dive workshop on what investors actually look for at the seed stage — covering data room structure, cap table hygiene, and how to tell a compelling growth story with limited traction data.",
    speakers: [{ name: "Rohan Mehta", designation: "Partner, Blume Ventures" }],
    agenda: [
      { time: "10:00 AM", title: "What Investors Actually Look For at Seed Stage", speaker: "Rohan Mehta" },
      { time: "11:00 AM", title: "Building Your Data Room: Live Walkthrough" },
      { time: "12:00 PM", title: "Open Q&A and 1:1 Office Hours" },
    ],
  },
  {
    id: "3",
    slug: "healthtech-summit-2025",
    title: "HealthTech Summit",
    type: "Networking",
    status: "Past",
    date: "November 18, 2025",
    venue: "Pune, Maharashtra",
    description: "A gathering of HealthTech founders, clinicians, and investors discussing digital health pathways.",
    longDescription:
      "The inaugural HealthTech Summit brought together founders, clinicians, and investors to discuss the future of digital health in India, with panel discussions on regulatory pathways and rural care delivery.",
    speakers: [{ name: "Arjun Verma", designation: "Co-founder, HealthBridge" }],
  },
  {
    id: "4",
    slug: "product-validation-bootcamp-2025",
    title: "Product Validation Bootcamp",
    type: "Bootcamp",
    status: "Past",
    date: "July 8–9, 2025",
    venue: "IIT Bombay, Mumbai",
    description: "A 2-day sprint on validating product-market fit before writing a line of code.",
    longDescription:
      "Idea-stage founders spent two days running structured customer discovery sprints, learning frameworks to validate demand before committing engineering resources.",
    speakers: [{ name: "Aarav Sharma", designation: "Ex-VP Product, Flipkart" }],
  },
];
