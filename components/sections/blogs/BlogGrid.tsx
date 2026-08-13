"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import FilterTabs from "@/components/ui/FilterTabs";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import { blogPosts, type BlogCategory, type BlogPost } from "@/lib/data";

const categories: BlogCategory[] = ["Ecosystem", "Fundraising", "Mentorship", "Policy", "Product"];
const filterOptions = ["All", ...categories];

/** Large lead story — full-width horizontal split, the magazine cover treatment. */
function FeaturedBlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="group grid overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_4px_20px_rgba(6,26,44,0.06)] transition-all duration-300 hover:shadow-[0_20px_48px_rgba(6,26,44,0.14)] sm:grid-cols-5">
      <div className="relative h-64 overflow-hidden sm:col-span-3 sm:h-full sm:min-h-90">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="(max-width: 640px) 100vw, 60vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink-900/40 via-transparent to-transparent" />
        <Badge variant="brand" className="absolute left-5 top-5 bg-white/90">
          {post.category}
        </Badge>
      </div>
      <div className="flex flex-col justify-center p-8 sm:col-span-2 sm:p-10">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Featured</span>
        <h3 className="mt-3 text-[18px] font-extrabold leading-tight text-ink-900 sm:text-[21px]">{post.title}</h3>
        <p className="mt-4 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">{post.excerpt}</p>
        <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-5 text-xs font-medium text-slate-600">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} /> {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} /> {post.readTime}
          </span>
        </div>
        <span className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-700 transition-transform duration-300 group-hover:translate-x-1">
          Read Article <ArrowUpRight size={15} />
        </span>
      </div>
    </div>
  );
}

/** Mid-weight card — standard image-top magazine tile, two per row. */
function MediumBlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_4px_20px_rgba(6,26,44,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(6,26,44,0.12)]">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <Badge variant="secondary" className="absolute left-4 top-4 bg-white/90">
          {post.category}
        </Badge>
      </div>
      <div className="flex flex-col p-6">
        <h3 className="text-lg font-bold leading-snug text-ink-900">{post.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
        <div className="mt-5 flex items-center gap-4 border-t border-slate-100 pt-4 text-xs font-medium text-slate-600">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} /> {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} /> {post.readTime}
          </span>
        </div>
      </div>
    </div>
  );
}

/** Compact stacked row — small thumbnail + text, for the long tail of the list. */
function SmallStackedBlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_2px_12px_rgba(6,26,44,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(6,26,44,0.1)] sm:gap-5 sm:p-4">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-20">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="80px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="min-w-0 flex-1">
        <Badge variant="accent" className="px-2 py-0.5 text-[10px]">
          {post.category}
        </Badge>
        <h3 className="mt-1 truncate text-base font-bold text-ink-900 sm:text-lg">{post.title}</h3>
        <div className="mt-1 flex items-center gap-3 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <Calendar size={12} /> {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} /> {post.readTime}
          </span>
        </div>
      </div>
      <ArrowUpRight
        size={18}
        className="shrink-0 text-slate-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand-600"
      />
    </div>
  );
}

export default function BlogGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? blogPosts : blogPosts.filter((p) => p.category === activeFilter);
  const [featured, ...rest] = filtered;
  const medium = rest.slice(0, 2);
  const small = rest.slice(2);

  return (
    <div>
      <AnimatedSection>
        <FilterTabs options={filterOptions} active={activeFilter} onChange={setActiveFilter} className="justify-center" />
      </AnimatedSection>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-10 space-y-6"
        >
          {featured && <FeaturedBlogCard post={featured} />}

          {medium.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2">
              {medium.map((post) => (
                <MediumBlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          {small.length > 0 && (
            <div className="grid gap-4 lg:grid-cols-2">
              {small.map((post) => (
                <SmallStackedBlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
