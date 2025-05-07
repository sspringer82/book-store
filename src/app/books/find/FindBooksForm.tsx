'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const FindBooksForm = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get('query')?.toString() || '';

    setError(null);
    router.push(`/books/find?query=${encodeURIComponent(query)}`);
  };

  return (
    <div>
      <h1>Find Books</h1>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" placeholder="Search by title" />
        <button type="submit">Search</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default FindBooksForm;
