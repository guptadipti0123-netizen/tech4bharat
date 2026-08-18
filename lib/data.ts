export interface FocusArea {
  title: string;
  description: string;
  icon: "Cpu" | "Leaf" | "HeartPulse" | "GraduationCap" | "Landmark" | "Zap";
}

export const focusAreas: FocusArea[] = [
  {
    title: "DeepTech & AI",
    description:
      "Backing founders building frontier technology with real-world impact.",
    icon: "Cpu",
  },
  {
    title: "AgriTech",
    description:
      "Solutions that strengthen India's agricultural backbone and rural livelihoods.",
    icon: "Leaf",
  },
  {
    title: "HealthTech",
    description:
      "Accessible, affordable healthcare innovation for a billion Indians.",
    icon: "HeartPulse",
  },
  {
    title: "EdTech",
    description: "Reimagining learning outcomes for India's next generation.",
    icon: "GraduationCap",
  },
  {
    title: "FinTech",
    description:
      "Expanding financial inclusion through technology-first solutions.",
    icon: "Landmark",
  },
  {
    title: "ClimateTech",
    description:
      "Sustainable ventures tackling climate and clean-energy challenges.",
    icon: "Zap",
  },
];

export interface Program {
  name: string;
  stage: string;
  duration: string;
  description: string;
}

export const programs: Program[] = [
  {
    name: "Ignite",
    stage: "Idea Stage",
    duration: "8 Weeks",
    description:
      "Validate your idea, build your MVP, and find product-market fit with hands-on mentorship.",
  },
  {
    name: "Accelerate",
    stage: "Early Stage",
    duration: "16 Weeks",
    description:
      "Scale your startup with structured mentorship, funding access, and investor connects.",
  },
  {
    name: "Scale",
    stage: "Growth Stage",
    duration: "6 Months",
    description:
      "Unlock growth capital, enterprise partnerships, and global market access.",
  },
];

export const socialImpactDomains = [
  "AgriTech",
  "Water & Sanitation",
  "MedTech",
  "HealthTech",
  "AI/ML",
  "ClimateTech",
  "Clean Energy",
  "Waste Management",
  "Education Technology",
  "Rural Development",
  "Women Empowerment",
  "Livelihood Generation",
  "Other Social Impact Innovations",
] as const;

export type SocialImpactDomain = (typeof socialImpactDomains)[number];

export type StartupStage = "Idea Stage" | "Early Stage" | "Growth Stage" | "Scaled";

export interface Startup {
  name: string;
  founder: string;
  tagline: string;
  domain: string;
  logoInitial: string;
  image: string;
  location: string;
  stage: StartupStage;
  website?: string;
}

