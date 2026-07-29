import { GraduationCap, HeartHandshake, Rocket, Users, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface CommunityGroup {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  tone: "brand" | "secondary" | "accent";
}

const communities: CommunityGroup[] = [
  {
    icon: GraduationCap,
    title: "Student Community",
    description: "Campus ambassadors, hackathon builders, and interns getting hands-on startup experience.",
    ctaLabel: "Get Involved",
    href: "/about",
    tone: "brand",
  },
  {
    icon: Users,
    title: "Mentor Community",
    description: "Operators and founders sharing hard-won lessons with the next generation of builders.",
    ctaLabel: "Meet Mentors",
    href: "/mentors",
    tone: "secondary",
  },
  {
    icon: Rocket,
    title: "Startup Community",
    description: "150+ founders across every domain, learning and growing together as one portfolio.",
    ctaLabel: "Explore Startups",
    href: "/startups",
    tone: "accent",
  },
  {
    icon: HeartHandshake,
    title: "Volunteer Community",
    description: "Professionals and mentors donating time to workshops, bootcamps, and founder support.",
    ctaLabel: "Volunteer",
    href: "/about",
    tone: "brand",
  },
];

const toneStyles: Record<CommunityGroup["tone"], string> = {
  brand: "bg-brand-50 text-brand-700",
  secondary: "bg-secondary-50 text-secondary-600",
  accent: "bg-accent-500/10 text-accent-600",
};

export default function Community() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Community"
            title="Four communities, one mission"
            description="Whichever way you want to contribute, there's a place for you in the Tech4Bharat ecosystem."
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {communities.map((community, i) => {
            const Icon = community.icon;
            return (
              <AnimatedSection key={community.title} delay={i * 0.08} animation="scale">
                <Card className="flex h-full flex-col items-center text-center">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${toneStyles[community.tone]}`}>
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink-900">{community.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{community.description}</p>
                  <Button href={community.href} variant="outline" size="sm" className="mt-5 w-full justify-center">
                    {community.ctaLabel}
                  </Button>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
