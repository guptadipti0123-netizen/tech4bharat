import type { LucideIcon } from "lucide-react";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tone?: "brand" | "secondary" | "accent";
  className?: string;
}

const toneStyles: Record<NonNullable<FeatureCardProps["tone"]>, string> = {
  brand: "bg-brand-50 text-brand-700",
  secondary: "bg-secondary-50 text-secondary-600",
  accent: "bg-accent-500/10 text-accent-600",
};

/** Icon + title + description card used for value-proposition and partner-benefit grids. */
export default function FeatureCard({ icon: Icon, title, description, tone = "brand", className }: FeatureCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl", toneStyles[tone])}>
        <Icon size={24} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </Card>
  );
}
