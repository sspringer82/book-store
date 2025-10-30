import { Author } from '@/types/author';
import { setTimeout } from 'node:timers/promises';
import ky from 'ky';

// filepath: /Users/sebastian.springer/Documents/basti/FHRO/FHRO-SS25/projects/book-store/src/api/autor.api.ts

const api = ky.create({
  prefixUrl: 'http://localhost:3001/authors',
});

export async function getAuthorById(id: number): Promise<Author> {
  await setTimeout(4_000);
  return api.get(`${id}`).json();
}
