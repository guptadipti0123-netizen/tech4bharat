"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Sparkles, Filter, X } from "lucide-react";
import StartupCard from "@/components/ui/StartupCard";
import { startups, socialImpactDomains } from "@/lib/data";

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
        startup.founder.toLowerCase().includes(searchQuery.toLowerCase()) ||
        startup.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        startup.domain.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDomain && matchesSearch;
    });
  }, [selectedDomain, searchQuery]);

  return (
    <div>
      {/* Search and Domain Filter Bar */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by startup name, founder, domain..."
            className="w-full rounded-full border border-slate-200 bg-[#F8FAFC] py-2.5 pl-10 pr-9 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:outline-none shadow-xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Counter badge */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500">
            Showing <strong className="text-slate-900">{filteredStartups.length}</strong> of {startups.length} Ventures
          </span>
          {(selectedDomain !== "All" || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedDomain("All");
                setSearchQuery("");
              }}
              className="text-xs font-bold text-brand-600 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Domain Filter Pills */}
      <div className="mb-8 flex flex-wrap gap-1.5 sm:gap-2">
        <button
          type="button"
          onClick={() => setSelectedDomain("All")}
          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
            selectedDomain === "All"
              ? "bg-[#0B2A4A] text-white shadow-xs scale-102"
              : "bg-[#F8FAFC] text-slate-700 border border-slate-200 hover:border-slate-300"
          }`}
        >
          All Domains
        </button>
        {socialImpactDomains.map((domain) => {
          const isSelected = selectedDomain === domain;
          return (
            <button
              key={domain}
              type="button"
              onClick={() => setSelectedDomain(domain)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#0B2A4A] text-white shadow-xs scale-102"
                  : "bg-[#F8FAFC] text-slate-700 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {domain}
            </button>
          );
        })}
      </div>

      {/* Startups Grid */}
      {filteredStartups.length > 0 ? (
        <motion.div layout className="grid grid-cols-2 gap-2.5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence initial={false} mode="popLayout">
            {filteredStartups.map((startup, i) => (
              <motion.div
                key={startup.name}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: (i % 6) * 0.04 }}
                className="h-full flex flex-col"
              >
                <StartupCard startup={startup} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-10 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
            <Search size={22} />
          </div>
          <h3 className="mt-3 text-base font-bold text-slate-800">No ventures found</h3>
          <p className="mt-1 text-xs text-slate-500">
            Try adjusting your search query or selecting another domain filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedDomain("All");
              setSearchQuery("");
            }}
            className="mt-4 inline-flex items-center rounded-full bg-[#0B2A4A] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-brand-700"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
