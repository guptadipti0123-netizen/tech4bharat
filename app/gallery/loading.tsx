import Container from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="py-24 pt-40 sm:py-32">
      <Container>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-9 w-24 rounded-full" />
          ))}
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4" role="status" aria-label="Loading gallery">
          {Array.from({ length: 12 }).map((_, i) => (
            <Skeleton key={i} className="aspect-4/3 w-full rounded-2xl" />
          ))}
        </div>
      </Container>
    </div>
  );
}
