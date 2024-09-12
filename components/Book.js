'use client'; // Required for Next.js 13+ with client components

import React from 'react';

export default function Book() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header Section */}
      <header className="bg-cover bg-center h-64 w-full relative mb-8" style={{ backgroundImage: `url('/header-image.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-5xl font-bold text-white">Tickets</h1>
        </div>
      </header>

      {/* Content Section */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row">
        {/* Cruise Image Cards Section */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cruise Card 1 */}
          <div className="bg-white p-4 rounded shadow-md">
            <img src="/cruise1.jpg" alt="Cruise 1" className="rounded mb-4" />
            <h2 className="text-xl font-bold mb-2">[NEW YEAR'S EVE] – Dinner Cruise at Terminal 21 (Rama 3)</h2>
            <p className="text-gray-700">Price: $80.00 - $5,500.00</p>
            <p className="text-gray-700">Location: Terminal 21</p>
            <p className="text-gray-700">Duration: 2 hours</p>
            <p className="text-gray-700">Direction: Rama 3 Pier to Main City</p>
            <button className="bg-yellow-500 text-white py-2 px-6 mt-4 rounded hover:bg-yellow-600">Book Now</button>
          </div>

          {/* Cruise Card 2 */}
          <div className="bg-white p-4 rounded shadow-md">
            <img src="/cruise2.jpg" alt="Cruise 2" className="rounded mb-4" />
            <h2 className="text-xl font-bold mb-2">Dinner Cruise at ICONSIAM Pier</h2>
            <p className="text-gray-700">Price: $80.00 - $1,800.00</p>
            <p className="text-gray-700">Location: ICONSIAM Pier</p>
            <p className="text-gray-700">Duration: 1.5 hours</p>
            <p className="text-gray-700">Direction: ICONSIAM Pier to Downtown</p>
            <button className="bg-yellow-500 text-white py-2 px-6 mt-4 rounded hover:bg-yellow-600">Book Now</button>
          </div>

          {/* Cruise Card 3 */}
          <div className="bg-white p-4 rounded shadow-md">
            <img src="/cruise3.jpg" alt="Cruise 3" className="rounded mb-4" />
            <h2 className="text-xl font-bold mb-2">Sunset Cruise at Chao Phraya River</h2>
            <p className="text-gray-700">Price: $120.00 - $2,200.00</p>
            <p className="text-gray-700">Location: Chao Phraya River</p>
            <p className="text-gray-700">Duration: 3 hours</p>
            <p className="text-gray-700">Direction: River Loop Tour</p>
            <button className="bg-yellow-500 text-white py-2 px-6 mt-4 rounded hover:bg-yellow-600">Book Now</button>
          </div>
        </div>

        {/* Booking Form Section */}
        <div className="flex-1 mt-8 md:mt-0 md:ml-8">
          <form className="bg-white p-8 rounded shadow-md">
            {/* Form Fields */}
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">First Name</label>
              <input type="text" id="firstName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your first name" />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last Name</label>
              <input type="text" id="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your last name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number</label>
              <input type="tel" id="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your phone number" />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600">Book Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
