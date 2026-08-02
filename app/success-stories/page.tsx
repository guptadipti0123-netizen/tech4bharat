import type { Metadata } from "next";
import { Trophy } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SuccessStoryCard from "@/components/ui/SuccessStoryCard";
import ContactCTA from "@/components/sections/ContactCTA";
import { successStories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Success Stories | Tech4Bharat",
  description:
    "Real founders, real challenges, real impact — success stories from startups incubated and accelerated by Tech4Bharat.",
  openGraph: {
    title: "Success Stories | Tech4Bharat",
    description: "Real founders, real challenges, real impact from the Tech4Bharat ecosystem.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title="From idea to real-world impact"
        description="The founders who turned an early idea into a company changing how India works, learns, and heals."
        icon={Trophy}
      />

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {successStories.map((story, i) => (
              <AnimatedSection key={story.slug} delay={i * 0.1}>
                <SuccessStoryCard story={story} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
