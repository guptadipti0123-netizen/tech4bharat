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
      { name: "IIT Bombay", description: "Deep-tech research translation and our founding campus partner.", logo: "/images/partners/iit-bombay.png" },
      { name: "IIT Delhi", description: "Joint innovation challenges and student founder pipelines.", logo: "/images/partners/iit-delhi.png" },
      { name: "IIM Ahmedabad", description: "Go-to-market and business strategy mentorship for cohorts.", logo: "/images/partners/iim-ahmedabad.png" },
      { name: "BITS Pilani", description: "Engineering talent pipeline and campus innovation cells.", logo: "/images/partners/bits-pilani.png" },
      { name: "COEP Technological University", description: "Pune-based technical talent pipeline and joint workshop programming.", logo: "/images/partners/coep.jpg" },
      { name: "VJTI Mumbai", description: "Engineering research collaboration and student founder outreach in Mumbai.", logo: "/images/partners/vjti.jpg" },
    ],
  },
  {
    category: "Government & Public Sector",
    badge: "Government",
    tagline: "Policy access, compliance support, and national programs.",
    partners: [
      { name: "Startup India", description: "National recognition and scheme facilitation for founders.", logo: "/images/partners/startup-india.png" },
      { name: "Atal Innovation Mission", description: "Grant access and Atal Tinkering Lab collaborations.", logo: "/images/partners/atal-innovation-mission.png" },
      { name: "NITI Aayog", description: "Policy dialogue on India's innovation ecosystem.", logo: "/images/partners/niti-aayog.png" },
      { name: "MSME", description: "Compliance and credit-linked scheme support for founders.", logo: "/images/partners/msme.png" },
      { name: "AICTE", description: "Institutional partnerships across technical education.", logo: "/images/partners/aicte.png" },
      { name: "DST", description: "Science & technology grant programs for deep-tech founders.", logo: "/images/partners/dst.png" },
    ],
  },
  {
    category: "Corporate & Industry",
    badge: "Corporate",
    tagline: "Cloud credits, enterprise pilots, and go-to-market support.",
    partners: [
      { name: "Microsoft for Startups", description: "Azure credits and enterprise co-selling access.", logo: "/images/partners/microsoft-for-startups.png" },
      { name: "AWS Activate", description: "Cloud infrastructure credits for early-stage ventures.", logo: "/images/partners/aws-activate.png" },
      { name: "Google for Startups", description: "Technical mentorship and product acceleration support.", logo: "/images/partners/google-for-startups.png" },
      { name: "Razorpay", description: "Payments infrastructure and fintech founder onboarding.", logo: "/images/partners/razorpay.png" },
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
      { name: "C-DAC", description: "Advanced computing research and technology transfer.", logo: "/images/partners/cdac.png" },
      { name: "TIFR", description: "Fundamental research partnerships for deep-tech founders.", logo: "/images/partners/tifr.png" },
      { name: "CSIR", description: "National lab access for applied science ventures.", logo: "/images/partners/csir.png" },
      { name: "BIRAC", description: "Biotech innovation funding and regulatory guidance." },
      { name: "Observer Research Foundation", description: "Policy research collaboration on technology and governance.", logo: "/images/partners/observer-research-foundation.png" },
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
