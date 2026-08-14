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
    <AnimatedSection delay={delay} className="mx-auto w-22 shrink-0 min-[481px]:w-28 md:w-32 lg:w-40">
      <div className="group relative aspect-[86.6/100] w-full transition-transform duration-300 hover:-translate-y-1">
        <svg
          viewBox="-4 -4 94.6 108"
          className="absolute inset-0 h-full w-full drop-shadow-[0_6px_16px_rgba(21,94,154,0.12)]"
        >
          <path d={HEX_PATH} fill="#F4F9FD" stroke="#C9DFEF" strokeWidth={2} />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 px-2 text-center min-[481px]:gap-1.5 min-[481px]:px-3">
          <span className="flex h-6.5 w-6.5 items-center justify-center rounded-full bg-[#E1EFF9] text-brand-500 min-[481px]:h-8 min-[481px]:w-8 md:h-10 md:w-10">
            <Icon size={13} strokeWidth={1.75} className="min-[481px]:hidden" />
            <Icon size={16} strokeWidth={1.75} className="hidden min-[481px]:block" />
          </span>
          <span className="break-words text-[8.5px] font-semibold leading-[1.15] text-ink-900 min-[481px]:text-[11px] md:text-[14px]">
            {name}
          </span>
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
    <section className="relative overflow-hidden bg-[#EAF4FB] pb-5 pt-4 min-[481px]:pb-6 min-[481px]:pt-5 md:pb-8 md:pt-6 lg:pb-10 lg:pt-6">
      <Blob tone="secondary" className="-right-32 top-1/4 h-96 w-96" />
      <Blob tone="brand" className="-left-24 bottom-0 h-72 w-72" animate={false} />

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            title="Building a Network Across Bharat"
            description="Following Section 8 Company registration, Tech4Bharat will initiate Memoranda of Understanding from August 2026 across the categories below."
            className="max-w-240"
            titleClassName="text-[20px] font-bold leading-[1.15] tracking-[-0.01em] text-[#0B2A4A] sm:text-[22px] md:text-[26px] lg:text-[30px]"
            descriptionClassName="mt-2 text-[12px] leading-[1.5] text-[#526777] sm:text-[13px] md:mt-3 md:text-[15px]"
          />
        </AnimatedSection>

        <div className="mx-auto mt-5 grid max-w-90 grid-cols-3 gap-x-2 gap-y-3 min-[481px]:max-w-2xl min-[481px]:grid-cols-2 min-[481px]:gap-x-3.5 min-[481px]:gap-y-4 md:mt-8 md:gap-4 lg:flex lg:max-w-none lg:flex-col lg:items-center lg:gap-2.5">
          <div className="contents lg:flex lg:justify-center lg:gap-2.5">
            {top.map((c, i) => (
              <Hexagon key={c.name} name={c.name} icon={c.icon} delay={i * 0.05} />
            ))}
          </div>
          <div className="contents lg:flex lg:justify-center lg:gap-2.5 lg:-mt-6">
            {middle.map((c, i) => (
              <Hexagon key={c.name} name={c.name} icon={c.icon} delay={0.15 + i * 0.05} />
            ))}
          </div>
          <div className="contents lg:flex lg:justify-center lg:-mt-6">
            {bottom.map((c, i) => (
              <Hexagon key={c.name} name={c.name} icon={c.icon} delay={0.25 + i * 0.05} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
