interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-bg-card/70 border border-border/40 ${className}`}
    />
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="bg-bg-card border border-border rounded-xl overflow-hidden p-7 space-y-4">
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-16 w-full" />
      <div className="flex gap-2 pt-4 border-t border-border">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>
    </div>
  );
}

export function SkillCategorySkeleton() {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-7 space-y-4">
      <div className="flex items-center gap-3">
        <Skeleton className="w-9 h-9 rounded-lg" />
        <Skeleton className="h-4 w-28" />
      </div>
      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-7 w-20 rounded-full" />
        <Skeleton className="h-7 w-24 rounded-full" />
        <Skeleton className="h-7 w-16 rounded-full" />
        <Skeleton className="h-7 w-28 rounded-full" />
      </div>
    </div>
  );
}
