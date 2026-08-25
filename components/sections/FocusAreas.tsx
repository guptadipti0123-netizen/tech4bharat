"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Building2,
  Droplets,
  GraduationCap,
  HeartPulse,
  Leaf,
  Recycle,
  Sparkles,
  Sprout,
  Users,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface DomainItem {
  id: string;
  title: string;
  icon: LucideIcon;
  category: "agri-climate" | "health-deeptech" | "circularity" | "social";
  tag: string;
  description: string;
  problem: string;
  techStack: string;
  color: string;
  iconBg: string;
  accentBg: string;
}

const categories = [
  { id: "all", label: "All 13 Sectors" },
  { id: "agri-climate", label: "Agri & CleanTech" },
  { id: "health-deeptech", label: "Health & DeepTech" },
  { id: "circularity", label: "Circularity & Water" },
  { id: "social", label: "Rural & Skilling" },
] as const;

const domainList: DomainItem[] = [
  {
    id: "agritech",
    title: "AgriTech",
    icon: Sprout,
    category: "agri-climate",
    tag: "Agriculture",
    description: "Empowering smallholder farmers with precision analytics, IoT soil intelligence & smart supply chains.",
    problem: "Low crop yields, soil degradation, and fragmented market linkage",
    techStack: "IoT sensors, Drone NDVI imaging & Soil AI",
    color: "#059669",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
    accentBg: "bg-emerald-500/10 text-emerald-800 border-emerald-200",
  },
  {
    id: "ai-deeptech",
    title: "AI / DeepTech",
    icon: Brain,
    category: "health-deeptech",
    tag: "DeepTech",
    description: "Sovereign AI models, natural language for vernacular India, and computer vision systems.",
    problem: "Language barriers in public digital services and unstandardized data",
    techStack: "Indic LLMs, Edge AI & Federated Learning",
    color: "#4F46E5",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200",
    accentBg: "bg-indigo-500/10 text-indigo-800 border-indigo-200",
  },
  {
    id: "climate-energy",
    title: "Climate & Clean Energy",
    icon: Leaf,
    category: "agri-climate",
    tag: "ClimateTech",
    description: "Decentralized solar microgrids, battery energy storage, and industrial carbon accounting.",
    problem: "Unreliable rural grid power and industrial emissions",
    techStack: "Smart Inverters, IoT Telemetry & Solar Thermal",
    color: "#0D9488",
    iconBg: "bg-teal-50 text-teal-600 border-teal-200",
    accentBg: "bg-teal-500/10 text-teal-800 border-teal-200",
  },
  {
    id: "medtech",
    title: "HealthTech & MedTech",
    icon: HeartPulse,
    category: "health-deeptech",
    tag: "Healthcare",
    description: "Affordable diagnostic hardware, point-of-care screening, and rural telemedicine networks.",
    problem: "Shortage of diagnostic specialists in Tier-2/3 & rural clinics",
    techStack: "AI Screening Devices, Tele-ECG & Bio-sensors",
    color: "#E11D48",
    iconBg: "bg-rose-50 text-rose-600 border-rose-200",
    accentBg: "bg-rose-500/10 text-rose-800 border-rose-200",
  },
  {
    id: "water-sanitation",
    title: "Water & Sanitation",
    icon: Droplets,
    category: "circularity",
    tag: "Clean Water",
    description: "Solar-powered decentralized filtration, arsenic/fluoride removal, and distribution monitoring.",
    problem: "Groundwater contamination and municipal water losses",
    techStack: "Nano-membrane filtration, IoT Flow telemetry",
    color: "#0284C7",
    iconBg: "bg-sky-50 text-sky-600 border-sky-200",
    accentBg: "bg-sky-500/10 text-sky-800 border-sky-200",
  },
  {
    id: "waste-management",
    title: "Waste Management & Circularity",
    icon: Recycle,
    category: "circularity",
    tag: "Circularity",
    description: "Automated waste segregation, organic bio-methanation, and e-waste material recovery.",
    problem: "Landfill overflow, plastic pollution, and lost resource value",
    techStack: "Optical AI sorting, Bio-digestion reactors & Traceability",
    color: "#D97706",
    iconBg: "bg-amber-50 text-amber-600 border-amber-200",
    accentBg: "bg-amber-500/10 text-amber-800 border-amber-200",
  },
  {
    id: "edtech",
    title: "EdTech & Skilling",
    icon: GraduationCap,
    category: "social",
    tag: "Education",
    description: "Vernacular interactive STEM tools, technical apprenticeships, and teacher assistance bots.",
    problem: "Rote learning and lack of practical tech vocational skills",
    techStack: "Interactive simulations, AI tutors & Voice UI",
    color: "#7C3AED",
    iconBg: "bg-purple-50 text-purple-600 border-purple-200",
    accentBg: "bg-purple-500/10 text-purple-800 border-purple-200",
  },
  {
    id: "rural-development",
    title: "Rural Development & Livelihoods",
    icon: Building2,
    category: "social",
    tag: "Livelihoods",
    description: "Digital public infra for artisan collectives, rural credit assessment, and micro-logistics.",
    problem: "Intermediary exploitation and lack of formal credit for rural producers",
    techStack: "DPI / UPI / ONDC integrations & Geotagged Logistics",
    color: "#2563EB",
    iconBg: "bg-blue-50 text-blue-600 border-blue-200",
    accentBg: "bg-blue-500/10 text-blue-800 border-blue-200",
  },
];

