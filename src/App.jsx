import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const SHEET_URL = `https://sheets.googleapis.com/v4/spreadsheets/${import.meta.env.VITE_GOOGLE_SHEET_ID}/values/London&other_start?key=${import.meta.env.VITE_GOOGLE_API_KEY}`;

    axios.get(SHEET_URL)
      .then(response => {
        const rows = response.data.values;
        const headers = rows[0]; // Extract headers
        const formattedData = rows.slice(1).map(row => {
          const obj = {};
          headers.forEach((header, index) => {
            obj[header] = row[index];
          });
          return obj;
        });
        setData(formattedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Function to copy ID to clipboard
  const copyToClipboard = (id) => {
    navigator.clipboard.writeText(id).then(() => {
      alert(`Copied ID: ${id}`);
    }).catch(err => {
      console.error('Failed to copy ID:', err);
    });
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 min-h-screen">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Trip Proposals</h1>

      {/* Grid of Trip Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Top Section: ID and Copy Button */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-blue-800">{item['ID']}</h2>
              <button
                onClick={() => copyToClipboard(item['ID'])}
                className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors"
              >
                Copy
              </button>
            </div>

            {/* Body Section: Details */}
            <div className="space-y-2 text-sm text-gray-700">
              {/* Person Icon with Tooltip and Trip Type */}
              <div className="relative group flex items-center space-x-2">
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
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21"
                  />
                </svg>

                {/* Tooltip on Hover */}
                <div className="absolute top-full left-0 mt-2 p-2 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  <p><strong>ชื่อผู้จอง:</strong> {item['Name'] || 'N/A'}</p>
                  <p><strong>เพศ:</strong> {item['เพศ'] || 'N/A'}</p>
                  <p><strong>ช่วงอายุ:</strong> {item['ช่วงอายุ'] || 'N/A'}</p>
                </div>
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
        ))}
      </div>
    </div>
  );
}

export default App;