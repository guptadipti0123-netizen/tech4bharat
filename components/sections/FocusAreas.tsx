import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HomeSectionHeading from "@/components/sections/HomeSectionHeading";
import { getDomainImage } from "@/lib/images";

// The exact 13 social impact domains named in the Tech4Bharat MoM — no additions,
// no substitutions, no invented descriptions. Only the first 8 are shown as image
// cards in this section (to keep it from feeling crowded); the full list is kept
// here since it's the MoM's canonical content and may be needed elsewhere.
const domains = [
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

const displayedDomains = domains.slice(0, 8);

/** Social Impact Domains — a uniform photo-tile grid (every tile the same size, border,
 *  radius, and label treatment) held inside a soft panel, so the section reads as one
 *  distinct visual block rather than a flat, edge-to-edge grid. */
export default function FocusAreas() {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-20">
      <Container>
        <div className="rounded-[36px] bg-[linear-gradient(160deg,#F5FAFE_0%,#F5FAFE_100%)] p-4 sm:p-6 lg:p-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <HomeSectionHeading title="Social Impact Domains" align="center" />
          </AnimatedSection>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-3.5 lg:grid-cols-4">
            {displayedDomains.map((domain, i) => (
              <AnimatedSection key={domain} delay={i * 0.03}>
                <div className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-brand-500/15 shadow-[0_2px_10px_rgba(21,94,154,0.05)]">
                  <Image
                    src={getDomainImage(domain)}
                    alt={domain}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-900/80 via-brand-900/10 to-transparent" />
                  <span className="absolute inset-x-2 bottom-2 text-[12px] font-semibold leading-tight text-white sm:text-[13px]">
                    {domain}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2} className="mt-6 text-center">
            <Button href="/about" variant="outline">
              Learn More <ArrowRight size={16} />
            </Button>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
