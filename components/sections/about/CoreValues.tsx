import { Network, Rocket, Shield, TrendingUp, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
  active?: boolean;
}

const values: Value[] = [
  {
    icon: Rocket,
    title: "Innovation",
    description: "Encouraging bold ideas and creative solutions.",
    active: true,
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Operating with honesty and transparency.",
  },
  {
    icon: Network,
    title: "Collaboration",
    description: "Building progress through partnership and teamwork.",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    description: "Creating outcomes that benefit society at large.",
  },
];

// Alternating soft icon-container tint paired with the matching brand ink color.
const iconTones = [
  { bg: "bg-[#EAF6EE] group-hover:bg-[#DBEFE2]", ink: "text-[#1F4E3D]" },
  { bg: "bg-[#FFF7E8] group-hover:bg-[#FFEFD0]", ink: "text-[#D4A017]" },
];

/** Core Values — a premium institutional 4-card row on a soft green/gold gradient field
 *  with two subtle blurred accent shapes, minimal outline icons, and one highlighted
 *  "active" card (Innovation) with a green border and a gold bottom accent strip. */
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
            const tone = iconTones[i % iconTones.length];
            return (
              <AnimatedSection key={value.title} delay={i * 0.05} className="h-full">
                <div
                  className={cn(
                    "group relative flex h-full min-h-57.5 flex-col overflow-hidden rounded-[18px] bg-white p-7.5 transition-all duration-250 hover:-translate-y-1.25",
                    value.active
                      ? "border-2 border-[#1F4E3D] shadow-[0_12px_30px_rgba(31,78,61,0.10)]"
                      : "border border-slate-200 shadow-sm hover:border-[#1F4E3D]"
                  )}
                >
                  {value.active && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-[5px]"
                      style={{ backgroundColor: "#D4A017" }}
                    />
                  )}
                  <span
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] transition-colors duration-250",
                      tone.bg
                    )}
                  >
                    <Icon size={22} strokeWidth={1.75} className={tone.ink} />
                  </span>
                  <h3 className="mt-5 text-[18px] font-bold text-[#163B2D]">{value.title}</h3>
                  <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-slate-500">
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
