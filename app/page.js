import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <header className="bg-cover bg-center h-96 relative" style={{ backgroundImage: `url('/cruise.jpeg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Cruise Dinner Booking</h1>
            <p className="text-lg mb-6">Book an unforgettable dinner experience on our luxurious cruise.</p>
            <Link href="/book" className="border border-x-y-8 hover:bg-yellow-600 hover:text-black text-white px-6 py-3 rounded-md text-lg font-semibold">
              Book Now
            </Link>

          </div>
        </div>
      </header>

      {/* Featured Sections */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-black">Select Your Cruise Experience</h2>
          <p className="text-lg text-black mb-6">Choose from our three luxury cruise floors and delightful meal options.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/book/main-deck" className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl">
            <Image src="/floors/main-deck.jpeg" alt="Main Deck" width={400} height={300} className="rounded-t-lg" />
            <h3 className="text-2xl font-bold mt-4">Main Deck</h3>
            <p className="mt-2 text-gray-600">Experience the cruise from the heart of the ship with amazing views and comfort.</p>
          </Link>
          <Link href="/book/middle-deck" className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl">
            <Image src="/floors/middle-deck.jpeg" alt="Middle Deck" width={400} height={300} className="rounded-t-lg" />
            <h3 className="text-2xl font-bold mt-4">Middle Deck</h3>
            <p className="mt-2 text-gray-600">Enjoy a fine dining experience with the best view of the city skyline.</p>
          </Link>
          <Link href="/book/upper-deck" className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl">
            <Image src="/floors/upper-deck.jpeg" alt="Upper Deck" width={400} height={300} className="rounded-t-lg" />
            <h3 className="text-2xl font-bold mt-4">Upper Deck</h3>
            <p className="mt-2 text-gray-600">Savor the sunset while enjoying gourmet meals at our top deck.</p>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 text-white text-center">
        <p>&copy; 2024 Cruise Dinner Booking. All rights reserved.</p>
        <div className="mt-2">
          <Link href="/contact" className="hover:underline mx-2">Contact Us</Link>
          <Link href="/about" className="hover:underline mx-2">About Us</Link>
        </div>
      </footer>
    </div>
  );
}
