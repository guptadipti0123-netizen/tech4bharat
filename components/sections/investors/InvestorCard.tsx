import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { getInitials } from "@/lib/utils";
import type { InvestorProfile } from "@/lib/investors";

export default function InvestorCard({ investor }: { investor: InvestorProfile }) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-brand-600 to-secondary-500 text-sm font-bold text-white">
          {getInitials(investor.name)}
        </span>
        <h3 className="text-base font-semibold text-ink-900">{investor.name}</h3>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{investor.focus}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {investor.industries.map((industry) => (
          <Badge key={industry} variant="neutral">
            {industry}
          </Badge>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Ticket Size</p>
          <p className="mt-1 text-base font-bold text-brand-700">{investor.ticketSize}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Funding Stage</p>
          <p className="mt-1 text-base font-bold text-secondary-600">{investor.fundingStage}</p>
        </div>
      </div>

      <Button href="/contact" variant="outline" size="sm" className="mt-5 w-full justify-center">
        Learn More
      </Button>
    </Card>
  );
}
