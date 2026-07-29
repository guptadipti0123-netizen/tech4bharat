import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import MentorDirectoryClient from "@/components/sections/mentors/MentorDirectoryClient";
import ContactCTA from "@/components/sections/ContactCTA";
import { mentorProfiles } from "@/lib/mentors";

export const metadata: Metadata = {
  title: "Mentor Directory | Tech4Bharat",
  description:
    "Search and filter the leadership advisors, industry experts, academic mentors, and startup mentors guiding Tech4Bharat founders.",
  openGraph: {
    title: "Mentor Directory | Tech4Bharat",
    description: "Search and filter the mentor network guiding Tech4Bharat founders.",
    type: "website",
    locale: "en_IN",
  },
};

export default function MentorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Mentor Directory"
        title="Guided by operators who've been there"
        description="Search our mentor network by industry, expertise, experience, and location — decades of leadership, industry, academic, and founder experience behind every startup we back."
      />
      <section className="py-24 sm:py-32">
        <Container>
          <MentorDirectoryClient mentors={mentorProfiles} />
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
