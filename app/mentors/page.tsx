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
    "Meet the operators, investors, and academics guiding Tech4Bharat founders â€” from product strategy to fundraising and deep-tech research.",
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
        className="relative overflow-hidden py-8 sm:py-12"
        style={{ background: "linear-gradient(180deg, #edeef8 0%, #FFFFFF 60%, #edeef8 100%)" }}
      >
        <Container className="relative">
          <AnimatedSection>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-[20px] sm:text-[26px] font-bold text-[#020024] tracking-tight">
                Operators Who&apos;ve Built at Scale
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600">
                Hands-on guidance from founders and seasoned operators who have built impactful products.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {mentors.map((mentor, i) => (
              <AnimatedSection key={mentor.name} delay={i * 0.05} animation="scale" className="h-full">
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

      <section className="relative overflow-hidden bg-gradient-to-b from-[#edeef8] to-[#c5d1ff] py-8 sm:py-12">
        <Container className="relative">
          <AnimatedSection>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-[19px] sm:text-[24px] font-bold text-[#020024] tracking-tight">
                Strategic &amp; Academic Advisors
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600">
                Academic and industry leaders shaping Tech4Bharat&apos;s programs and ecosystem partnerships.
              </p>
            </div>
          </AnimatedSection>

          <div className="mx-auto mt-6 sm:mt-8 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {advisors.map((advisor, i) => (
              <AnimatedSection key={advisor.name} delay={i * 0.05} animation="scale" className="h-full">
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
