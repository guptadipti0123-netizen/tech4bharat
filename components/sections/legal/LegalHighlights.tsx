import type { LucideIcon } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export interface LegalHighlight {
  icon: LucideIcon;
  label: string;
}

interface LegalHighlightsProps {
  points: LegalHighlight[];
}

/** "At a glance" pill row for legal pages — short, direct restatements of facts already
 *  covered in the sections below, so the page reads before it's read. */
export default function LegalHighlights({ points }: LegalHighlightsProps) {
  return (
    <AnimatedSection className="flex flex-wrap justify-center gap-3">
      {points.map(({ icon: Icon, label }) => (
        <span
          key={label}
          className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700"
        >
          <Icon size={15} /> {label}
        </span>
      ))}
    </AnimatedSection>
  );
}
