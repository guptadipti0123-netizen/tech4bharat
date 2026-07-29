import {
  Building2,
  ClipboardCheck,
  Flame,
  Globe,
  Handshake,
  Landmark,
  Network,
  Rocket,
  Trophy,
  Users,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProgramImageCard from "@/components/ui/ProgramImageCard";
import { supportPrograms, type SupportProgram } from "@/lib/data";
import { getProgramImage } from "@/lib/images";

const icons: Record<SupportProgram["icon"], LucideIcon> = {
  Rocket,
  TrendingUp,
  Users,
  Landmark,
  Handshake,
  Building2,
  Globe,
  ClipboardCheck,
  Trophy,
  Flame,
  Network,
};

export default function ProgramGrid() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {supportPrograms.map((program, i) => (
            <AnimatedSection key={program.title} delay={i * 0.06} animation="scale">
              <ProgramImageCard
                image={getProgramImage(program.title)}
                icon={icons[program.icon]}
                title={program.title}
                description={program.description}
              />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
