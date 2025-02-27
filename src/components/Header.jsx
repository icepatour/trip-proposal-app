import React from 'react';

function Header({ onFilterToggle }) {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-gray-800">Trip Proposals</h1>
      {/* Filter Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-gray-600 cursor-pointer"
        onClick={onFilterToggle} // Toggle filter visibility
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </div>
  );
}

export default Header;