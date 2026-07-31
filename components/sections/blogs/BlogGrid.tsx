"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FilterTabs from "@/components/ui/FilterTabs";
import AnimatedSection from "@/components/ui/AnimatedSection";
import BlogCard from "@/components/ui/BlogCard";
import { blogPosts, type BlogCategory } from "@/lib/data";

const categories: BlogCategory[] = ["Ecosystem", "Fundraising", "Mentorship", "Policy", "Product"];
const filterOptions = ["All", ...categories];

export default function BlogGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? blogPosts : blogPosts.filter((p) => p.category === activeFilter);

  return (
    <div>
      <AnimatedSection>
        <FilterTabs options={filterOptions} active={activeFilter} onChange={setActiveFilter} className="justify-center" />
      </AnimatedSection>

      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false} mode="popLayout">
          {filtered.map((post, i) => (
            <motion.div
              key={post.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: (i % 6) * 0.05 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
