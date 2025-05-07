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
    <button onClick={handleDelete} className="delete-button">
      Delete
    </button>
  );
};

export default DeleteButton;
