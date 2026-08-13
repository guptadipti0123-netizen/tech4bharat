import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

/** Rounded-corner hexagon outline (six straight edges, each vertex softened by a quadratic
 *  curve) — the same shape used by the Partners honeycomb, reused here as a flat solid-fill
 *  tile (no border/shadow per this section's flatter, more minimal style). */
const HEX_PATH =
  "M8.66,20 L34.64,5 Q43.3,0 51.96,5 L77.94,20 Q86.6,25 86.6,35 L86.6,65 Q86.6,75 77.94,80 L51.96,95 Q43.3,100 34.64,95 L8.66,80 Q0,75 0,65 L0,35 Q0,25 8.66,20 Z";

const DARK_BLUE = "#0B2A4A";
const MEDIUM_BLUE = "#1976D2";

const whatWeDo: { name: string; fill: string }[] = [
  { name: "Healthcare", fill: DARK_BLUE },
  { name: "Partners", fill: MEDIUM_BLUE },
  { name: "Agriculture", fill: MEDIUM_BLUE },
  { name: "FinTech", fill: MEDIUM_BLUE },
  { name: "Education", fill: MEDIUM_BLUE },
  { name: "Sustainability", fill: DARK_BLUE },
];

function Hexagon({ name, fill }: { name: string; fill: string }) {
  return (
    <div className="relative aspect-[86.6/100] w-20 shrink-0 sm:w-24 lg:w-27">
      <svg viewBox="0 0 86.6 100" className="absolute inset-0 h-full w-full">
        <path d={HEX_PATH} fill={fill} />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center px-2.5 text-center">
        <span className="text-[11px] font-bold leading-tight text-white sm:text-[13px] lg:text-[14px]">
          {name}
        </span>
      </div>
    </div>
  );
}

/** About Tech4Bharat overview — a light mint panel holding a two-column layout: a dark
 *  "Who We Are" card on the left, and a six-hexagon honeycomb ring ("What We Do") wrapped
 *  around a center text label on the right. Flat, borderless, shadowless hexagons per this
 *  section's minimal style (distinct from the bordered Partners honeycomb elsewhere). */
export default function OurStory() {
  return (
    <section id="about-overview" className="bg-white py-5 sm:py-7">
      <Container>
        <div className="rounded-3xl bg-[#F5FAFE] px-5 py-9 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="flex flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-8">
            <AnimatedSection className="w-full lg:w-[48%]">
              <div className="rounded-[18px] bg-[#0B2A4A] p-7 sm:p-8">
                <h3 className="text-[19px] font-bold text-white sm:text-[20px]">Who We Are</h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#EAF4FB]">
                  Tech4Bharat is a national initiative dedicated to empowering India&apos;s youth
                  with cutting-edge skills in the rapidly evolving technology landscape.
                </p>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#EAF4FB]">
                  We believe the nation&apos;s progress rests on empowering young minds with the
                  right knowledge, tools, and opportunities.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="w-full lg:w-[48%]">
              <div className="mx-auto flex w-fit flex-col items-center">
                <Hexagon name={whatWeDo[0].name} fill={whatWeDo[0].fill} />
                <div className="-mt-3 flex gap-3 sm:-mt-4 sm:gap-4 lg:-mt-5">
                  <Hexagon name={whatWeDo[1].name} fill={whatWeDo[1].fill} />
                  <Hexagon name={whatWeDo[2].name} fill={whatWeDo[2].fill} />
                </div>
                <div className="-mt-3 flex h-20 w-24 flex-col items-center justify-center text-center sm:-mt-4 sm:h-24 sm:w-28 lg:-mt-5 lg:h-27 lg:w-32">
                  <span className="text-[13px] font-bold leading-tight text-[#0B2A4A] sm:text-[15px] lg:text-[16px]">
                    What
                    <br />
                    We Do
                  </span>
                </div>
                <div className="-mt-3 flex gap-3 sm:-mt-4 sm:gap-4 lg:-mt-5">
                  <Hexagon name={whatWeDo[3].name} fill={whatWeDo[3].fill} />
                  <Hexagon name={whatWeDo[4].name} fill={whatWeDo[4].fill} />
                </div>
                <div className="-mt-3 sm:-mt-4 lg:-mt-5">
                  <Hexagon name={whatWeDo[5].name} fill={whatWeDo[5].fill} />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
