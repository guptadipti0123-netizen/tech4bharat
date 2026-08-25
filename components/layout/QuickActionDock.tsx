"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronUp,
  Compass,
  Flame,
  Mail,
  MessageSquare,
  Rocket,
  Sparkles,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function QuickActionDock() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Show dock after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isDismissed || !showButton) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-72 sm:w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur-md"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B2A4A]">
                <Sparkles size={14} className="text-brand-600" />
                <span>Founder Quick-Actions</span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1"
                aria-label="Close dock"
              >
                <X size={15} />
              </button>
            </div>

            {/* Quick action links */}
            <div className="mt-3 space-y-2">
              <Link
                href="/incubation-acceleration"
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-[#F5FAFE] p-2.5 transition-all hover:bg-brand-50 hover:border-brand-200"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white shadow-xs">
                  <Rocket size={15} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-[#0B2A4A] group-hover:text-brand-700">
                    Apply for Incubation
                  </div>
                  <div className="text-[10.5px] text-slate-500 truncate">
                    Idea to Early Stage Support
                  </div>
                </div>
                <ArrowRight size={13} className="text-slate-400 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/startup-bootcamp"
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-[#F5FAFE] p-2.5 transition-all hover:bg-brand-50 hover:border-brand-200"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 text-white shadow-xs">
                  <Flame size={15} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-[#0B2A4A] group-hover:text-brand-700">
                    Startup Bootcamp 2026
                  </div>
                  <div className="text-[10.5px] text-slate-500 truncate">
                    October 2026 Cohort • Mumbai
                  </div>
                </div>
                <ArrowRight size={13} className="text-slate-400 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-2.5 transition-all hover:bg-slate-50 hover:border-slate-200"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-white shadow-xs">
                  <Mail size={15} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-[#0B2A4A]">
                    Partner / Inquire
                  </div>
                  <div className="text-[10.5px] text-slate-500 truncate">
                    Connect with Tech4Bharat Team
                  </div>
                </div>
                <ArrowRight size={13} className="text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Founder Quick Actions"
        className="group relative flex items-center gap-2 rounded-full border border-brand-500/30 bg-[#0B2A4A] px-4 py-2.5 text-white shadow-xl backdrop-blur-md transition-all hover:bg-[#155E9A] hover:scale-105 active:scale-95"
      >
        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-bold tracking-tight">Ecosystem Actions</span>
        <ChevronUp
          size={14}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
    </div>
  );
}