export const startups: Startup[] = [
  {
    name: "AgroSense",
    founder: "Ritika Deshmukh",
    tagline: "AI-powered crop health monitoring and soil analytics for smallholder farmers.",
    domain: "AgriTech",
    logoInitial: "AS",
    image: "/images/domains/agritech.jpg",
    location: "Nagpur, Maharashtra",
    stage: "Growth Stage",
    website: "#",
  },
  {
    name: "JalShuddhi",
    founder: "Deepak Chawla",
    tagline: "Solar-powered decentralized water purification with IoT contamination alerts.",
    domain: "Water & Sanitation",
    logoInitial: "JS",
    image: "/images/domains/water-sanitation.jpg",
    location: "Indore, Madhya Pradesh",
    stage: "Early Stage",
    website: "#",
  },
  {
    name: "CardioBeat",
    founder: "Dr. Arvind Kulkarni",
    tagline: "Portable AI-assisted ECG device for rural and point-of-care cardiac screening.",
    domain: "MedTech",
    logoInitial: "CB",
    image: "/images/domains/medtech.jpg",
    location: "Bengaluru, Karnataka",
    stage: "Growth Stage",
    website: "#",
  },
  {
    name: "MedLink",
    founder: "Aditya Rao",
    tagline: "Telemedicine platform connecting rural primary health clinics to specialist care.",
    domain: "HealthTech",
    logoInitial: "ML",
    image: "/images/domains/healthtech.jpg",
    location: "Pune, Maharashtra",
    stage: "Early Stage",
    website: "#",
  },
  {
    name: "BharatVision AI",
    founder: "Rahul Bhatt",
    tagline: "Indic voice and computer vision AI stack for public services and agri-diagnostics.",
    domain: "AI/ML",
    logoInitial: "BV",
    image: "/images/gallery/technology-1.jpg",
    location: "Hyderabad, Telangana",
    stage: "Scaled",
    website: "#",
  },
  {
    name: "GreenGrid",
    founder: "Sanjana Iyer",
    tagline: "Decentralized solar micro-grids and smart telemetry for off-grid communities.",
    domain: "ClimateTech",
    logoInitial: "GG",
    image: "/images/domains/climatetech.jpg",
    location: "Ahmedabad, Gujarat",
    stage: "Idea Stage",
    website: "#",
  },
  {
    name: "UrjaVayu",
    founder: "Pooja Nair",
    tagline: "Compact rooftop micro-wind and solar hybrid clean power systems.",
    domain: "Clean Energy",
    logoInitial: "UV",
    image: "/images/domains/clean-energy.jpg",
    location: "Nashik, Maharashtra",
    stage: "Early Stage",
    website: "#",
  },
  {
    name: "EcoKooda",
    founder: "Harish Patel",
    tagline: "Computer vision waste sorting and decentralized circular polymer upcycling.",
    domain: "Waste Management",
    logoInitial: "EK",
    image: "/images/domains/waste-management.jpg",
    location: "Surat, Gujarat",
    stage: "Growth Stage",
    website: "#",
  },
  {
    name: "PathShala",
    founder: "Neha Kulkarni",
    tagline: "Vernacular interactive micro-learning and STEM education for Tier 2/3 students.",
    domain: "Education Technology",
    logoInitial: "PS",
    image: "/images/gallery/students-1.jpg",
    location: "Bengaluru, Karnataka",
    stage: "Growth Stage",
    website: "#",
  },
  {
    name: "GramSetu",
    founder: "Manoj Kumar",
    tagline: "Rural micro-supply chain platform connecting village artisans directly to D2C buyers.",
    domain: "Rural Development",
    logoInitial: "GS",
    image: "/images/gallery/agriculture-3.jpg",
    location: "Varanasi, Uttar Pradesh",
    stage: "Early Stage",
    website: "#",
  },
  {
    name: "SafalNaari",
    founder: "Anjali Verma",
    tagline: "A micro-enterprise platform and credit facilitation system for women entrepreneurs.",
    domain: "Women Empowerment",
    logoInitial: "SN",
    image: "/images/gallery/woman-office-call.jpg",
    location: "Jaipur, Rajasthan",
    stage: "Idea Stage",
    website: "#",
  },
  {
    name: "HunarBharat",
    founder: "Rameshwar Patil",
    tagline: "Skill verification and localized livelihood matchmaking for semi-skilled youth.",
    domain: "Livelihood Generation",
    logoInitial: "HB",
    image: "/images/gallery/gallery-1.jpg",
    location: "Kolhapur, Maharashtra",
    stage: "Early Stage",
    website: "#",
  },
  {
    name: "DrishtiVision",
    founder: "Shruti Sen",
    tagline: "Smart wearable navigation and text-to-speech assistive glasses for the visually impaired.",
    domain: "Other Social Impact Innovations",
    logoInitial: "DV",
    image: "/images/gallery/gallery-6.jpg",
    location: "Kolkata, West Bengal",
    stage: "Idea Stage",
    website: "#",
  },
  {
    name: "KrishiChain",
    founder: "Vikram Solanki",
    tagline: "Traceable farm-to-shelf supply chain and fair price assurance protocol.",
    domain: "AgriTech",
    logoInitial: "KC",
    image: "/images/gallery/agriculture-2.jpg",
    location: "Bhopal, Madhya Pradesh",
    stage: "Early Stage",
    website: "#",
  },
  {
    name: "NirmalJal",
    founder: "Smita Mukherjee",
    tagline: "Nanotech-based heavy metal water remediation filters for flood-prone regions.",
    domain: "Water & Sanitation",
    logoInitial: "NJ",
    image: "/images/gallery/research-2.jpg",
    location: "Guwahati, Assam",
    stage: "Idea Stage",
    website: "#",
  },
  {
    name: "SwasthyaSeva",
    founder: "Dr. Tarun Verma",
    tagline: "Diagnostic point-of-care kits for maternal health in tribal primary health centers.",
    domain: "MedTech",
    logoInitial: "SS",
    image: "/images/gallery/heritage-tour.jpg",
    location: "Ranchi, Jharkhand",
    stage: "Early Stage",
    website: "#",
  },
];

export interface Mentor {
  name: string;
  role: string;
  company: string;
  expertise: string;
  initials: string;
  photo: string;
  bio: string;
  linkedinUrl?: string;
}

