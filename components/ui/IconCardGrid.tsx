import type { LucideIcon } from "lucide-react";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface IconCardItem<T extends string> {
  title: string;
  description: string;
  icon: T;
}

interface IconCardGridProps<T extends string> {
  items: IconCardItem<T>[];
  icons: Record<T, LucideIcon>;
  columns?: "3" | "4";
}

export default function IconCardGrid<T extends string>({
  items,
  icons,
  columns = "4",
}: IconCardGridProps<T>) {
  const gridCols =
    columns === "4"
      ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-6 ${gridCols}`}>
      {items.map((item, i) => {
        const Icon: LucideIcon = icons[item.icon];
        return (
          <AnimatedSection key={item.title} delay={(i % 4) * 0.06}>
            <Card>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-white">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink-900">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.description}</p>
            </Card>
          </AnimatedSection>
        );
      })}
    </div>
  );
}
