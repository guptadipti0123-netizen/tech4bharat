import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { LinkedinIcon } from "@/components/ui/SocialIcons";
import { getStartupImage } from "@/lib/images";
import type { StartupProfile } from "@/lib/startups";

export default function StartupCard({ startup }: { startup: StartupProfile }) {
  return (
    <Card className="flex flex-col overflow-hidden p-0">
      <div className="relative h-36 w-full overflow-hidden">
        <Image
          src={getStartupImage(startup.domain)}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
        <div className="absolute bottom-3 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sm font-bold text-brand-900 shadow-lg">
          {startup.logoInitial}
        </div>
        <Badge variant="neutral" className="absolute right-3 top-3 bg-white/90">
          {startup.stage}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-ink-900">{startup.name}</h3>
        <p className="mt-1 text-sm text-slate-500">Founded by {startup.founder}</p>
        <Badge variant="brand" className="mt-3 w-fit">
          {startup.domain}
        </Badge>
        <p className="mt-3 flex-1 text-slate-600">{startup.tagline}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4">
          <Button href={`/startups/${startup.slug}`} variant="outline" size="sm">
            View Details
          </Button>
          <Button
            href={startup.website}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="sm"
          >
            Website <ExternalLink size={14} />
          </Button>
          {startup.linkedin && (
            <a
              href={startup.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${startup.name} on LinkedIn`}
              className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-colors hover:bg-brand-100"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