export const mentors: Mentor[] = [
  {
    name: "Aarav Sharma",
    role: "Ex-VP Product",
    company: "Flipkart",
    expertise: "Product Strategy",
    initials: "AS",
    photo: "/images/people/aarav-sharma.jpg",
    bio: "Spent a decade shipping consumer products at scale; now helps early founders sharpen roadmaps and avoid costly detours.",
    linkedinUrl: "#",
  },
  {
    name: "Priya Nair",
    role: "Founder & CEO",
    company: "NimbusPay",
    expertise: "Fundraising",
    initials: "PN",
    photo: "/images/people/priya-nair.jpg",
    bio: "Raised three rounds of capital for her own fintech venture; mentors founders on data rooms, term sheets, and investor narratives.",
    linkedinUrl: "#",
  },
  {
    name: "Rohan Mehta",
    role: "Partner",
    company: "Blume Ventures",
    expertise: "Venture Capital",
    initials: "RM",
    photo: "/images/people/rohan-mehta.jpg",
    bio: "Backs early-stage Indian startups and works closely with Tech4Bharat cohorts on seed-stage readiness.",
    linkedinUrl: "#",
  },
  {
    name: "Kavya Iyer",
    role: "Head of Growth",
    company: "Zerodha",
    expertise: "Growth Marketing",
    initials: "KI",
    photo: "/images/people/kavya-iyer.jpg",
    bio: "Built growth loops for one of India's largest fintech platforms; advises founders on retention and lifecycle marketing.",
    linkedinUrl: "#",
  },
];

export interface Advisor {
  name: string;
  designation: string;
  institution: string;
  expertise: string;
  bio: string;
  photo: string;
  initials: string;
  linkedinUrl?: string;
}

export const advisors: Advisor[] = [
  {
    name: "Dr. Suresh Menon",
    designation: "Professor & Head of Translation",
    institution: "IIT Bombay",
    expertise: "Deep-Tech, Academic Research & Lab-to-Market",
    bio: "Leads applied research translation at IIT Bombay and guides Tech4Bharat's deep-tech and social cohorts from lab prototyping to commercialization.",
    photo: "/images/people/suresh-menon.jpg",
    initials: "SM",
    linkedinUrl: "#",
  },
  {
    name: "Arjun Verma",
    designation: "Co-founder & Healthcare Advisor",
    institution: "HealthBridge & Public Health Alliance",
    expertise: "Healthcare Innovation, MedTech & Public Health Policy",
    bio: "Built digital health platforms serving underserved communities; advises HealthTech and MedTech founders on clinical trials and regulatory pathways.",
    photo: "/images/people/arjun-verma.jpg",
    initials: "AV",
    linkedinUrl: "#",
  },
  {
    name: "Dr. Meera Swaminathan",
    designation: "Former Senior Advisor",
    institution: "NITI Aayog & Social Innovation Grants",
    expertise: "Government Schemes, DPIIT Policies & Impact Grants",
    bio: "Decades of experience architecting national innovation missions and guiding startups to access public sector grants and state policies.",
    photo: "/images/people/priya-nair.jpg",
    initials: "MS",
    linkedinUrl: "#",
  },
  {
    name: "Rajesh Khurana",
    designation: "Managing Director",
    institution: "Bharat Impact Fund",
    expertise: "Social Impact Capital, ESG & Venture Scaling",
    bio: "Experienced investor in livelihood, clean energy, and agritech ventures; mentors cohorts on governance, cap-table structures, and institutional fundraising.",
    photo: "/images/people/rohan-mehta.jpg",
    initials: "RK",
    linkedinUrl: "#",
  },
];

export interface Partner {
  name: string;
}

export const partners: Partner[] = [
  { name: "IIT Bombay" },
  { name: "NASSCOM" },
  { name: "Startup India" },
  { name: "Microsoft for Startups" },
  { name: "AWS Activate" },
  { name: "SIDBI" },
];

export type BlogCategory = "Ecosystem" | "Fundraising" | "Mentorship" | "Policy" | "Product";

