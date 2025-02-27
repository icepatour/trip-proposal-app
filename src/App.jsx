import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Header from './components/Header';
import TallyForm from './components/TallyForm';
import FilterBar from './components/FilterBar';
import TripCard from './components/TripCard';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    startDate: null,
    endDate: null,
    startingCity: '',
    tripType: '',
    destinations: [],
  });
  const [popoverData, setPopoverData] = useState(null);

  useEffect(() => {
    const SHEET_URL = `https://sheets.googleapis.com/v4/spreadsheets/${import.meta.env.VITE_GOOGLE_SHEET_ID}/values/London&other_start?key=${import.meta.env.VITE_GOOGLE_API_KEY}`;
    axios.get(SHEET_URL)
      .then(response => {
        const rows = response.data.values;
        const headers = rows[0];
        const formattedData = rows.slice(1).map(row => {
          const obj = {};
          headers.forEach((header, index) => {
            obj[header] = row[index];
          });
          return obj;
        });
        setData(formattedData);
        setFilteredData(formattedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleFilterChange = (e, isDestinations = false) => {
    const { name, value } = e.target;
    if (isDestinations) {
      setFilters({ ...filters, destinations: value.split(',').map(dest => dest.trim()) });
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  const applyFilters = () => {
    let filtered = data;

    if (filters.startDate && filters.endDate) {
      filtered = filtered.filter(item => {
        const itemDate = new Date(item['ช่วงวันที่ต้องการออกเดินทาง']);
        return itemDate >= new Date(filters.startDate) && itemDate <= new Date(filters.endDate);
      });
    }

    if (filters.startingCity) {
      filtered = filtered.filter(item => item['เริ่มต้นจากเมืองไหน?'] === filters.startingCity);
    }

    if (filters.tripType) {
      filtered = filtered.filter(item => item['ประเภทของทริป'] === filters.tripType);
    }

    if (filters.destinations.length > 0) {
      filtered = filtered.filter(item => {
        const destinations = item['เมืองที่ต้องการไปมีอะไรบ้าง?']?.split(', ') || [];
        return filters.destinations.every(dest => destinations.includes(dest));
      });
    }

    setFilteredData(filtered);
  };

  const showPopover = (item) => {
    setPopoverData(item);
  };

  const hidePopover = () => {
    setPopoverData(null);
  };

  return (
    <div className="p-6 bg-[#E0E5EC] min-h-screen relative shadow-neumorphism">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Trip Proposals</h1>

      {/* Tally Form */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <TallyForm />
      </div>

      {/* Filter Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <FilterBar
          filters={filters}
          handleFilterChange={handleFilterChange}
          applyFilters={applyFilters}
        />
      </div>

      {/* Centered Container with Max Width */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item, index) => (
            <TripCard key={index} item={item} showPopover={showPopover} />
          ))}
        </div>
      </div>

      {/* Popover */}
      {popoverData && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={hidePopover}
        >
          <div
            className="bg-[#E0E5EC] p-6 rounded-2xl shadow-neumorphism max-w-sm text-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold mb-4">Details</h3>
            <p><strong>ชื่อผู้จอง:</strong> {popoverData['Name'] || 'N/A'}</p>
            <p><strong>เพศ:</strong> {popoverData['เพศ'] || 'N/A'}</p>
            <p><strong>ช่วงอายุ:</strong> {popoverData['ช่วงอายุ'] || 'N/A'}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              onClick={hidePopover}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;