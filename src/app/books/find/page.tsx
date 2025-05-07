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
    <div>
      <FindBooksForm />
      <h2>Book Results</h2>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
      {filteredBooks.length === 0 && <p>No books found.</p>}
    </div>
  );
};

export default FindBooksPage;
