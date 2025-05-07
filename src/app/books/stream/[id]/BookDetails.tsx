import { getBookById } from '@/api/book.api';

type Props = { id: number };

const BookDetails: React.FC<Props> = async ({ id }) => {
  const book = await getBookById(id);

  if (!book) {
    return <p>Book details not found.</p>;
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
      <p>
        <strong>Price:</strong> ${book.price}
      </p>
      <p>
        <strong>Pages:</strong> {book.pages}
      </p>
      <p>
        <strong>Rating:</strong> {book.rating}
      </p>
    </div>
  );
};

export default BookDetails;