export default function FocusAreas() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredDomains = activeCategory === "all"
    ? domainList
    : domainList.filter((d) => d.category === activeCategory);

  return (
    <section id="focus-areas" className="relative overflow-hidden py-10 sm:py-16 bg-[#F8FAFC]">
      <Container>
        {/* Section Header */}
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 border border-brand-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-700">
            <Sparkles size={13} className="text-brand-600" />
            <span>Bharat Innovation Engine</span>
          </div>
          <h2 className="mt-3 text-[24px] sm:text-[30px] lg:text-[36px] font-extrabold tracking-tight text-[#0B2A4A]">
            Social Impact Domains &amp; Technologies
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-[14px] sm:text-[15.5px] leading-relaxed text-slate-600">
            We back purpose-driven founders translating breakthrough science and technology into scalable grassroots impact across 13 core socio-economic sectors.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#0B2A4A] text-white shadow-md shadow-[#0B2A4A]/20 scale-102"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Dynamic Domain Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredDomains.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="h-full"
                >
                  <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
                    {/* Top border highlight with domain color */}
                    <div
                      className="absolute inset-x-0 top-0 h-1 transition-all duration-300 group-hover:h-1.5"
                      style={{ backgroundColor: item.color }}
                    />

                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between gap-2 pt-1">
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-2xs transition-transform duration-300 group-hover:scale-105 ${item.iconBg}`}
                        >
                          <Icon size={20} strokeWidth={2} />
                        </span>
                        <span
                          className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${item.accentBg}`}
                        >
                          {item.tag}
                        </span>
                      </div>

                      {/* Domain Title */}
                      <h3 className="mt-3.5 text-[16px] sm:text-[17px] font-bold text-[#0B2A4A] leading-snug group-hover:text-brand-700 transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-[12.5px] sm:text-[13px] leading-relaxed text-slate-600">
                        {item.description}
                      </p>

                      {/* Problem & Tech breakdown */}
                      <div className="mt-3.5 space-y-1.5 border-t border-slate-100 pt-3 text-[11.5px] sm:text-xs">
                        <div>
                          <span className="font-semibold text-slate-900">Key Focus: </span>
                          <span className="text-slate-600">{item.problem}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-slate-900">Tech Pillars: </span>
                          <span className="text-slate-600">{item.techStack}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom action link */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-1 text-[12px] font-bold text-brand-600 group-hover:text-brand-700 transition-colors"
                      >
                        Explore Startups <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom Portfolio CTA */}
        <AnimatedSection delay={0.15} className="mt-8 text-center">
          <Button
            href="/portfolio"
            variant="primary"
            size="md"
            className="shadow-md shadow-brand-700/15"
          >
            Explore All 13 Domains in Portfolio <ArrowRight size={15} />
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
