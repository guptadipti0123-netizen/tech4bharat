"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Filter, Search, Sparkles, X } from "lucide-react";
import StartupCard from "@/components/ui/StartupCard";
import { socialImpactDomains, startups } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function StartupPortfolioGrid() {
  const [selectedDomain, setSelectedDomain] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredStartups = useMemo(() => {
    return startups.filter((startup) => {
      const matchesDomain =
        selectedDomain === "All" || startup.domain === selectedDomain;
      const matchesSearch =
        searchQuery.trim() === "" ||
        startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        startup.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
        startup.founder.toLowerCase().includes(searchQuery.toLowerCase()) ||
        startup.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        startup.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDomain && matchesSearch;
    });
  }, [selectedDomain, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Filter and Search Controls */}
      <div className="flex flex-col gap-4">
        {/* Search bar & active count */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50/80 p-2.5 sm:p-3.5 rounded-2xl border border-slate-200/80">
          <div className="relative w-full sm:max-w-md">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by startup, founder, domain or city..."
              className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-9 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-2xs focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center text-xs font-semibold text-slate-600">
            <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
            Showing {filteredStartups.length} of {startups.length} Startups
          </div>
        </div>

        {/* 13 Domains Horizontal Filter Chips */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
            <Filter size={13} className="text-brand-600" />
            <span>Filter by 13 Social Impact Domains:</span>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            <button
              onClick={() => setSelectedDomain("All")}
              className={cn(
                "cursor-pointer rounded-full px-3 py-1.5 text-[11px] sm:text-xs font-semibold transition-all duration-200",
                selectedDomain === "All"
                  ? "bg-brand-700 text-white shadow-md shadow-brand-700/20"
                  : "bg-white border border-slate-200 text-slate-700 hover:border-brand-300 hover:bg-brand-50/50"
              )}
            >
              All Domains ({startups.length})
            </button>

            {socialImpactDomains.map((domain) => {
              const count = startups.filter((s) => s.domain === domain).length;
              const isSelected = selectedDomain === domain;

              return (
                <button
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                  className={cn(
                    "cursor-pointer rounded-full px-3 py-1.5 text-[11px] sm:text-xs font-medium transition-all duration-200 flex items-center gap-1.5",
                    isSelected
                      ? "bg-brand-700 text-white font-semibold shadow-md shadow-brand-700/20"
                      : "bg-white border border-slate-200 text-slate-700 hover:border-brand-300 hover:bg-brand-50/50"
                  )}
                >
                  <span>{domain}</span>
                  {count > 0 && (
                    <span
                      className={cn(
                        "rounded-full px-1.5 py-0.2 text-[9.5px] font-bold",
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-600"
                      )}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid of Cards */}
      {filteredStartups.length === 0 ? (
        <div className="py-16 text-center bg-slate-50/60 rounded-3xl border border-dashed border-slate-200">
          <Sparkles className="mx-auto h-8 w-8 text-brand-400 mb-2" />
          <h3 className="text-base font-bold text-slate-800">
            No startups found
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            Try adjusting your search query or select &quot;All Domains&quot; to
            view all incubated and accelerated ventures.
          </p>
          <button
            onClick={() => {
              setSelectedDomain("All");
              setSearchQuery("");
            }}
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 bg-brand-50 px-3.5 py-1.5 rounded-full hover:bg-brand-100 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-2 gap-2.5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence initial={false} mode="popLayout">
            {filteredStartups.map((startup, i) => (
              <motion.div
                key={startup.name}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: (i % 8) * 0.03 }}
                className="h-full flex flex-col"
              >
                <StartupCard startup={startup} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
