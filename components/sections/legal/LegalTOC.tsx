import type { LucideIcon } from "lucide-react";

export interface LegalTOCEntry {
  icon: LucideIcon;
  title: string;
  id: string;
}

interface LegalTOCProps {
  sections: LegalTOCEntry[];
}

/** Sticky "on this page" jump-nav for legal pages — turns a long flat list of clauses into
 *  a real two-column split layout instead of one scrolling column. */
export default function LegalTOC({ sections }: LegalTOCProps) {
  return (
    <nav
      aria-label="On this page"
      className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-28"
    >
      <span className="px-2 text-xs font-bold uppercase tracking-wider text-slate-500">
        On This Page
      </span>
      <ul className="mt-3 space-y-1">
        {sections.map(({ icon: Icon, title, id }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="flex items-center gap-2.5 rounded-xl px-2 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700"
            >
              <Icon size={15} className="shrink-0 text-brand-600" />
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
