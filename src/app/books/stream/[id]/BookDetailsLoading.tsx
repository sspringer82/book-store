import { Skeleton } from '@/components/ui/skeleton';

const BookDetailsSkeleton = () => {
  return (
    <div className="w-full mx-auto p-6 border rounded-lg shadow-sm flex flex-col md:flex-row gap-6">
      <Skeleton className="w-64 h-96 rounded-lg bg-gray-300 dark:bg-gray-600" />

      <div className="flex flex-col gap-4 flex-1">
        <Skeleton className="h-8 w-2/3 bg-gray-300 dark:bg-gray-600" />

        <div className="space-y-2">
          <Skeleton className="h-4 w-1/2 bg-gray-300 dark:bg-gray-600" />
          <Skeleton className="h-4 w-1/3 bg-gray-300 dark:bg-gray-600" />
          <Skeleton className="h-4 w-1/4 bg-gray-300 dark:bg-gray-600" />
          <Skeleton className="h-4 w-1/6 bg-gray-300 dark:bg-gray-600" />
          <Skeleton className="h-4 w-1/5 bg-gray-300 dark:bg-gray-600" />
        </div>

        <div className="space-y-2 pt-4">
          <Skeleton className="h-4 w-full bg-gray-300 dark:bg-gray-600" />
          <Skeleton className="h-4 w-11/12 bg-gray-300 dark:bg-gray-600" />
          <Skeleton className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default BookDetailsSkeleton;
