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
  tagBg: string;
  tagColor: string;
}

const domainList: DomainItem[] = [
  {
    title: "AgriTech",
    icon: Sprout,
    tag: "Agriculture",
    description: "Smart farming, supply chain, and yield optimization.",
    color: "#059669",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
    borderHover: "hover:border-emerald-400",
    tagBg: "bg-emerald-50 border-emerald-100",
    tagColor: "text-emerald-700",
  },
  {
    title: "AI / DeepTech",
    icon: Brain,
    tag: "AI & ML",
    description: "Machine learning, data governance & generative systems.",
    color: "#4F46E5",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200",
    borderHover: "hover:border-indigo-400",
    tagBg: "bg-indigo-50 border-indigo-100",
    tagColor: "text-indigo-700",
  },
  {
    title: "Climate & Clean Energy",
    icon: Leaf,
    tag: "Sustainability",
    description: "Renewable energy, carbon reduction, and grid tech.",
    color: "#0D9488",
    iconBg: "bg-teal-50 text-teal-600 border-teal-200",
    borderHover: "hover:border-teal-400",
    tagBg: "bg-teal-50 border-teal-100",
    tagColor: "text-teal-700",
  },
  {
    title: "HealthTech & MedTech",
    icon: HeartPulse,
    tag: "Healthcare",
    description: "Affordable diagnostics, telemedicine & devices.",
    color: "#E11D48",
    iconBg: "bg-rose-50 text-rose-600 border-rose-200",
    borderHover: "hover:border-rose-400",
    tagBg: "bg-rose-50 border-rose-100",
    tagColor: "text-rose-700",
  },
  {
    title: "Water & Sanitation",
    icon: Droplets,
    tag: "Clean Water",
    description: "Purification tech, leak detection & conservation.",
    color: "#0284C7",
    iconBg: "bg-sky-50 text-sky-600 border-sky-200",
    borderHover: "hover:border-sky-400",
    tagBg: "bg-sky-50 border-sky-100",
    tagColor: "text-sky-700",
  },
  {
    title: "Waste Management",
    icon: Recycle,
    tag: "Circular",
    description: "Recycling automation, bio-waste & material recovery.",
    color: "#D97706",
    iconBg: "bg-amber-50 text-amber-600 border-amber-200",
    borderHover: "hover:border-amber-400",
    tagBg: "bg-amber-50 border-amber-100",
    tagColor: "text-amber-700",
  },
  {
    title: "EdTech & Skilling",
    icon: GraduationCap,
    tag: "Education",
    description: "Vernacular learning, tech skilling & STEM tools.",
    color: "#7C3AED",
    iconBg: "bg-purple-50 text-purple-600 border-purple-200",
    borderHover: "hover:border-purple-400",
    tagBg: "bg-purple-50 border-purple-100",
    tagColor: "text-purple-700",
  },
  {
    title: "Rural Development",
    icon: Building2,
    tag: "Livelihoods",
    description: "Rural micro-enterprises & digital public infra.",
    color: "#2563EB",
    iconBg: "bg-blue-50 text-blue-600 border-blue-200",
    borderHover: "hover:border-blue-400",
    tagBg: "bg-blue-50 border-blue-100",
    tagColor: "text-blue-700",
  },
];

export default function FocusAreas() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-16 bg-white">
      <Container>
        <div className="rounded-3xl bg-gradient-to-b from-[#EBF3FA] via-[#F4F8FC] to-[#DCE9F6] p-5 sm:p-8 lg:p-10 shadow-xl border border-white">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 border border-brand-200/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#155E9A]">
              <Sparkles size={13} className="text-brand-600" /> Key Focus Areas
            </span>
            <h2 className="mt-2.5 text-[22px] sm:text-[28px] lg:text-[32px] font-extrabold tracking-tight text-[#0B2A4A]">
              Social Impact Domains
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-base sm:text-[17px] leading-relaxed text-slate-600">
              Supporting purpose-driven startups solving core socio-economic challenges across India.
            </p>
          </AnimatedSection>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {domainList.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={i * 0.03} className="h-full">
                  <div
                    className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white p-3.5 sm:p-5.5 shadow-[0_4px_16px_rgba(11,42,74,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.borderHover}`}
                  >
                    {/* Left colored bar on mobile, Top colored bar on desktop */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1 sm:inset-x-0 sm:top-0 sm:bottom-auto sm:h-1 sm:w-full transition-all duration-300 group-hover:w-1.5 sm:group-hover:h-1.5"
                      style={{ backgroundColor: item.color }}
                    />

                    <div className="pl-1 sm:pl-0">
                      {/* Top row */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border shadow-2xs transition-transform duration-300 group-hover:scale-105 ${item.iconBg}`}
                          >
                            <Icon size={18} strokeWidth={2} className="sm:hidden" />
                            <Icon size={20} strokeWidth={2} className="hidden sm:block" />
                          </span>
                          <h3 className="text-[14.5px] font-bold text-[#0B2A4A] leading-snug group-hover:text-brand-700 transition-colors sm:hidden">
                            {item.title}
                          </h3>
                        </div>
                        <span
                          className={`rounded-full border px-2.5 py-0.5 text-[10.5px] sm:text-[11px] font-bold shrink-0 ${item.tagBg} ${item.tagColor}`}
                        >
                          {item.tag}
                        </span>
                      </div>

                      {/* Desktop Title */}
                      <h3 className="hidden sm:block mt-3.5 text-[16px] font-bold text-[#0B2A4A] leading-snug group-hover:text-brand-700 transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-[12.5px] sm:text-[13px] leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={0.2} className="mt-8 text-center">
            <Button
              href="/portfolio"
              variant="primary"
              size="md"
              className="shadow-md shadow-brand-700/15"
            >
              Explore All 13 Domains in Portfolio <ArrowRight size={15} />
            </Button>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
