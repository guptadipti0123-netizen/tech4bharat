import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

const focusAreas = [
  "AgriTech",
  "Water & Sanitation",
  "MedTech",
  "HealthTech",
  "AI/ML",
  "ClimateTech",
  "Clean Energy",
  "Waste Management",
  "Education Technology",
  "Rural Development",
  "Women Empowerment",
  "Livelihood Generation",
  "Other Social Impact Innovations",
];

const circleColors = ["#123B68", "#1F4E8C"];

/** Focus Areas — all 13 MoM domains as small round badges in a single horizontal row
 *  (never wrapping to multiple rows; scrolls horizontally only if a viewport is too
 *  narrow to fit all 13 at once). Replaces the previous 4-quadrant circular diagram. */
export default function WhereWeFocus() {
  return (
    <section className="relative overflow-hidden bg-[#F3F8FD] pb-8 pt-6 sm:pb-12 sm:pt-8">
      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            title="Focus Areas"
            description="The sectors where Tech4Bharat supports innovation, technology, and social impact."
            className="max-w-4xl"
            titleClassName="text-balance text-[24px] font-bold leading-tight tracking-tight text-[#123B68] sm:text-[28px] lg:text-[30px]"
            descriptionClassName="mx-auto mt-2 max-w-2xl text-balance text-[14px] leading-relaxed text-[#123B68]/70 sm:mt-3 sm:text-[15px]"
          />
        </AnimatedSection>
      </Container>

      <AnimatedSection delay={0.1} className="mt-8">
        <div className="mx-auto flex w-full max-w-[1440px] flex-nowrap items-center justify-start gap-2 overflow-x-auto px-4 pb-2 lg:justify-center">
          {focusAreas.map((area, i) => (
            <div
              key={area}
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[#C9D8F5]/50 px-1.5 text-center shadow-[0_4px_12px_rgba(18,59,104,0.12)] sm:h-22 sm:w-22 sm:px-2 lg:h-[100px] lg:w-[100px] lg:px-2.5"
              style={{ backgroundColor: circleColors[i % circleColors.length] }}
            >
              <span className="text-[10px] font-semibold leading-[1.15] text-white sm:text-[11px] lg:text-[11.5px]">
                {area}
              </span>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
