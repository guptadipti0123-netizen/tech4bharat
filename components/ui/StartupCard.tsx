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
  const displayDomain = startup.domain === "Women Empowerment" ? "Women Emp." : startup.domain;

  return (
    <div
      style={
        {
          backgroundColor: "#F5FAFE",
          borderColor: accent.border,
          "--hover-border": accent.borderHover,
        } as React.CSSProperties
      }
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border-[1.5px] px-2.5 py-2.5 shadow-[0_2px_14px_rgba(11,42,74,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-(--hover-border) hover:shadow-[0_20px_40px_rgba(11,42,74,0.14)] sm:rounded-3xl sm:px-6 sm:py-5 lg:px-7"
    >
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1" style={{ backgroundColor: accent.border }} />

      <div className="flex flex-1 flex-col">
        {/* Header: Logo + Startup Name */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-md border border-slate-100 shadow-[0_2px_10px_rgba(11,42,74,0.1)] sm:h-12 sm:w-12 sm:rounded-xl">
            <Image
              src={getDomainImage(startup.domain)}
              alt={`${startup.domain} industry`}
              fill
              sizes="48px"
              className="object-cover object-top"
            />
          </div>
          <h3 className="text-[11.5px] font-bold leading-tight text-[#102A43] sm:text-[16px] truncate">
            {startup.name}
          </h3>
        </div>

        {/* Badges: Domain & Stage */}
        <div className="mt-1.5 flex items-center gap-1 sm:mt-2 sm:gap-1.5">
          <Badge className="bg-secondary-50 px-1.5 py-0 text-[7.5px] text-secondary-700 sm:px-2 sm:py-0.5 sm:text-[10.5px] whitespace-nowrap">
            {displayDomain}
          </Badge>
          <Badge className="bg-secondary-50 px-1.5 py-0 text-[7.5px] text-secondary-700 sm:px-2 sm:py-0.5 sm:text-[10.5px] whitespace-nowrap">
            {startup.stage}
          </Badge>
        </div>

        {/* Description: clamped to 2 lines with consistent spacing */}
        <p className="mt-1.5 line-clamp-2 text-[9.5px] font-medium leading-snug text-slate-600 sm:mt-2 sm:text-[13px] sm:leading-[1.4] flex-1">
          {startup.tagline}
        </p>
      </div>

      {/* Footer: Read More + Arrow */}
      <div className="mt-2 flex items-center justify-between border-t border-secondary-100/80 pt-1.5 sm:mt-3 sm:pt-2.5">
        <Link
          href={href}
          className="text-[9px] font-semibold uppercase tracking-wide text-brand-700 transition-colors hover:underline sm:text-xs"
        >
          Read More
        </Link>
        <Link
          href={href}
          aria-label={`Read more about ${startup.name}`}
          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-brand-600 text-brand-600 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white sm:h-7 sm:w-7"
        >
          <ArrowUpRight size={10} className="sm:hidden" />
          <ArrowUpRight size={13} className="hidden sm:block" />
        </Link>
      </div>
    </div>
  );
}
