import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="text-center mt-12 p-6 bg-gray-100 rounded-lg shadow-md max-w-xl mx-auto">
      <h1 className="text-2xl mb-5 text-gray-800">404 - Book Not Found</h1>
      <p className="text-base mb-5 text-gray-600">
        Sorry, the book you are looking for does not exist.
      </p>
      <Link href="/books">
        <button className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Back to Books
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
