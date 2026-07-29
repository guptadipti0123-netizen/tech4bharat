import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StoryCard from "@/components/sections/success-stories/StoryCard";
import ContactCTA from "@/components/sections/ContactCTA";
import { successStories } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Success Stories | Tech4Bharat",
  description:
    "Real founder journeys and measurable impact from startups incubated through Tech4Bharat.",
  openGraph: {
    title: "Success Stories | Tech4Bharat",
    description: "Real founder journeys and measurable impact from Tech4Bharat startups.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title="Real founders, real impact"
        description="A closer look at the journeys behind some of our portfolio's most meaningful outcomes."
      />
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {successStories.map((story, i) => (
              <AnimatedSection key={story.id} delay={(i % 3) * 0.08}>
                <StoryCard story={story} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
