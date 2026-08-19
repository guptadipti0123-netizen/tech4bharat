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
    <section className="relative overflow-hidden pt-22 pb-8 sm:pt-28 sm:pb-12 bg-white">
      {/* Background soft gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(180deg, #EBF3FA 0%, #F8FAFC 60%, #FFFFFF 100%)",
        }}
      />

      <Container className="relative">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-5 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-[24px] sm:text-[32px] lg:text-[36px] font-extrabold tracking-tight text-[#0B2A4A]">
              Mentors &amp; Advisors
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              The process of onboarding experienced advisors from academia, industry, government, and the startup ecosystem will commence immediately after company incorporation to strengthen mentoring, strategic guidance, partnerships, and fundraising support.
            </p>

            {/* 4 Support Pillars Chips */}
            <div className="mt-5 flex flex-wrap justify-center gap-2 sm:gap-3">
              {supportPillars.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-blue-50/70 px-3.5 py-1.5 text-xs sm:text-[13px] font-bold text-[#155E9A] shadow-2xs"
                >
                  <Icon size={15} className="text-[#155E9A]" /> {label}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* 4 Advisor Domain Categories Grid */}
          <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4.5">
            {onboardingDomains.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={i * 0.05} className="h-full">
                  <div
                    style={{ borderTopColor: item.accent }}
                    className={`group flex h-full flex-col justify-between rounded-2xl border ${item.bg} border-t-4 p-4.5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
                  >
                    <div>
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl font-bold shadow-2xs ${item.iconBg}`}
                      >
                        <Icon size={20} strokeWidth={2} />
                      </span>

                      <h3 className="mt-3 text-[16px] sm:text-[17px] font-bold text-[#0B2A4A] leading-tight group-hover:text-brand-700 transition-colors">
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
