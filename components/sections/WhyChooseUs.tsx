import Image from "next/image";
import { Building2, Gift, Handshake, Lightbulb, Network, Users, Wallet } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FeatureCard from "@/components/ui/FeatureCard";
import { aboutImages } from "@/lib/images";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Frontier ideas, rigorously validated — we help founders build what the market actually needs.",
    tone: "accent" as const,
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "A connected ecosystem of founders, mentors, and institutions working toward shared outcomes.",
    tone: "secondary" as const,
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Founder-first guidance from operators who've built and scaled companies of their own.",
    tone: "brand" as const,
  },
  {
    icon: Wallet,
    title: "Funding",
    description: "Structured access to angels, VCs, and government schemes at every stage of growth.",
    tone: "accent" as const,
  },
  {
    icon: Network,
    title: "Networking",
    description: "A thriving community of founders, mentors, and partners to learn from and build alongside.",
    tone: "secondary" as const,
  },
  {
    icon: Gift,
    title: "CSR",
    description: "Purpose-aligned CSR funding that scales social-impact ventures sustainably.",
    tone: "brand" as const,
  },
  {
    icon: Building2,
    title: "Government Support",
    description: "Guided access to Startup India and state-level government schemes and incentives.",
    tone: "accent" as const,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimatedSection animation="slide-right">
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={aboutImages.innovationCenter}
                alt="Founders and mentors collaborating at a Tech4Bharat innovation center"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-950/70 via-transparent to-transparent" />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-700">
              Why Tech4Bharat
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Everything a founder needs, in one connected ecosystem
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              We bring together the pillars that actually move a startup forward — so founders
              spend less time searching for support and more time building.
            </p>
          </AnimatedSection>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.06} animation="scale">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                tone={feature.tone}
              />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
