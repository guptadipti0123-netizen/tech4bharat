import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PartnerLogoCard from "@/components/ui/PartnerLogoCard";
import { partnerCategories } from "@/lib/partners";

export default function PartnerCategoryGrid() {
  return (
    <section className="bg-sand-50 py-16 sm:py-24">
      <Container>
        <AnimatedSection>
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-slate-600">
            From academia to government to industry, our partners help us extend founder
            support across every corner of India.
          </p>
        </AnimatedSection>

        <div className="mt-14 space-y-14">
          {partnerCategories.map((group, groupIndex) => (
            <AnimatedSection key={group.category} delay={groupIndex * 0.05}>
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-bold text-ink-900">{group.category}</h3>
                <span className="h-px flex-1 bg-slate-200" />
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {group.partners.length} Partner{group.partners.length === 1 ? "" : "s"}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {group.partners.map((partner, i) => (
                  <AnimatedSection key={partner} delay={(i % 8) * 0.04} animation="scale">
                    <PartnerLogoCard name={partner} />
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
