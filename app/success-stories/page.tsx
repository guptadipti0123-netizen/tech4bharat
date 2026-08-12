import type { Metadata } from "next";
import { Trophy } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SuccessStoryCard from "@/components/ui/SuccessStoryCard";
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
        title="From idea to real-world impact"
        description="The founders who turned an early idea into a company changing how India works, learns, and heals."
        icon={Trophy}
        titleClassName="text-[28px] font-extrabold leading-tight tracking-tight text-ink-900 sm:text-[36px] lg:text-[44px]"
      />

      <section className="bg-white py-8 sm:py-12">
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

    </>
  );
}
