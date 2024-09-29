'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function BookingComponent() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    date: '',
    time: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  });

  const [availableTimes, setAvailableTimes] = useState([]);
  const [availabilityChecked, setAvailabilityChecked] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [bookedDates, setBookedDates] = useState([]); 
  const [existingBookings] = useState([]); 

  const generateDates = (month, year) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => {
      const date = new Date(year, month, i + 1);
      const formattedDate = date.toISOString().split('T')[0];
      const isAvailable = date.getDay() !== 0 && date.getDay() !== 6 && !bookedDates.includes(formattedDate);
      return {
        date: formattedDate,
        isAvailable,
        day: date.getDate(),
      };
    });
  };

  const availableDates = generateDates(currentMonth, currentYear);

  const cruises = {
    new_years_eve: {
      title: "[NEW YEAR'S EVE] – Dinner Cruise at Terminal 21 (Rama 3)",
      price: "$80.00 - $5,500.00",
      location: "Terminal 21",
      duration: "2 hours",
      direction: "Rama 3 Pier to Main City",
      image: "/header-image01.jpg",
    },
    iconsiam: {
      title: "Dinner Cruise at ICONSIAM Pier",
      price: "$80.00 - $1,800.00",
      location: "ICONSIAM Pier",
      duration: "1.5 hours",
      direction: "ICONSIAM Pier to Downtown",
      image: "/header-image02.jpg",
    },
    asiatique: {
      title: "Evening Cruise at Asiatique Pier",
      price: "$80.00 - $5,000.00",
      location: "Asiatique Pier",
      duration: "2 hours",
      direction: "Asiatique Pier to Riverfront",
      image: "/header-image03.jpg",
    },
  };

  const searchParams = useSearchParams();
  const selectedCruise = searchParams.get('cruise');
  const cruise = cruises[selectedCruise] || cruises.new_years_eve;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'date') {
      checkAvailability(value);
    }
  };

  const checkAvailability = (selectedDate) => {
    const times = ['6:00 PM']; 
    setAvailableTimes(times);
    setAvailabilityChecked(true);
  };

  const handleDateClick = (date) => {
    if (date.isAvailable) {
      handleChange({ target: { name: 'date', value: date.date } });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).every((field) => field)) {
      alert('Booking successful!');
      setFormData({
        email: '',
        phone: '',
        date: '',
        time: '',
        cardNumber: '',
        expDate: '',
        cvv: '',
      });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 mt-8 text-black">Complete Your Booking</h1>
      <div className="flex w-full max-w-4xl">
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

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow-md rounded-md w-1/2"
        >
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4 text-black">Select Date and Time</h2>
            <div className="mb-4 border rounded p-4 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <button
                  className={`text-black hover:underline ${
                    currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`}
                  onClick={() => {
                    if (currentMonth > 0) {
                      setCurrentMonth((prev) => prev - 1);
                    } else {
                      setCurrentMonth(11);
                      setCurrentYear((prev) => prev - 1);
                    }
                  }}
                  type="button"
                  disabled={currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()}
                >
                  Previous
                </button>
                <h3 className="text-lg font-semibold text-blue-700">
                  {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
                </h3>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => {
                    if (currentMonth < 11) {
                      setCurrentMonth((prev) => prev + 1);
                    } else {
                      setCurrentMonth(0);
                      setCurrentYear((prev) => prev + 1);
                    }
                  }}
                  type="button"
                >
                  Next
                </button>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {availableDates.map(({ date, isAvailable, day }) => (
                  <div
                    key={date}
                    className={`flex items-center justify-center h-10 rounded 
                      ${isAvailable ? 'bg-gray-500 cursor-pointer' : 'bg-red-200 text-red-500 cursor-not-allowed'}
                      ${formData.date === date ? 'border-2 border-blue-500' : 'border'}
                    `}
                    onClick={() => handleDateClick({ date, isAvailable })}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>

            {availabilityChecked && availableTimes.length > 0 && (
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-4 text-black">Select Time</h2>
                <div className="grid grid-cols-4 gap-2">
                  {availableTimes.map((time) => (
                    <div
                      key={time}
                      className={`flex items-center justify-center h-10 rounded 
                        ${formData.time === time ? 'border-2 border-blue-500' : 'border'}
                        bg-gray-500 cursor-pointer
                      `}
                      onClick={() => handleChange({ target: { name: 'time', value: time } })}
                    >
                      {time}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4 text-black">Contact Information</h2>
            <div className="mb-4">
              <label htmlFor="email" className="block text-black">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-black">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4 text-black">Payment Information</h2>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-black">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="expDate" className="block text-black">Expiration Date</label>
                <input
                  type="text"
                  id="expDate"
                  name="expDate"
                  value={formData.expDate}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="cvv" className="block text-black">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
          >
            Book Now
          </button>
        </form>
      </div>

      <div className="w-full max-w-4xl mt-8">
        <h2 className="text-2xl font-bold mb-4 text-black">Existing Bookings</h2>
        {existingBookings.length > 0 ? (
          <ul className="list-disc ml-6">
            {existingBookings.map((booking) => (
              <li key={booking.id} className="text-gray-700 mb-2">
                Date: {booking.date}, Time: {booking.time}, Email: {booking.email}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No bookings available.</p>
        )}
      </div>
    </div>
  );
}

export default function Booking() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingComponent />
    </Suspense>
  );
}
