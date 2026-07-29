"use client";

import { LayoutGrid, List } from "lucide-react";
import { cn } from "@/lib/utils";

export type ViewMode = "grid" | "list";

interface ViewToggleProps {
  value: ViewMode;
  onChange: (value: ViewMode) => void;
  className?: string;
}

export default function ViewToggle({ value, onChange, className }: ViewToggleProps) {
  return (
    <div className={cn("inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1", className)}>
      {(["grid", "list"] as const).map((mode) => {
        const Icon = mode === "grid" ? LayoutGrid : List;
        const isActive = value === mode;
        return (
          <button
            key={mode}
            type="button"
            onClick={() => onChange(mode)}
            aria-label={`${mode} view`}
            aria-pressed={isActive}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full transition-colors",
              isActive ? "bg-brand-700 text-white" : "text-slate-400 hover:text-brand-700"
            )}
          >
            <Icon size={16} />
          </button>
        );
      })}
    </div>
  );
}
