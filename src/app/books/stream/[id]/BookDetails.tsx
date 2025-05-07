import { getBookById } from '@/api/book.api';
import Image from 'next/image';

type Props = { id: number };

const BookDetails: React.FC<Props> = async ({ id }) => {
  const book = await getBookById(id);

  if (!book) {
    return <p>Book details not found.</p>;
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
          <strong>Description:</strong> {book.description}
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
      </div>
    </div>
  );
};

export default BookDetails;
