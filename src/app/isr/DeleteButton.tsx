'use client';
import { deleteBook } from '@/actions/book.actions';

type Props = {
  id: number;
};

const DeleteButton: React.FC<Props> = ({ id }) => {
  const handleDelete = async () => {
    try {
      await deleteBook(id);
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 transition"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
