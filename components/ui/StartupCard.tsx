import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { getDomainImage } from "@/lib/images";
import type { Startup } from "@/lib/data";

interface DomainAccent {
  border: string;
  borderHover: string;
}

const domainAccents: Record<string, DomainAccent> = {
  AgriTech: { border: "#2E8B57", borderHover: "#256E46" },
  HealthTech: { border: "#2563EB", borderHover: "#1E4FC2" },
  EdTech: { border: "#7C3AED", borderHover: "#6428C7" },
  FinTech: { border: "#F59E0B", borderHover: "#C17F09" },
  ClimateTech: { border: "#0F766E", borderHover: "#0C5F59" },
  DeepTech: { border: "#4338CA", borderHover: "#362DA3" },
  "Women Empowerment": { border: "#DB2777", borderHover: "#B31F63" },
};

const defaultAccent: DomainAccent = { border: "#2E8B57", borderHover: "#256E46" };

/** Directory-style portfolio card — same photo + Badge-pill + dual Read More footer
 *  structure as the original design. Only the spacing was tightened, and a subtle
 *  off-white background plus a domain-colored border/left accent strip were layered on
 *  top; nothing was repositioned or redesigned. Height follows content — cards with a
 *  shorter tagline are shorter, not stretched to match their row's tallest sibling. */
export default function StartupCard({ startup }: { startup: Startup }) {
  const href = startup.website ?? "/contact";
  const accent = domainAccents[startup.domain] ?? defaultAccent;

  return (
    <div
      style={
        {
          backgroundColor: "#F5FAFE",
          borderColor: accent.border,
          "--hover-border": accent.borderHover,
        } as React.CSSProperties
      }
      className="group relative flex flex-col overflow-hidden rounded-lg border-[1.5px] px-2.5 py-2.5 shadow-[0_2px_14px_rgba(11,42,74,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-(--hover-border) hover:shadow-[0_20px_40px_rgba(11,42,74,0.14)] sm:rounded-3xl sm:px-9 sm:py-4.75"
    >
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1" style={{ backgroundColor: accent.border }} />

      <div className="flex items-start gap-1.5 sm:gap-3">
        <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-md border border-slate-100 shadow-[0_2px_10px_rgba(11,42,74,0.1)] sm:h-18 sm:w-18 sm:rounded-xl">
          <Image
            src={getDomainImage(startup.domain)}
            alt={`${startup.domain} industry`}
            fill
            sizes="72px"
            className="object-cover object-top"
          />
        </div>
        <h3 className="mt-0.5 text-[11px] font-bold leading-tight text-[#102A43] sm:mt-1 sm:text-[18px]">{startup.name}</h3>
      </div>

      <div className="mt-1.5 flex flex-wrap gap-1 sm:mt-2 sm:gap-2">
        <Badge className="bg-secondary-50 px-1.5 py-0 text-[8px] text-secondary-700 sm:px-2.5 sm:py-0.5 sm:text-[11px]">{startup.domain}</Badge>
        <Badge className="bg-secondary-50 px-1.5 py-0 text-[8px] text-secondary-700 sm:px-2.5 sm:py-0.5 sm:text-[11px]">{startup.stage}</Badge>
      </div>

      <p className="mt-1.5 line-clamp-2 text-[9.5px] font-medium leading-snug text-slate-600 sm:mt-2 sm:text-[14px] sm:leading-[1.4]">
        {startup.tagline}
      </p>

      <div className="mt-2 flex items-center justify-between border-t border-secondary-100 pt-1.5 sm:mt-3 sm:pt-2.5">
        <Link
          href={href}
          className="text-[9px] font-semibold uppercase tracking-wide text-brand-700 transition-colors hover:underline sm:text-base"
        >
          Read More
        </Link>
        <Link
          href={href}
          aria-label={`Read more about ${startup.name}`}
          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-brand-600 text-brand-600 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white sm:h-8.5 sm:w-8.5"
        >
          <ArrowUpRight size={10} className="sm:hidden" />
          <ArrowUpRight size={15} className="hidden sm:block" />
        </Link>
      </div>
    </div>
  );
}
