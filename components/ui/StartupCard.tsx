import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { getDomainImage } from "@/lib/images";
import type { Startup } from "@/lib/data";

/** Directory-style portfolio card — a real industry photo tile + wrapping name up top,
 *  sector/stage pills, a truncated description, and a Read More / outline-arrow-button row
 *  pinned to the bottom. Equal height across the grid via `h-full flex flex-col`. */
export default function StartupCard({ startup }: { startup: Startup }) {
  const href = startup.website ?? "/contact";

  return (
    <div className="group flex h-full flex-col rounded-3xl border border-secondary-100 bg-white p-9 shadow-[0_2px_14px_rgba(18,60,51,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(18,60,51,0.14)]">
      <div className="flex items-start gap-4">
        <div className="relative h-25 w-25 shrink-0 overflow-hidden rounded-xl border border-slate-100 shadow-[0_2px_10px_rgba(18,60,51,0.1)]">
          <Image
            src={getDomainImage(startup.domain)}
            alt={`${startup.domain} industry`}
            fill
            sizes="100px"
            className="object-cover object-top"
          />
        </div>
        <h3 className="mt-1 text-[30px] font-bold leading-tight text-[#123C33]">{startup.name}</h3>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Badge className="bg-secondary-50 text-sm text-secondary-700">{startup.domain}</Badge>
        <Badge className="bg-secondary-50 text-sm text-secondary-700">{startup.stage}</Badge>
      </div>

      <p className="mt-4 line-clamp-3 flex-1 text-[17px] font-medium leading-relaxed text-slate-600">
        {startup.tagline}
      </p>

      <div className="mt-7 flex items-center justify-between border-t border-secondary-100 pt-5">
        <Link
          href={href}
          className="text-base font-semibold uppercase tracking-wide text-brand-700 transition-colors hover:underline"
        >
          Read More
        </Link>
        <Link
          href={href}
          aria-label={`Read more about ${startup.name}`}
          className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border-2 border-brand-600 text-brand-600 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white"
        >
          <ArrowUpRight size={20} />
        </Link>
      </div>
    </div>
  );
}
