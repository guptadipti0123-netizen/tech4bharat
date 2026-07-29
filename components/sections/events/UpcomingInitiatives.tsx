import { Code2, Presentation, Sprout, Trophy, Venus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Timeline, { type TimelineStage } from "@/components/ui/Timeline";
import { upcomingInitiatives } from "@/lib/initiatives";

const icons = [Presentation, Trophy, Code2, Venus, Sprout];

const stages: TimelineStage[] = upcomingInitiatives.map((initiative, i) => {
  const Icon = icons[i % icons.length];
  return {
    label: initiative.title,
    meta: initiative.date,
    description: initiative.description,
    icon: <Icon size={18} />,
  };
});

export default function UpcomingInitiatives() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Roadmap"
            title="Upcoming initiatives"
            description="What's next on our calendar as we expand the Tech4Bharat ecosystem."
          />
        </AnimatedSection>

        <Timeline stages={stages} />
      </Container>
    </section>
  );
}
