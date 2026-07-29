export interface PartnerCategoryGroup {
  category: string;
  partners: string[];
}

export const partnerCategories: PartnerCategoryGroup[] = [
  {
    category: "Universities",
    partners: ["IIT Bombay", "IIT Delhi", "IIM Ahmedabad", "BITS Pilani"],
  },
  {
    category: "Government",
    partners: ["Startup India", "Atal Innovation Mission", "NITI Aayog", "MSME", "AICTE", "DST"],
  },
  {
    category: "Industries",
    partners: ["Microsoft for Startups", "AWS Activate", "Google for Startups", "Razorpay"],
  },
  {
    category: "NGOs",
    partners: ["Tata Trusts", "Villgro", "Piramal Foundation", "Digital Empowerment Foundation"],
  },
  {
    category: "Incubators",
    partners: ["NSRCEL", "SINE (IIT Bombay)", "CIIE.CO"],
  },
  {
    category: "Accelerators",
    partners: ["T-Hub", "Google for Startups Accelerator", "GSF Accelerator"],
  },
  {
    category: "Research Organizations",
    partners: ["C-DAC", "TIFR", "CSIR", "BIRAC"],
  },
];
