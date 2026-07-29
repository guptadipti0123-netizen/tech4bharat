import Container from "@/components/ui/Container";
import { Skeleton, SkeletonGrid } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="py-24 pt-40 sm:py-32">
      <Container>
        <Skeleton className="mx-auto h-10 w-64" />
        <div className="mt-6 flex justify-center gap-3">
          <Skeleton className="h-10 w-64 rounded-full" />
        </div>
        <div className="mt-10">
          <SkeletonGrid count={6} columns="sm:grid-cols-2 lg:grid-cols-3" />
        </div>
      </Container>
    </div>
  );
}
