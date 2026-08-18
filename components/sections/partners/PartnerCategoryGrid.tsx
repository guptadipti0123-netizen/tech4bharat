import { Briefcase, FlaskConical, GraduationCap, Handshake, Landmark, Rocket, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Blob from "@/components/ui/Blob";

/** Rounded-corner hexagon outline, hand-built as an SVG path (six straight edges with each
 *  vertex softened by a quadratic curve) since CSS has no native rounded-hexagon primitive. */
const HEX_PATH =
  "M8.66,20 L34.64,5 Q43.3,0 51.96,5 L77.94,20 Q86.6,25 86.6,35 L86.6,65 Q86.6,75 77.94,80 L51.96,95 Q43.3,100 34.64,95 L8.66,80 Q0,75 0,65 L0,35 Q0,25 8.66,20 Z";

const categories: { name: string; icon: LucideIcon }[] = [
  { name: "Premier Academic Institutions", icon: GraduationCap },
  { name: "Incubators", icon: Rocket },
  { name: "Research Organizations", icon: FlaskConical },
  { name: "Industries", icon: Briefcase },
  { name: "Government Agencies", icon: Landmark },
  { name: "NGOs", icon: Handshake },
];

function Hexagon({ name, icon: Icon, delay }: { name: string; icon: LucideIcon; delay: number }) {
  return (
    <AnimatedSection delay={delay} className="mx-auto w-28 shrink-0 sm:w-36 md:w-40 lg:w-44">
      <div className="group relative aspect-[86.6/100] w-full transition-transform duration-300 hover:-translate-y-1">
        <svg
          viewBox="-4 -4 94.6 108"
          className="absolute inset-0 h-full w-full drop-shadow-[0_6px_16px_rgba(21,94,154,0.12)]"
        >
          <path d={HEX_PATH} fill="#F4F9FD" stroke="#C9DFEF" strokeWidth={2} />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-3 text-center sm:gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E1EFF9] text-brand-600 sm:h-10 sm:w-10">
            <Icon size={18} strokeWidth={1.75} />
          </span>
          <span className="break-words text-[11px] font-bold leading-tight text-[#0B2A4A] sm:text-xs md:text-sm">
            {name}
          </span>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function PartnerCategoryGrid() {
  return (
    <section className="relative overflow-hidden bg-[#F0F7FD] py-10 sm:py-14 border-t border-slate-200/60">
      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            title="Building a Network Across Bharat"
            description="Following Section 8 Company registration, Tech4Bharat will initiate Memoranda of Understanding from August 2026 across the categories below."
            className="max-w-3xl"
            titleClassName="text-[22px] font-bold leading-[1.15] tracking-tight text-[#0B2A4A] sm:text-[26px] lg:text-[30px]"
            descriptionClassName="mt-3 text-base sm:text-lg leading-relaxed text-slate-600"
          />
        </AnimatedSection>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6 lg:gap-4">
          {categories.map((c, i) => (
            <Hexagon key={c.name} name={c.name} icon={c.icon} delay={i * 0.06} />
          ))}
        </div>
      </Container>
    </section>
  );
}
