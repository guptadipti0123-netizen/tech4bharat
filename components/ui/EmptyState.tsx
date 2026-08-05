import { Inbox, type LucideIcon } from "lucide-react";
import Button from "@/components/ui/Button";

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
}

export default function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-400">
        <Icon size={26} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink-900">{title}</h3>
      {description && <p className="mt-2 max-w-sm text-slate-600">{description}</p>}
      {actionLabel && actionHref && (
        <Button href={actionHref} variant="outline" className="mt-6">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
