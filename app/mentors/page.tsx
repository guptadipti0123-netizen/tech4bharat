import type { Metadata } from "next";
import MentorsOverview from "@/components/sections/mentors/MentorsOverview";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MentorCard from "@/components/ui/MentorCard";
import Blob from "@/components/ui/Blob";
import DotGrid from "@/components/ui/DotGrid";
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
      <MentorsOverview />

      <section
        className="relative overflow-hidden pb-12 pt-6 sm:pb-16 sm:pt-10"
        style={{ background: "linear-gradient(180deg, #F8FCFA 0%, #EEF8F3 100%)" }}
      >
        <DotGrid className="left-0 top-0 h-full w-full text-brand-700/6" />

        <Container className="relative">
          <AnimatedSection>
            <SectionTitle
              title="Operators who've built at scale"
              description="Hands-on guidance from founders and operators who've done it before."
              className="max-w-225"
              titleClassName="text-[28px] font-bold leading-[1.1] text-[#163B2D] sm:text-[40px] lg:text-[48px]"
              descriptionClassName="mx-auto mt-3 max-w-2xl text-center text-sm sm:text-base text-[#4B5563]"
            />
          </AnimatedSection>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="relative overflow-hidden bg-brand-50 py-8 sm:py-10">
        <Blob tone="secondary" className="-right-24 top-0 h-72 w-72" />
        <Blob tone="brand" className="-left-20 bottom-0 h-64 w-64" animate={false} />

        <Container className="relative">
          <AnimatedSection>
            <SectionTitle
              title="Strategic counsel from across the ecosystem"
              description="Academic and industry advisors shaping Tech4Bharat's programs and partnerships."
              className="max-w-225"
              titleClassName="text-[20px] font-semibold leading-[1.5] text-[#163B2D] sm:text-[22px] lg:text-[24px] lg:whitespace-nowrap"
              descriptionClassName="mx-auto mt-4 max-w-2xl text-center text-lg sm:text-lg text-[#667085]"
            />
          </AnimatedSection>

          <div className="mx-auto mt-8 grid max-w-2xl gap-8 sm:grid-cols-2">
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

    </>
  );
}
