import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <div className='cursor-pointer'>
            <h1 className='inline-flex'> Sailing </h1>
            <img src="/ship.png" alt="logo" className="h-8 w-8 inline" />
          </div>
        </div>
        <ul className="flex space-x-6 font-sans">
          <li><Link href="/" className="hover:text-yellow-500">HOME</Link></li>
          <li><Link href="/book" className="hover:text-yellow-500">BOOK</Link></li>
          <li><Link href="/your_info" className="hover:text-yellow-500">YOUR INFO</Link></li>
          <li><Link href="/your_info" className="hover:text-yellow-500">NEWS & PROMOTIONS</Link></li>
          <li><Link href="/about" className="hover:text-yellow-500">ABOUT</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-500">CONTACT</Link></li>
          <li><Link href="/cart" className="text-white hover:text-yellow-500">CART</Link></li>
        </ul>
      </div>
    </nav>
  );
}
