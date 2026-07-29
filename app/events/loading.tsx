import Container from "@/components/ui/Container";
import { Skeleton, SkeletonGrid } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="py-24 pt-40 sm:py-32">
      <Container>
        <Skeleton className="h-72 w-full rounded-3xl" />
        <div className="mt-16">
          <SkeletonGrid count={3} columns="sm:grid-cols-2 lg:grid-cols-3" />
        </div>
      </Container>
    </div>
  );
}
