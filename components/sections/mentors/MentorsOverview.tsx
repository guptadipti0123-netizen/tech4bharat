import {
  Building2,
  GraduationCap,
  Handshake,
  TrendingUp,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface NetworkCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
}

const categories: NetworkCategory[] = [
  {
    icon: Users,
    title: "Startup Mentors",
    description: "Experienced founders who have built and scaled tech ventures across India.",
    badge: "Founders",
  },
  {
    icon: TrendingUp,
    title: "Operators & Leaders",
    description: "Specialists with deep expertise in product, engineering, and growth execution.",
    badge: "Execution",
  },
  {
    icon: Wallet,
    title: "Angel & VC Investors",
    description: "Early-stage capital partners backing innovative social impact startups.",
    badge: "Capital",
  },
  {
    icon: GraduationCap,
    title: "Academic Scholars",
    description: "Faculty & researchers from IITs and premier institutions driving deep-tech IP.",
    badge: "Research",
  },
  {
    icon: Building2,
    title: "Industry Specialists",
    description: "Corporate and technology leaders offering real-world market access.",
    badge: "Industry",
  },
  {
    icon: Handshake,
    title: "Policy & Ecosystem Advisors",
    description: "Strategic advisors connecting startups with government grants and DPI.",
    badge: "Governance",
  },
];

export default function MentorsOverview() {
  return (
    <section className="relative overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-12">
      {/* tech4bharat.com styled background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(180deg, #edeef8 0%, #f8f9ff 60%, #c5d1ff 100%)",
        }}
      />

      <Container className="relative">
        <div className="mx-auto max-w-6xl rounded-3xl bg-white/60 p-4 sm:p-8 lg:p-10 shadow-xl backdrop-blur-lg border border-white/50">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#1e3a8a]">
              Ecosystem Mentorship
            </span>
            <h1 className="mt-2.5 text-[22px] sm:text-[30px] lg:text-[34px] font-extrabold tracking-tight bg-gradient-to-r from-[#020024] via-[#090979] to-[#00D4FF] bg-clip-text text-transparent">
              Mentors &amp; Advisors
            </h1>
            <p className="mx-auto mt-2 max-w-xl text-[12px] sm:text-[14px] leading-relaxed text-gray-600">
              Operators, investors, and academics who guide Tech4Bharat founders with real-world experience and strategic insights.
            </p>
          </AnimatedSection>

          {/* 6 Category Cards in a balanced compact 2-col (mobile) & 3-col (desktop) grid */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-3">
            {categories.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={i * 0.04} animation="scale" className="h-full">
                  <div className="group flex h-full flex-col justify-between rounded-xl sm:rounded-2xl border border-white/60 bg-white/75 p-3 sm:p-4.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4f6ff2] hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-blue-50 text-[#4f6ff2] group-hover:scale-105 transition-transform">
                          <Icon size={16} className="sm:hidden" />
                          <Icon size={19} className="hidden sm:block" />
                        </span>
                        <span className="rounded-full bg-[#1e3a8a]/5 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-[#1e3a8a]">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="mt-2.5 text-[12.5px] sm:text-[14.5px] font-bold text-[#020024] leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-1 line-clamp-3 text-[10.5px] sm:text-[12px] leading-snug text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
