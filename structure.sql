-- Create the Books table
CREATE TABLE
  Books (
    id INTEGER PRIMARY KEY,
    ISBN TEXT NOT NULL,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    genre TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT NOT NULL,
    pages INTEGER NOT NULL,
    rating REAL NOT NULL
  );

-- Insert data into Books table
INSERT INTO
  Books (
    id,
    ISBN,
    title,
    author,
    genre,
    price,
    description,
    pages,
    rating
  )
VALUES
  (
    1,
    '978-3-16-148410-0',
    'The Great Gatsby',
    'F. Scott Fitzgerald',
    'Fiction',
    10.99,
    'A novel set in the 1920s that explores themes of wealth, love, and the American Dream.',
    180,
    4.5
  ),
  (
    2,
    '978-0-7432-7356-5',
    'To Kill a Mockingbird',
    'Harper Lee',
    'Fiction',
    7.99,
    'A story of racial injustice and childhood innocence in the Deep South.',
    281,
    4.8
  ),
  (
    3,
    '978-0-452-28423-4',
    '1984',
    'George Orwell',
    'Dystopian',
    8.99,
    'A dystopian novel about totalitarianism and surveillance.',
    328,
    4.7
  ),
  (
    4,
    '978-0-14-243723-0',
    'Moby Dick',
    'Herman Melville',
    'Adventure',
    9.99,
    'The epic tale of Captain Ahab''s obsessive quest to kill the white whale.',
    635,
    4.2
  ),
  (
    5,
    '978-0-06-112008-4',
    'Brave New World',
    'Aldous Huxley',
    'Dystopian',
    9.49,
    'A futuristic society driven by technology and consumerism.',
    268,
    4.6
  ),
  (
    6,
    '978-0-452-28425-8',
    'Animal Farm',
    'George Orwell',
    'Political Satire',
    6.99,
    'A satirical allegory about the Russian Revolution and totalitarianism.',
    112,
    4.4
  ),
  (
    7,
    '978-0-7432-7357-2',
    'Pride and Prejudice',
    'Jane Austen',
    'Romance',
    5.99,
    'A classic novel about love, class, and social expectations.',
    279,
    4.9
  ),
  (
    8,
    '978-0-14-118280-3',
    'The Catcher in the Rye',
    'J.D. Salinger',
    'Fiction',
    8.49,
    'A story about teenage rebellion and alienation.',
    214,
    4.3
  ),
  (
    9,
    '978-0-14-044913-6',
    'Crime and Punishment',
    'Fyodor Dostoevsky',
    'Psychological Fiction',
    11.99,
    'A psychological exploration of guilt and redemption.',
    671,
    4.7
  ),
  (
    10,
    '978-0-14-243717-9',
    'The Odyssey',
    'Homer',
    'Epic',
    12.99,
    'The epic journey of Odysseus returning home after the Trojan War.',
    541,
    4.6
  ),
  (
    11,
    '978-0-06-085052-4',
    'The Alchemist',
    'Paulo Coelho',
    'Adventure',
    9.99,
    'A philosophical tale about following one''s dreams.',
    208,
    4.5
  ),
  (
    12,
    '978-0-14-118257-5',
    'Of Mice and Men',
    'John Steinbeck',
    'Fiction',
    7.49,
    'A story of friendship and hardship during the Great Depression.',
    187,
    4.4
  ),
  (
    13,
    '978-0-14-044926-6',
    'War and Peace',
    'Leo Tolstoy',
    'Historical Fiction',
    14.99,
    'A sweeping narrative of Russian society during the Napoleonic Wars.',
    1225,
    4.8
  ),
  (
    14,
    '978-0-14-243720-9',
    'The Iliad',
    'Homer',
    'Epic',
    11.99,
    'The epic tale of the Trojan War and its heroes.',
    704,
    4.5
  ),
  (
    15,
    '978-0-06-112241-5',
    'The Road',
    'Cormac McCarthy',
    'Post-Apocalyptic',
    8.99,
    'A harrowing journey of a father and son in a post-apocalyptic world.',
    287,
    4.3
  ),
  (
    16,
    '978-0-14-118280-3',
    'Frankenstein',
    'Mary Shelley',
    'Gothic Fiction',
    6.99,
    'A scientist''s creation turns into a monster in this gothic classic.',
    280,
    4.4
  ),
  (
    17,
    '978-0-14-118257-5',
    'The Grapes of Wrath',
    'John Steinbeck',
    'Fiction',
    9.49,
    'A story of a family''s struggle during the Great Depression.',
    464,
    4.6
  ),
  (
    18,
    '978-0-14-044927-3',
    'Anna Karenina',
    'Leo Tolstoy',
    'Romance',
    12.99,
    'A tragic love story set in 19th-century Russia.',
    864,
    4.7
  ),
  (
    19,
    '978-0-14-243723-0',
    'Dracula',
    'Bram Stoker',
    'Horror',
    7.99,
    'The classic tale of the vampire Count Dracula.',
    418,
    4.5
  ),
  (
    20,
    '978-0-14-118280-3',
    'Wuthering Heights',
    'Emily Brontë',
    'Gothic Fiction',
    8.49,
    'A tale of passion and revenge on the Yorkshire moors.',
    416,
    4.4
  ),
  (
    21,
    '978-0-14-118257-5',
    'Jane Eyre',
    'Charlotte Brontë',
    'Romance',
    9.99,
    'A story of love and independence in Victorian England.',
    532,
    4.8
  );