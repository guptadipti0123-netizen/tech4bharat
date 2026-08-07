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
  shadow: string;
  shadowHover: string;
}

const values: Value[] = [
  {
    icon: Rocket,
    title: "Innovation",
    description: "Encouraging bold ideas and creative solutions.",
    cardBg: "#EEF7FF",
    border: "#A9D8FF",
    hoverBorder: "#5AA9F5",
    iconBg: "#DCEEFF",
    iconColor: "#2F80ED",
    strip: "linear-gradient(90deg,#6EC1FF,#A9D8FF)",
    shadow: "0 10px 26px rgba(47,128,237,.12)",
    shadowHover: "0 16px 34px rgba(47,128,237,.20)",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Operating with honesty and transparency.",
    cardBg: "#F5F1FF",
    border: "#D9C9FF",
    hoverBorder: "#A78BFA",
    iconBg: "#EAE0FF",
    iconColor: "#7C5CFC",
    strip: "linear-gradient(90deg,#B79CFF,#D9C9FF)",
    shadow: "0 10px 26px rgba(124,92,252,.12)",
    shadowHover: "0 16px 34px rgba(124,92,252,.20)",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "Building progress through partnership and teamwork.",
    cardBg: "#EEF9F3",
    border: "#B9E8CE",
    hoverBorder: "#34A870",
    iconBg: "#DCF3E6",
    iconColor: "#1F9563",
    strip: "linear-gradient(90deg,#5FCB94,#B9E8CE)",
    shadow: "0 10px 26px rgba(31,149,99,.12)",
    shadowHover: "0 16px 34px rgba(31,149,99,.20)",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    description: "Creating outcomes that benefit society at large.",
    cardBg: "#FFF4EA",
    border: "#FCD9AE",
    hoverBorder: "#E0A344",
    iconBg: "#FDE7C8",
    iconColor: "#D97706",
    strip: "linear-gradient(90deg,#F5A855,#FCD9AE)",
    shadow: "0 10px 26px rgba(217,119,6,.12)",
    shadowHover: "0 16px 34px rgba(217,119,6,.20)",
  },
];

/** Core Values — four compact, individually pastel-tinted cards (sky blue, lavender, mint,
 *  peach), each with a matching border, a colored top gradient strip, and its own icon
 *  tone — deliberately distinct from the neutral/white card language used elsewhere. */
export default function CoreValues() {
  return (
    <section id="core-values" className="relative overflow-hidden py-8 sm:py-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(135deg, #F4FAF7 0%, #EDF7F2 35%, #F8FDFB 70%, #FFFFFF 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -left-24 -top-24 -z-10 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: "#DFF2E8" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 -z-10 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: "#FFF5DD" }}
      />

      <Container>
        <AnimatedSection className="mx-auto max-w-155 text-center">
          <h2 className="font-(family-name:--font-poppins) text-[28px] font-extrabold leading-tight tracking-tight text-[#163B2D] sm:text-[34px] lg:text-[40px]">
            Core Values
          </h2>
          <p className="mx-auto mt-4 max-w-155 text-balance text-lg leading-relaxed text-slate-600">
            The principles that guide every initiative at Tech4Bharat.
          </p>
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <AnimatedSection key={value.title} delay={i * 0.05} className="h-full">
                <div
                  style={
                    {
                      backgroundColor: value.cardBg,
                      borderColor: value.border,
                      boxShadow: value.shadow,
                      "--hover-border": value.hoverBorder,
                      "--shadow-hover": value.shadowHover,
                    } as React.CSSProperties
                  }
                  className="group relative flex h-full min-h-46 flex-col overflow-hidden rounded-[20px] border-2 p-6 transition-all duration-250 hover:-translate-y-1.5 hover:border-(--hover-border) hover:shadow-(--shadow-hover)"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1.25"
                    style={{ background: value.strip }}
                  />

                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-11.5 w-11.5 shrink-0 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: value.iconBg }}
                    >
                      <Icon size={21} strokeWidth={1.75} style={{ color: value.iconColor }} />
                    </span>
                    <h3 className="text-[22px] font-bold text-[#173D35]">{value.title}</h3>
                  </div>

                  <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-slate-500">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
