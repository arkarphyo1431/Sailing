'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Booking() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    date: '',
    time: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  });

  // Cruise details data
  const cruises = {
    new_years_eve: {
      title: "[NEW YEAR'S EVE] – Dinner Cruise at Terminal 21 (Rama 3)",
      price: "$80.00 - $5,500.00",
      location: "Terminal 21",
      duration: "2 hours",
      direction: "Rama 3 Pier to Main City",
      image: "/header-image01.jpg"
    },
    iconsiam: {
      title: "Dinner Cruise at ICONSIAM Pier",
      price: "$80.00 - $1,800.00",
      location: "ICONSIAM Pier",
      duration: "1.5 hours",
      direction: "ICONSIAM Pier to Downtown",
      image: "/header-image02.jpg"
    },
    asiatique: {
      title: "Evening Cruise at Asiatique Pier",
      price: "$80.00 - $5,000.00",
      location: "Asiatique Pier",
      duration: "2 hours",
      direction: "Asiatique Pier to Riverfront",
      image: "/header-image03.jpg"
    }
  };

  // Extract the selected cruise from the query parameters
  const searchParams = useSearchParams();
  const selectedCruise = searchParams.get('cruise');
  const cruise = cruises[selectedCruise] || cruises.new_years_eve;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, like calling an API
    console.log('Form submitted', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 mt-8 text-black">Complete Your Booking</h1>
      <div className="flex w-full max-w-4xl">
        {/* Cruise Info */}
        <div className="w-1/2 pr-8">
          <img
            src={cruise.image}
            alt={cruise.title}
            className="rounded w-full h-64 object-cover mb-6"
          />
          <h2 className="text-2xl font-bold mb-4 text-black">{cruise.title}</h2>
          <p className="text-lg text-gray-700">Price: {cruise.price}</p>
          <p className="text-lg text-gray-700">Location: {cruise.location}</p>
          <p className="text-lg text-gray-700">Duration: {cruise.duration}</p>
          <p className="text-lg text-gray-700">Direction: {cruise.direction}</p>
        </div>

        {/* Booking Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow-md rounded-md w-1/2"
        >
          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-black">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded text-black"
            />
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-black">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded text-black"
            />
          </div>

          {/* Select Date */}
          <div className="mb-6">
            <label htmlFor="date" className="block text-black">
              Select Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded text-black"
            />
          </div>

          {/* Select Time */}
          <div className="mb-6">
            <label htmlFor="time" className="block text-black">
              Select Time:
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded text-black"
            >
              <option value="">Choose a time</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="9:00 PM">9:00 PM</option>
            </select>
          </div>

          {/* Payment Section */}
          <h2 className="text-xl font-bold mb-4 text-black">Payment Information</h2>

          {/* Card Number */}
          <div className="mb-6">
            <label htmlFor="cardNumber" className="block text-black">
              Visa Card Number:
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded text-black"
              maxLength="16"
              placeholder="XXXX-XXXX-XXXX-XXXX"
            />
          </div>

          {/* Expiry Date */}
          <div className="mb-6">
            <label htmlFor="expDate" className="block text-black">
              Expiry Date (MM/YY):
            </label>
            <input
              type="text"
              id="expDate"
              name="expDate"
              value={formData.expDate}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded text-black"
              placeholder="MM/YY"
            />
          </div>

          {/* CVV */}
          <div className="mb-6">
            <label htmlFor="cvv" className="block text-black">
              CVV (3-digit number):
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded text-black"
              maxLength="3"
              placeholder="XXX"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-8 rounded hover:bg-blue-600 w-full"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
}
