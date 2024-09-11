'use client'; // Required if using Next.js 13+ for client components

import Book from '../../components/Book';
import Navbar from '../../components/Navbar'; // Import the Navbar component

export default function BookPage() {
  return (
    <div>
      <Navbar />
      <Book />
    </div>
  );
}
