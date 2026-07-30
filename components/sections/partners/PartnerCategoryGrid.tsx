import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PartnerLogoCard from "@/components/ui/PartnerLogoCard";
import { partnerCategories } from "@/lib/partners";

const allPartnerNames = partnerCategories.flatMap((group) => group.partners);

export default function PartnerCategoryGrid() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <Container>
        <AnimatedSection>
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-slate-600">
            From academia to government to industry, our partners help us extend founder
            support across every corner of India.
          </p>
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {allPartnerNames.map((partner, i) => (
            <AnimatedSection key={partner} delay={(i % 8) * 0.04} animation="scale">
              <PartnerLogoCard name={partner} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
