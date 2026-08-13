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
    <AnimatedSection delay={delay} className="mx-auto w-36 shrink-0 sm:w-40 lg:w-44">
      <div className="group relative aspect-[86.6/100] w-full transition-transform duration-300 hover:-translate-y-1">
        <svg
          viewBox="-4 -4 94.6 108"
          className="absolute inset-0 h-full w-full drop-shadow-[0_6px_16px_rgba(21,94,154,0.12)]"
        >
          <path d={HEX_PATH} fill="#F5FAFE" stroke="#155E9A" strokeOpacity={0.22} strokeWidth={2} />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/10 text-brand-500">
            <Icon size={17} strokeWidth={1.75} />
          </span>
          <span className="text-[16px] font-semibold leading-tight text-ink-900 sm:text-[17px]">{name}</span>
        </div>
      </div>
    </AnimatedSection>
  );
}

/** Partners & Collaborators — the MoM confirms no partnerships exist yet (MoUs begin August
 *  2026), so the six MoM categories are presented as a honeycomb of equal hexagon tiles
 *  (icon + category name only) rather than a list of invented institution names/logos. */
export default function PartnerCategoryGrid() {
  const [top, middle, bottom] = [categories.slice(0, 3), categories.slice(3, 5), categories.slice(5, 6)];

  return (
    <section className="relative overflow-hidden bg-sand-50 pb-10 pt-5 sm:pb-14 sm:pt-9">
      <Blob tone="secondary" className="-right-32 top-1/4 h-96 w-96" />
      <Blob tone="brand" className="-left-24 bottom-0 h-72 w-72" animate={false} />

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            title="Building a Network Across Bharat"
            description="Following Section 8 Company registration, Tech4Bharat will initiate Memoranda of Understanding from August 2026 across the categories below."
            className="max-w-240"
            titleClassName="text-[22px] font-bold leading-[1.1] tracking-[-0.01em] text-[#0B2A4A] sm:text-[26px] lg:text-[30px]"
            descriptionClassName="mt-2 text-[14px] leading-relaxed text-[#526777] sm:mt-3 sm:text-[15px]"
          />
        </AnimatedSection>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 gap-5 sm:mt-12 sm:max-w-3xl sm:grid-cols-2 lg:flex lg:max-w-none lg:flex-col lg:items-center lg:gap-4">
          <div className="contents lg:flex lg:justify-center lg:gap-4">
            {top.map((c, i) => (
              <Hexagon key={c.name} name={c.name} icon={c.icon} delay={i * 0.05} />
            ))}
          </div>
          <div className="contents lg:flex lg:justify-center lg:gap-4 lg:-mt-7">
            {middle.map((c, i) => (
              <Hexagon key={c.name} name={c.name} icon={c.icon} delay={0.15 + i * 0.05} />
            ))}
          </div>
          <div className="contents lg:flex lg:justify-center lg:-mt-7">
            {bottom.map((c, i) => (
              <Hexagon key={c.name} name={c.name} icon={c.icon} delay={0.25 + i * 0.05} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
