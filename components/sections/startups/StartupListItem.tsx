import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { LinkedinIcon } from "@/components/ui/SocialIcons";
import { getStartupImage } from "@/lib/images";
import type { StartupProfile } from "@/lib/startups";

export default function StartupListItem({ startup }: { startup: StartupProfile }) {
  return (
    <Card className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
      <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl">
        <Image
          src={getStartupImage(startup.domain)}
          alt=""
          fill
          sizes="112px"
          className="object-cover"
        />
        <div className="absolute bottom-1.5 left-1.5 flex h-8 w-8 items-center justify-center rounded-lg bg-white text-xs font-bold text-brand-900 shadow-md">
          {startup.logoInitial}
        </div>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-base font-semibold text-ink-900">{startup.name}</h3>
          <Badge variant="brand">{startup.domain}</Badge>
          <Badge variant="neutral">{startup.stage}</Badge>
        </div>
        <p className="mt-1 text-sm text-slate-500">
          Founded by {startup.founder} · {startup.location}
        </p>
        <p className="mt-1.5 truncate text-sm text-slate-600">{startup.tagline}</p>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        {startup.linkedin && (
          <a
            href={startup.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${startup.name} on LinkedIn`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-colors hover:bg-brand-100"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
        )}
        <Button href={startup.website} target="_blank" rel="noopener noreferrer" variant="ghost" size="sm">
          <ExternalLink size={14} />
        </Button>
        <Button href={`/startups/${startup.slug}`} variant="outline" size="sm">
          View Details
        </Button>
      </div>
    </Card>
  );
}
