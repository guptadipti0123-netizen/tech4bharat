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
    slug: "agritech-innovation-challenge",
    title: "AgriTech Innovation Challenge",
    type: "Challenge",
    status: "Upcoming",
    date: "October 5, 2026",
    time: "11:00 AM onwards",
    venue: "Nagpur, Maharashtra",
    description: "A competitive challenge inviting founders to solve real farmer pain points.",
    longDescription:
      "In partnership with regional farmer cooperatives, this innovation challenge invites AgriTech founders to prototype solutions to real, field-sourced problems — with mentorship, cash prizes, and fast-tracked incubation for winning teams.",
    speakers: [{ name: "Tanvi Shah", designation: "Founder, Formerly of CropConnect" }],
  },
  {
    id: "7",
    slug: "demo-day-winter-cohort",
    title: "Demo Day: Winter Cohort",
    type: "Demo Day",
    status: "Upcoming",
    date: "November 14, 2026",
    time: "3:00 PM onwards",
    venue: "Bengaluru, Karnataka",
    description: "Winter cohort founders pitch investor-ready decks to a room of VCs and operators.",
    longDescription:
      "The culmination of our winter incubation cohort — 15 founders take the stage to pitch to a curated room of VCs, angels, and corporate innovation leads, after 12 weeks of structured mentorship.",
    speakers: [{ name: "Kavita Rao", designation: "Partner, Sequoia Surge" }],
    featured: true,
  },
  {
    id: "8",
    slug: "deep-tech-founders-roundtable",
    title: "Deep-Tech Founders Roundtable",
    type: "Workshop",
    status: "Upcoming",
    date: "September 25, 2026",
    time: "2:00 PM – 5:00 PM",
    venue: "Hyderabad, Telangana",
    description: "A closed-door roundtable for AI and deep-tech founders on compute costs and regulation.",
    longDescription:
      "Deep-tech founders face unique challenges — compute costs, IP protection, and slow enterprise sales cycles. This roundtable brings together a small group of AI and hardware founders with operators who've scaled deep-tech companies in India.",
    speakers: [{ name: "Rahul Bhatt", designation: "Founder, VoxAI" }],
  },
  {
    id: "9",
    slug: "women-in-tech-meetup",
    title: "Women in Tech Meetup",
    type: "Webinar",
    status: "Upcoming",
    date: "October 18, 2026",
    time: "6:00 PM – 7:30 PM",
    venue: "Online",
    description: "A virtual meetup connecting women founders across the Tech4Bharat portfolio.",
    longDescription:
      "An informal virtual evening for women founders to connect, trade fundraising and hiring playbooks, and build a peer support network beyond their immediate cohort.",
    speakers: [{ name: "Meera Iyer", designation: "Founder, CareCircle" }],
  },
  {
    id: "10",
    slug: "climate-innovation-challenge",
    title: "Climate Innovation Challenge",
    type: "Challenge",
    status: "Upcoming",
    date: "November 2, 2026",
    time: "10:00 AM onwards",
    venue: "Ahmedabad, Gujarat",
    description: "A competitive challenge for founders building climate and clean-energy solutions.",
    longDescription:
      "In partnership with state renewable energy bodies, this challenge invites climate-tech founders to prototype solutions to grid, water, and waste-management problems — with mentorship and fast-tracked incubation for winning teams.",
    speakers: [{ name: "Sanjana Iyer", designation: "Founder, GreenGrid" }],
  },
  {
    id: "4",
    slug: "healthtech-summit-2025",
    title: "HealthTech Summit",
    type: "Networking",
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
  {
    id: "11",
    slug: "digital-tech-policy-workshop-2025",
    title: "Digital & Tech Policy Workshop",
    type: "Workshop",
    status: "Past",
    date: "December 18–23, 2025",
    venue: "COEP Technological University, Pune",
    description: "A 6-day intensive on technology, governance, and strategic decision-making.",
    longDescription:
      "Run with COEP Technological University and VJTI Mumbai, this program explored the intersections of technology, policy, and governance — covering AI governance, digital public infrastructure, innovation strategy, and hands-on policy drafting exercises, with a field visit to C-DAC.",
    speakers: [{ name: "Dr. Chaitanya Giri", designation: "Fellow, Observer Research Foundation" }],
  },
  {
    id: "12",
    slug: "ai-workshop-bharatgen-2025",
    title: "AI Workshop by BharatGen",
    type: "Workshop",
    status: "Past",
    date: "March 21, 2025",
    venue: "Cognizant Lab, COEP, Pune",
    description: "\"GenAI for Everyone, by Everyone\" — a hands-on introduction to building with generative AI.",
    longDescription:
      "A hands-on session introducing AI development with minimal coding requirements — covering LangChain, Hugging Face Transformers, neural networks, and large language models, alongside a look at AI career pathways.",
    speakers: [],
  },
];
