'use client';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', color: 'red' }}>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={reset} style={{ marginTop: '20px' }}>
        Try Again
      </button>
    </div>
  );
};

export default Error;
