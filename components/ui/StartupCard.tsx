import { ArrowUpRight, MapPin, User } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import type { Startup } from "@/lib/data";

// All dark enough to keep white monogram text at or above WCAG AA contrast (4.5:1).
const LOGO_TONES = [
  "bg-brand-700",
  "bg-secondary-700",
  "bg-brand-900",
  "bg-secondary-800",
  "bg-brand-800",
];

function toneForName(name: string): string {
  const index = name.charCodeAt(0) % LOGO_TONES.length;
  return LOGO_TONES[index];
}

export default function StartupCard({ startup }: { startup: Startup }) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <span
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-md ${toneForName(startup.name)}`}
        >
          {startup.logoInitial}
        </span>
        <Badge variant="neutral">{startup.stage}</Badge>
      </div>

      <h3 className="mt-5 text-xl font-bold text-ink-900">{startup.name}</h3>
      <span className="mt-1 text-sm font-semibold text-brand-700">{startup.domain}</span>
      <p className="mt-3 flex-1 leading-relaxed text-slate-600">{startup.tagline}</p>

      <div className="mt-5 space-y-1.5 border-t border-slate-100 pt-4 text-sm text-slate-600">
        <p className="flex items-center gap-2">
          <User size={14} className="shrink-0 text-brand-500" /> {startup.founder}
        </p>
        <p className="flex items-center gap-2">
          <MapPin size={14} className="shrink-0 text-brand-500" /> {startup.location}
        </p>
      </div>

      <Button href="/contact" variant="ghost" size="sm" className="-ml-4 mt-5 w-fit">
        Learn More <ArrowUpRight size={16} />
      </Button>
    </Card>
  );
}
