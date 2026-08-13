import { Briefcase, FlaskConical, GraduationCap, Handshake, Landmark, Rocket, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HomeSectionHeading from "@/components/sections/HomeSectionHeading";

// The MoM's exact partner categories — no partnerships exist yet (MoUs begin August 2026),
// so this shows the categories Tech4Bharat will partner with, not invented institution
// names or logos.
const partnerCategories: { name: string; icon: LucideIcon }[] = [
  { name: "Premier Academic Institutions", icon: GraduationCap },
  { name: "Incubators", icon: Rocket },
  { name: "Research Organizations", icon: FlaskConical },
  { name: "Industries", icon: Briefcase },
  { name: "Government Agencies", icon: Landmark },
  { name: "NGOs", icon: Handshake },
];

/** Partners — a uniform grid of category tiles (every tile the same size, border, radius,
 *  and icon treatment), held inside a soft panel. Category-led rather than logo-led, since
 *  no MoUs have been executed yet. */
export default function PartnersPreview() {
  return (
    <section id="partners" className="bg-white py-10 sm:py-14 lg:py-20">
      <Container>
        <div className="rounded-[36px] bg-[linear-gradient(160deg,#F5FAFE_0%,#F5FAFE_100%)] p-4 sm:p-6 lg:p-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <HomeSectionHeading
              title="Partners"
              description="Categories Tech4Bharat will partner with, beginning August 2026."
              align="center"
            />
          </AnimatedSection>

          <div className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {partnerCategories.map(({ name, icon: Icon }, i) => (
              <AnimatedSection key={name} delay={i * 0.05}>
                <div className="flex h-full flex-col items-center gap-2.5 rounded-2xl border border-brand-500/15 bg-white px-3 py-5 text-center shadow-[0_2px_10px_rgba(21,94,154,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-500">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <span className="text-[13px] font-semibold leading-tight text-ink-900">{name}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
