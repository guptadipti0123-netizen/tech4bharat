import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PartnerLogoCard from "@/components/ui/PartnerLogoCard";
import DotGrid from "@/components/ui/DotGrid";
import SectionDivider from "@/components/ui/SectionDivider";
import { partners } from "@/lib/data";

export default function PartnersPreview() {
  return (
    <section id="partners" className="relative overflow-hidden bg-sand-50 py-16 sm:py-24">
      <DotGrid className="left-0 top-0 h-full w-full text-accent-700/6" />

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle eyebrow="Partners" title="Backed by an ecosystem that believes in Bharat" />
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, i) => (
            <AnimatedSection key={partner.name} delay={i * 0.05} animation="scale">
              <PartnerLogoCard name={partner.name} />
            </AnimatedSection>
          ))}
        </div>
      </Container>

      <SectionDivider color="text-white" />
    </section>
  );
}
