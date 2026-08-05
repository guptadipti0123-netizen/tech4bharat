export interface Partner {
  name: string;
  description: string;
  /** Optional real logo image path (e.g. "/images/partners/iit-bombay.svg"). Most entries
   *  omit this today — PartnerCard/TrustedByMarquee fall back to an initials monogram. */
  logo?: string;
}

export interface PartnerCategoryGroup {
  category: string;
  /** Short 1-2 word label used on individual partner card badges. */
  badge: string;
  tagline: string;
  partners: Partner[];
}

export const partnerCategories: PartnerCategoryGroup[] = [
  {
    category: "Universities & Academia",
    badge: "Academic",
    tagline: "Research pipelines and campus founder communities.",
    partners: [
      { name: "IIT Bombay", description: "Deep-tech research translation and our founding campus partner." },
      { name: "IIT Delhi", description: "Joint innovation challenges and student founder pipelines." },
      { name: "IIM Ahmedabad", description: "Go-to-market and business strategy mentorship for cohorts." },
      { name: "BITS Pilani", description: "Engineering talent pipeline and campus innovation cells." },
      { name: "COEP Technological University", description: "Pune-based technical talent pipeline and joint workshop programming." },
      { name: "VJTI Mumbai", description: "Engineering research collaboration and student founder outreach in Mumbai." },
    ],
  },
  {
    category: "Government & Public Sector",
    badge: "Government",
    tagline: "Policy access, compliance support, and national programs.",
    partners: [
      { name: "Startup India", description: "National recognition and scheme facilitation for founders." },
      { name: "Atal Innovation Mission", description: "Grant access and Atal Tinkering Lab collaborations." },
      { name: "NITI Aayog", description: "Policy dialogue on India's innovation ecosystem." },
      { name: "MSME", description: "Compliance and credit-linked scheme support for founders." },
      { name: "AICTE", description: "Institutional partnerships across technical education." },
      { name: "DST", description: "Science & technology grant programs for deep-tech founders." },
    ],
  },
  {
    category: "Corporate & Industry",
    badge: "Corporate",
    tagline: "Cloud credits, enterprise pilots, and go-to-market support.",
    partners: [
      { name: "Microsoft for Startups", description: "Azure credits and enterprise co-selling access." },
      { name: "AWS Activate", description: "Cloud infrastructure credits for early-stage ventures." },
      { name: "Google for Startups", description: "Technical mentorship and product acceleration support." },
      { name: "Razorpay", description: "Payments infrastructure and fintech founder onboarding." },
    ],
  },
  {
    category: "Investors & Incubators",
    badge: "Investor",
    tagline: "Seed capital, follow-on funding, and incubation infrastructure.",
    partners: [
      { name: "NSRCEL", description: "IIM Bangalore's incubation cell — co-hosted accelerator cohorts." },
      { name: "SINE, IIT Bombay", description: "Shared incubation infrastructure and lab access." },
      { name: "CIIE.CO", description: "Early-stage capital and sector-focused accelerator tracks." },
      { name: "T-Hub", description: "Corporate innovation partnerships and investor connects." },
      { name: "GSF Accelerator", description: "Seed-stage mentorship and follow-on funding pathways." },
    ],
  },
  {
    category: "NGOs & CSR",
    badge: "CSR",
    tagline: "Social-impact ventures and grassroots distribution networks.",
    partners: [
      { name: "Tata Trusts", description: "CSR-backed grants for social-impact founders." },
      { name: "Villgro", description: "Rural and social enterprise incubation partnership." },
      { name: "Piramal Foundation", description: "Healthcare and education venture co-development." },
      { name: "Digital Empowerment Foundation", description: "Last-mile digital access and rural distribution." },
    ],
  },
  {
    category: "Research Organizations",
    badge: "Research",
    tagline: "Deep-tech validation and applied research collaboration.",
    partners: [
      { name: "C-DAC", description: "Advanced computing research and technology transfer." },
      { name: "TIFR", description: "Fundamental research partnerships for deep-tech founders." },
      { name: "CSIR", description: "National lab access for applied science ventures." },
      { name: "BIRAC", description: "Biotech innovation funding and regulatory guidance." },
      { name: "Observer Research Foundation", description: "Policy research collaboration on technology and governance." },
    ],
  },
  {
    category: "International Collaborations",
    badge: "Global",
    tagline: "Cross-border market access and bilateral innovation exchange.",
    partners: [
      { name: "UK–India Tech Hub", description: "Bilateral market access for UK-bound Indian startups." },
      { name: "USISPF", description: "US–India strategic partnership on innovation policy." },
      { name: "Startup Genome", description: "Global ecosystem benchmarking and best-practice exchange." },
    ],
  },
];

export const allPartners: Partner[] = partnerCategories.flatMap((group) => group.partners);
