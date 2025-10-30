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
    <div className="mb-6">
      <form onSubmit={handleSearch} className="flex items-center space-x-4">
        <input
          type="text"
          name="query"
          placeholder="Search by title"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </form>
      {error && (
        <div className="mt-2 text-red-600 text-sm font-medium">{error}</div>
      )}
    </div>
  );
};

export default FindBooksForm;
