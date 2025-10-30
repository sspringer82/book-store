import { Book } from '@/types/book';
import { NextPage } from 'next';
import Image from 'next/image';
import { promisify } from 'node:util';
import { Database } from 'sqlite3';

const BooksPage: NextPage = async () => {
  return <div>Book Store</div>;

  const db = new Database('./books.sqlite3');
  const promisedAll = promisify(db.all).bind(db);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Books</h1>

      <ul className="space-y-6">
        {((await promisedAll('SELECT * FROM Books')) as Book[]).map((book) => (
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
                Rating: {'★'.repeat(Math.round(book.rating || 0))}{' '}
                {'☆'.repeat(5 - Math.round(book.rating || 0))}
              </p>
            </div>
            <div className="ml-4">
              <Image
                width={96}
                height={128}
                src={`/covers/${book.id}.jpg`}
                alt={book.title}
                className="w-24 h-32 object-cover rounded-md"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;
