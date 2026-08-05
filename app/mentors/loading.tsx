import Container from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="pb-16 pt-20 sm:pb-20 sm:pt-24">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" role="status" aria-label="Loading mentors">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-8">
              <Skeleton className="h-24 w-24 rounded-full" />
              <Skeleton className="mt-5 h-4 w-2/3" />
              <Skeleton className="mt-2 h-3 w-1/2" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
