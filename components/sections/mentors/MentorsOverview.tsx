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
}

const leftCategories: NetworkCategory[] = [
  { icon: Users, title: "Mentors", description: "Founders who have built and scaled successful startups." },
  { icon: TrendingUp, title: "Operators", description: "Experienced professionals with execution expertise." },
  { icon: Wallet, title: "Investors", description: "Angel investors and VCs supporting early-stage ventures." },
];

const rightCategories: NetworkCategory[] = [
  { icon: GraduationCap, title: "Academics", description: "Researchers and professors driving innovation." },
  { icon: Building2, title: "Industry Experts", description: "Leaders from corporate and technology sectors." },
  {
    icon: Handshake,
    title: "Policy Advisors",
    description: "Experts connecting startups with government and ecosystem opportunities.",
  },
];

function Spoke({ item, align }: { item: NetworkCategory; align: "left" | "right" }) {
  const Icon = item.icon;
  const isLeft = align === "left";
  return (
    <div className={`flex items-center gap-3 ${isLeft ? "flex-row-reverse text-right" : "text-left"}`}>
      <div className={isLeft ? "" : ""}>
        <h3 className="flex items-center gap-1.5 text-[14px] font-bold text-[#0B2A4A] sm:text-[16px]">
          {isLeft ? null : <Icon size={14} className="shrink-0 text-[#155E9A]" />}
          {item.title}
          {isLeft ? <Icon size={14} className="shrink-0 text-[#155E9A]" /> : null}
        </h3>
        <p className="mt-0.5 max-w-48 text-[12px] leading-snug text-slate-500 sm:text-[13px]">{item.description}</p>
      </div>
      <span className="hidden shrink-0 items-center gap-1.5 sm:flex">
        {isLeft && <span className="h-px w-6 bg-[#B9CFE0] lg:w-10" />}
        <span className="h-2 w-2 shrink-0 rounded-full bg-[#155E9A]" />
        {!isLeft && <span className="h-px w-6 bg-[#B9CFE0] lg:w-10" />}
      </span>
    </div>
  );
}

/** Mentors & Advisors page opener — a hub-and-spoke diagram: a compact dark-navy center
 *  circle holding the page title and tagline, with the six network categories arranged as
 *  three spokes on each side (dot + connector line), matching the requested reference
 *  design. On mobile the circle sits on top and the six spokes stack in a simple 2-col
 *  grid below it, since the side-by-side hub layout has no room on narrow screens. */
export default function MentorsOverview() {
  return (
    <section className="relative overflow-hidden bg-white pb-10 pt-24 sm:pb-14 sm:pt-28">
      <Container className="relative">
        {/* Desktop / tablet: hub-and-spoke row */}
        <div className="hidden items-center justify-center gap-6 sm:flex lg:gap-10">
          <div className="flex flex-col gap-7">
            {leftCategories.map((item) => (
              <Spoke key={item.title} item={item} align="left" />
            ))}
          </div>

          <AnimatedSection className="flex aspect-square w-56 shrink-0 flex-col items-center justify-center rounded-full bg-[#0B2A4A] p-6 text-center lg:w-64">
            <h1 className="text-[19px] font-bold leading-[1.15] text-white lg:text-[21px]">Mentors &amp; Advisors</h1>
            <p className="mt-2 text-[12px] leading-snug text-[#DCE8FF] lg:text-[13px]">
              Operators, investors, and academics who give Tech4Bharat founders an unfair advantage.
            </p>
          </AnimatedSection>

          <div className="flex flex-col gap-7">
            {rightCategories.map((item) => (
              <Spoke key={item.title} item={item} align="right" />
            ))}
          </div>
        </div>

        {/* Mobile: circle on top, six categories stacked in a compact 2-col grid */}
        <div className="flex flex-col items-center sm:hidden">
          <AnimatedSection className="flex aspect-square w-52 shrink-0 flex-col items-center justify-center rounded-full bg-[#0B2A4A] p-6 text-center">
            <h1 className="text-[18px] font-bold leading-[1.15] text-white">Mentors &amp; Advisors</h1>
            <p className="mt-2 text-[11.5px] leading-snug text-[#DCE8FF]">
              Operators, investors, and academics who give Tech4Bharat founders an unfair advantage.
            </p>
          </AnimatedSection>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5">
            {[...leftCategories, ...rightCategories].map((item) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title}>
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#155E9A]" />
                    <div>
                      <h3 className="flex items-center gap-1.5 text-[13px] font-bold text-[#0B2A4A]">
                        <Icon size={13} className="shrink-0 text-[#155E9A]" />
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-[11.5px] leading-snug text-slate-500">{item.description}</p>
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
