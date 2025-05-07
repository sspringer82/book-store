'use server';

import { deleteBookById } from '@/api/book.api';
import { revalidatePath } from 'next/cache';

export async function deleteBook(id: number) {
  await deleteBookById(id);
  revalidatePath('/books');
}
