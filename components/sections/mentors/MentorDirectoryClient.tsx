"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SearchBar from "@/components/ui/SearchBar";
import FilterTabs from "@/components/ui/FilterTabs";
import MentorCard from "@/components/sections/mentors/MentorCard";
import { mentorCategories, type MentorProfile } from "@/lib/mentors";

const EXPERIENCE_BUCKETS = ["0–5 yrs", "6–10 yrs", "11–15 yrs", "16+ yrs"];

function experienceBucket(years: number): string {
  if (years <= 5) return EXPERIENCE_BUCKETS[0];
  if (years <= 10) return EXPERIENCE_BUCKETS[1];
  if (years <= 15) return EXPERIENCE_BUCKETS[2];
  return EXPERIENCE_BUCKETS[3];
}

export default function MentorDirectoryClient({ mentors }: { mentors: MentorProfile[] }) {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("All");
  const [expertise, setExpertise] = useState("All");
  const [experience, setExperience] = useState("All");
  const [location, setLocation] = useState("All");

  const expertiseOptions = useMemo(
    () => ["All", ...Array.from(new Set(mentors.flatMap((m) => m.expertise))).sort()],
    [mentors]
  );
  const locationOptions = useMemo(
    () => ["All", ...Array.from(new Set(mentors.map((m) => m.location))).sort()],
    [mentors]
  );

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return mentors.filter((m) => {
      const matchesIndustry = industry === "All" || m.category === industry;
      const matchesExpertise = expertise === "All" || m.expertise.includes(expertise);
      const matchesExperience = experience === "All" || experienceBucket(m.experienceYears) === experience;
      const matchesLocation = location === "All" || m.location === location;
      const matchesSearch =
        query.length === 0 ||
        m.name.toLowerCase().includes(query) ||
        m.organization.toLowerCase().includes(query) ||
        m.expertise.some((e) => e.toLowerCase().includes(query));
      return matchesIndustry && matchesExpertise && matchesExperience && matchesLocation && matchesSearch;
    });
  }, [mentors, search, industry, expertise, experience, location]);

  return (
    <div>
      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Search mentors, organizations, expertise..."
        className="sm:max-w-sm"
      />

      <div className="mt-6 space-y-3">
        <FilterTabs options={["All", ...mentorCategories]} active={industry} onChange={setIndustry} />
        <FilterTabs options={expertiseOptions} active={expertise} onChange={setExpertise} />
        <FilterTabs options={["All", ...EXPERIENCE_BUCKETS]} active={experience} onChange={setExperience} />
        <FilterTabs options={locationOptions} active={location} onChange={setLocation} />
      </div>

      {filtered.length > 0 ? (
        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((mentor) => (
            <motion.div
              key={mentor.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <MentorCard mentor={mentor} index={Number(mentor.id)} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="mt-16 rounded-2xl border border-dashed border-slate-200 py-16 text-center text-slate-500">
          No mentors match your search. Try a different keyword or filter.
        </div>
      )}
    </div>
  );
}
