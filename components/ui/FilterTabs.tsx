"use client";

import { cn } from "@/lib/utils";

interface FilterTabsProps {
  options: string[];
  active: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function FilterTabs({ options, active, onChange, className }: FilterTabsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
            active === option
              ? "border-brand-700 bg-brand-700 text-white shadow-md shadow-brand-700/25"
              : "border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-700"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
