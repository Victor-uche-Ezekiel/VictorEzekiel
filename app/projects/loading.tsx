import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectsLoading() {
  return (
    <div className="container py-16">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <Skeleton className="h-12 w-[300px] mx-auto mb-4" />
        <Skeleton className="h-20 w-full" />
      </div>

      {/* Search and Filter Skeleton */}
      <div className="mb-12 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Skeleton className="h-10 flex-1" />
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-10 w-24" />
            ))}
          </div>
        </div>
      </div>

      {/* Project Cards Skeleton */}
      <div className="grid gap-8 md:grid-cols-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-xl border bg-card/95 backdrop-blur-sm p-4"
          >
            <Skeleton className="aspect-video w-full rounded-lg" />
            <div className="mt-4 space-y-3">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-20 w-full" />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3].map((j) => (
                  <Skeleton key={j} className="h-6 w-20" />
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <Skeleton className="h-10 w-28" />
                <Skeleton className="h-10 w-28" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
