"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SearchBar from "@/components/ui/SearchBar";
import FilterTabs from "@/components/ui/FilterTabs";
import ViewToggle, { type ViewMode } from "@/components/ui/ViewToggle";
import StartupCard from "@/components/sections/startups/StartupCard";
import StartupListItem from "@/components/sections/startups/StartupListItem";
import { getStartupState, type StartupProfile } from "@/lib/startups";

export default function StartupPortfolioClient({ startups }: { startups: StartupProfile[] }) {
  const [search, setSearch] = useState("");
  const [domain, setDomain] = useState("All");
  const [stage, setStage] = useState("All");
  const [state, setState] = useState("All");
  const [view, setView] = useState<ViewMode>("grid");

  const domains = useMemo(
    () => ["All", ...Array.from(new Set(startups.map((s) => s.domain)))],
    [startups]
  );
  const stages = useMemo(
    () => ["All", ...Array.from(new Set(startups.map((s) => s.stage)))],
    [startups]
  );
  const states = useMemo(
    () => ["All", ...Array.from(new Set(startups.map((s) => getStartupState(s.location))))].sort(),
    [startups]
  );

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return startups.filter((s) => {
      const matchesDomain = domain === "All" || s.domain === domain;
      const matchesStage = stage === "All" || s.stage === stage;
      const matchesState = state === "All" || getStartupState(s.location) === state;
      const matchesSearch =
        query.length === 0 ||
        s.name.toLowerCase().includes(query) ||
        s.founder.toLowerCase().includes(query) ||
        s.tagline.toLowerCase().includes(query);
      return matchesDomain && matchesStage && matchesState && matchesSearch;
    });
  }, [startups, search, domain, stage, state]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search startups, founders..."
          className="sm:max-w-sm"
        />
        <ViewToggle value={view} onChange={setView} />
      </div>

      <div className="mt-6 space-y-3">
        <FilterTabs options={domains} active={domain} onChange={setDomain} />
        <FilterTabs options={stages} active={stage} onChange={setStage} />
        <FilterTabs options={states} active={state} onChange={setState} />
      </div>

      {filtered.length > 0 ? (
        view === "grid" ? (
          <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((startup) => (
              <motion.div
                key={startup.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <StartupCard startup={startup} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div layout className="mt-10 space-y-4">
            {filtered.map((startup) => (
              <motion.div
                key={startup.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <StartupListItem startup={startup} />
              </motion.div>
            ))}
          </motion.div>
        )
      ) : (
        <div className="mt-16 rounded-2xl border border-dashed border-slate-200 py-16 text-center text-slate-500">
          No startups match your search. Try a different keyword or filter.
        </div>
      )}
    </div>
  );
}
