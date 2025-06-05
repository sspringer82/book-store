'use server';

import { deleteBookById, createBook as createBookAPI } from '@/api/book.api';
import { CreateBook } from '@/types/book';
import { revalidatePath } from 'next/cache';

export async function deleteBook(id: number) {
  await deleteBookById(id);
  revalidatePath('/books');
}

export async function createBook(book: CreateBook) {
  await createBookAPI(book);
  revalidatePath('/books');
}
