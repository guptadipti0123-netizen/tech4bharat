import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface MentorPillar {
  num: string;
  badge: string;
  title: string;
  description: string;
  accent: string;
  cardBg: string;
  badgeBg: string;
}

const pillars: MentorPillar[] = [
  {
    num: "01",
    badge: "Founders",
    title: "Startup Mentors",
    description: "Experienced founders who have built & scaled tech ventures across India.",
    accent: "#155E9A",
    cardBg: "bg-[#F5FAFE] hover:bg-[#EAF4FB]",
    badgeBg: "bg-blue-100/80 text-[#155E9A]",
  },
  {
    num: "02",
    badge: "Execution",
    title: "Operators & Leaders",
    description: "Specialists with deep expertise in product, engineering & growth.",
    accent: "#059669",
    cardBg: "bg-[#F0FDF4] hover:bg-[#DCFCE7]",
    badgeBg: "bg-emerald-100/80 text-emerald-800",
  },
  {
    num: "03",
    badge: "Capital",
    title: "Angel & VC Investors",
    description: "Early-stage capital partners backing innovative social impact ventures.",
    accent: "#D97706",
    cardBg: "bg-[#FFFBEB] hover:bg-[#FEF3C7]",
    badgeBg: "bg-amber-100/80 text-amber-800",
  },
  {
    num: "04",
    badge: "Research",
    title: "Academic Scholars",
    description: "Faculty & researchers from IITs driving deep-tech translation.",
    accent: "#7C3AED",
    cardBg: "bg-[#FAF5FF] hover:bg-[#F3E8FF]",
    badgeBg: "bg-purple-100/80 text-purple-800",
  },
  {
    num: "05",
    badge: "Industry",
    title: "Industry Specialists",
    description: "Corporate & technology leaders offering real-world market access.",
    accent: "#0284C7",
    cardBg: "bg-[#F0F9FF] hover:bg-[#E0F2FE]",
    badgeBg: "bg-sky-100/80 text-sky-800",
  },
  {
    num: "06",
    badge: "Governance",
    title: "Policy & Ecosystem",
    description: "Strategic advisors connecting startups with government grants & DPI.",
    accent: "#0D9488",
    cardBg: "bg-[#F0FDFA] hover:bg-[#CCFBF1]",
    badgeBg: "bg-teal-100/80 text-teal-800",
  },
];

export default function MentorsOverview() {
  return (
    <section className="relative overflow-hidden pt-20 pb-6 sm:pt-24 sm:pb-10">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(180deg, #edeef8 0%, #f8f9ff 60%, #c5d1ff 100%)",
        }}
      />

      <Container className="relative">
        <div className="mx-auto max-w-5xl rounded-2xl sm:rounded-3xl bg-linear-to-b from-[#F5FAFE] via-white to-[#EEF6FC] p-3.5 sm:p-7 shadow-md border border-blue-100/90 backdrop-blur-md">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50/90 border border-blue-100 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#1e3a8a]">
              Ecosystem Mentorship
            </span>
            <h1 className="mt-1 text-[19px] sm:text-[26px] lg:text-[30px] font-extrabold tracking-tight bg-linear-to-r from-[#020024] via-[#090979] to-[#00D4FF] bg-clip-text text-transparent">
              Mentors &amp; Advisors
            </h1>
            <p className="mx-auto mt-0.5 max-w-lg text-[11px] sm:text-[13px] leading-relaxed text-slate-600">
              Operators, investors, and academics guiding Tech4Bharat founders with real-world experience.
            </p>
          </AnimatedSection>

          {/* 2-col on mobile, 3-col on desktop — compact cards with themed colors & side accent borders */}
          <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3.5 lg:grid-cols-3">
            {pillars.map((item, i) => (
              <AnimatedSection key={item.num} delay={i * 0.03} className="h-full">
                <div
                  style={{ borderLeftColor: item.accent }}
                  className={`group flex h-full flex-col justify-between rounded-xl border border-slate-200/90 border-l-[3.5px] ${item.cardBg} p-2.5 shadow-2xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:rounded-2xl sm:p-3.5`}
                >
                  <div>
                    {/* Top row: Badge + Number */}
                    <div className="flex items-center justify-between">
                      <span className={`rounded-md px-1.5 py-0.5 text-[8px] sm:text-[9px] font-bold ${item.badgeBg} transition-colors`}>
                        {item.badge}
                      </span>
                      <span className="font-mono text-[9px] sm:text-[10px] font-extrabold" style={{ color: item.accent }}>
                        /{item.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-1.5 text-[11.5px] sm:text-[13.5px] font-bold text-[#0B2A4A] leading-tight group-hover:text-[#155E9A] transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-0.5 line-clamp-2 text-[9.5px] sm:text-[11px] leading-snug text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