export interface BlogPost {
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "How India's Tier 2 Cities Are Powering the Next Startup Wave",
    excerpt:
      "A look at the emerging founder hubs beyond Bengaluru and Mumbai.",
    category: "Ecosystem",
    date: "Jun 2026",
    readTime: "5 min read",
    image: "/images/gallery/gallery-15.jpg",
    slug: "tier-2-cities-startup-wave",
  },
  {
    title: "Raising Your First Round: A Founder's Playbook",
    excerpt:
      "Practical lessons from 150+ startups that raised seed capital.",
    category: "Fundraising",
    date: "May 2026",
    readTime: "7 min read",
    image: "/images/gallery/conference-podium-1.jpg",
    slug: "raising-your-first-round",
  },
  {
    title: "Why Mentorship Matters More Than Money in Year One",
    excerpt:
      "Founders and mentors share what actually moves the needle early on.",
    category: "Mentorship",
    date: "Apr 2026",
    readTime: "4 min read",
    image: "/images/gallery/gallery-6.jpg",
    slug: "why-mentorship-matters",
  },
  {
    title: "A Founder's Guide to Startup India Registration",
    excerpt:
      "Step-by-step on DPIIT recognition, tax exemptions, and what actually speeds approval.",
    category: "Policy",
    date: "Mar 2026",
    readTime: "6 min read",
    image: "/images/gallery/gallery-7.jpg",
    slug: "startup-india-registration-guide",
  },
  {
    title: "State-Level Schemes Every Indian Founder Should Know",
    excerpt:
      "A practical rundown of grants and subsidies beyond the central Startup India scheme.",
    category: "Policy",
    date: "Feb 2026",
    readTime: "8 min read",
    image: "/images/legacy/workshops/day4-i1-clean-energy-cyberphysical-systems.jpg",
    slug: "state-level-government-schemes",
  },
  {
    title: "Product-Market Fit Before You Write a Line of Code",
    excerpt:
      "How our Ignite cohort validates demand with structured customer discovery sprints.",
    category: "Product",
    date: "Jan 2026",
    readTime: "5 min read",
    image: "/images/gallery/technology-3.jpg",
    slug: "product-market-fit-before-code",
  },
];

// ---- About page ----

export interface WhyPoint {
  title: string;
  description: string;
  icon: "Users" | "Globe" | "Workflow" | "Award";
}

export const whyTech4Bharat: WhyPoint[] = [
  {
    title: "Founder-First Approach",
    description:
      "Every program is built around what founders actually need, not a rigid one-size-fits-all playbook.",
    icon: "Users",
  },
  {
    title: "Pan-India Access",
    description:
      "From metros to Tier 2 and Tier 3 cities, our network reaches founders wherever they are building.",
    icon: "Globe",
  },
  {
    title: "End-to-End Support",
    description:
      "From idea validation to scale-up, we stay with founders across every stage of the journey.",
    icon: "Workflow",
  },
  {
    title: "Proven Track Record",
    description:
      "150+ startups incubated, ₹120 Cr+ raised, and a mentor network that keeps compounding.",
    icon: "Award",
  },
];

export interface Objective {
  title: string;
}

export const objectives: Objective[] = [
  { title: "Identify and nurture high-potential, early-stage founders across India" },
  { title: "Provide structured, stage-appropriate incubation and acceleration support" },
  { title: "Build bridges between startups, mentors, investors, and government schemes" },
  { title: "Prioritize ventures solving pressing social and economic challenges" },
  { title: "Strengthen India's startup ecosystem beyond metro hubs" },
  { title: "Create measurable, lasting impact on livelihoods and communities" },
];

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const journey: Milestone[] = [
  {
    year: "2021",
    title: "Tech4Bharat Founded",
    description: "Launched at IIT Bombay with a mission to back India's next generation of founders.",
  },
  {
    year: "2022",
    title: "First Cohort Incubated",
    description: "Welcomed our first batch of startups into the Ignite program.",
  },
  {
    year: "2023",
    title: "Ecosystem Expansion",
    description: "Grew our mentor network past 50 operators and formed our first government partnerships.",
  },
  {
    year: "2024",
    title: "100+ Startups Milestone",
    description: "Crossed 100 startups incubated, spanning AgriTech, HealthTech, and EdTech.",
  },
  {
    year: "2025",
    title: "National Recognition",
    description: "Recognized as a leading Startup India-affiliated incubator for social impact ventures.",
  },
  {
    year: "2026",
    title: "150+ Startups & Counting",
    description: "Continuing to scale support across Tier 2 and Tier 3 India.",
  },
];

// ---- Startup Support Programs page ----

export interface SupportProgram {
  title: string;
  description: string;
  icon:
    | "Sprout"
    | "TrendingUp"
    | "Users"
    | "Landmark"
    | "Handshake"
    | "Building2"
    | "Globe"
    | "ClipboardCheck"
    | "Trophy"
    | "Flame"
    | "Network";
}

