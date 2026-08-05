import { ArrowRight, Cpu, GraduationCap, Heart, Sparkles, Sprout, Venus, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface Persona {
  icon: LucideIcon;
  badge: string;
  label: string;
  supportingLine: string;
  /** Tailwind color family driving the icon gradient, badge tint, blob, and hover border —
   *  a distinct soft accent per card so six otherwise-identical tiles get their own identity. */
  theme: string;
}

const personas: Persona[] = [
  {
    icon: Sprout,
    badge: "Startup",
    label: "Early-Stage Startups",
    supportingLine: "Building your first company",
    theme: "brand",
  },
  {
    icon: GraduationCap,
    badge: "Student",
    label: "Student Founders",
    supportingLine: "Turning ideas into ventures",
    theme: "sky",
  },
  {
    icon: Venus,
    badge: "Community",
    label: "Women Entrepreneurs",
    supportingLine: "Empowering diverse leadership",
    theme: "accent",
  },
  {
    icon: Heart,
    badge: "Impact",
    label: "Social Impact Startups",
    supportingLine: "Solving real-world problems",
    theme: "secondary",
  },
  {
    icon: Cpu,
    badge: "Tech",
    label: "Technology Innovators",
    supportingLine: "Creating the next breakthrough",
    theme: "violet",
  },
  {
    icon: Sparkles,
    badge: "Founder",
    label: "First-Time Founders",
    supportingLine: "Starting your founder journey",
    theme: "orange",
  },
];

const themeClasses: Record<
  string,
  { gradient: string; badge: string; border: string; blob: string }
> = {
  brand: {
    gradient: "from-brand-500 to-brand-700",
    badge: "bg-brand-50 text-brand-700",
    border: "group-hover:border-brand-300",
    blob: "bg-brand-500/5",
  },
  sky: {
    gradient: "from-sky-400 to-sky-600",
    badge: "bg-sky-50 text-sky-700",
    border: "group-hover:border-sky-300",
    blob: "bg-sky-500/5",
  },
  accent: {
    gradient: "from-accent-400 to-accent-600",
    badge: "bg-accent-50 text-accent-700",
    border: "group-hover:border-accent-300",
    blob: "bg-accent-500/5",
  },
  secondary: {
    gradient: "from-secondary-400 to-secondary-600",
    badge: "bg-secondary-50 text-secondary-700",
    border: "group-hover:border-secondary-300",
    blob: "bg-secondary-500/5",
  },
  violet: {
    gradient: "from-violet-400 to-violet-600",
    badge: "bg-violet-50 text-violet-700",
    border: "group-hover:border-violet-300",
    blob: "bg-violet-500/5",
  },
  orange: {
    gradient: "from-orange-400 to-orange-600",
    badge: "bg-orange-50 text-orange-700",
    border: "group-hover:border-orange-300",
    blob: "bg-orange-500/5",
  },
};

/** Who should attend — six audience personas, each with its own soft accent color, badge,
 *  and one-line hook, so the grid reads as six distinct personas rather than one repeated
 *  tile. Deliberately compact: a horizontal icon+text row, not a tall stacked card. */
export default function WhoShouldAttend() {
  return (
    <section className="bg-white py-8 sm:py-12">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Is This For You?"
            title="Who Should Attend"
            description="This bootcamp is built for founders at every early stage of the journey."
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((persona, i) => {
            const Icon = persona.icon;
            const theme = themeClasses[persona.theme];
            return (
              <AnimatedSection key={persona.label} delay={i * 0.06} animation="scale">
                <div
                  className={`group relative flex h-full items-center gap-3.5 overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-[0_4px_16px_rgba(22,58,58,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(22,58,58,0.12)] sm:p-5 ${theme.border}`}
                >
                  {/* Top accent strip */}
                  <span
                    className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${theme.gradient} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
                    aria-hidden="true"
                  />
                  {/* Tiny decorative blob — kept to 5% opacity */}
                  <span
                    className={`pointer-events-none absolute -right-5 -top-5 h-20 w-20 rounded-full blur-xl ${theme.blob}`}
                    aria-hidden="true"
                  />

                  <div className="relative shrink-0">
                    <span
                      className={`absolute inset-0 rounded-2xl bg-linear-to-br ${theme.gradient} opacity-25 blur-md`}
                      aria-hidden="true"
                    />
                    <span
                      className={`relative flex h-13 w-13 items-center justify-center rounded-2xl bg-linear-to-br ${theme.gradient} text-white shadow-md transition-transform duration-300 group-hover:rotate-6`}
                    >
                      <Icon size={24} strokeWidth={1.75} />
                    </span>
                  </div>

                  <div className="min-w-0 flex-1 pr-5">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${theme.badge}`}
                    >
                      {persona.badge}
                    </span>
                    <h3 className="mt-1 truncate text-base font-bold leading-tight text-ink-900 sm:text-lg">
                      {persona.label}
                    </h3>
                    <p className="mt-0.5 truncate text-xs leading-snug text-slate-500 sm:text-sm">
                      {persona.supportingLine}
                    </p>
                  </div>

                  <ArrowRight
                    size={16}
                    className="absolute right-4 top-1/2 -translate-x-1 -translate-y-1/2 text-slate-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
