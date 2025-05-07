import { getAllBooks, getBookById } from '@/api/book.api';
import Link from 'next/link';
import { NextPage } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';

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
    <div className="flex gap-5 p-5 border border-gray-300 rounded-lg max-w-4xl mx-auto mt-5">
      <div>
        <Image
          src={`/covers/${book.id}.jpg`}
          alt={`${book.title} cover`}
          className="w-52 h-80 object-cover rounded-lg"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
        <p className="mb-2">
          <strong>Author:</strong> {book.author}
        </p>
        <p className="mb-2">
          <strong>Genre:</strong> {book.genre}
        </p>
        <p className="mb-2">
          <strong>Price:</strong> ${book.price.toFixed(2)}
        </p>
        <p className="mb-2">
          <strong>Pages:</strong> {book.pages}
        </p>
        <p className="mb-2">
          <strong>Rating:</strong> {book.rating} / 5
        </p>
        <p className="mb-5">
          <strong>Description:</strong> {book.description}
        </p>
        <Link href="/books">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Back to Books
          </button>
        </Link>
      </div>
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
