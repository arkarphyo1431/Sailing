'use client'; // Required for Next.js 13+ with client components

import React from 'react';
import Navbar from '../components/Navbar'; // Make sure to import your Navbar component

export default function Book() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Navbar and Header Section */}
      <header className="w-full relative">
        <div className="bg-cover bg-center h-64 w-full relative" style={{ backgroundImage: `url('/header-image.jpg')` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <h1 className="text-5xl font-bold text-white">Book Your Cruise</h1>
          </div>
        </div>
      </header>

      {/* Booking Form Section */}
      <div className="w-full max-w-lg bg-white p-8 rounded shadow-md mt-6">
        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">First Name</label>
          <input type="text" id="firstName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your first name" />
        </div>
        
        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last Name</label>
          <input type="text" id="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your last name" />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number</label>
          <input type="tel" id="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your phone number" />
        </div>

        {/* Thai or Non-Thai Option */}
        <div className="mb-6">
          <label htmlFor="nationality" className="block text-gray-700 font-bold mb-2">Are you Thai or Non-Thai?</label>
          <select id="nationality" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="">Select an option</option>
            <option value="thai">Thai</option>
            <option value="non-thai">Non-Thai</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button type="submit" className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600">Book Now</button>
        </div>
      </div>
    </div>
  );
}
