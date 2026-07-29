import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: number;
  className?: string;
}

export default function StarRating({ rating, max = 5, size = 16, className }: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-1", className)} role="img" aria-label={`Rated ${rating} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? "fill-accent-400 text-accent-400" : "fill-slate-200 text-slate-200"}
        />
      ))}
    </div>
  );
}
