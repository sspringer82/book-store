import { getAllBooks, getBookById } from '@/api/book.api';
import Link from 'next/link';
import { NextPage } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const BookDetailPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;
  const book = await getBookById(Number(id));

  if (!book) {
    notFound();
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Description:</strong> {book.description}
      </p>
      <Link href="/books">
        <button>Back to Books</button>
      </Link>
    </div>
  );
};

export default BookDetailPage;

export async function generateStaticParams() {
  const books = await getAllBooks();

  return books.map((book) => ({
    id: book.id.toString(),
  }));
}
