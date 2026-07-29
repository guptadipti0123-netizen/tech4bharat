import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StoryCard from "@/components/sections/success-stories/StoryCard";
import { successStories } from "@/lib/stories";

export default function SuccessStoriesPreview() {
  const featured = successStories.slice(0, 2);
  if (featured.length === 0) return null;

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Success Stories"
            title="Real founders, real impact"
            description="A closer look at the journeys behind some of our portfolio's most meaningful outcomes."
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {featured.map((story, i) => (
            <AnimatedSection key={story.id} delay={i * 0.08}>
              <StoryCard story={story} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="mt-12 text-center">
          <Button href="/success-stories" variant="outline">
            View All Success Stories
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
