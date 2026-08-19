import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import StartupLogo from "@/components/ui/StartupLogo";
import type { Startup } from "@/lib/data";

interface DomainAccent {
  border: string;
  borderHover: string;
}

const domainAccents: Record<string, DomainAccent> = {
  AgriTech: { border: "#2E8B57", borderHover: "#256E46" },
  "Water & Sanitation": { border: "#0284C7", borderHover: "#0369A1" },
  MedTech: { border: "#4F46E5", borderHover: "#4338CA" },
  HealthTech: { border: "#2563EB", borderHover: "#1E4FC2" },
  "AI/ML": { border: "#6366F1", borderHover: "#4F46E5" },
  ClimateTech: { border: "#0F766E", borderHover: "#0C5F59" },
  "Clean Energy": { border: "#D97706", borderHover: "#B45309" },
  "Waste Management": { border: "#65A30D", borderHover: "#4D7C0F" },
  "Education Technology": { border: "#7C3AED", borderHover: "#6428C7" },
  "Rural Development": { border: "#0284C7", borderHover: "#075985" },
  "Women Empowerment": { border: "#DB2777", borderHover: "#BE185D" },
  "Livelihood Generation": { border: "#E11D48", borderHover: "#BE123C" },
  "Other Social Impact Innovations": { border: "#0F766E", borderHover: "#115E59" },
  // Backward compatibility aliases
  EdTech: { border: "#7C3AED", borderHover: "#6428C7" },
  FinTech: { border: "#F59E0B", borderHover: "#C17F09" },
  DeepTech: { border: "#4338CA", borderHover: "#362DA3" },
};

const defaultAccent: DomainAccent = { border: "#2E8B57", borderHover: "#256E46" };

/** Directory-style portfolio card with dedicated domain accents and badges */
export default function StartupCard({ startup }: { startup: Startup }) {
  const href = startup.website ?? "/contact";
  const accent = domainAccents[startup.domain] ?? defaultAccent;
  const displayDomain =
    startup.domain === "Women Empowerment"
      ? "Women Emp."
      : startup.domain === "Education Technology"
      ? "EdTech"
      : startup.domain === "Other Social Impact Innovations"
      ? "Social Impact"
      : startup.domain;

  return (
    <div
      style={
        {
          backgroundColor: "#F5FAFE",
          borderColor: accent.border,
          "--hover-border": accent.borderHover,
        } as React.CSSProperties
      }
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border-[1.5px] p-3 shadow-[0_2px_14px_rgba(11,42,74,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-(--hover-border) hover:shadow-[0_20px_40px_rgba(11,42,74,0.14)] sm:rounded-3xl sm:px-6 sm:py-5 lg:px-7"
    >
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1" style={{ backgroundColor: accent.border }} />

      <div className="flex flex-1 flex-col">
        {/* Header: Logo + Startup Name */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="shrink-0">
            <StartupLogo
              name={startup.name}
              domain={startup.domain}
              size={44}
              className="h-8 w-8 rounded-lg shadow-xs sm:h-11 sm:w-11 sm:rounded-xl"
            />
          </div>
          <h3 className="text-[13.5px] sm:text-[17px] font-bold leading-tight text-[#0B2A4A] truncate">
            {startup.name}
          </h3>
        </div>

        {/* Badges: Domain & Stage */}
        <div className="mt-2 flex flex-wrap items-center gap-1 sm:gap-1.5">
          <Badge className="bg-secondary-50 px-1.5 py-0.5 text-[9.5px] sm:text-[12px] font-medium text-secondary-700 whitespace-nowrap">
            {displayDomain}
          </Badge>
          <Badge className="bg-secondary-50 px-1.5 py-0.5 text-[9.5px] sm:text-[12px] font-medium text-secondary-700 whitespace-nowrap">
            {startup.stage}
          </Badge>
        </div>

        {/* Description: clamped to 3 lines on mobile / 2 lines on desktop */}
        <p className="mt-2 line-clamp-3 text-[11.5px] sm:text-[14px] leading-snug sm:leading-relaxed text-slate-600 flex-1">
          {startup.tagline}
        </p>
      </div>

      {/* Footer: Read More + Arrow */}
      <div className="mt-2.5 flex items-center justify-between border-t border-secondary-100/80 pt-2 sm:mt-3 sm:pt-3">
        <Link
          href={href}
          className="text-[11px] sm:text-[13px] font-bold text-brand-700 transition-colors hover:underline"
        >
          Read More
        </Link>
        <Link
          href={href}
          aria-label={`Read more about ${startup.name}`}
          className="flex h-5.5 w-5.5 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full border-2 border-brand-600 text-brand-600 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white"
        >
          <ArrowUpRight size={11} className="sm:hidden" />
          <ArrowUpRight size={13} className="hidden sm:block" />
        </Link>
      </div>
    </div>
  );
}
