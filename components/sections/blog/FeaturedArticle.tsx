import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { getBlogImage } from "@/lib/images";
import type { BlogArticle } from "@/lib/blog";

export default function FeaturedArticle({ article }: { article: BlogArticle }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative h-56 overflow-hidden lg:h-full">
          <Image
            src={getBlogImage(article.category)}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink-900/60 via-transparent to-transparent lg:bg-linear-to-r" />
          <span className="absolute bottom-4 left-4 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-md">
            Featured Article
          </span>
        </div>
        <div className="flex flex-col justify-center p-8 sm:p-10">
          <Badge variant="accent" className="w-fit">
            {article.category}
          </Badge>
          <h2 className="mt-4 text-2xl font-bold leading-snug text-ink-900 sm:text-3xl">
            {article.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{article.excerpt}</p>
          <div className="mt-6 flex items-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {article.readTime}
            </span>
          </div>
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-all group-hover:gap-2.5">
            Read Article <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}
