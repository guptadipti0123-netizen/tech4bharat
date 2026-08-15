import { Handshake, Rocket, Shield, TrendingUp, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
  cardBg: string;
  border: string;
  hoverBorder: string;
  iconBg: string;
  iconColor: string;
  strip: string;
  shadowHover: string;
}

const values: Value[] = [
  {
    icon: Rocket,
    title: "Innovation",
    description: "Encouraging bold ideas and creative solutions.",
    cardBg: "#FFFFFF",
    border: "#D8E6F5",
    hoverBorder: "#2F80ED",
    iconBg: "#EAF4FB",
    iconColor: "#2F80ED",
    strip: "linear-gradient(90deg, #2F80ED 0%, #60A5FA 100%)",
    shadowHover: "0 14px 30px rgba(47, 128, 237, 0.16)",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Operating with honesty and transparency.",
    cardBg: "#FFFFFF",
    border: "#D8E6F5",
    hoverBorder: "#0B2A4A",
    iconBg: "#E8EFF8",
    iconColor: "#0B2A4A",
    strip: "linear-gradient(90deg, #0B2A4A 0%, #1976D2 100%)",
    shadowHover: "0 14px 30px rgba(11, 42, 74, 0.16)",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "Building progress through partnership and teamwork.",
    cardBg: "#FFFFFF",
    border: "#D8E6F5",
    hoverBorder: "#4F46E5",
    iconBg: "#EEF2FF",
    iconColor: "#4F46E5",
    strip: "linear-gradient(90deg, #4F46E5 0%, #818CF8 100%)",
    shadowHover: "0 14px 30px rgba(79, 70, 229, 0.16)",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    description: "Creating outcomes that benefit society at large.",
    cardBg: "#FFFFFF",
    border: "#D8E6F5",
    hoverBorder: "#0284C7",
    iconBg: "#E0F2FE",
    iconColor: "#0284C7",
    strip: "linear-gradient(90deg, #0284C7 0%, #38BDF8 100%)",
    shadowHover: "0 14px 30px rgba(2, 132, 199, 0.16)",
  },
];

/** Core Values — 4 cards displayed 2 per row on mobile and 4 in a row on desktop,
 *  featuring elegant top accent strips, soft icon badges, and smooth interactive hover effects. */
export default function CoreValues() {
  return (
    <section id="core-values" className="relative overflow-hidden py-7 sm:py-10">
      {/* Background gradients */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(135deg, #F5FAFE 0%, #F5FAFE 40%, #FFFFFF 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -left-20 -top-20 -z-10 h-72 w-72 rounded-full opacity-25 blur-3xl"
        style={{ backgroundColor: "#BAE6FD" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -right-20 -z-10 h-72 w-72 rounded-full opacity-25 blur-3xl"
        style={{ backgroundColor: "#E0E7FF" }}
      />

      <Container>
        <AnimatedSection className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF4FB] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#1976D2]">
            Guiding Principles
          </span>
          <h2 className="mt-2 font-(family-name:--font-poppins) text-[20px] font-extrabold leading-tight tracking-tight text-[#0B2A4A] sm:text-[23px] lg:text-[25px]">
            Core Values
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-balance text-[12.5px] leading-relaxed text-slate-600 sm:text-[13.5px]">
            The principles that guide every initiative at Tech4Bharat.
          </p>
        </AnimatedSection>

        {/* 2 columns on mobile, 2 columns on tablet, 4 columns on desktop */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <AnimatedSection key={value.title} delay={i * 0.06} className="h-full">
                <div
                  style={
                    {
                      backgroundColor: value.cardBg,
                      borderColor: value.border,
                      boxShadow: "0 4px 20px rgba(11, 42, 74, 0.05)",
                      "--hover-border": value.hoverBorder,
                      "--shadow-hover": value.shadowHover,
                    } as React.CSSProperties
                  }
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border p-3.5 transition-all duration-300 hover:-translate-y-1.5 hover:border-(--hover-border) hover:shadow-(--shadow-hover) active:scale-[0.98] sm:p-4.5 lg:p-5"
                >
                  {/* Colored top gradient strip */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 transition-all duration-300 group-hover:h-1.5"
                    style={{ background: value.strip }}
                  />

                  <div>
                    {/* Icon container */}
                    <div className="flex items-center justify-between">
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10"
                        style={{ backgroundColor: value.iconBg }}
                      >
                        <Icon size={18} strokeWidth={2} style={{ color: value.iconColor }} />
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-3 text-[14px] font-bold tracking-tight text-[#0B2A4A] sm:text-[15.5px] lg:text-[16.5px]">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-1.5 text-[11.5px] leading-snug text-slate-600 sm:text-[12.5px] sm:leading-relaxed lg:text-[13px]">
                      {value.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
