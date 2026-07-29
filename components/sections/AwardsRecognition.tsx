import { Award } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Timeline, { type TimelineStage } from "@/components/ui/Timeline";
import { awards } from "@/lib/awards";

const stages: TimelineStage[] = awards.map((award) => ({
  label: award.title,
  meta: `${award.year} · ${award.issuer}`,
  description: award.description,
  icon: <Award size={18} />,
}));

export default function AwardsRecognition() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Awards & Recognition"
            title="Milestones we're proud of"
            description="Recognition from the institutions and communities we work alongside."
          />
        </AnimatedSection>

        <Timeline stages={stages} defaultIndex={stages.length - 1} />
      </Container>
    </section>
  );
}
