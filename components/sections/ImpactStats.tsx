import {
  GraduationCap,
  Handshake,
  Landmark,
  Lightbulb,
  MapPin,
  Rocket,
  Users,
  Venus,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StatisticCard from "@/components/ui/StatisticCard";
import SectionDivider from "@/components/ui/SectionDivider";
import { impactStats } from "@/lib/data";

const statIcons: Record<string, LucideIcon> = {
  Rocket,
  Venus,
  GraduationCap,
  Users,
  Landmark,
  Handshake,
  MapPin,
  Lightbulb,
};

export default function ImpactStats() {
  return (
    <section id="impact" className="relative overflow-hidden bg-brand-950 py-24 text-white sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            eyebrow="Our Impact"
            title="A snapshot of the ecosystem we've built"
            description="Real numbers behind the founders, mentors, and partners powering Bharat's startup movement."
            theme="dark"
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {impactStats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.08} animation="scale">
              <StatisticCard
                icon={statIcons[stat.icon]}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                tone={i % 2 === 1 ? "secondary" : "accent"}
              />
            </AnimatedSection>
          ))}
        </div>
      </Container>

      <SectionDivider color="text-white" />
    </section>
  );
}
