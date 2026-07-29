import {
  HandHeart,
  Lightbulb,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconCardGrid from "@/components/ui/IconCardGrid";
import { coreValues, type CoreValue } from "@/lib/data";

const icons: Record<CoreValue["icon"], LucideIcon> = {
  ShieldCheck,
  Lightbulb,
  HandHeart,
  Users,
  TrendingUp,
  Star,
};

export default function CoreValues() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Core Values"
            title="The principles that guide every decision"
          />
        </AnimatedSection>

        <div className="mt-16">
          <IconCardGrid items={coreValues} icons={icons} columns="3" />
        </div>
      </Container>
    </section>
  );
}
