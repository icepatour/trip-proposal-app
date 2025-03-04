import React, { useState } from 'react';

function TripCard({ item }) {
  const [isCopied, setIsCopied] = useState(false); // State to track "Copied" visibility
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Function to copy ID to clipboard and show "Copied" notification
  const handleCopy = (id) => {
    navigator.clipboard.writeText(id).then(() => {
      setIsCopied(true); // Show "Copied" notification
      setTimeout(() => setIsCopied(false), 1000); // Hide after 1 second
    }).catch(err => {
      console.error('Failed to copy ID:', err);
    });
  };

  return (
    <div>
      {/* Main Card */}
      <div
        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer relative"
        onClick={() => setIsModalOpen(true)} // Open modal on click
      >
        {/* Starting City */}
        <div className="text-lg text-sm text-gray-800 mb-2">
        {item['ประเภทของทริป'] || 'N/A'} from {item['เริ่มต้นจากเมืองไหน?'] || 'N/A'}
        </div>

        {/* ID */}
        <h2 className="text-xl font-bold text-black mb-4">{item['ID']}</h2>

        {/* Body Section: Minimal Details */}
        <div className="space-y-2 text-sm text-gray-700">
          {/* Traveler Count with Person Icon */}
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>{item['Total no. of Traveler'] || 'N/A'}</span>
          </div>

          {/* Trip Type */}
          <p>{item['ประเภทของทริป'] || 'N/A'}</p>

          {/* Travel Dates */}
          <p>{item['ช่วงวันที่ต้องการออกเดินทาง'] || 'N/A'} - {item['ถึงวันที่'] || 'N/A'}</p>

          {/* Destinations */}
          <p>{item['เมืองที่ต้องการไปมีอะไรบ้าง?'] || 'N/A'}</p>
        </div>

        {/* Copy Button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent opening modal when copying
            handleCopy(item['ID']);
          }}
          className="absolute top-4 right-4 px-3 py-1 bg-black text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors"
        >
          Copy
        </button>

        {/* "Copied" Notification */}
        {isCopied && (
          <div className="absolute top-12 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-md">
            Copied!
          </div>
        )}
      </div>

      {/* Modal for Full Details */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)} // Close modal when clicking outside
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <h2 className="text-xl font-bold text-black mb-4">Trip Details</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>ID:</strong> {item['ID'] || 'N/A'}</p>
              <p><strong>จำนวนผู้เดินทาง:</strong> {item['No. of Traveler'] || 'N/A'}</p>
              <p><strong>ชื่อผู้จอง:</strong> {item['Name'] || 'N/A'}</p>
              <p><strong>เพศ:</strong> {item['เพศ'] || 'N/A'}</p>
              <p><strong>ช่วงอายุ:</strong> {item['ช่วงอายุ'] || 'N/A'}</p>
              <p><strong>ช่วงวันที่ต้องการออกเดินทาง:</strong> {item['ช่วงวันที่ต้องการออกเดินทาง'] || 'N/A'} - {item['ถึงวันที่'] || 'N/A'}</p>
              <p><strong>เริ่มต้นจากเมืองไหน?:</strong> {item['เริ่มต้นจากเมืองไหน?'] || 'N/A'}</p>
              <p><strong>ประเภทของทริป:</strong> {item['ประเภทของทริป'] || 'N/A'}</p>
              <p><strong>จำนวน วัน ท่องเที่ยว:</strong> {item['จำนวน วัน ท่องเที่ยว'] || 'N/A'}</p>
              <p><strong>เมืองที่ต้องการไปมีอะไรบ้าง?:</strong> {item['เมืองที่ต้องการไปมีอะไรบ้าง?'] || 'N/A'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TripCard;