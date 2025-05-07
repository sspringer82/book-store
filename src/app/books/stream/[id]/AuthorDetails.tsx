import { getAuthorById } from '@/api/autor.api';

type Props = { id: number };

const AuthorDetails: React.FC<Props> = async ({ id }) => {
  const author = await getAuthorById(id);

  if (!author) {
    return <p>Author details not found.</p>;
  }

  return (
    <div className="flex gap-5 p-5 border border-gray-300 rounded-lg max-w-4xl mx-auto mt-5">
      <div className="flex-1">
        <p className="mb-2">
          <strong>Name:</strong> {author.name}
        </p>
        <p className="mb-2">
          <strong>Bio:</strong> {author.bio}
        </p>
        <p className="mb-2">
          <strong>Birth Date:</strong> {author.birthDate}
        </p>
        <p className="mb-2">
          <strong>Country:</strong> {author.country}
        </p>
      </div>
    </div>
  );
};

export default AuthorDetails;
