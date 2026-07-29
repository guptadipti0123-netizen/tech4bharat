export interface ResourceItem {
  title: string;
  description: string;
  fileType: string;
  icon: "FileText" | "Wrench" | "LayoutTemplate" | "BarChart3" | "Landmark" | "BookOpen" | "ScrollText";
}

export const resources: ResourceItem[] = [
  {
    title: "Founder's Fundraising Guide",
    description: "A step-by-step PDF guide to raising your seed and Series A rounds.",
    fileType: "PDF Guide",
    icon: "FileText",
  },
  {
    title: "Tech4Bharat Program Brochure",
    description: "An overview of our incubation, acceleration, and funding programs.",
    fileType: "Brochure",
    icon: "BookOpen",
  },
  {
    title: "Startup Launch Toolkit",
    description: "Checklists and frameworks for validating and launching your MVP.",
    fileType: "Toolkit",
    icon: "Wrench",
  },
  {
    title: "Pitch Deck Template",
    description: "The exact deck structure investors expect from early-stage founders.",
    fileType: "Template",
    icon: "LayoutTemplate",
  },
  {
    title: "Ecosystem Impact Report 2026",
    description: "Our annual report on portfolio growth, funding, and founder outcomes.",
    fileType: "Report",
    icon: "BarChart3",
  },
  {
    title: "Government Schemes Handbook",
    description: "A guide to Startup India, state, and central government incentive programs.",
    fileType: "Government Schemes",
    icon: "Landmark",
  },
  {
    title: "Data Privacy & IP Policy Guide",
    description: "Policy documents covering data handling, IP ownership, and compliance basics for founders.",
    fileType: "Policy Document",
    icon: "ScrollText",
  },
];
