"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SearchBar from "@/components/ui/SearchBar";
import FilterTabs from "@/components/ui/FilterTabs";
import BlogCard from "@/components/sections/blog/BlogCard";
import type { BlogArticle } from "@/lib/blog";

interface BlogListingClientProps {
  articles: BlogArticle[];
  categories: string[];
}

export default function BlogListingClient({ articles, categories }: BlogListingClientProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory = category === "All" || article.category === category;
      const matchesSearch =
        query.length === 0 ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [articles, search, category]);

  return (
    <div>
      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Search articles..."
        className="sm:max-w-sm"
      />
      <FilterTabs options={categories} active={category} onChange={setCategory} className="mt-6" />

      {filtered.length > 0 ? (
        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <motion.div
              key={article.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <BlogCard article={article} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="mt-16 rounded-2xl border border-dashed border-slate-200 py-16 text-center text-slate-500">
          No articles match your search. Try a different keyword or category.
        </div>
      )}
    </div>
  );
}
