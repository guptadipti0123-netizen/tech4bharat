import type { LucideIcon } from "lucide-react";
import Card from "@/components/ui/Card";

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Compact icon + title + description card for program/offering category grids. */
export default function ProgramCard({ icon: Icon, title, description }: ProgramCardProps) {
  return (
    <Card className="h-full">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-transform duration-300 group-hover:scale-110">
        <Icon size={20} />
      </div>
      <h3 className="mt-4 text-base font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </Card>
  );
}
