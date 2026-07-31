import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MentorCard from "@/components/ui/MentorCard";
import ContactCTA from "@/components/sections/ContactCTA";
import { advisors, mentors } from "@/lib/data";

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
      <PageHero
        eyebrow="Our Network"
        title="Mentors & Advisors"
        description="Operators, investors, and academics who give Tech4Bharat founders an unfair advantage."
      />

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <AnimatedSection>
            <SectionTitle
              eyebrow="Mentors"
              title="Hands-on guidance from people who've built"
              description="One-on-one mentorship from operators and founders who've scaled real companies."
            />
          </AnimatedSection>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-50 py-16 sm:py-24">
        <Container>
          <AnimatedSection>
            <SectionTitle
              eyebrow="Advisors"
              title="Strategic counsel from across the ecosystem"
              description="Academic and industry advisors shaping Tech4Bharat's programs and partnerships."
            />
          </AnimatedSection>

          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
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
                />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
