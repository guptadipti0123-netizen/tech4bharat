import {
  CheckCircle2,
  FlaskConical,
  Landmark,
  Lightbulb,
  Rocket,
  Sprout,
  Target,
  TrendingUp,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Timeline, { type TimelineStage } from "@/components/ui/Timeline";

const stages: TimelineStage[] = [
  {
    label: "Idea",
    icon: <Lightbulb size={18} />,
    description:
      "Every great company starts with a spark. We help founders sharpen the problem they're solving and who it's for.",
  },
  {
    label: "Validation",
    icon: <CheckCircle2 size={18} />,
    description:
      "Test assumptions with real users and early signals before committing time and capital to build.",
  },
  {
    label: "Prototype",
    icon: <FlaskConical size={18} />,
    description: "Build a working first version and get it in front of your earliest customers.",
  },
  {
    label: "Incubation",
    icon: <Rocket size={18} />,
    description:
      "Join a structured cohort with hands-on mentorship, workspace, and peer founders solving similar problems.",
  },
  {
    label: "Acceleration",
    icon: <TrendingUp size={18} />,
    description:
      "Sharpen your go-to-market, unit economics, and team as you push toward product-market fit.",
  },
  {
    label: "Funding",
    icon: <Landmark size={18} />,
    description:
      "Get investor-ready and connect with our network of angels, VCs, and government funding schemes.",
  },
  {
    label: "Scaling",
    icon: <Sprout size={18} />,
    description: "Scale operations, expand into new markets, and build the team to match your ambition.",
  },
  {
    label: "Impact",
    icon: <Target size={18} />,
    description: "Measure and amplify the real-world outcomes your startup creates across Bharat.",
  },
];

export default function StartupJourney() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="The Journey"
            title="From first spark to lasting impact"
            description="Every startup we back moves through the same founder-first support journey — click a stage to explore it."
          />
        </AnimatedSection>

        <Timeline stages={stages} />
      </Container>
    </section>
  );
}
