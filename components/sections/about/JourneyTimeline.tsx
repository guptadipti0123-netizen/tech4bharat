import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Timeline from "@/components/ui/Timeline";
import { journey } from "@/lib/data";

export default function JourneyTimeline() {
  const stages = journey.map((milestone) => ({
    label: milestone.title,
    description: milestone.description,
    meta: milestone.year,
  }));

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Our Journey"
            title="The Tech4Bharat journey"
            description="From a single IIT Bombay classroom to a nationwide founder ecosystem — click a year to explore."
          />
        </AnimatedSection>

        <Timeline stages={stages} defaultIndex={stages.length - 1} />
      </Container>
    </section>
  );
}