export const supportPrograms: SupportProgram[] = [
  { title: "Incubation", description: "Hands-on support to validate your idea and build a strong founding foundation.", icon: "Sprout" },
  { title: "Acceleration", description: "Structured sprints to scale traction, revenue, and team fast.", icon: "TrendingUp" },
  { title: "Mentorship", description: "One-on-one guidance from operators and founders who've built at scale.", icon: "Users" },
  { title: "Funding Support", description: "Grant facilitation and funding readiness to fuel your next stage of growth.", icon: "Landmark" },
  { title: "Investor Connect", description: "Curated introductions to angels, VCs, and impact investors.", icon: "Handshake" },
  { title: "Government Scheme Support", description: "Navigate and access Startup India and state-level government schemes.", icon: "Building2" },
  { title: "Market Access", description: "Pathways to enterprise, government, and retail customers.", icon: "Globe" },
  { title: "Product Validation", description: "Structured testing to validate product-market fit before you scale.", icon: "ClipboardCheck" },
  { title: "Innovation Challenges", description: "Competitive challenges connecting founders to real-world problem statements.", icon: "Trophy" },
  { title: "Startup Bootcamps", description: "Intensive, short-format sprints on fundraising, growth, and strategy.", icon: "Flame" },
  { title: "Networking", description: "A thriving community of founders, mentors, and partners to learn from.", icon: "Network" },
];

// ---- Homepage: Testimonials ----

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ritika Deshmukh",
    role: "Founder",
    company: "AgroSense",
    quote:
      "Tech4Bharat didn't just fund our idea — they connected us with mentors who'd actually built agri-supply chains before. That hands-on guidance is why we scaled past 12,000 farmers.",
    rating: 5,
  },
  {
    name: "Aditya Rao",
    role: "Founder",
    company: "MedLink",
    quote:
      "The mentor network here is unmatched. Within weeks of joining Accelerate, we had introductions to healthcare operators who helped us navigate regulation we didn't even know existed.",
    rating: 5,
  },
  {
    name: "Neha Kulkarni",
    role: "Founder",
    company: "PathShala",
    quote:
      "What sets Tech4Bharat apart is how seriously they take Tier 2 and Tier 3 India. They understood our vernacular-first approach from day one, not as an afterthought.",
    rating: 4,
  },
  {
    name: "Rohan Mehta",
    role: "Partner",
    company: "Blume Ventures",
    quote:
      "Every founder we've met through Tech4Bharat's program has come to the table with a sharper pitch and cleaner data room than founders raising cold. Their prep genuinely moves the needle.",
    rating: 5,
  },
  {
    name: "Dr. Suresh Menon",
    role: "Professor",
    company: "IIT Bombay",
    quote:
      "Tech4Bharat has become the bridge between our research labs and real-world commercialization. It's rare to see an incubator this deliberate about deep-tech translation.",
    rating: 5,
  },
];

// ---- Success Stories page ----

export interface SuccessStory {
  founder: string;
  startup: string;
  domain: string;
  photo: string;
  challenge: string;
  impact: string;
  slug: string;
}

export const successStories: SuccessStory[] = [
  {
    founder: "Ritika Deshmukh",
    startup: "AgroSense",
    domain: "AgriTech",
    photo: "/images/people/ritika-deshmukh.jpg",
    challenge:
      "Smallholder farmers had no early warning system for crop disease, leading to yield losses of up to 30% each season.",
    impact:
      "AgroSense now supports 12,000+ farmers across Maharashtra with AI-driven crop health alerts, cutting losses by nearly a third.",
    slug: "agrosense-ritika-deshmukh",
  },
  {
    founder: "Aditya Rao",
    startup: "MedLink",
    domain: "HealthTech",
    photo: "/images/people/aditya-rao.jpg",
    challenge:
      "Rural patients were losing entire days of income just to travel for a specialist consultation.",
    impact:
      "MedLink has powered 40,000+ teleconsultations, connecting rural clinics directly to city specialists in minutes.",
    slug: "medlink-aditya-rao",
  },
  {
    founder: "Neha Kulkarni",
    startup: "PathShala",
    domain: "EdTech",
    photo: "/images/gallery/students-1.jpg",
    challenge:
      "Students in Tier 2 and Tier 3 towns lacked affordable, vernacular-first learning content built for how they actually study.",
    impact:
      "PathShala now reaches 25,000+ students in 6 Indian languages, with measurable gains in exam readiness.",
    slug: "pathshala-neha-kulkarni",
  },
];

