export interface Partner {
  name: string;
  description: string;
  /** Optional real logo image path (e.g. "/images/partners/iit-bombay.svg"). */
  logo?: string;
}

export interface PartnerCategoryGroup {
  category: string;
  /** Short 1-2 word label used on individual partner card badges. */
  badge: string;
  tagline: string;
  partners: Partner[];
}

// The MoM's exact partner categories — MoUs have not been executed yet (they begin
// August 2026, following Section 8 Company registration), so no specific institution
// names or logos are listed. The category structure/design stays ready for when real
// partner data is confirmed.
export const partnerCategories: PartnerCategoryGroup[] = [
  {
    category: "Premier Academic Institutions",
    badge: "Academic",
    tagline: "Research pipelines and campus founder communities.",
    partners: [],
  },
  {
    category: "Incubators",
    badge: "Incubator",
    tagline: "Shared incubation infrastructure and cohort support.",
    partners: [],
  },
  {
    category: "Research Organizations",
    badge: "Research",
    tagline: "Deep-tech validation and applied research collaboration.",
    partners: [],
  },
  {
    category: "Industries",
    badge: "Industry",
    tagline: "Enterprise pilots and go-to-market support.",
    partners: [],
  },
  {
    category: "Government Agencies",
    badge: "Government",
    tagline: "Policy access, compliance support, and national programs.",
    partners: [],
  },
  {
    category: "Non-Governmental Organizations (NGOs)",
    badge: "NGO",
    tagline: "Field implementation of startup technologies through pilot projects.",
    partners: [],
  },
];

export const allPartners: Partner[] = partnerCategories.flatMap((group) => group.partners);
