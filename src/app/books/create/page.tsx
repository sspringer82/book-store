'use client';

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { Book } from '@/types/book';
import { useForm } from 'react-hook-form';
import { createBook } from '@/api/book.api';

type FormValues = Omit<Book, 'id'>;

const CreatePage: NextPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      ISBN: '',
      title: '',
      author: '',
      genre: '',
      price: 0,
      description: '',
      pages: 0,
      rating: 0,
    },
  });

  const onSubmit = async (data: FormValues) => {
    await createBook(data as unknown as Book);
    router.push('/books');
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-8">
      <h1 className="text-2xl font-bold mb-4">Create a New Book</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register('title', { required: 'Title is required' })}
          placeholder="Title"
          className="w-full border p-2 rounded"
        />
        {errors.title && (
          <span className="text-red-600">{errors.title.message}</span>
        )}

        <input
          {...register('author', { required: 'Author is required' })}
          placeholder="Author"
          className="w-full border p-2 rounded"
        />
        {errors.author && (
          <span className="text-red-600">{errors.author.message}</span>
        )}

        <input
          {...register('ISBN', { required: 'ISBN is required' })}
          placeholder="ISBN"
          className="w-full border p-2 rounded"
        />
        {errors.ISBN && (
          <span className="text-red-600">{errors.ISBN.message}</span>
        )}

        <input
          {...register('genre', { required: 'Genre is required' })}
          placeholder="Genre"
          className="w-full border p-2 rounded"
        />
        {errors.genre && (
          <span className="text-red-600">{errors.genre.message}</span>
        )}

        <label className="block font-medium text-gray-400 mb-1" htmlFor="price">
          Price
        </label>
        <input
          id="price"
          type="number"
          step="0.01"
          min={0}
          {...register('price', {
            required: 'Price is required',
            min: { value: 0, message: 'Price must be at least 0' },
          })}
          placeholder="Price"
          className="w-full border p-2 rounded"
        />
        {errors.price && (
          <span className="text-red-600">{errors.price.message}</span>
        )}

        <textarea
          {...register('description', { required: 'Description is required' })}
          placeholder="Description"
          className="w-full border p-2 rounded"
        />
        {errors.description && (
          <span className="text-red-600">{errors.description.message}</span>
        )}

        <label className="block font-medium text-gray-400 mb-1" htmlFor="pages">
          Pages
        </label>
        <input
          id="pages"
          type="number"
          min={1}
          {...register('pages', {
            required: 'Pages is required',
            min: { value: 1, message: 'Pages must be at least 1' },
          })}
          placeholder="Pages"
          className="w-full border p-2 rounded"
        />
        {errors.pages && (
          <span className="text-red-600">{errors.pages.message}</span>
        )}
        <label
          className="block font-medium text-gray-400 mb-1"
          htmlFor="rating"
        >
          Rating (0-5)
        </label>
        <input
          id="rating"
          type="number"
          step="0.1"
          min={0}
          max={5}
          {...register('rating', {
            required: 'Rating is required',
            min: { value: 0, message: 'Rating must be at least 0' },
            max: { value: 5, message: 'Rating must be at most 5' },
          })}
          placeholder="Rating (0-5)"
          className="w-full border p-2 rounded"
        />
        {errors.rating && (
          <span className="text-red-600">{errors.rating.message}</span>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating...' : 'Create Book'}
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
