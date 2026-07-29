"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Search, X } from "lucide-react";
import { globalSearch } from "@/lib/api/search";
import type { SearchResults } from "@/lib/api/types";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TYPE_LABELS: Record<keyof SearchResults, string> = {
  startups: "Startups",
  blogs: "Blog Posts",
  events: "Events",
  mentors: "Mentors",
};

const TYPE_HREF: Record<keyof SearchResults, (slug: string) => string> = {
  startups: (slug) => `/startups/${slug}`,
  blogs: (slug) => `/blog/${slug}`,
  events: (slug) => `/events/${slug}`,
  mentors: (slug) => `/mentors/${slug}`,
};

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResults | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Reset internal state when the modal closes. Adjusted during render
  // (React's documented pattern for "reset state when a prop changes")
  // rather than in an effect, since no async work is involved.
  const [wasOpen, setWasOpen] = useState(isOpen);
  if (isOpen !== wasOpen) {
    setWasOpen(isOpen);
    if (!isOpen) {
      setQuery("");
      setResults(null);
      setError(null);
    }
  }

  // Kick off (or clear) loading state as soon as the query changes. Adjusted
  // during render rather than in an effect, so the actual fetch effect below
  // never needs a synchronous setState of its own.
  const trimmedQuery = query.trim();
  const [lastQuery, setLastQuery] = useState(trimmedQuery);
  if (trimmedQuery !== lastQuery) {
    setLastQuery(trimmedQuery);
    if (trimmedQuery.length < 2) {
      setResults(null);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }

  useEffect(() => {
    if (trimmedQuery.length < 2) return;

    let cancelled = false;
    const timeout = setTimeout(() => {
      (async () => {
        try {
          const data = await globalSearch(trimmedQuery);
          if (cancelled) return;
          setResults(data);
          setError(null);
        } catch {
          if (cancelled) return;
          setError("Search is temporarily unavailable. Please try again.");
        } finally {
          if (!cancelled) setIsLoading(false);
        }
      })();
    }, 350);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [trimmedQuery]);

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  const entries = results
    ? (Object.entries(results) as [keyof SearchResults, SearchResults[keyof SearchResults]][]).filter(
        ([, items]) => items.length > 0
      )
    : [];
  const hasResults = entries.length > 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-start justify-center px-4 pt-24 sm:pt-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink-900/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label="Site search"
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
              <Search size={20} className="shrink-0 text-slate-400" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search startups, mentors, events, blog..."
                aria-label="Search"
                className="w-full text-base text-ink-900 placeholder:text-slate-400 focus:outline-none"
              />
              {isLoading && <Loader2 size={18} className="shrink-0 animate-spin text-slate-400" />}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close search"
                className="shrink-0 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-ink-900"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-2">
              {query.trim().length < 2 ? (
                <p className="px-4 py-8 text-center text-sm text-slate-400">
                  Type at least 2 characters to search.
                </p>
              ) : error ? (
                <p className="px-4 py-8 text-center text-sm text-slate-400">{error}</p>
              ) : !isLoading && !hasResults ? (
                <p className="px-4 py-8 text-center text-sm text-slate-400">
                  No results for &ldquo;{query}&rdquo;.
                </p>
              ) : (
                entries.map(([type, items]) => (
                  <div key={type} className="px-2 py-2">
                    <p className="px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {TYPE_LABELS[type]}
                    </p>
                    <ul className="mt-1">
                      {items.map((item) => (
                        <li key={`${type}-${item.id}`}>
                          <Link
                            href={TYPE_HREF[type](item.slug)}
                            onClick={onClose}
                            className="block rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                          >
                            <span className="font-medium">{item.name}</span>
                            {item.description && (
                              <span className="block truncate text-xs text-slate-500">
                                {item.description}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
