import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface ExpertCategory {
  image: string;
  badge: string;
  title: string;
  description: string;
  /** Tailwind color family driving the accent strip, badge tint, and hover border. */
  theme: string;
}

// No specific speaker lineup has been announced yet, so these stay category cards rather
// than named individuals â€” each paired with a real photo of that kind of moment from the
// Tech4Bharat gallery, not a stock placeholder or a fabricated name.
const categories: ExpertCategory[] = [
  {
    image: "/images/gallery/gallery-12.jpg",
    badge: "Mentor",
    title: "Startup Mentors",
    description: "Operators who've built and scaled companies of their own.",
    theme: "brand",
  },
  {
    image: "/images/gallery/gallery-3.jpg",
    badge: "Investor",
    title: "Investors",
    description: "Angels and VCs actively backing early-stage Indian founders.",
    theme: "accent",
  },
  {
    image: "/images/gallery/gallery-10.jpg",
    badge: "Industry Leader",
    title: "Industry Experts",
    description: "Specialists across product, growth, and go-to-market.",
    theme: "secondary",
  },
  {
    image: "/images/gallery/students-1.jpg",
    badge: "Researcher",
    title: "Academic Institutions",
    description: "Researchers and faculty supporting deep-tech translation.",
    theme: "brand",
  },
  {
    image: "/images/gallery/gallery-2.jpg",
    badge: "Leader",
    title: "Incubation Leaders",
    description: "Leaders from India's incubation and accelerator ecosystem.",
    theme: "secondary",
  },
];

const themeClasses: Record<string, { gradient: string; badge: string; border: string }> = {
  brand: {
    gradient: "from-brand-500 to-brand-700",
    badge: "bg-brand-50 text-brand-700",
    border: "group-hover:border-brand-300",
  },
  accent: {
    gradient: "from-accent-400 to-accent-600",
    badge: "bg-accent-50 text-accent-700",
    border: "group-hover:border-accent-300",
  },
  secondary: {
    gradient: "from-secondary-400 to-secondary-600",
    badge: "bg-secondary-50 text-secondary-700",
    border: "group-hover:border-secondary-300",
  },
};

/** Who You'll Meet â€” five category cards, each with its own accent color and a real photo
 *  standing in for that kind of person (no lineup announced yet, so no fabricated names). */
export default function ExpertsSpeakers() {
  return (
    <section className="relative overflow-hidden pt-22.5 pb-22.5">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30"
        style={{ background: "linear-gradient(180deg, #F5FAFE 0%, #F5FAFE 45%, #F5FAFE 100%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -left-20 -top-20 -z-20 h-100 w-100 rounded-full opacity-[0.18] blur-[200px]"
        style={{ backgroundColor: "#EAF4FB" }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 -z-20 h-100 w-100 rounded-full opacity-[0.18] blur-[200px]"
        style={{ backgroundColor: "#E8F4FF" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 left-1/2 -z-20 h-100 w-100 -translate-x-1/2 rounded-full opacity-15 blur-[200px]"
        style={{ backgroundColor: "#EAF4FB" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, #0B2A4A 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <Container className="relative px-10 sm:px-10 lg:px-10">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[22px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0B2A4A] sm:text-[26px] lg:text-[30px]">
              Experts &amp; Speakers
            </h2>
            <p className="mx-auto mt-3 max-w-175 text-[17px] leading-relaxed text-slate-600 sm:text-[18px]">
              Throughout the day, participants will interact directly with:
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category, i) => {
            const theme = themeClasses[category.theme];
            return (
              <AnimatedSection key={category.title} delay={i * 0.06} animation="scale">
                <div
                  className={`group relative flex flex-col items-center overflow-hidden rounded-3xl border-[1.5px] border-[rgba(21,94,154,.3)] bg-slate-50 p-5 text-center shadow-[0_12px_30px_rgba(0,0,0,.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(6,26,44,0.14)] ${theme.border}`}
                >
                  <span
                    className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${theme.gradient} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
                    aria-hidden="true"
                  />

                  <div className="relative h-23 w-23 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-md">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="92px"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <span
                    className={`mt-3 inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${theme.badge}`}
                  >
                    {category.badge}
                  </span>
                  <h3 className="mt-1.5 text-base font-bold leading-tight text-ink-900">{category.title}</h3>
                  <p className="mt-1 line-clamp-none text-sm leading-snug text-slate-600 sm:line-clamp-2">{category.description}</p>

                  <ArrowRight
                    size={15}
                    className="mt-2 -translate-y-1 text-slate-300 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
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
