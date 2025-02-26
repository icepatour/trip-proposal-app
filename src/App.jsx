import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace this URL with your Google Sheets API endpoint
    const SHEET_URL = 'https://sheets.googleapis.com/v4/spreadsheets/19udXfR-HXuJu5dgcz3sdXFU4fb6ohkbi5NyDJL2CrSM/values/London&other_start?key=AIzaSyAJEAfh8bm2o-g0yCBlYWCEmbq2YQTojqQ';

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

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 min-h-screen">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Trip Proposals</h1>
  
      {/* List of Trip Rows */}
      <div className="space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-wrap items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Left Column (Key Details) */}
            <div className="w-full sm:w-1/2 lg:w-1/3 space-y-1 text-sm text-gray-700">
              <p><strong className="text-gray-600">Name:</strong> {item['Name']}</p>
              <p><strong className="text-gray-600">เพศ:</strong> {item['เพศ'] || 'N/A'}</p>
              <p><strong className="text-gray-600">ช่วงอายุ:</strong> {item['ช่วงอายุ'] || 'N/A'}</p>
              <p><strong className="text-gray-600">วันที่ต้องการออกเดินทาง:</strong> {item['ช่วงวันที่ต้องการออกเดินทาง'] || 'N/A'}</p>
              <p><strong className="text-gray-600">ถึงวันที่:</strong> {item['ถึงวันที่'] || 'N/A'}</p>
            </div>
  
            {/* Right Column (Additional Details) */}
            <div className="w-full sm:w-1/2 lg:w-1/3 space-y-1 text-sm text-gray-700">
              <p><strong className="text-gray-600">เริ่มต้นจากเมืองไหน?:</strong> {item['เริ่มต้นจากเมืองไหน?'] || 'N/A'}</p>
              <p><strong className="text-gray-600">ประเภทของทริป:</strong> {item['ประเภทของทริป'] || 'N/A'}</p>
              <p><strong className="text-gray-600">จำนวนวันท่องเที่ยว:</strong> {item['จำนวน วัน ท่องเที่ยว'] || 'N/A'}</p>
              <p><strong className="text-gray-600">เมืองที่ต้องการไปมีอะไรบ้าง?:</strong> {item['เมืองที่ต้องการไปมีอะไรบ้าง?'] || 'N/A'}</p>
              <p><strong className="text-gray-600">No. of form:</strong> {item['No. of form'] || 'N/A'}</p>
              <p><strong className="text-gray-600">Total no. of Traveler:</strong> {item['Total no. of Traveler'] || 'N/A'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;