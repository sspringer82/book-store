import { Skeleton } from '@/components/ui/skeleton';

const AuthorDetailsLoading = () => {
  return (
    <div className="w-full mx-auto p-6 border rounded-lg shadow-sm space-y-4">
      <div className="space-y-1">
        <Skeleton className="h-4 w-1/4 bg-gray-300 dark:bg-gray-600" />
        <Skeleton className="h-4 w-1/3 bg-gray-300 dark:bg-gray-600" />
      </div>

      <div className="space-y-1">
        <Skeleton className="h-4 w-1/5 bg-gray-300 dark:bg-gray-600" />
        <Skeleton className="h-4 w-full bg-gray-300 dark:bg-gray-600" />
        <Skeleton className="h-4 w-11/12 bg-gray-300 dark:bg-gray-600" />
        <Skeleton className="h-4 w-4/5 bg-gray-300 dark:bg-gray-600" />
      </div>

      <div className="space-y-1">
        <Skeleton className="h-4 w-1/6 bg-gray-300 dark:bg-gray-600" />
        <Skeleton className="h-4 w-1/4 bg-gray-300 dark:bg-gray-600" />
      </div>

      <div className="space-y-1">
        <Skeleton className="h-4 w-1/6 bg-gray-300 dark:bg-gray-600" />
        <Skeleton className="h-4 w-1/3 bg-gray-300 dark:bg-gray-600" />
      </div>
    </div>
  );
};

export default AuthorDetailsLoading;
