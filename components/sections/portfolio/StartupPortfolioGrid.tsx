"use client";

import { AnimatePresence, motion } from "framer-motion";
import StartupCard from "@/components/ui/StartupCard";
import { startups } from "@/lib/data";

export default function StartupPortfolioGrid() {
  return (
    <div>
      <motion.div layout className="grid grid-cols-2 gap-2.5 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence initial={false} mode="popLayout">
          {startups.map((startup, i) => (
            <motion.div
              key={startup.name}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: (i % 6) * 0.05 }}
              className="h-full flex flex-col"
            >
              <StartupCard startup={startup} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
