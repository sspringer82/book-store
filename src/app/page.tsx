import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Links</h1>
      <ul>
        <li>
          <Link href={'/books'}>Book List</Link>
        </li>
        <li>
          <Link href={'/books/find'}>Book List (Search)</Link>
        </li>
        <li>
          <Link href={'/books/1'}>Details</Link>
        </li>
        <li>
          <Link href={'/books/stream/1'}>Stream</Link>
        </li>
        <li>
          <Link href={'/isr'}>Book List (ISR)</Link>
        </li>
      </ul>
    </div>
  );
}
