import type { LucideIcon } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

export interface LegalSection {
  icon: LucideIcon;
  title: string;
  id: string;
  body: React.ReactNode;
}

interface LegalSectionListProps {
  sections: LegalSection[];
}

/** Content column for the Privacy Policy and Terms & Conditions pages — pairs with
 *  `LegalTOC` to form a split layout. Each clause is an anchored, icon-labeled card;
 *  alternating tint keeps a long list of similar cards from reading as one repeated block. */
export default function LegalSectionList({ sections }: LegalSectionListProps) {
  return (
    <div className="space-y-5">
      {sections.map((section, i) => {
        const Icon = section.icon;
        return (
          <AnimatedSection key={section.id} delay={i * 0.04}>
            <div
              id={section.id}
              className={cn(
                "scroll-mt-28 rounded-3xl border border-slate-200 p-6 shadow-sm sm:p-8",
                i % 2 === 0 ? "bg-white" : "bg-brand-50/40"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
                  <Icon size={18} />
                </span>
                <h2 className="text-lg font-bold text-ink-900">{section.title}</h2>
              </div>
              <p className="mt-3 leading-relaxed text-slate-600">{section.body}</p>
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  );
}
