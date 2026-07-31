import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { BlogPost } from "@/lib/data";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden p-0">
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <Badge variant="brand" className="absolute left-4 top-4 bg-white/90">
          {post.category}
        </Badge>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-snug text-ink-900">{post.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
        <div className="mt-5 flex items-center gap-4 border-t border-slate-100 pt-4 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} /> {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} /> {post.readTime}
          </span>
        </div>
      </div>
    </Card>
  );
}
