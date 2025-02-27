import React from 'react';

function FilterBar({ filters, handleFilterChange, applyFilters }) {
  return (
    <div className="mb-6 bg-white p-4 rounded-2xl shadow-md max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Date Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700">ช่วงวันที่ต้องการออกเดินทาง</label>
          <input
            type="date"
            name="startDate"
            onChange={handleFilterChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
          <input
            type="date"
            name="endDate"
            onChange={handleFilterChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Starting City Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700">เริ่มต้นจากเมืองไหน?</label>
          <select
            name="startingCity"
            onChange={handleFilterChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          >
            <option value="">All</option>
            <option value="London">London</option>
            <option value="Edinburgh">Edinburgh</option>
          </select>
        </div>

        {/* Trip Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700">ประเภทของทริป</label>
          <select
            name="tripType"
            onChange={handleFilterChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          >
            <option value="">All</option>
            <option value="One Day Trip">One Day Trip</option>
            <option value="Multi-day Trip">Multi-day Trip</option>
          </select>
        </div>

        {/* Destinations Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700">เมืองที่ต้องการไปมีอะไรบ้าง?</label>
          <input
            type="text"
            name="destinations"
            placeholder="Enter destinations (comma-separated)"
            onChange={(e) => handleFilterChange(e, true)} // Special handling for destinations
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      {/* Apply Filters Button */}
      <button
        onClick={applyFilters}
        className="mt-4 px-4 py-2 bg-[#E0E5EC] text-gray-800 rounded-full border border-gray-400 hover:bg-gray-200 transition-colors"
      >
        Apply Filters
      </button>
    </div>
  );
}

export default FilterBar;