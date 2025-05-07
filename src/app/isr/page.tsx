import { getAllBooks } from '@/api/book.api';
import { Book } from '@/types/book';
import { NextPage } from 'next';
import DeleteButton from './DeleteButton';

const BooksPage: NextPage = async () => {
  let books: Book[] = [];
  try {
    books = await getAllBooks();
  } catch (error) {
    console.error('Error fetching books:', error);
    return (
      <div className="p-6 bg-red-100 min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-700">
          Error fetching books. Please try again later.
        </p>
      </div>
    );
  }

  if (!books) {
    return (
      <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-700">No books found</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Books</h1>

      <ul className="space-y-6">
        {books.map((book) => (
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
            <div className="ml-4 flex flex-col items-center">
              <img
                src={`/covers/${book.id}.jpg`}
                alt={book.title}
                className="w-24 h-32 object-cover rounded-md mb-2"
              />
              <DeleteButton id={book.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;
