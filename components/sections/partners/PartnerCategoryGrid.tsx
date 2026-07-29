import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PartnerLogoCard from "@/components/ui/PartnerLogoCard";
import PartnerLogoMarquee from "@/components/sections/partners/PartnerLogoMarquee";
import { partnerCategories } from "@/lib/partners";

const allPartnerNames = partnerCategories.flatMap((group) => group.partners);

export default function PartnerCategoryGrid() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white via-slate-50 to-white py-24 sm:py-32">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-200/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary-200/20 blur-3xl" />

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            eyebrow="Our Network"
            title="Trusted by institutions across Bharat"
            description="A cross-section of the academic, government, industry, and research partners powering our ecosystem."
          />
        </AnimatedSection>
      </Container>

      <AnimatedSection delay={0.1} className="relative mt-14">
        <PartnerLogoMarquee names={allPartnerNames} />
      </AnimatedSection>

      <Container className="relative mt-20">
        <div className="space-y-16">
          {partnerCategories.map((group, index) => (
            <AnimatedSection key={group.category} delay={index * 0.05}>
              <h2 className="text-xl font-bold text-ink-900 sm:text-2xl">{group.category}</h2>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {group.partners.map((partner) => (
                  <PartnerLogoCard key={partner} name={partner} />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
