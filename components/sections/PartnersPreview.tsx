import { Factory, Gift, HeartHandshake, Landmark, School, Wallet } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import LogoMarquee from "@/components/ui/LogoMarquee";
import FeatureCard from "@/components/ui/FeatureCard";
import { partners } from "@/lib/data";

const partnerTypes = [
  {
    icon: School,
    title: "Universities",
    description: "Research partnerships and pipelines that turn campus innovation into startups.",
    tone: "brand" as const,
  },
  {
    icon: Landmark,
    title: "Government",
    description: "Alignment with national and state missions to grow India's startup ecosystem.",
    tone: "secondary" as const,
  },
  {
    icon: HeartHandshake,
    title: "NGOs",
    description: "Grassroots reach that connects our programs to underserved communities.",
    tone: "accent" as const,
  },
  {
    icon: Factory,
    title: "Industry",
    description: "Corporate partners offering pilots, distribution, and enterprise mentorship.",
    tone: "brand" as const,
  },
  {
    icon: Gift,
    title: "CSR",
    description: "Purpose-aligned funding that scales social-impact ventures sustainably.",
    tone: "secondary" as const,
  },
  {
    icon: Wallet,
    title: "Investors",
    description: "Angels and VCs actively looking for their next Bharat-focused portfolio company.",
    tone: "accent" as const,
  },
];

export default function PartnersPreview() {
  return (
    <section id="partners" className="border-y border-slate-100 bg-slate-50 py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle eyebrow="Partners" title="Backed by an ecosystem that believes in Bharat" />
        </AnimatedSection>
      </Container>

      <AnimatedSection delay={0.1} className="mt-14">
        <LogoMarquee items={partners.map((p) => p.name)} />
      </AnimatedSection>

      <Container className="mt-20">
        <AnimatedSection>
          <SectionTitle eyebrow="Why Partner With Us" title="Six ways to build Bharat's startup future with us" />
        </AnimatedSection>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partnerTypes.map((type, i) => (
            <AnimatedSection key={type.title} delay={i * 0.06} animation="scale">
              <FeatureCard icon={type.icon} title={type.title} description={type.description} tone={type.tone} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
