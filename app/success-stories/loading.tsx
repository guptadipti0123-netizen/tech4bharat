import Container from "@/components/ui/Container";
import { SkeletonGrid } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="py-24 pt-40 sm:py-32">
      <Container>
        <SkeletonGrid count={3} columns="sm:grid-cols-2 lg:grid-cols-3" />
      </Container>
    </div>
  );
}
