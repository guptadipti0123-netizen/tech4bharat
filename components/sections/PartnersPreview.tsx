import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PartnerLogoCard from "@/components/ui/PartnerLogoCard";
import { partners } from "@/lib/data";

export default function PartnersPreview() {
  return (
    <section id="partners" className="border-y border-slate-100 bg-white py-12 sm:py-16">
      <Container>
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
    </section>
  );
}
