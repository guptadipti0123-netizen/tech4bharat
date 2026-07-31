export interface FocusArea {
  title: string;
  description: string;
  icon: "Cpu" | "Leaf" | "HeartPulse" | "GraduationCap" | "Landmark" | "Rocket";
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
    icon: "Rocket",
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

export type StartupStage = "Idea Stage" | "Early Stage" | "Growth Stage" | "Scaled";

export interface Startup {
  name: string;
  founder: string;
  tagline: string;
  domain: string;
  logoInitial: string;
  location: string;
  stage: StartupStage;
}

export const startups: Startup[] = [
  {
    name: "AgroSense",
    founder: "Ritika Deshmukh",
    tagline: "AI-powered crop health monitoring for smallholder farmers.",
    domain: "AgriTech",
    logoInitial: "AS",
    location: "Nagpur, Maharashtra",
    stage: "Growth Stage",
  },
  {
    name: "MedLink",
    founder: "Aditya Rao",
    tagline: "Telemedicine platform connecting rural India to specialist care.",
    domain: "HealthTech",
    logoInitial: "ML",
    location: "Pune, Maharashtra",
    stage: "Early Stage",
  },
  {
    name: "PathShala",
    founder: "Neha Kulkarni",
    tagline: "Vernacular micro-learning for Tier 2 & 3 students.",
    domain: "EdTech",
    logoInitial: "PS",
    location: "Bengaluru, Karnataka",
    stage: "Growth Stage",
  },
  {
    name: "RupeeStack",
    founder: "Karan Mehta",
    tagline: "Embedded lending infrastructure for small businesses.",
    domain: "FinTech",
    logoInitial: "RS",
    location: "Mumbai, Maharashtra",
    stage: "Early Stage",
  },
  {
    name: "GreenGrid",
    founder: "Sanjana Iyer",
    tagline: "Decentralized solar micro-grids for last-mile electrification.",
    domain: "ClimateTech",
    logoInitial: "GG",
    location: "Ahmedabad, Gujarat",
    stage: "Idea Stage",
  },
  {
    name: "VoxAI",
    founder: "Rahul Bhatt",
    tagline: "Multilingual voice AI for public service delivery.",
    domain: "DeepTech",
    logoInitial: "VX",
    location: "Hyderabad, Telangana",
    stage: "Scaled",
  },
  {
    name: "KrishiChain",
    founder: "Vikram Solanki",
    tagline: "Blockchain-backed supply chain traceability for farm produce.",
    domain: "AgriTech",
    logoInitial: "KC",
    location: "Bhopal, Madhya Pradesh",
    stage: "Early Stage",
  },
  {
    name: "SafalNaari",
    founder: "Anjali Verma",
    tagline: "A micro-enterprise marketplace helping women build home-grown businesses.",
    domain: "Women Empowerment",
    logoInitial: "SN",
    location: "Jaipur, Rajasthan",
    stage: "Idea Stage",
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
    photo: "/images/gallery/gallery-4.jpg",
    bio: "Spent a decade shipping consumer products at scale; now helps early founders sharpen roadmaps and avoid costly detours.",
    linkedinUrl: "#",
  },
  {
    name: "Priya Nair",
    role: "Founder & CEO",
    company: "NimbusPay",
    expertise: "Fundraising",
    initials: "PN",
    photo: "/images/domains/healthtech.jpg",
    bio: "Raised three rounds of capital for her own fintech venture; mentors founders on data rooms, term sheets, and investor narratives.",
    linkedinUrl: "#",
  },
  {
    name: "Rohan Mehta",
    role: "Partner",
    company: "Blume Ventures",
    expertise: "Venture Capital",
    initials: "RM",
    photo: "/images/gallery/gallery-2.jpg",
    bio: "Backs early-stage Indian startups and works closely with Tech4Bharat cohorts on seed-stage readiness.",
    linkedinUrl: "#",
  },
  {
    name: "Kavya Iyer",
    role: "Head of Growth",
    company: "Zerodha",
    expertise: "Growth Marketing",
    initials: "KI",
    photo: "/images/gallery/gallery-13.jpg",
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
    designation: "Professor",
    institution: "IIT Bombay",
    expertise: "Deep-Tech & Academic Research",
    bio: "Leads applied research translation at IIT Bombay and guides Tech4Bharat's deep-tech cohorts from lab to market.",
    photo: "/images/domains/education-technology.jpg",
    initials: "SM",
    linkedinUrl: "#",
  },
  {
    name: "Arjun Verma",
    designation: "Co-founder",
    institution: "HealthBridge",
    expertise: "Healthcare Innovation & Public Health Policy",
    bio: "Built a digital health platform serving underserved communities; advises HealthTech founders on regulatory pathways.",
    photo: "/images/gallery/gallery-11.jpg",
    initials: "AV",
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

export interface ImpactStat {
  label: string;
  value: number;
  suffix: string;
  /** lucide-react icon name, rendered via the icon map in ImpactStats.tsx. */
  icon: string;
}

// "Our Impact" homepage snapshot — reach/scale, distinct from the
// outcomes-focused stats on the About page (150+ startups, funding raised, etc.).
export const impactStats: ImpactStat[] = [
  { label: "Startups Supported", value: 150, suffix: "+", icon: "Rocket" },
  { label: "Women Entrepreneurs", value: 60, suffix: "+", icon: "Venus" },
  { label: "Students Trained", value: 50000, suffix: "+", icon: "GraduationCap" },
  { label: "Mentors", value: 100, suffix: "+", icon: "Users" },
  { label: "Investors", value: 40, suffix: "+", icon: "Landmark" },
  { label: "Partner Organizations", value: 25, suffix: "+", icon: "Handshake" },
  { label: "States Reached", value: 10, suffix: "+", icon: "MapPin" },
  { label: "Innovation Programs", value: 15, suffix: "+", icon: "Lightbulb" },
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
    image: "/images/gallery/gallery-1.jpg",
    slug: "tier-2-cities-startup-wave",
  },
  {
    title: "Raising Your First Round: A Founder's Playbook",
    excerpt:
      "Practical lessons from 150+ startups that raised seed capital.",
    category: "Fundraising",
    date: "May 2026",
    readTime: "7 min read",
    image: "/images/gallery/gallery-3.jpg",
    slug: "raising-your-first-round",
  },
  {
    title: "Why Mentorship Matters More Than Money in Year One",
    excerpt:
      "Founders and mentors share what actually moves the needle early on.",
    category: "Mentorship",
    date: "Apr 2026",
    readTime: "4 min read",
    image: "/images/programs/mentoring.jpg",
    slug: "why-mentorship-matters",
  },
  {
    title: "A Founder's Guide to Startup India Registration",
    excerpt:
      "Step-by-step on DPIIT recognition, tax exemptions, and what actually speeds approval.",
    category: "Policy",
    date: "Mar 2026",
    readTime: "6 min read",
    image: "/images/gallery/gallery-2.jpg",
    slug: "startup-india-registration-guide",
  },
  {
    title: "State-Level Schemes Every Indian Founder Should Know",
    excerpt:
      "A practical rundown of grants and subsidies beyond the central Startup India scheme.",
    category: "Policy",
    date: "Feb 2026",
    readTime: "8 min read",
    image: "/images/gallery/gallery-11.jpg",
    slug: "state-level-government-schemes",
  },
  {
    title: "Product-Market Fit Before You Write a Line of Code",
    excerpt:
      "How our Ignite cohort validates demand with structured customer discovery sprints.",
    category: "Product",
    date: "Jan 2026",
    readTime: "5 min read",
    image: "/images/gallery/hackathons-2.jpg",
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

export interface CoreValue {
  title: string;
  description: string;
  icon: "ShieldCheck" | "Lightbulb" | "HandHeart" | "Users" | "TrendingUp" | "Star";
}

export const coreValues: CoreValue[] = [
  {
    title: "Integrity",
    description:
      "We operate with transparency and hold ourselves accountable to founders and partners alike.",
    icon: "ShieldCheck",
  },
  {
    title: "Innovation",
    description:
      "We back original thinking and support founders willing to challenge the status quo.",
    icon: "Lightbulb",
  },
  {
    title: "Inclusivity",
    description:
      "We actively widen access to opportunity for underrepresented founders and regions.",
    icon: "HandHeart",
  },
  {
    title: "Collaboration",
    description:
      "We believe the best outcomes come from founders, mentors, and partners building together.",
    icon: "Users",
  },
  {
    title: "Impact",
    description:
      "We measure success by the real-world outcomes our startups create for India.",
    icon: "TrendingUp",
  },
  {
    title: "Excellence",
    description:
      "We hold our programs, mentors, and support to the highest possible standard.",
    icon: "Star",
  },
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

// ---- Focus Areas page ----

export interface FocusAreaDetail {
  title: string;
  description: string;
  icon:
    | "Sprout"
    | "BrainCircuit"
    | "CloudSun"
    | "HeartPulse"
    | "Stethoscope"
    | "Droplets"
    | "GraduationCap"
    | "Zap"
    | "Recycle"
    | "TreePine"
    | "HandHeart"
    | "Briefcase"
    | "Lightbulb";
}

export const allFocusAreas: FocusAreaDetail[] = [
  { title: "AgriTech", description: "Technology-driven solutions strengthening farm productivity and rural incomes.", icon: "Sprout" },
  { title: "AI/ML", description: "Applied artificial intelligence solving real-world problems at scale.", icon: "BrainCircuit" },
  { title: "ClimateTech", description: "Innovations building climate resilience and environmental sustainability.", icon: "CloudSun" },
  { title: "HealthTech", description: "Digital health solutions expanding access to quality care.", icon: "HeartPulse" },
  { title: "MedTech", description: "Medical devices and diagnostics improving clinical outcomes.", icon: "Stethoscope" },
  { title: "Water & Sanitation", description: "Solutions ensuring safe water access and sanitation infrastructure.", icon: "Droplets" },
  { title: "Education Technology", description: "Reimagining learning outcomes for India's next generation.", icon: "GraduationCap" },
  { title: "Clean Energy", description: "Renewable and decentralized energy solutions for a sustainable Bharat.", icon: "Zap" },
  { title: "Waste Management", description: "Circular-economy ventures turning waste into value.", icon: "Recycle" },
  { title: "Rural Development", description: "Infrastructure and services strengthening rural livelihoods.", icon: "TreePine" },
  { title: "Women Empowerment", description: "Ventures expanding economic opportunity and safety for women.", icon: "HandHeart" },
  { title: "Livelihood Generation", description: "Platforms creating sustainable income and employment opportunities.", icon: "Briefcase" },
  { title: "Other Social Impact Innovations", description: "Bold ideas creating measurable social good beyond traditional categories.", icon: "Lightbulb" },
];

// ---- Startup Support Programs page ----

export interface SupportProgram {
  title: string;
  description: string;
  icon:
    | "Rocket"
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
  { title: "Incubation", description: "Hands-on support to validate your idea and build a strong founding foundation.", icon: "Rocket" },
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
    photo: "/images/domains/agritech.jpg",
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
    photo: "/images/gallery/gallery-9.jpg",
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
    photo: "/images/programs/mentoring.jpg",
    challenge:
      "Students in Tier 2 and Tier 3 towns lacked affordable, vernacular-first learning content built for how they actually study.",
    impact:
      "PathShala now reaches 25,000+ students in 6 Indian languages, with measurable gains in exam readiness.",
    slug: "pathshala-neha-kulkarni",
  },
];
