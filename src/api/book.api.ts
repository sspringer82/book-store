import { Book, CreateBook } from '@/types/book';
// import { setTimeout } from 'node:timers/promises';
import ky from 'ky';

const api = ky.create({
  prefixUrl: 'http://localhost:3001/books',
});

export function getAllBooks(): Promise<Book[]> {
  return api.get('').json();
}

export async function getBookById(id: number): Promise<Book> {
  // await setTimeout(2_000);
  return api.get(`${id}`).json();
}

export function deleteBookById(id: number): Promise<void> {
  return api.delete(`${id}`).json();
}

export function createBook(book: CreateBook): Promise<Book> {
  return api.post('', { json: book }).json();
}
