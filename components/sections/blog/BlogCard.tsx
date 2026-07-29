import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { getBlogImage } from "@/lib/images";
import type { BlogArticle } from "@/lib/blog";

export default function BlogCard({ article }: { article: BlogArticle }) {
  return (
    <Link href={`/blog/${article.slug}`} className="block h-full">
      <Card className="flex flex-col overflow-hidden p-0">
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={getBlogImage(article.category)}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink-900/70 via-transparent to-transparent" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <Badge variant="brand" className="w-fit">
            {article.category}
          </Badge>
          <h3 className="mt-4 text-xl font-semibold leading-snug text-ink-900">{article.title}</h3>
          <p className="mt-3 flex-1 text-slate-600">{article.excerpt}</p>
          <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {article.readTime}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
