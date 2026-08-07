import Image from "next/image";
import { Cpu, GraduationCap, Heart, Sparkles, Sprout, Venus, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface Persona {
  icon: LucideIcon;
  label: string;
  supportingLine: string;
  cardBg: string;
  border: string;
  hoverBorder: string;
}

const personas: Persona[] = [
  {
    icon: Sprout,
    label: "Early-Stage Startups",
    supportingLine: "Building your first company",
    cardBg: "#ECFDF5",
    border: "#34D399",
    hoverBorder: "#10B981",
  },
  {
    icon: GraduationCap,
    label: "Student Founders",
    supportingLine: "Turning ideas into ventures",
    cardBg: "#EFF6FF",
    border: "#60A5FA",
    hoverBorder: "#2563EB",
  },
  {
    icon: Venus,
    label: "Women Entrepreneurs",
    supportingLine: "Empowering diverse leadership",
    cardBg: "#FFF1F2",
    border: "#FB7185",
    hoverBorder: "#E11D48",
  },
  {
    icon: Heart,
    label: "Social Impact Startups",
    supportingLine: "Solving real-world problems",
    cardBg: "#F5F3FF",
    border: "#A78BFA",
    hoverBorder: "#7C3AED",
  },
  {
    icon: Cpu,
    label: "Technology Innovators",
    supportingLine: "Creating the next breakthrough",
    cardBg: "#FFF7ED",
    border: "#F59E0B",
    hoverBorder: "#D97706",
  },
  {
    icon: Sparkles,
    label: "First-Time Founders",
    supportingLine: "Starting your founder journey",
    cardBg: "#F0FDF4",
    border: "#22C55E",
    hoverBorder: "#16A34A",
  },
];

/** Who should attend — a split layout: one real photograph on the left, and six
 *  individually pastel-tinted persona cards on the right (icon, title, subtitle, and a
 *  matching bottom accent line), on a soft tri-tone gradient field with a faint dot
 *  texture. */
export default function WhoShouldAttend() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-11">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{ background: "linear-gradient(180deg, #F4FBF8 0%, #EDF8FF 50%, #FFF9F1 100%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, #123C33 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            title="Who Should Attend"
            description="This bootcamp is built for founders at every early stage of the journey."
            className="max-w-3xl"
            titleClassName="text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-[#163B2D] sm:text-[36px] lg:text-[42px]"
            descriptionClassName="mx-auto mt-3 max-w-175 text-[17px] leading-relaxed text-slate-600 sm:text-[18px]"
          />
        </AnimatedSection>

        <div className="mt-9 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <AnimatedSection className="relative h-80 w-full overflow-hidden rounded-[28px] sm:h-96 lg:h-full lg:min-h-125">
            <Image
              src="/images/gallery/bootcamps-1.jpg"
              alt="Founders and mentors at a Tech4Bharat Startup Bootcamp session"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2">
            {personas.map((persona, i) => {
              const Icon = persona.icon;
              return (
                <AnimatedSection key={persona.label} delay={i * 0.05}>
                  <div
                    style={
                      {
                        backgroundColor: persona.cardBg,
                        borderColor: persona.border,
                        boxShadow: "0 8px 25px rgba(0,0,0,.06)",
                        "--hover-border": persona.hoverBorder,
                        "--shadow-hover": "0 14px 32px rgba(0,0,0,.10)",
                      } as React.CSSProperties
                    }
                    className="flex h-full flex-col items-start justify-center rounded-[18px] border-2 p-4 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-(--hover-border) hover:shadow-(--shadow-hover)"
                  >
                    <span
                      className="flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: "rgba(255,255,255,.6)" }}
                    >
                      <Icon size={20} strokeWidth={1.75} style={{ color: persona.border }} />
                    </span>
                    <h3 className="mt-2.5 text-[18px] font-bold leading-tight text-ink-900">{persona.label}</h3>
                    <p className="mt-1 text-[14px] font-medium leading-snug text-slate-600">
                      {persona.supportingLine}
                    </p>
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
