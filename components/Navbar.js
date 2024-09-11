import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          {/* <Link href="/" className="hover:underline">Cruise Dinner Booking</Link> */}
          <h1 className='cursor-pointer'> Cruise Dinner Booking </h1>
        </div>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/book" className="hover:underline">Book</Link></li>
          <li><Link href="/your_info" className="hover:underline">Your Info</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
