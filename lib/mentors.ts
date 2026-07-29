export type MentorCategory =
  | "Leadership Advisors"
  | "Industry Experts"
  | "Academic Mentors"
  | "Startup Mentors";

export interface MentorProfile {
  id: string;
  slug: string;
  name: string;
  designation: string;
  organization: string;
  category: MentorCategory;
  expertise: string[];
  linkedin: string;
  initials: string;
  location: string;
  experienceYears: number;
  bio: string;
}

export const mentorCategories: MentorCategory[] = [
  "Leadership Advisors",
  "Industry Experts",
  "Academic Mentors",
  "Startup Mentors",
];

// Sample data shaped for a future API integration (e.g. GET /api/mentors, GET /api/mentors/:slug)
export const mentorProfiles: MentorProfile[] = [
  {
    id: "1",
    slug: "aarav-sharma",
    name: "Aarav Sharma",
    designation: "Ex-VP Product",
    organization: "Flipkart",
    category: "Leadership Advisors",
    expertise: ["Product Strategy", "Scaling Teams", "Consumer Tech"],
    linkedin: "#",
    initials: "AS",
    location: "Bengaluru, Karnataka",
    experienceYears: 14,
    bio: "Aarav spent over a decade scaling product organizations at Flipkart, leading teams through hypergrowth from Series C to IPO readiness. He now advises early-stage founders on product-market fit and building durable product organizations.",
  },
  {
    id: "2",
    slug: "priya-nair",
    name: "Priya Nair",
    designation: "Founder & CEO",
    organization: "NimbusPay",
    category: "Leadership Advisors",
    expertise: ["Fundraising", "FinTech", "Go-to-Market"],
    linkedin: "#",
    initials: "PN",
    location: "Mumbai, Maharashtra",
    experienceYears: 10,
    bio: "Priya founded and scaled NimbusPay from a two-person team to a 200-person fintech company. She mentors founders on fundraising strategy and building trust-first financial products.",
  },
  {
    id: "3",
    slug: "rohan-mehta",
    name: "Rohan Mehta",
    designation: "Partner",
    organization: "Blume Ventures",
    category: "Leadership Advisors",
    expertise: ["Venture Capital", "Deal Structuring", "Board Governance"],
    linkedin: "#",
    initials: "RM",
    location: "Mumbai, Maharashtra",
    experienceYears: 12,
    bio: "Rohan has led early-stage investments across 40+ Indian startups. He advises Tech4Bharat founders on fundraising readiness, term sheets, and building investor-ready data rooms.",
  },
  {
    id: "4",
    slug: "kavya-iyer",
    name: "Kavya Iyer",
    designation: "Head of Growth",
    organization: "Zerodha",
    category: "Industry Experts",
    expertise: ["Growth Marketing", "Retention", "Analytics"],
    linkedin: "#",
    initials: "KI",
    location: "Bengaluru, Karnataka",
    experienceYears: 9,
    bio: "Kavya leads growth at Zerodha, India's largest stockbroker, where she's driven user acquisition and retention strategy at massive scale. She helps founders design growth loops that compound.",
  },
  {
    id: "5",
    slug: "vikram-suri",
    name: "Vikram Suri",
    designation: "VP Engineering",
    organization: "Razorpay",
    category: "Industry Experts",
    expertise: ["Engineering Leadership", "System Design", "DevOps"],
    linkedin: "#",
    initials: "VS",
    location: "Bengaluru, Karnataka",
    experienceYears: 11,
    bio: "Vikram has built and scaled engineering teams handling billions of transactions at Razorpay. He mentors technical founders on architecture decisions that hold up under scale.",
  },
  {
    id: "6",
    slug: "ananya-das",
    name: "Ananya Das",
    designation: "Director of Design",
    organization: "Swiggy",
    category: "Industry Experts",
    expertise: ["Product Design", "UX Research", "Design Systems"],
    linkedin: "#",
    initials: "AD",
    location: "Bengaluru, Karnataka",
    experienceYears: 10,
    bio: "Ananya leads design at Swiggy, shaping experiences used by millions daily. She works with founders on building design systems that scale from MVP to mature product.",
  },
  {
    id: "7",
    slug: "dr-suresh-menon",
    name: "Dr. Suresh Menon",
    designation: "Professor, Entrepreneurship",
    organization: "IIT Bombay",
    category: "Academic Mentors",
    expertise: ["Deep Tech Commercialization", "IP Strategy", "Research Translation"],
    linkedin: "#",
    initials: "SM",
    location: "Mumbai, Maharashtra",
    experienceYears: 20,
    bio: "Dr. Menon has guided dozens of IIT Bombay research projects toward commercialization. He advises deep-tech founders on translating lab research into viable products.",
  },
  {
    id: "8",
    slug: "dr-anjali-rao",
    name: "Dr. Anjali Rao",
    designation: "Associate Professor",
    organization: "IIM Ahmedabad",
    category: "Academic Mentors",
    expertise: ["Business Strategy", "Market Sizing", "Case Research"],
    linkedin: "#",
    initials: "AR",
    location: "Ahmedabad, Gujarat",
    experienceYears: 15,
    bio: "Dr. Rao's research on emerging-market business models informs her mentorship on go-to-market strategy for founders targeting Tier 2 and Tier 3 India.",
  },
  {
    id: "9",
    slug: "dr-imran-khan",
    name: "Dr. Imran Khan",
    designation: "Professor, Computer Science",
    organization: "IIT Delhi",
    category: "Academic Mentors",
    expertise: ["Applied AI", "Machine Learning", "Research Partnerships"],
    linkedin: "#",
    initials: "IK",
    location: "Delhi, NCR",
    experienceYears: 18,
    bio: "Dr. Khan bridges academic AI research with startup application, helping DeepTech founders access datasets, compute grants, and research collaborations.",
  },
  {
    id: "10",
    slug: "tanvi-shah",
    name: "Tanvi Shah",
    designation: "Founder",
    organization: "Formerly of CropConnect (Acquired)",
    category: "Startup Mentors",
    expertise: ["AgriTech", "Exit Strategy", "Team Building"],
    linkedin: "#",
    initials: "TS",
    location: "Pune, Maharashtra",
    experienceYears: 8,
    bio: "Tanvi built and sold CropConnect, an agri-marketplace startup, in 2023. She now mentors early founders on the operational realities of scaling a startup in rural markets.",
  },
  {
    id: "11",
    slug: "arjun-verma",
    name: "Arjun Verma",
    designation: "Co-founder",
    organization: "HealthBridge",
    category: "Startup Mentors",
    expertise: ["HealthTech", "Regulatory Navigation", "Partnerships"],
    linkedin: "#",
    initials: "AV",
    location: "Hyderabad, Telangana",
    experienceYears: 7,
    bio: "Arjun co-founded HealthBridge and has navigated India's complex healthcare regulatory landscape firsthand. He helps HealthTech founders avoid common compliance pitfalls.",
  },
  {
    id: "12",
    slug: "sneha-kapoor",
    name: "Sneha Kapoor",
    designation: "Founder",
    organization: "EduSpark",
    category: "Startup Mentors",
    expertise: ["EdTech", "Content Strategy", "Community Building"],
    linkedin: "#",
    initials: "SK",
    location: "Jaipur, Rajasthan",
    experienceYears: 6,
    bio: "Sneha founded EduSpark, a vernacular EdTech platform now used by 500,000+ students. She mentors founders on building engaged communities around their product.",
  },
];
