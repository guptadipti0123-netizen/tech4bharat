"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Handshake, Layers, Rocket } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";
import { statePresence } from "@/lib/india-presence";

export default function IndiaPresenceMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = statePresence[activeIndex];
  const totalStates = statePresence.length;

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Our Presence"
            title="Active across Bharat"
            description={`Hover or tap a state to see our footprint — currently live in ${totalStates}+ states and growing.`}
          />
        </AnimatedSection>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <AnimatedSection animation="scale" className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mx-auto max-w-sm rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-md lg:mx-0 lg:text-left"
              >
                <span className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                  {active.name}
                </span>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center lg:items-start">
                    <Rocket size={18} className="mb-2 text-accent-500" />
                    <p className="text-2xl font-bold text-ink-900">{active.startups}</p>
                    <p className="text-xs text-slate-500">Startups</p>
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <Layers size={18} className="mb-2 text-secondary-500" />
                    <p className="text-2xl font-bold text-ink-900">{active.programs}</p>
                    <p className="text-xs text-slate-500">Programs</p>
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <Handshake size={18} className="mb-2 text-brand-600" />
                    <p className="text-2xl font-bold text-ink-900">{active.partners}</p>
                    <p className="text-xs text-slate-500">Partners</p>
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <Calendar size={18} className="mb-2 text-accent-500" />
                    <p className="text-2xl font-bold text-ink-900">{active.events}</p>
                    <p className="text-xs text-slate-500">Events</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </AnimatedSection>

          <AnimatedSection animation="scale" delay={0.1} className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-4/5 w-full max-w-sm rounded-3xl border border-slate-200 bg-linear-to-b from-brand-50/60 via-white to-secondary-50/40 shadow-inner">
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-40"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-brand-200/30 blur-3xl" />
              <div className="pointer-events-none absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-secondary-200/30 blur-3xl" />

              {statePresence.map((state, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={state.name}
                    type="button"
                    style={{ left: `${state.x}%`, top: `${state.y}%` }}
                    className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                    onMouseEnter={() => setActiveIndex(i)}
                    onFocus={() => setActiveIndex(i)}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`${state.name}: ${state.startups} startups, ${state.programs} programs, ${state.partners} partners, ${state.events} events`}
                    aria-pressed={isActive}
                  >
                    <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                      {isActive && (
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500/50" />
                      )}
                      <span
                        className={cn(
                          "relative flex h-3.5 w-3.5 rounded-full ring-2 ring-white transition-colors duration-300",
                          isActive ? "bg-accent-500" : "bg-brand-600"
                        )}
                      />
                    </span>
                    <span
                      className={cn(
                        "whitespace-nowrap text-[11px] font-semibold transition-colors duration-300",
                        isActive ? "text-brand-700" : "text-slate-500"
                      )}
                    >
                      {state.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
