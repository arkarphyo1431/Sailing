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

      {/* Section Heading */}
      <section className="text-center py-10 bg-white">
        <h2 className="text-4xl font-semibold text-gray-800">Chao Phraya River</h2>
        <p className="text-2xl text-gray-600 mt-2">Experience the beauty of the Chao Phraya River on our cruise, where a special night is waiting for you.</p>
      </section>

      {/* Four Images Section */}
      <section className="container mx-auto px-4 py-8 cursor-pointer">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Image 1 */}
          <div className="relative group">
            <Image src="/cruise-image01.jpeg" alt="Cruise" width={300} height={300} className="w-full h-full rounded-lg object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-lg">
              <h3 className="text-white text-lg font-bold text-center">Cruise</h3>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group">
            <Image src="/landmark-image.jpeg" alt="Landmarks" width={300} height={300} className="w-full h-full rounded-lg object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-lg">
              <h3 className="text-white text-lg font-bold text-center">Landmarks</h3>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative group">
            <Image src="/food-image.jpg" alt="Food" width={300} height={300} className="w-full h-full rounded-lg object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-lg">
              <h3 className="text-white text-lg font-bold text-center">Food</h3>
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative group">
            <Image src="/entertainment-image.jpeg" alt="Entertainment" width={300} height={300} className="w-full h-full rounded-lg object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-lg">
              <h3 className="text-white text-lg font-bold text-center">Entertainment</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
