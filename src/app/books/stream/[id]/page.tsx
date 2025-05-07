import { NextPage } from 'next';
import { Suspense } from 'react';
import BookDetails from './BookDetails';
import AuthorDetails from './AuthorDetails';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const BookDetailStreamPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <h1>Book Details</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <BookDetails id={Number(id)} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthorDetails id={Number(id)} />
      </Suspense>
    </>
  );
};

export default BookDetailStreamPage;
