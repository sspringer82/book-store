import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Book Not Found</h1>
      <p>Sorry, the book you are looking for does not exist.</p>
      <Link href="/books">
        <button>Back to Books</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
