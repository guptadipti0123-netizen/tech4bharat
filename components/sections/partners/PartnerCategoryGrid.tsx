import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Blob from "@/components/ui/Blob";
import PartnerCard from "@/components/ui/PartnerCard";
import { partnerCategories } from "@/lib/partners";

export default function PartnerCategoryGrid() {
  return (
    <section className="relative overflow-hidden bg-sand-50 pb-8 pt-6 sm:pb-8 sm:pt-9">
      <Blob tone="secondary" className="-right-32 top-1/4 h-96 w-96" />
      <Blob tone="brand" className="-left-24 bottom-0 h-72 w-72" animate={false} />

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            title="A network spanning every corner of Bharat"
            description="From academia to government to industry, our partners help us extend founder support across every corner of India."
            className="max-w-240"
            titleClassName="text-[27px] font-bold leading-[1.1] tracking-[-0.01em] text-[#163B2D] sm:text-[38px] lg:text-[44px] lg:whitespace-nowrap"
            descriptionClassName="mt-2 text-[14px] sm:mt-3 sm:text-[17px] leading-relaxed text-[#667085]"
          />
        </AnimatedSection>

        <div className="mt-10 space-y-10">
          {partnerCategories.map((group, groupIndex) => (
            <AnimatedSection
              key={group.category}
              delay={groupIndex * 0.05}
              className={groupIndex > 0 ? "border-t border-brand-100 pt-10" : undefined}
            >
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-lg font-bold text-ink-900">{group.category}</h3>
                <span className="text-sm text-slate-500">{group.tagline}</span>
                <span className="ml-auto text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {group.partners.length} Partner{group.partners.length === 1 ? "" : "s"}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {group.partners.map((partner, i) => (
                  <PartnerCard
                    key={partner.name}
                    name={partner.name}
                    description={partner.description}
                    badge={group.badge}
                    logo={partner.logo}
                    delay={(i % 8) * 0.04}
                  />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
