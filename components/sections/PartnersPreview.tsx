import { Briefcase, FlaskConical, GraduationCap, Handshake, Landmark, Rocket, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

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

/** Partners — a compact 3×2 grid of small category tiles on a light-blue panel. Kept
 *  deliberately short: small heading, small cards, minimal padding, no excess whitespace. */
export default function PartnersPreview() {
  return (
    <section id="partners" className="bg-white py-6 sm:py-8">
      <Container>
        <div
          className="rounded-[28px] px-3 py-4.5 sm:px-10 sm:py-7"
          style={{ background: "linear-gradient(135deg, #EEF6FF 0%, #E2F0FF 50%, #F4F8FF 100%)" }}
        >
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="mb-1.5 text-[22px] font-semibold leading-tight text-[#082F63] sm:text-[28px]">
              Partners
            </h2>
            <p className="mx-auto mb-5 max-w-2xl text-[12px] leading-[1.4] text-[#52708F] sm:text-[14px]">
              Categories Tech4Bharat will partner with, beginning August 2026.
            </p>
          </AnimatedSection>

          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3.5">
            {partnerCategories.map(({ name, icon: Icon }, i) => (
              <AnimatedSection key={name} delay={i * 0.05}>
                <div
                  className="flex h-full min-h-22.5 flex-col items-center justify-center gap-1.5 rounded-2xl border p-2.5 text-center transition-all duration-300 hover:-translate-y-0.5 sm:min-h-30 sm:gap-2 sm:px-4.5 sm:py-3.5"
                  style={{
                    background: "linear-gradient(135deg, #EAF4FE, #DDEBFA)",
                    borderColor: "#C5DDF2",
                    boxShadow: "0 3px 10px rgba(20,70,120,0.06)",
                  }}
                >
                  <span
                    className="flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-full sm:h-10.5 sm:w-10.5"
                    style={{ backgroundColor: "#C8E1F8" }}
                  >
                    <Icon size={16} strokeWidth={1.75} className="sm:hidden" style={{ color: "#1261A0" }} />
                    <Icon size={19} strokeWidth={1.75} className="hidden sm:block" style={{ color: "#1261A0" }} />
                  </span>
                  <span className="text-[11.5px] font-medium leading-tight text-[#082F63] sm:text-[15px]">
                    {name}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
