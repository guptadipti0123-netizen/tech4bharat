import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import type { SuccessStory } from "@/lib/data";

export default function SuccessStoryCard({ story }: { story: SuccessStory }) {
  return (
    <Card className="flex flex-col overflow-hidden p-0">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={story.photo}
          alt={`${story.founder}, founder of ${story.startup}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink-900/60 via-transparent to-transparent" />
        <Badge variant="success" className="absolute right-4 top-4">
          {story.domain}
        </Badge>
        <div className="absolute bottom-4 left-5">
          <p className="text-base font-bold text-white">{story.startup}</p>
          <p className="text-sm text-white/80">{story.founder}</p>
        </div>
      </div>
      <div className="flex flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">The Challenge</p>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{story.challenge}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">The Impact</p>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{story.impact}</p>
        <Button href={`/success-stories/${story.slug}`} variant="ghost" size="sm" className="-ml-4 mt-5 w-fit">
          Read Story <ArrowUpRight size={16} />
        </Button>
      </div>
    </Card>
  );
}
