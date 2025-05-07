import { getAllBooks } from '@/api/book.api';
import FindBooksForm from './FindBooksForm';
import { Book } from '@/types/book';
import { NextPage } from 'next';

interface Props {
  searchParams: Promise<{ query?: string }>;
}

const FindBooksPage: NextPage<Props> = async ({ searchParams }) => {
  const query = (await searchParams).query || '';
  let books: Book[] = [];
  let filteredBooks: Book[] = [];

  try {
    books = await getAllBooks();

    if (query) {
      filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      filteredBooks = books;
    }
  } catch (error) {
    console.error('Failed to fetch books:', error);
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Books</h1>

      <FindBooksForm />

      <ul className="space-y-6">
        {filteredBooks.map((book) => (
          <li
            key={book.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow flex items-center"
          >
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-700 mb-1">by {book.author}</p>
              <p className="text-gray-600 text-sm mb-1">ISBN: {book.ISBN}</p>
              <p className="text-gray-600 text-sm mb-1">
                Price: ${book.price.toFixed(2)}
              </p>
              <p className="text-gray-600 text-sm mb-1">Pages: {book.pages}</p>
              <p className="text-gray-600 text-sm">
                Rating: {'★'.repeat(Math.round(book.rating))}{' '}
                {'☆'.repeat(5 - Math.round(book.rating))}
              </p>
            </div>
            <div className="ml-4">
              <img
                src={`/covers/${book.id}.jpg`}
                alt={book.title}
                className="w-24 h-32 object-cover rounded-md"
              />
            </div>
          </li>
        ))}
        {filteredBooks.length === 0 && (
          <p className="text-center text-gray-700 text-lg">
            No books found. Try searching with a different query.
          </p>
        )}
      </ul>
    </div>
  );
};

export default FindBooksPage;
