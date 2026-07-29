"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import AnimatedSection from "@/components/ui/AnimatedSection";

export interface TimelineStage {
  label: string;
  description: string;
  /** Pass an already-rendered icon element (e.g. `<Lightbulb size={18} />`) — Timeline is a
   *  Client Component, so icon *components* (functions) can't cross the server/client boundary as props. */
  icon?: ReactNode;
  /** Small eyebrow shown above the label in the detail panel/card — e.g. a year. */
  meta?: string;
}

interface TimelineProps {
  stages: TimelineStage[];
  defaultIndex?: number;
}

/** Interactive stage timeline — horizontal + click-to-expand on desktop, vertical stacked cards on mobile. */
export default function Timeline({ stages, defaultIndex = 0 }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const active = stages[activeIndex];

  return (
    <div>
      {/* Desktop: interactive horizontal timeline */}
      <div className="mt-16 hidden lg:block">
        <div className="relative">
          <div className="absolute left-5 right-5 top-5 h-px bg-slate-200" />
          <div
            className="absolute left-5 top-5 h-px bg-brand-700 transition-all duration-500"
            style={{ width: `calc((100% - 2.5rem) * ${activeIndex / (stages.length - 1)})` }}
          />
          <div className="relative flex justify-between">
            {stages.map((stage, i) => {
              return (
                <button
                  key={stage.label}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-pressed={i === activeIndex}
                  className="group flex flex-col items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                >
                  <span
                    className={cn(
                      "relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ring-4 ring-slate-50 transition-all duration-300",
                      i <= activeIndex
                        ? "bg-brand-700 text-white"
                        : "bg-white text-slate-400 ring-1 ring-slate-200 group-hover:text-brand-700"
                    )}
                  >
                    {stage.icon ?? i + 1}
                  </span>
                  <span
                    className={cn(
                      "text-sm font-semibold transition-colors",
                      i === activeIndex ? "text-brand-700" : "text-slate-500 group-hover:text-brand-700"
                    )}
                  >
                    {stage.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-10 max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-md"
          >
            {active.meta && (
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                {active.meta}
              </span>
            )}
            <h3 className="mt-2 text-xl font-semibold text-ink-900">{active.label}</h3>
            <p className="mt-3 text-slate-600">{active.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile/tablet: vertical stacked timeline */}
      <div className="relative mx-auto mt-16 max-w-2xl lg:hidden">
        <div className="absolute bottom-2 left-4 top-2 w-px bg-slate-200" />
        <div className="space-y-10">
          {stages.map((stage, i) => {
            return (
              <AnimatedSection key={stage.label} delay={i * 0.06}>
                <div className="relative flex gap-6">
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-xs font-bold text-white ring-4 ring-slate-50">
                    {stage.icon ?? i + 1}
                  </div>
                  <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    {stage.meta && (
                      <span className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                        {stage.meta}
                      </span>
                    )}
                    <h3 className="mt-2 text-lg font-semibold text-ink-900">{stage.label}</h3>
                    <p className="mt-2 text-slate-600">{stage.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}
