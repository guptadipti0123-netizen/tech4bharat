import { Award, Globe, Users, Workflow, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconCardGrid from "@/components/ui/IconCardGrid";
import { whyTech4Bharat, type WhyPoint } from "@/lib/data";

const icons: Record<WhyPoint["icon"], LucideIcon> = {
  Users,
  Globe,
  Workflow,
  Award,
};

export default function WhyTech4Bharat() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Why Tech4Bharat"
            title="What sets our incubator apart"
            description="A founder-first model built for India's diversity, distance, and drive."
          />
        </AnimatedSection>

        <div className="mt-16">
          <IconCardGrid items={whyTech4Bharat} icons={icons} columns="4" />
        </div>
      </Container>
    </section>
  );
}
