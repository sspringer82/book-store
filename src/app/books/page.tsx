import { getAllBooks } from '@/api/book.api';
import { Book } from '@/types/book';
import { NextPage } from 'next';

const BooksPage: NextPage = async () => {
  let books: Book[] = [];
  try {
    books = await getAllBooks();
  } catch (error) {
    console.error('Error fetching books:', error);
    return <div>Error fetching books</div>;
  }

  if (!books) {
    return <div>No books found</div>;
  }

  return (
    <div>
      <h1>Books</h1>

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;
