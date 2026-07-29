"use client";

import { toast } from "sonner";
import { BookOpen, Download, FileBarChart, Lightbulb, Microscope, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { publications, type Publication } from "@/lib/publications";

const icons: Record<Publication["icon"], LucideIcon> = {
  FileBarChart,
  Microscope,
  Lightbulb,
  BookOpen,
};

export default function ResearchPublications() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Research & Publications"
            title="Research grounded in real portfolio data"
            description="Annual reports, research papers, innovation studies, and case studies from across our ecosystem."
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {publications.map((publication, i) => {
            const Icon = icons[publication.icon];
            return (
              <AnimatedSection key={publication.title} delay={i * 0.06} animation="scale">
                <Card className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon size={20} />
                    </div>
                    <Badge variant="neutral">{publication.year}</Badge>
                  </div>
                  <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-secondary-600">
                    {publication.category}
                  </span>
                  <h3 className="mt-1.5 text-base font-semibold text-ink-900">{publication.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{publication.description}</p>
                  <button
                    type="button"
                    onClick={() =>
                      toast.success("Request received", {
                        description: `We'll email you "${publication.title}" shortly.`,
                      })
                    }
                    className="mt-5 inline-flex items-center justify-center gap-1.5 self-start text-sm font-semibold text-brand-700 hover:text-brand-800"
                  >
                    <Download size={16} /> Download
                  </button>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
