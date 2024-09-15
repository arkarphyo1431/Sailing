import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <header className="bg-cover bg-center h-96 relative" style={{ backgroundImage: `url('/cruise.jpeg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center">
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
          <p className="text-lg text-black mb-6">Choose from our delightful dinner cruises for a memorable evening.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cruise Card 1 */}
          <Link href="/booking?cruise=new_years_eve" className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl">
            <Image src="/header-image01.jpg" alt="New Year's Eve Cruise" width={400} height={300} className="rounded-t-lg" />
            <h3 className="text-2xl font-bold mt-4 text-black">New Year's Eve Dinner Cruise</h3>
            <p className="mt-2 text-gray-600">Join us for a spectacular New Year's Eve celebration with dinner at Terminal 21 (Rama 3).</p>
            <p className="mt-2 text-gray-600">Price: $80.00 - $5,500.00</p>
            <p className="mt-2 text-gray-600">Duration: 2 hours</p>
            <p className="mt-2 text-gray-600">Direction: Rama 3 Pier to Main City</p>
          </Link>

          {/* Cruise Card 2 */}
          <Link href="/booking?cruise=iconsiam" className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl">
            <Image src="/header-image02.jpg" alt="ICONSIAM Dinner Cruise" width={400} height={300} className="rounded-t-lg" />
            <h3 className="text-2xl font-bold mt-4 text-black">Dinner Cruise at ICONSIAM Pier</h3>
            <p className="mt-2 text-gray-600">Enjoy a fine dining experience with stunning views at ICONSIAM Pier.</p>
            <p className="mt-2 text-gray-600">Price: $80.00 - $1,800.00</p>
            <p className="mt-2 text-gray-600">Duration: 1.5 hours</p>
            <p className="mt-2 text-gray-600">Direction: ICONSIAM Pier to Downtown</p>
          </Link>

          {/* Cruise Card 3 */}
          <Link href="/booking?cruise=asiatique" className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl">
            <Image src="/header-image.webp" alt="Asiatique Evening Cruise" width={400} height={300} className="rounded-t-lg" />
            <h3 className="text-2xl font-bold mt-4 text-black">Evening Cruise at Asiatique Pier</h3>
            <p className="mt-2 text-gray-600">Savor a delightful dinner and sunset views at Asiatique Pier.</p>
            <p className="mt-2 text-gray-600">Price: $80.00 - $5,000.00</p>
            <p className="mt-2 text-gray-600">Duration: 2 hours</p>
            <p className="mt-2 text-gray-600">Direction: Asiatique Pier to Riverfront</p>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
