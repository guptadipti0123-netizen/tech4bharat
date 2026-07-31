import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpinnerProps {
  size?: number;
  className?: string;
  label?: string;
}

export default function Spinner({ size = 24, className, label = "Loading" }: SpinnerProps) {
  return (
    <span role="status" className={cn("inline-flex items-center gap-2 text-brand-500", className)}>
      <Loader2 size={size} className="animate-spin" />
      <span className="sr-only">{label}</span>
    </span>
  );
}
