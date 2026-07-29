import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { LinkedinIcon } from "@/components/ui/SocialIcons";
import { mentors } from "@/lib/data";
import { getHeadshot } from "@/lib/images";

export default function MentorsPreview() {
  return (
    <section id="mentors" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Mentors"
            title="Guided by operators who've been there"
            description="Our mentor network brings decades of founder and operator experience."
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mentors.map((mentor, i) => (
            <AnimatedSection key={mentor.name} delay={i * 0.08}>
              <Card className="flex flex-col items-center text-center">
                <div className="relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-brand-50 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={getHeadshot(i)}
                    alt={mentor.name}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">{mentor.name}</h3>
                <p className="mt-1 text-sm text-slate-500">
                  {mentor.role}, {mentor.company}
                </p>
                <Badge variant={i % 2 === 0 ? "brand" : "secondary"} className="mt-3">
                  {mentor.expertise}
                </Badge>
                <a
                  href="#"
                  aria-label={`${mentor.name} on LinkedIn`}
                  className="mt-4 flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-colors hover:bg-brand-100"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
