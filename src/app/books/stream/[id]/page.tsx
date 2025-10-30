import { NextPage } from 'next';
import { Suspense } from 'react';
import BookDetails from './BookDetails';
import AuthorDetails from './AuthorDetails';
import BookDetailsSkeleton from './BookDetailsLoading';
import AuthorDetailsLoading from './AuthorDetailsLoading';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const BookDetailStreamPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;
  return (
    <div className="flex flex-col gap-6 p-5 border border-gray-300 rounded-lg max-w-4xl mx-auto mt-5">
      <h1 className="text-2xl font-bold">Book Details</h1>
      <Suspense fallback={<BookDetailsSkeleton />}>
        <BookDetails id={Number(id)} />
      </Suspense>
      <Suspense fallback={<AuthorDetailsLoading />}>
        <AuthorDetails id={Number(id)} />
      </Suspense>
    </div>
  );
};

export default BookDetailStreamPage;
