export type EventType = "Bootcamp" | "Workshop" | "Summit" | "Webinar" | "Challenge";
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
    title: "Tech4Bharat Startup Bootcamp",
    type: "Bootcamp",
    status: "Upcoming",
    date: "September 12–14, 2026",
    venue: "IIT Bombay, Mumbai",
    description:
      "A 3-day, immersive bootcamp taking founders from idea to investor-ready pitch.",
    longDescription:
      "The Tech4Bharat Startup Bootcamp is our flagship, three-day intensive program bringing together 100+ early-stage founders for hands-on workshops covering product validation, growth strategy, fundraising, and pitch craft. Attendees work directly with mentors and leave with a refined pitch deck and a peer network that lasts well beyond the bootcamp.",
    speakers: [
      { name: "Priya Nair", designation: "Founder & CEO, NimbusPay" },
      { name: "Rohan Mehta", designation: "Partner, Blume Ventures" },
      { name: "Dr. Suresh Menon", designation: "Professor, IIT Bombay" },
    ],
    featured: true,
    agenda: [
      { time: "Day 1 · 09:00 AM", title: "Registration & Welcome Breakfast" },
      { time: "Day 1 · 10:00 AM", title: "Opening Keynote: State of Indian Startups", speaker: "Priya Nair" },
      { time: "Day 1 · 02:00 PM", title: "Workshop: Product Validation Sprint" },
      { time: "Day 2 · 10:00 AM", title: "Fundraising Masterclass", speaker: "Rohan Mehta" },
      { time: "Day 2 · 03:00 PM", title: "Mentor Speed-Dating Sessions" },
      { time: "Day 3 · 10:00 AM", title: "Pitch Craft Workshop", speaker: "Dr. Suresh Menon" },
      { time: "Day 3 · 04:00 PM", title: "Demo Day & Closing Ceremony" },
    ],
  },
  {
    id: "2",
    slug: "fundraising-masterclass",
    title: "Fundraising Masterclass",
    type: "Workshop",
    status: "Upcoming",
    date: "August 20, 2026",
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
    slug: "agritech-innovation-challenge",
    title: "AgriTech Innovation Challenge",
    type: "Challenge",
    status: "Upcoming",
    date: "October 5, 2026",
    venue: "Nagpur, Maharashtra",
    description: "A competitive challenge inviting founders to solve real farmer pain points.",
    longDescription:
      "In partnership with regional farmer cooperatives, this innovation challenge invites AgriTech founders to prototype solutions to real, field-sourced problems — with mentorship, cash prizes, and fast-tracked incubation for winning teams.",
    speakers: [{ name: "Tanvi Shah", designation: "Founder, Formerly of CropConnect" }],
  },
  {
    id: "4",
    slug: "healthtech-summit-2025",
    title: "HealthTech Summit",
    type: "Summit",
    status: "Past",
    date: "November 18, 2025",
    venue: "Pune, Maharashtra",
    description: "A gathering of HealthTech founders, clinicians, and investors.",
    longDescription:
      "The inaugural HealthTech Summit brought together 200+ founders, clinicians, and investors to discuss the future of digital health in India, with panel discussions on regulatory pathways and rural care delivery.",
    speakers: [{ name: "Arjun Verma", designation: "Co-founder, HealthBridge" }],
  },
  {
    id: "5",
    slug: "product-validation-bootcamp-2025",
    title: "Product Validation Bootcamp",
    type: "Bootcamp",
    status: "Past",
    date: "July 8–9, 2025",
    venue: "IIT Bombay, Mumbai",
    description: "A 2-day sprint on validating product-market fit before writing a line of code.",
    longDescription:
      "40 idea-stage founders spent two days running structured customer discovery sprints, learning frameworks to validate demand before committing engineering resources.",
    speakers: [{ name: "Aarav Sharma", designation: "Ex-VP Product, Flipkart" }],
  },
  {
    id: "6",
    slug: "women-founders-networking-night",
    title: "Women Founders Networking Night",
    type: "Webinar",
    status: "Past",
    date: "March 8, 2025",
    venue: "Online",
    description: "A community evening celebrating and connecting women-led startups.",
    longDescription:
      "Held on International Women's Day, this virtual networking evening connected 60+ women founders across our portfolio with mentors and investors focused on backing women-led ventures.",
    speakers: [{ name: "Sneha Kapoor", designation: "Founder, EduSpark" }],
  },
];
