import { getAuthorById } from '@/api/autor.api';

type Props = { id: number };

const AuthorDetails: React.FC<Props> = async ({ id }) => {
  const author = await getAuthorById(id);

  if (!author) {
    return <p>Author details not found.</p>;
  }

  return (
    <div>
      <p>
        <strong>Name:</strong> {author.name}
      </p>
      <p>
        <strong>Bio:</strong> {author.bio}
      </p>
      <p>
        <strong>Birth Date:</strong> {author.birthDate}
      </p>
      <p>
        <strong>Country:</strong> {author.country}
      </p>
    </div>
  );
};

export default AuthorDetails;
