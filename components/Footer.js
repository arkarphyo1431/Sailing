import React from 'react'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4 text-white text-center">
        <p>&copy; 2024 Cruise Dinner Booking. All rights reserved.</p>
        <div className="mt-2">
          <Link href="/contact" className="hover:underline mx-2">Contact Us</Link>
          <Link href="/about" className="hover:underline mx-2">About Us</Link>
        </div>
      </footer>
  )
}
