import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { getDomainImage, getHeadshot } from "@/lib/images";
import { getInitials } from "@/lib/utils";
import type { SuccessStory } from "@/lib/stories";

export default function StoryCard({ story }: { story: SuccessStory }) {
  const founderPhotoIndex = parseInt(story.id, 10) || 0;

  return (
    <Card className="flex flex-col overflow-hidden p-0">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={getDomainImage(story.domain)}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink-900/85 via-ink-900/25 to-transparent" />
        <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-sm font-bold text-brand-700 shadow-md backdrop-blur-sm">
          {getInitials(story.startupName)}
        </span>
        <div className="absolute bottom-4 left-5 right-5 flex items-center gap-3">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white/80">
            <Image src={getHeadshot(founderPhotoIndex)} alt={story.founderName} fill sizes="44px" className="object-cover" />
          </div>
          <div>
            <span className="block text-xl font-bold text-white">{story.startupName}</span>
            <p className="text-sm text-white/70">Founded by {story.founderName}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <Badge variant="brand" className="w-fit">
          {story.domain}
        </Badge>
        <h3 className="mt-4 text-xl font-semibold leading-snug text-ink-900">{story.headline}</h3>
        <p className="mt-2 flex-1 text-slate-600">{story.excerpt}</p>

        <div className="mt-6 grid grid-cols-3 gap-2 border-t border-slate-100 pt-6">
          {story.impactMetrics.slice(0, 3).map((metric) => (
            <div key={metric.label}>
              <p className="text-xl font-bold text-brand-700">{metric.value}</p>
              <p className="text-xs text-slate-500">{metric.label}</p>
            </div>
          ))}
        </div>

        <Link
          href={`/success-stories/${story.slug}`}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          Read Full Story <ArrowRight size={16} />
        </Link>
      </div>
    </Card>
  );
}
