import {
  ArrowRight,
  Brain,
  Building2,
  Cpu,
  Droplets,
  GraduationCap,
  HeartPulse,
  Leaf,
  Recycle,
  Shield,
  Sprout,
  Users,
  Zap,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const domainList = [
  {
    title: "AgriTech",
    icon: Sprout,
    tag: "Agriculture",
    description: "Smart farming, supply chain, and yield optimization.",
  },
  {
    title: "AI / DeepTech",
    icon: Brain,
    tag: "AI & ML",
    description: "Machine learning, data governance & generative systems.",
  },
  {
    title: "Climate & Clean Energy",
    icon: Leaf,
    tag: "Sustainability",
    description: "Renewable energy, carbon reduction, and grid tech.",
  },
  {
    title: "HealthTech & MedTech",
    icon: HeartPulse,
    tag: "Healthcare",
    description: "Affordable diagnostics, telemedicine & devices.",
  },
  {
    title: "Water & Sanitation",
    icon: Droplets,
    tag: "Clean Water",
    description: "Purification tech, leak detection & conservation.",
  },
  {
    title: "Waste Management",
    icon: Recycle,
    tag: "Circular",
    description: "Recycling automation, bio-waste & material recovery.",
  },
  {
    title: "EdTech & Skilling",
    icon: GraduationCap,
    tag: "Education",
    description: "Vernacular learning, tech skilling & STEM tools.",
  },
  {
    title: "Rural Development",
    icon: Building2,
    tag: "Livelihoods",
    description: "Rural micro-enterprises & digital public infra.",
  },
];

/** Social Impact Domains — rich, modern vector icon cards inspired by tech4bharat.com,
 *  compact typography, responsive 2-column mobile grid, with no AI/stock placeholders. */
export default function FocusAreas() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-14 bg-white">
      <Container>
        <div className="rounded-3xl bg-gradient-to-b from-[#edeef8] via-[#f8f9ff] to-[#c5d1ff] p-4 sm:p-8 lg:p-10 shadow-lg border border-white/60">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#1e3a8a]">
              Key Focus Areas
            </span>
            <h2 className="mt-2 text-[20px] sm:text-[26px] lg:text-[30px] font-extrabold tracking-tight bg-gradient-to-r from-[#020024] via-[#090979] to-[#00D4FF] bg-clip-text text-transparent">
              Social Impact Domains
            </h2>
            <p className="mx-auto mt-1.5 max-w-lg text-[12px] sm:text-[14px] leading-relaxed text-gray-600">
              Supporting innovations that solve core socio-economic challenges across India.
            </p>
          </AnimatedSection>

          <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-2.5 sm:gap-3.5 lg:grid-cols-4 sm:overflow-visible">
            {domainList.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={i * 0.03} className="h-full">
                  <div className="group flex h-full flex-col justify-between rounded-xl sm:rounded-2xl border border-white/80 bg-white/80 p-3 sm:p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4f6ff2] hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex h-8 w-8 sm:h-9.5 sm:w-9.5 items-center justify-center rounded-xl bg-blue-50 text-[#4f6ff2] shadow-xs group-hover:scale-105 group-hover:bg-[#4f6ff2] group-hover:text-white transition-all">
                          <Icon size={17} />
                        </span>
                        <span className="rounded-full bg-[#1e3a8a]/5 px-2 py-0.5 text-[8.5px] sm:text-[9.5px] font-semibold text-[#1e3a8a]">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="mt-2.5 text-[12.5px] sm:text-[14px] font-bold text-[#020024] leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[10.5px] sm:text-[11.5px] leading-snug text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={0.2} className="mt-6 text-center">
            <Button href="/about" variant="outline" size="sm">
              Explore All Domains <ArrowRight size={14} />
            </Button>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
