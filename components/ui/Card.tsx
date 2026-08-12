import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-[0_4px_20px_rgba(22,58,58,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-[0_16px_40px_rgba(22,58,58,0.12)]",
        className
      )}
    >
      {children}
    </div>
  );
}
