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
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface DomainItem {
  title: string;
  icon: LucideIcon;
  tag: string;
  description: string;
  color: string;
  iconBg: string;
  borderHover: string;
}

const domainList: DomainItem[] = [
  {
    title: "AgriTech",
    icon: Sprout,
    tag: "Agriculture",
    description: "Smart farming, supply chain & soil analytics",
    color: "#059669",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
    borderHover: "hover:border-emerald-400",
  },
  {
    title: "AI & DeepTech",
    icon: Brain,
    tag: "DeepTech",
    description: "Machine learning, Indic AI & computer vision",
    color: "#4F46E5",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200",
    borderHover: "hover:border-indigo-400",
  },
  {
    title: "Climate & Clean Energy",
    icon: Leaf,
    tag: "CleanTech",
    description: "Solar microgrids & industrial carbon reduction",
    color: "#0D9488",
    iconBg: "bg-teal-50 text-teal-600 border-teal-200",
    borderHover: "hover:border-teal-400",
  },
  {
    title: "HealthTech & MedTech",
    icon: HeartPulse,
    tag: "Healthcare",
    description: "Affordable diagnostic devices & telemedicine",
    color: "#E11D48",
    iconBg: "bg-rose-50 text-rose-600 border-rose-200",
    borderHover: "hover:border-rose-400",
  },
  {
    title: "Water & Sanitation",
    icon: Droplets,
    tag: "Clean Water",
    description: "Solar water purification & leak detection",
    color: "#0284C7",
    iconBg: "bg-sky-50 text-sky-600 border-sky-200",
    borderHover: "hover:border-sky-400",
  },
  {
    title: "Waste Management",
    icon: Recycle,
    tag: "Circularity",
    description: "Automated recycling & bio-waste recovery",
    color: "#D97706",
    iconBg: "bg-amber-50 text-amber-600 border-amber-200",
    borderHover: "hover:border-amber-400",
  },
  {
    title: "EdTech & Skilling",
    icon: GraduationCap,
    tag: "Education",
    description: "Vernacular STEM tools & tech apprenticeships",
    color: "#7C3AED",
    iconBg: "bg-purple-50 text-purple-600 border-purple-200",
    borderHover: "hover:border-purple-400",
  },
  {
    title: "Rural Development",
    icon: Building2,
    tag: "Livelihoods",
    description: "Digital public infra & artisan market linkage",
    color: "#2563EB",
    iconBg: "bg-blue-50 text-blue-600 border-blue-200",
    borderHover: "hover:border-blue-400",
  },
];

export default function FocusAreas() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12 bg-white">
      <Container>
        <div className="rounded-3xl bg-gradient-to-b from-[#EBF3FA] via-[#F4F8FC] to-[#DCE9F6] p-4 sm:p-7 shadow-lg border border-white">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 border border-brand-200/80 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-[#155E9A]">
              <Sparkles size={13} className="text-brand-600" /> Key Focus Areas
            </span>
            <h2 className="mt-2 text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold tracking-tight text-[#0B2A4A]">
              Social Impact Domains
            </h2>
            <p className="mx-auto mt-1.5 max-w-xl text-[13px] sm:text-[14px] leading-relaxed text-slate-600">
              Supporting purpose-driven startups solving core socio-economic challenges across India.
            </p>
          </AnimatedSection>

          {/* Sleek Compact Micro-Cards Grid */}
          <div className="mt-5 sm:mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-3">
            {domainList.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={i * 0.02} className="h-full">
                  <Link
                    href="/portfolio"
                    className={`group relative flex items-center gap-3 overflow-hidden rounded-xl border border-slate-200/90 bg-white p-3 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${item.borderHover}`}
                  >
                    {/* Left Accent Bar */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-1"
                      style={{ backgroundColor: item.color }}
                    />

                    {/* Icon */}
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-2xs transition-transform duration-200 group-hover:scale-105 ${item.iconBg}`}
                    >
                      <Icon size={18} strokeWidth={2} />
                    </span>

                    {/* Content */}
                    <div className="min-w-0 flex-1 pl-0.5">
                      <div className="flex items-center justify-between gap-1">
                        <h3 className="truncate text-[13.5px] sm:text-[14.5px] font-bold text-[#0B2A4A] group-hover:text-brand-700 transition-colors">
                          {item.title}
                        </h3>
                        <span className="shrink-0 text-[10px] font-bold text-slate-400">
                          {item.tag}
                        </span>
                      </div>
                      <p className="truncate text-[11.5px] sm:text-xs text-slate-500 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={0.15} className="mt-5 text-center">
            <Button
              href="/portfolio"
              variant="outline"
              size="sm"
              className="text-xs"
            >
              Explore All 13 Domains in Portfolio <ArrowRight size={13} />
            </Button>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
