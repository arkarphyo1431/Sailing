import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <div className='cursor-pointer'>
            <h1 className='inline-flex'>Sailing</h1>
            <img src="/ship.png" alt="logo" className="h-8 w-8 inline" />
          </div>
        </div>
        <ul className="flex space-x-6 font-sans items-center">
          <li><Link href="/" className="hover:text-yellow-500">HOME</Link></li>
          <li><Link href="/book" className="hover:text-yellow-500">BOOK</Link></li>
          <li><Link href="/your_info" className="hover:text-yellow-500">YOUR BOOKINGS</Link></li>
          <li><Link href="/help" className="hover:text-yellow-500">HELP</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-500">CONTACT</Link></li>
          <li>
            <Link
              href="/sign-up"
              className="border-b border-gray-400 text-gray-100 hover:text-gray-300"
            >
              SIGN UP
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="border-b border-gray-400 text-gray-100 hover:text-gray-300"
            >
              LOGIN
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

