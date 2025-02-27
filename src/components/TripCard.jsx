import React, { useState } from 'react';

function TripCard({ item, showPopover }) {
  const [isCopied, setIsCopied] = useState(false); // State to track "Copied" visibility

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
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Top Section: ID and Copy Button */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-blue-800">{item['ID']}</h2>
        <button
          onClick={() => handleCopy(item['ID'])}
          className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors"
        >
          Copy
        </button>
      </div>

      {/* "Copied" Notification */}
      {isCopied && (
        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-md">
          Copied
        </div>
      )}

      {/* Body Section: Details */}
      <div className="space-y-2 text-sm text-gray-700">
        {/* Person Icon with Click-to-Show Popover */}
        <div className="relative flex items-center space-x-2">
          {/* Trip Type */}
          <span className="text-gray-700">{item['ประเภทของทริป'] || 'N/A'}</span>
          {/* Word "with" */}
          <span className="text-gray-500">with</span>
          {/* Person Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-500 cursor-pointer"
            onClick={() => showPopover(item)} // Show popover on click
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21"
            />
          </svg>
        </div>

        {/* Other Details */}
        <p><strong>วันที่ต้องการออกเดินทาง:</strong> {item['ช่วงวันที่ต้องการออกเดินทาง'] || 'N/A'}</p>
        <p><strong>ถึงวันที่:</strong> {item['ถึงวันที่'] || 'N/A'}</p>
        <p><strong>เริ่มต้นจากเมืองไหน?:</strong> {item['เริ่มต้นจากเมืองไหน?'] || 'N/A'}</p>
        <p><strong>จำนวนวันท่องเที่ยว:</strong> {item['จำนวน วัน ท่องเที่ยว'] || 'N/A'}</p>
        <p><strong>เมืองที่ต้องการไปมีอะไรบ้าง?:</strong> {item['เมืองที่ต้องการไปมีอะไรบ้าง?'] || 'N/A'}</p>
        <p><strong>No. of form:</strong> {item['No. of form'] || 'N/A'}</p>
        <p><strong>Total no. of Traveler:</strong> {item['Total no. of Traveler'] || 'N/A'}</p>
      </div>
    </div>
  );
}

export default TripCard;