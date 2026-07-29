import { Presentation } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Timeline, { type TimelineStage } from "@/components/ui/Timeline";
import Button from "@/components/ui/Button";
import { events } from "@/lib/events";

const bootcamps = events.filter((event) => event.type === "Bootcamp");

const stages: TimelineStage[] = bootcamps.map((bootcamp) => ({
  label: bootcamp.title,
  meta: `${bootcamp.status} · ${bootcamp.date}`,
  description: bootcamp.description,
  icon: <Presentation size={18} />,
}));

export default function BootcampsTimeline() {
  if (bootcamps.length === 0) return null;

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Bootcamps"
            title="Our bootcamp timeline"
            description="From upcoming registrations to completed cohorts — see every Tech4Bharat bootcamp in one place."
          />
        </AnimatedSection>

        <Timeline stages={stages} defaultIndex={0} />

        <AnimatedSection delay={0.2} className="mt-12 text-center">
          <Button href="/gallery" variant="outline">
            View Bootcamp Gallery
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
