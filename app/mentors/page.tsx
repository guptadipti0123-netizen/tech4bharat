import type { Metadata } from "next";
import MentorsOverview from "@/components/sections/mentors/MentorsOverview";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MentorCard from "@/components/ui/MentorCard";
import Blob from "@/components/ui/Blob";
import DotGrid from "@/components/ui/DotGrid";
import { advisors, mentors } from "@/lib/data";

const badgeStyles = ["solid", "outline", "gradient", "dot"] as const;

export const metadata: Metadata = {
  title: "Mentors & Advisors | Tech4Bharat",
  description:
    "Meet the operators, investors, and academics guiding Tech4Bharat founders — from product strategy to fundraising and deep-tech research.",
  openGraph: {
    title: "Mentors & Advisors | Tech4Bharat",
    description: "The mentors and advisors guiding Tech4Bharat founders across every stage.",
    type: "website",
    locale: "en_IN",
  },
};

export default function MentorsPage() {
  return (
    <>
      <MentorsOverview />

      <section className="relative overflow-hidden bg-white pb-8 pt-4 sm:pb-10 sm:pt-6">
        <DotGrid className="left-0 top-0 h-full w-full text-brand-700/6" />

        <Container className="relative">
          <AnimatedSection>
            <SectionTitle
              eyebrow="Mentors"
              title="Operators who've built at scale"
              description="Hands-on guidance from founders and operators who've done it before."
            />
          </AnimatedSection>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {mentors.map((mentor, i) => (
              <AnimatedSection key={mentor.name} delay={i * 0.08} animation="scale">
                <MentorCard
                  photo={mentor.photo}
                  name={mentor.name}
                  designation={mentor.role}
                  institution={mentor.company}
                  expertise={mentor.expertise}
                  bio={mentor.bio}
                  linkedinUrl={mentor.linkedinUrl}
                  badgeStyle={badgeStyles[i % badgeStyles.length]}
                />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-brand-50 py-8 sm:py-10">
        <Blob tone="secondary" className="-right-24 top-0 h-72 w-72" />
        <Blob tone="brand" className="-left-20 bottom-0 h-64 w-64" animate={false} />

        <Container className="relative">
          <AnimatedSection>
            <SectionTitle
              eyebrow="Advisors"
              title="Strategic counsel from across the ecosystem"
              description="Academic and industry advisors shaping Tech4Bharat's programs and partnerships."
            />
          </AnimatedSection>

          <div className="mx-auto mt-8 grid max-w-2xl gap-5 sm:grid-cols-2">
            {advisors.map((advisor, i) => (
              <AnimatedSection key={advisor.name} delay={i * 0.08} animation="scale">
                <MentorCard
                  photo={advisor.photo}
                  name={advisor.name}
                  designation={advisor.designation}
                  institution={advisor.institution}
                  expertise={advisor.expertise}
                  bio={advisor.bio}
                  linkedinUrl={advisor.linkedinUrl}
                  badgeStyle={badgeStyles[(i + 2) % badgeStyles.length]}
                />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

    </>
  );
}
