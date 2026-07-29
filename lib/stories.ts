export interface StoryImpactMetric {
  label: string;
  value: string;
}

export interface SuccessStory {
  id: string;
  slug: string;
  startupName: string;
  founderName: string;
  domain: string;
  headline: string;
  excerpt: string;
  story: string[];
  impactMetrics: StoryImpactMetric[];
}

// Sample data shaped for a future API integration (e.g. GET /api/success-stories/:slug)
export const successStories: SuccessStory[] = [
  {
    id: "1",
    slug: "agrosense-scaling-farmer-incomes",
    startupName: "AgroSense",
    founderName: "Ritika Deshmukh",
    domain: "AgriTech",
    headline: "How AgroSense helped 12,000 farmers raise yields by 22%",
    excerpt:
      "From a college project to a startup reaching thousands of smallholder farms across Maharashtra.",
    story: [
      "Ritika Deshmukh started AgroSense as a final-year engineering project after watching her family's farm struggle with unpredictable pest outbreaks. What began as a simple sensor prototype became a full-stack crop monitoring platform after she joined Tech4Bharat's Ignite program in 2022.",
      "Through the incubation program, Ritika refined her go-to-market strategy, secured her first pilot with a farmer cooperative, and built the mentor relationships that helped her navigate agri-supply chain partnerships.",
      "Today, AgroSense supports over 12,000 farmers across Maharashtra, with independently verified yield improvements averaging 22% and input-cost reductions of 15%.",
    ],
    impactMetrics: [
      { label: "Farmers Reached", value: "12,000+" },
      { label: "Yield Improvement", value: "22%" },
      { label: "Districts Covered", value: "8" },
    ],
  },
  {
    id: "2",
    slug: "medlink-expanding-rural-healthcare-access",
    startupName: "MedLink",
    founderName: "Aditya Rao",
    domain: "HealthTech",
    headline: "MedLink brought specialist care to 40 villages with no local doctor",
    excerpt: "A telemedicine platform closing the healthcare access gap in rural Maharashtra.",
    story: [
      "Aditya Rao founded MedLink after a family medical emergency in his home village revealed just how far patients had to travel for specialist care. He joined Tech4Bharat's Accelerate program in 2023 to turn the idea into a functioning platform.",
      "Mentorship from healthcare-sector operators helped Aditya navigate telemedicine regulations and build trust with rural health workers, who became MedLink's on-the-ground champions.",
      "MedLink now operates in 40 villages, delivering over 5,000 consultations and cutting average time-to-specialist-care from 6 hours to under 30 minutes.",
    ],
    impactMetrics: [
      { label: "Villages Served", value: "40" },
      { label: "Consultations", value: "5,000+" },
      { label: "Avg. Wait Time Cut", value: "92%" },
    ],
  },
  {
    id: "3",
    slug: "pathshala-vernacular-learning-at-scale",
    startupName: "PathShala",
    founderName: "Neha Kulkarni",
    domain: "EdTech",
    headline: "PathShala reached 500,000 students without a single smartphone requirement",
    excerpt: "Vernacular micro-learning built for India's low-bandwidth reality.",
    story: [
      "Neha Kulkarni built PathShala's first version as a WhatsApp bot delivering daily practice questions in Hindi and Marathi. Tech4Bharat's mentor network helped her validate the model with schools before scaling.",
      "By focusing on low-data formats and vernacular content, PathShala reached students in towns that mainstream EdTech apps had overlooked.",
      "PathShala has now delivered over 2 million lessons to more than 500,000 students across Madhya Pradesh and neighboring states.",
    ],
    impactMetrics: [
      { label: "Students Reached", value: "500,000+" },
      { label: "Lessons Delivered", value: "2M+" },
      { label: "Avg. Score Improvement", value: "18%" },
    ],
  },
];
