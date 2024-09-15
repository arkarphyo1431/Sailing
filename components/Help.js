'use client'; // Required for Next.js 13+ with client components

import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Help() {
  const [activeBar, setActiveBar] = useState(null);

  const handleToggle = (barId) => {
    setActiveBar(activeBar === barId ? null : barId);
  };

  return (
    <div className="min-h-screen bg-gray-200"> {/* Softer background color */}
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img src="/cruise.jpeg" alt="Cruise Image" className="w-full h-auto rounded-lg shadow-md" />
          </div>

          {/* Information Bars Section */}
          <div className="w-full md:w-1/2 space-y-4">
            {[1, 2, 3].map((id) => (
              <div key={id} className="border rounded-lg shadow-md bg-gray-300 transition-transform duration-300 ease-in-out transform hover:-translate-y-1">
                <button
                  onClick={() => handleToggle(id)}
                  className="w-full text-left p-4 text-lg font-semibold text-black bg-gray-400 hover:bg-gray-500 rounded-t-lg"
                >
                  Help Topic {id}
                </button>
                {activeBar === id && (
                  <div className="p-4 bg-gray-100 rounded-b-lg">
                    <p className="text-black">Here is some information about Help Topic {id}. This section expands when the user clicks on the topic.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Customer Care and Service Information Section */}
        <div className="bg-gray-100 py-6 mt-8">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 text-black">Customer Care</h2>
            <p className="text-lg text-black mb-4">
              We are committed to providing the best customer care. If you have any questions or concerns, please don't hesitate to reach out to our support team. Our customer service representatives are available 24/7 to assist you with any issues or inquiries you may have.
            </p>
            <h2 className="text-3xl font-bold mb-4 text-black">Cruise Dinner Service</h2>
            <p className="text-lg text-black">
              Our cruise dinner service offers a delightful experience with a variety of gourmet dishes prepared by top chefs. Enjoy a luxurious meal while taking in the stunning views. Our dedicated staff ensures that every detail of your dining experience is perfect, from the presentation of the food to the quality of service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
