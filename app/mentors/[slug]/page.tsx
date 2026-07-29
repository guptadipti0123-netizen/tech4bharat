import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { LinkedinIcon } from "@/components/ui/SocialIcons";
import ContactCTA from "@/components/sections/ContactCTA";
import { mentorProfiles } from "@/lib/mentors";
import { getHeadshot } from "@/lib/images";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return mentorProfiles.map((mentor) => ({ slug: mentor.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const mentor = mentorProfiles.find((m) => m.slug === slug);
  if (!mentor) return {};

  return {
    title: `${mentor.name} | Tech4Bharat Mentors`,
    description: `${mentor.designation} at ${mentor.organization}`,
    openGraph: {
      title: `${mentor.name} | Tech4Bharat`,
      description: `${mentor.designation} at ${mentor.organization}`,
      type: "profile",
      locale: "en_IN",
    },
  };
}

export default async function MentorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const mentor = mentorProfiles.find((m) => m.slug === slug);

  if (!mentor) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-b from-brand-950 via-brand-900 to-brand-950 pb-20 pt-40 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-100 w-100 -translate-x-1/2 rounded-full bg-brand-600/30 blur-3xl" />
        </div>
        <Container className="relative">
          <AnimatedSection>
            <Link
              href="/mentors"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white"
            >
              <ArrowLeft size={16} /> Back to Mentors
            </Link>
            <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-4 ring-white/10">
                <Image
                  src={getHeadshot(Number(mentor.id))}
                  alt={mentor.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold sm:text-4xl">{mentor.name}</h1>
                <p className="mt-2 text-lg text-white/70">
                  {mentor.designation}, {mentor.organization}
                </p>
                <span className="mt-3 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur">
                  {mentor.category}
                </span>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-ink-900">About</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">{mentor.bio}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Areas of Expertise
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {mentor.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={mentor.linkedin}
                  className="mt-6 flex items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-800"
                >
                  <LinkedinIcon className="h-4 w-4" /> Connect on LinkedIn
                </a>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
