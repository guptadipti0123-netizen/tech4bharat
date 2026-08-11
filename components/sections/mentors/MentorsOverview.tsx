import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  GraduationCap,
  Handshake,
  Rocket,
  TrendingUp,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Blob from "@/components/ui/Blob";
import DotGrid from "@/components/ui/DotGrid";
import { cn } from "@/lib/utils";

const statBadges = [
  { icon: Award, label: "Expert Mentors" },
  { icon: Briefcase, label: "Industry Leaders" },
  { icon: Rocket, label: "Startup Advisors" },
];

interface NetworkCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  tone: "brand" | "sky" | "accent" | "violet" | "orange" | "secondary";
}

const categories: NetworkCategory[] = [
  {
    icon: Users,
    title: "Mentors",
    description: "Founders who have built and scaled successful startups.",
    tone: "brand",
  },
  {
    icon: TrendingUp,
    title: "Operators",
    description: "Experienced professionals with execution expertise.",
    tone: "sky",
  },
  {
    icon: Wallet,
    title: "Investors",
    description: "Angel investors and VCs supporting early-stage ventures.",
    tone: "accent",
  },
  {
    icon: GraduationCap,
    title: "Academics",
    description: "Researchers and professors driving innovation.",
    tone: "violet",
  },
  {
    icon: Building2,
    title: "Industry Experts",
    description: "Leaders from corporate and technology sectors.",
    tone: "orange",
  },
  {
    icon: Handshake,
    title: "Policy Advisors",
    description: "Experts connecting startups with government and ecosystem opportunities.",
    tone: "secondary",
  },
];

const cardThemes: Record<NetworkCategory["tone"], { iconBg: string; border: string; wash: string }> = {
  brand: {
    iconBg: "bg-linear-to-br from-brand-400 to-brand-600",
    border: "hover:border-brand-300",
    wash: "from-brand-50/60",
  },
  sky: {
    iconBg: "bg-linear-to-br from-sky-400 to-sky-600",
    border: "hover:border-sky-300",
    wash: "from-sky-50/60",
  },
  accent: {
    iconBg: "bg-linear-to-br from-accent-400 to-accent-600",
    border: "hover:border-accent-300",
    wash: "from-accent-50/60",
  },
  violet: {
    iconBg: "bg-linear-to-br from-violet-400 to-violet-600",
    border: "hover:border-violet-300",
    wash: "from-violet-50/60",
  },
  orange: {
    iconBg: "bg-linear-to-br from-orange-400 to-orange-600",
    border: "hover:border-orange-300",
    wash: "from-orange-50/60",
  },
  secondary: {
    iconBg: "bg-linear-to-br from-secondary-400 to-secondary-600",
    border: "hover:border-secondary-300",
    wash: "from-secondary-50/60",
  },
};

/** Mentors & Advisors page opener — a 35/65 split (label+heading+stat pills, sticky, beside
 *  a 6-card grid of network categories) replacing the old centered PageHero, which stacked
 *  heading-then-paragraph blocks with no visual hierarchy before the real mentor cards below. */
export default function MentorsOverview() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-brand-50 via-white to-white pb-10 pt-24 sm:pb-14 sm:pt-28">
      <DotGrid className="left-0 top-0 h-full w-full text-brand-700/6" />
      <Blob tone="secondary" className="-right-24 top-0 h-72 w-72" />
      <Blob tone="brand" className="-left-20 bottom-0 h-64 w-64" animate={false} />

      <Container className="relative">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[35fr_65fr] lg:gap-12">
          <AnimatedSection className="lg:sticky lg:top-28 lg:self-start">
            <h1 className="text-[26px] font-bold leading-[1.1] text-[#163B2D] sm:text-[36px] lg:text-[42px]">
              Mentors &amp; Advisors
            </h1>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#667085] sm:text-lg">
              Operators, investors, and academics who give Tech4Bharat founders an unfair
              advantage.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
              {statBadges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700"
                >
                  <Icon size={15} /> {label}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, i) => {
              const Icon = category.icon;
              const theme = cardThemes[category.tone];
              return (
                <AnimatedSection key={category.title} delay={(i % 6) * 0.06}>
                  <div
                    className={cn(
                      "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-b to-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg sm:p-5",
                      theme.wash,
                      theme.border
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-sm",
                          theme.iconBg
                        )}
                      >
                        <Icon size={18} />
                      </span>
                      <h3 className="text-[16px] font-bold leading-snug text-ink-900 sm:text-[19px]">{category.title}</h3>
                    </div>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {category.description}
                    </p>
                    <span
                      className="mt-3 flex h-7 w-7 items-center justify-center self-end rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-ink-900 group-hover:text-white"
                      aria-hidden="true"
                    >
                      <ArrowRight size={13} />
                    </span>
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
