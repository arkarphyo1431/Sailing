import React from 'react';
import Link from 'next/link';

export default function Book() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header Section */}
      <header
        className="bg-cover bg-center h-64 w-full relative mb-8"
        style={{ backgroundImage: `url('/cruise-image.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-5xl font-bold text-white">Tickets</h1>
        </div>
      </header>

      {/* Content Section */}
      <div className="container mx-auto px-6 flex flex-col">
        {/* Cruise Ship Selection Section */}
        <div className="flex flex-col space-y-12">
          {/* Cruise Card 1 */}
          <div className="flex border p-8 rounded shadow-md bg-opacity-60 bg-white">
            <img
              src="/header-image01.jpg"
              alt="Cruise 1"
              className="rounded w-1/2 h-64 object-cover mr-8"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 text-black">
                [NEW YEAR'S EVE] – Dinner Cruise at Terminal 21 (Rama 3)
              </h2>
              <p className="text-lg text-gray-700">Price: $80.00 - $5,500.00</p>
              <p className="text-lg text-gray-700">Location: Terminal 21</p>
              <p className="text-lg text-gray-700">Duration: 2 hours</p>
              <p className="text-lg text-gray-700">Direction: Rama 3 Pier to Main City</p>
              {/* Link to Booking Page */}
              <Link href="/booking?cruise=new_years_eve" passHref>
                <button className="bg-yellow-500 text-white py-3 px-8 mt-6 rounded hover:bg-yellow-600">
                  Book Now
                </button>
              </Link>
            </div>
          </div>

          {/* Cruise Card 2 */}
          <div className="flex border p-8 rounded shadow-md bg-opacity-60 bg-white">
            <img
              src="/header-image02.jpg"
              alt="Cruise 2"
              className="rounded w-1/2 h-64 object-cover mr-8"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 text-black">
                Dinner Cruise at ICONSIAM Pier
              </h2>
              <p className="text-lg text-gray-700">Price: $80.00 - $1,800.00</p>
              <p className="text-lg text-gray-700">Location: ICONSIAM Pier</p>
              <p className="text-lg text-gray-700">Duration: 1.5 hours</p>
              <p className="text-lg text-gray-700">Direction: ICONSIAM Pier to Downtown</p>
              {/* Link to Booking Page */}
              <Link href="/booking?cruise=iconsiam" passHref>
                <button className="bg-yellow-500 text-white py-3 px-8 mt-6 rounded hover:bg-yellow-600">
                  Book Now
                </button>
              </Link>
            </div>
          </div>

          {/* Cruise Card 3 */}
          <div className="flex border p-8 rounded shadow-md bg-opacity-60 bg-white">
            <img
              src="/header-image03.jpg"
              alt="Cruise 3"
              className="rounded w-1/2 h-64 object-cover mr-8"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 text-black">
                Evening Cruise at Asiatique Pier
              </h2>
              <p className="text-lg text-gray-700">Price: $80.00 - $5,000.00</p>
              <p className="text-lg text-gray-700">Location: Asiatique Pier</p>
              <p className="text-lg text-gray-700">Duration: 2 hours</p>
              <p className="text-lg text-gray-700">Direction: Asiatique Pier to Riverfront</p>
              {/* Link to Booking Page */}
              <Link href="/booking?cruise=asiatique" passHref>
                <button className="bg-yellow-500 text-white py-3 px-8 mt-6 rounded hover:bg-yellow-600">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
