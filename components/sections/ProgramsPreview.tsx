import { Presentation, Rocket, Users, Wallet, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import ProgramImageCard from "@/components/ui/ProgramImageCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface HomeProgram {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

const homePrograms: HomeProgram[] = [
  {
    icon: Rocket,
    title: "Startup Incubation",
    description: "Structured, cohort-based support from first idea to a working, fundable company.",
    image: "/images/programs/incubation.jpg",
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "One-on-one guidance from experienced operators and industry mentors.",
    image: "/images/programs/mentoring.jpg",
  },
  {
    icon: Presentation,
    title: "Workshops",
    description: "Hands-on sessions covering fundraising, product, and go-to-market fundamentals.",
    image: "/images/programs/business-workshop.jpg",
  },
  {
    icon: Wallet,
    title: "Funding Support",
    description: "Grant facilitation and structured introductions to our angel and VC network.",
    image: "/images/programs/investors-meeting.jpg",
  },
];

export default function ProgramsPreview() {
  return (
    <section id="programs" className="bg-slate-50 py-10 sm:py-17.5">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Programs"
            title="A program for every stage of your journey"
            description="From first idea to scale-up, structured tracks and support designed around founder needs."
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homePrograms.map((program, i) => (
            <AnimatedSection key={program.title} delay={i * 0.06} animation="scale">
              <ProgramImageCard
                image={program.image}
                icon={program.icon}
                title={program.title}
                description={program.description}
                learnMoreHref="/programs"
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="mt-10 text-center">
          <Button href="/programs" variant="outline">
            Explore All Programs
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
