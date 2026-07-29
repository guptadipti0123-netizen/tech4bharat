import { Code2, Handshake, Landmark, Lightbulb, Presentation, Rocket, TrendingUp, Wallet } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import ProgramCard from "@/components/ui/ProgramCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

const categories = [
  {
    icon: Rocket,
    title: "Incubation",
    description: "Structured, cohort-based support from first idea to a working, fundable company.",
  },
  {
    icon: TrendingUp,
    title: "Acceleration",
    description: "Focused sprints to sharpen go-to-market, unit economics, and growth velocity.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Challenges",
    description: "Themed competitions that surface and fund bold solutions to real-world problems.",
  },
  {
    icon: Code2,
    title: "Hackathons",
    description: "Intensive build sprints connecting student and early-career talent with real startups.",
  },
  {
    icon: Presentation,
    title: "Bootcamps",
    description: "Hands-on workshops covering fundraising, product, and go-to-market fundamentals.",
  },
  {
    icon: Wallet,
    title: "Funding Support",
    description: "Grant facilitation and structured introductions to our angel and VC network.",
  },
  {
    icon: Landmark,
    title: "Government Schemes",
    description: "Guided access to Startup India, state, and central government incentive programs.",
  },
  {
    icon: Handshake,
    title: "Investor Connect",
    description: "Curated investor meets and demo days to help founders raise their next round.",
  },
];

export default function ProgramsPreview() {
  return (
    <section id="programs" className="bg-white py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Featured Programs"
            title="A program for every stage of your journey"
            description="From first idea to scale-up, structured tracks and support designed around founder needs."
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, i) => (
            <AnimatedSection key={category.title} delay={i * 0.06} animation="scale">
              <ProgramCard icon={category.icon} title={category.title} description={category.description} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="mt-12 text-center">
          <Button href="/programs" variant="outline">
            Explore All Programs
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
