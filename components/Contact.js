'use client'; // Required for Next.js 13+ with client components

import React from 'react';
import Navbar from '../components/Navbar'; // Make sure to import your Navbar component

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Navbar and Header Section */}
      <header className="w-full relative">
        <div className="bg-cover bg-center h-64 w-full relative" style={{ backgroundImage: `url('/header-image.jpg')` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <h1 className="text-5xl font-bold text-white">Contact Us</h1>
          </div>
        </div>
      </header>

      {/* Help Desk and Contact Form Section */}
      <div className="flex flex-col md:flex-row justify-center mt-12 container mx-auto px-6">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">Help Desk</h2>
          <p className="text-gray-700 mb-2"><strong>Office Hours</strong></p>
          <p>Monday - Sunday <br />9:00 am to 8:00 pm</p>
          <div className="bg-white p-4 mt-4 shadow-lg rounded-lg">
            <p className="font-semibold">Headquarter</p>
            <p className="text-gray-800">The Infinite Cruiser Co., Ltd, 431 Soi Charoen Nakorn 6, Charoennakorn road, Samray, Thonburi District Bangkok, Thailand 10600</p>
            <p className="font-semibold mt-4">Email Us</p>
            <p className="text-gray-800">reservations@sailing.com</p>
            <div className="mt-4 p-4 bg-gray-800 text-white rounded-lg">
              <p>Call Us: +66 2-476-0481-5</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 p-4 mt-8 md:mt-0">
          <form className="bg-white p-8 rounded shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name*</label>
              <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your full name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Active Email*</label>
              <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number*</label>
              <input type="tel" id="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your phone number" />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject*</label>
              <input type="text" id="subject" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter the subject" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message*</label>
              <textarea id="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your message" rows="5"></textarea>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600">Send Request</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
