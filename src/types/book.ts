import z from 'zod';

export const bookSchema = z.object({
  id: z.number(),
  ISBN: z.string().min(1, 'ISBN is required'),
  title: z.string().min(1, 'Title is required'),
  author: z.string().min(1, 'Author is required'),
  genre: z.string().min(1, 'Genre is required'),
  price: z.number().nonnegative('Price must be at least 0'),
  description: z.string().min(1, 'Description is required'),
  pages: z.number().min(1, 'Pages must be at least 1'),
  rating: z
    .number()
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating must be at most 5')
    .optional(),
});

export type Book = z.infer<typeof bookSchema>;

export type CreateBook = Omit<Book, 'id'>;
