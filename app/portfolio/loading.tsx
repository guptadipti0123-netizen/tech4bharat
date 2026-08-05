import Container from "@/components/ui/Container";
import { Skeleton, SkeletonGrid } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="pb-16 pt-20 sm:pb-20 sm:pt-24">
      <Container>
        <div className="flex flex-wrap justify-center gap-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <Skeleton key={i} className="h-9 w-24 rounded-full" />
          ))}
        </div>
        <div className="mt-10">
          <SkeletonGrid count={6} columns="sm:grid-cols-2 lg:grid-cols-3" />
        </div>
      </Container>
    </div>
  );
}
