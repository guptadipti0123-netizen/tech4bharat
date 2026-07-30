import { Handshake, Presentation, Rocket, Users, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProgramImageCard from "@/components/ui/ProgramImageCard";

interface ProgramItem {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

const programs: ProgramItem[] = [
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
    title: "Workshops & Training",
    description: "Hands-on sessions covering fundraising, product, and go-to-market fundamentals.",
    image: "/images/programs/business-workshop.jpg",
  },
  {
    icon: Handshake,
    title: "Funding & Networking Support",
    description: "Grant facilitation and curated introductions to our investor and partner network.",
    image: "/images/programs/investors-meeting.jpg",
  },
];

export default function ProgramGrid() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <Container>
        <AnimatedSection>
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-slate-600">
            From first idea to sustained growth, Tech4Bharat offers structured programs that
            meet founders exactly where they are. Explore the tracks designed to help you build,
            connect, and scale.
          </p>
        </AnimatedSection>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, i) => (
            <AnimatedSection key={program.title} delay={i * 0.06} animation="scale">
              <ProgramImageCard
                image={program.image}
                icon={program.icon}
                title={program.title}
                description={program.description}
                learnMoreHref="/contact"
              />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
