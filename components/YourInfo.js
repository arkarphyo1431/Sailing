// components/UserInfoPage.tsx
'use client'; // Required for Next.js 13+ with client components

import React, { useState } from 'react';

export default function UserInfoPage() {
  // State to store user details
  const [user, setUser] = useState({
    name: 'username',
    email: 'username@example.com',
    phone: '+123456789'
  });

  // Dummy data for upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "New Year's Eve Cruise",
      date: 'December 31, 2024',
      location: 'Terminal 21, Rama 3',
    },
    {
      id: 2,
      title: 'Sunset Dinner at ICONSIAM',
      date: 'January 15, 2025',
      location: 'ICONSIAM Pier',
    },
    {
      id: 3,
      title: 'Chao Phraya River Cruise',
      date: 'February 20, 2025',
      location: 'Chao Phraya River',
    },
    {
      id: 4,
      title: 'Test Event 4',
      date: 'March 10, 2025',
      location: 'Test Location 4',
    },
    {
      id: 5,
      title: 'Test Event 5',
      date: 'April 5, 2025',
      location: 'Test Location 5',
    },
    // ... More events as needed
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <div className="flex-grow flex items-center justify-center py-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md max-w-4xl w-full">
          <div className="w-full flex flex-col md:flex-row">
            
            {/* User Info Box */}
            <div className="bg-gray-700 p-6 rounded-lg w-full md:w-1/3 mb-6 md:mb-0 md:mr-6 flex flex-col">
              <h2 className="text-2xl font-bold mb-4 text-center text-white">User Info</h2>
              <p className="mb-2 text-white"><strong>Name:</strong> {user.name}</p>
              <p className="mb-2 text-white"><strong>Email:</strong> {user.email}</p>
              <p className="mb-2 text-white"><strong>Phone:</strong> {user.phone}</p>
            </div>

            {/* Tickets Box (scrollable) */}
            <div className="bg-gray-700 p-6 rounded-lg w-full md:w-2/3 max-h-[calc(100vh-20rem)] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-4 text-white">Upcoming Events</h2>
              <div>
                {upcomingEvents.length > 0 ? (
                  upcomingEvents.map((event) => (
                    <div key={event.id} className="mb-4">
                      <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                      <p className="text-white"><strong>Date:</strong> {event.date}</p>
                      <p className="text-white"><strong>Location:</strong> {event.location}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-white">No upcoming events</p>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
