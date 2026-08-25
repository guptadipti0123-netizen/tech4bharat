import {
  Building2,
  Coins,
  Compass,
  GraduationCap,
  Handshake,
  Landmark,
  Rocket,
  Users,
} from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const onboardingDomains = [
  {
    icon: GraduationCap,
    title: "Academia",
    description: "Faculty & researchers from IITs and premier institutions driving deep-tech translation.",
    accent: "#7C3AED",
    bg: "bg-[#FAF5FF] border-purple-200/80",
    iconBg: "bg-purple-100 text-purple-700",
  },
  {
    icon: Building2,
    title: "Industry",
    description: "Corporate leaders & technology operators offering direct market access and scaling insights.",
    accent: "#0284C7",
    bg: "bg-[#F0F9FF] border-sky-200/80",
    iconBg: "bg-sky-100 text-sky-700",
  },
  {
    icon: Landmark,
    title: "Government",
    description: "Policy experts connecting founders with DPIIT schemes, BIRAC grants, and public innovation.",
    accent: "#0D9488",
    bg: "bg-[#F0FDFA] border-teal-200/80",
    iconBg: "bg-teal-100 text-teal-700",
  },
  {
    icon: Rocket,
    title: "Startup Ecosystem",
    description: "Successful founders & seasoned angel investors providing hands-on playbook guidance.",
    accent: "#155E9A",
    bg: "bg-[#F5FAFE] border-blue-200/80",
    iconBg: "bg-blue-100 text-[#155E9A]",
  },
];

const supportPillars = [
  { icon: Users, label: "Hands-on Mentoring" },
  { icon: Compass, label: "Strategic Guidance" },
  { icon: Handshake, label: "Ecosystem Partnerships" },
  { icon: Coins, label: "Fundraising Support" },
];

export default function MentorsOverview() {
  return (
    <section className="relative overflow-hidden pt-20 pb-6 sm:pt-24 sm:pb-8 bg-white">
      {/* Background soft gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(180deg, #EBF3FA 0%, #F8FAFC 60%, #FFFFFF 100%)",
        }}
      />

      <Container className="relative">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-4 sm:p-6 shadow-md border border-slate-200/80">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h1 className="text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold tracking-tight text-[#0B2A4A]">
              Mentors &amp; Advisors
            </h1>
            <p className="mx-auto mt-2 max-w-xl text-[12.5px] sm:text-[13.5px] leading-relaxed text-slate-600">
              The process of onboarding experienced advisors from academia, industry, government, and the startup ecosystem will commence immediately after company incorporation to strengthen mentoring, strategic guidance, partnerships, and fundraising support.
            </p>

            {/* 4 Support Pillars Chips */}
            <div className="mt-3.5 flex flex-wrap justify-center gap-1.5 sm:gap-2">
              {supportPillars.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1 rounded-full border border-blue-200/80 bg-blue-50/70 px-2.5 py-1 text-[11px] sm:text-xs font-semibold text-[#155E9A] shadow-2xs"
                >
                  <Icon size={13} className="text-[#155E9A]" /> {label}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* 4 Advisor Domain Categories Grid */}
          <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-3">
            {onboardingDomains.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={i * 0.04} className="h-full">
                  <div
                    style={{ borderTopColor: item.accent }}
                    className={`group flex h-full flex-col justify-between rounded-xl border ${item.bg} border-t-2 p-3 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm`}
                  >
                    <div>
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-lg font-bold shadow-2xs ${item.iconBg}`}
                      >
                        <Icon size={16} strokeWidth={2} />
                      </span>

                      <h3 className="mt-2 text-[14px] sm:text-[14.5px] font-bold text-[#0B2A4A] leading-tight group-hover:text-brand-700 transition-colors">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-[13px] sm:text-[14px] leading-relaxed text-slate-600">
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
