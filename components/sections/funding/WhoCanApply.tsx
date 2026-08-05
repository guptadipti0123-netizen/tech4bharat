import { GraduationCap, HandHeart, Rocket, Sprout, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface Applicant {
  icon: LucideIcon;
  title: string;
  description: string;
}

const applicants: Applicant[] = [
  { icon: Rocket, title: "Early-Stage Startups", description: "Founders validating or scaling their first product." },
  { icon: GraduationCap, title: "Students", description: "Student innovators building their first venture." },
  { icon: HandHeart, title: "Women Entrepreneurs", description: "Women-led startups seeking funding and mentorship." },
  { icon: Sprout, title: "Social Impact Ventures", description: "Ventures creating measurable social impact." },
];

/** Who Can Apply — four compact horizontal icon-left cards, deliberately laid out
 *  differently from the icon-top cards in Funding Sources above. */
export default function WhoCanApply() {
  return (
    <section className="bg-white py-8 sm:py-12">
      <Container>
        <AnimatedSection>
          <SectionTitle eyebrow="Eligibility" title="Who Can Apply" description="Programs open to founders at every starting point." />
        </AnimatedSection>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {applicants.map(({ icon: Icon, title, description }, i) => (
            <AnimatedSection key={title} delay={i * 0.07}>
              <div className="group flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-lg">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-100 text-accent-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-500 group-hover:text-white">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="text-base font-bold text-ink-900">{title}</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
