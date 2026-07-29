"use client";

import { toast } from "sonner";
import {
  BarChart3,
  BookOpen,
  Download,
  FileText,
  Landmark,
  LayoutTemplate,
  ScrollText,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import { resources, type ResourceItem } from "@/lib/resources";

const icons: Record<ResourceItem["icon"], LucideIcon> = {
  FileText,
  Wrench,
  LayoutTemplate,
  BarChart3,
  BookOpen,
  ScrollText,
  Landmark,
};

export default function Resources() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Download Centre"
            title="Guides, toolkits, and templates for founders"
            description="Practical downloads built from what's worked across our portfolio."
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, i) => {
            const Icon = icons[resource.icon];
            return (
              <AnimatedSection key={resource.title} delay={i * 0.06} animation="scale">
                <Card className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon size={20} />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                      {resource.fileType}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-ink-900">{resource.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{resource.description}</p>
                  <button
                    type="button"
                    onClick={() =>
                      toast.success("Request received", {
                        description: `We'll email you the "${resource.title}" shortly.`,
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
