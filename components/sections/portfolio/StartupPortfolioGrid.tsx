"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FilterTabs from "@/components/ui/FilterTabs";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StartupCard from "@/components/ui/StartupCard";
import { startups } from "@/lib/data";

const domains = ["All", ...Array.from(new Set(startups.map((s) => s.domain)))];

export default function StartupPortfolioGrid() {
  const [activeDomain, setActiveDomain] = useState("All");

  const filtered = activeDomain === "All" ? startups : startups.filter((s) => s.domain === activeDomain);

  return (
    <div>
      <AnimatedSection>
        <FilterTabs options={domains} active={activeDomain} onChange={setActiveDomain} className="justify-center" />
      </AnimatedSection>

      <motion.div layout className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false} mode="popLayout">
          {filtered.map((startup, i) => (
            <motion.div
              key={startup.name}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: (i % 6) * 0.05 }}
            >
              <StartupCard startup={startup} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
