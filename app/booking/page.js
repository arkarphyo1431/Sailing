'use client'; // Required for Next.js 13+ for client components

import Footer from '../../components/Footer';
import Book from '../../components/Book'; // Import the Book component
import Navbar from '../../components/Navbar'; // Import the Navbar component
import Booking from '@/components/Booking';

export default function BookingPage() {
  return (
    <div>
      <Navbar />
      <Booking /> {/* Render the Book component */}
      <Footer />
    </div>
  );
}
