import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  return (
    <nav className="bg-[#E0E5EC] py-4 shadow-neumorphism fixed top-0 w-full z-50">
      {/* Container for Navbar Content */}
      <div className="flex items-center justify-between px-6">
        {/* Logo */}
        <div>
          <img
            src="https://icepatour.wordpress.com/wp-content/uploads/2025/01/icepatour_wm.png"
            alt="Icepa Tour Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation Links (Hidden on Small Screens) */}
        <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#destinations" className="hover:text-blue-600 transition-colors">Destinations</a>
          <a href="#join-trip" className="hover:text-blue-600 transition-colors">Join Trip</a>
        </div>

        {/* Social Media Icons and Chat Button */}
        <div className="flex items-center space-x-4">
          {/* Social Media Icons */}
          <div className="flex space-x-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 hover:text-blue-600 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 hover:text-pink-600 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 hover:text-black transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19c-4.3 0-7.8-3.5-7.8-7.8 0-4.3 3.5-7.8 7.8-7.8 1.8 0 3.4.6 4.8 1.6l-.4 2.1c-.5-.3-1.1-.5-1.8-.5-2.2 0-4 1.8-4 4s1.8 4 4 4c.8 0 1.5-.3 2.1-.8l.1-.1.6-.3v.1c0 1.3.8 2.4 2 3-1 .1-2 .4-2.8 1l-.5-.1c-.2-.1-.4-.1-.6-.1-.8 0-1.5.3-2.1.8L9 19z"
                />
              </svg>
            </a>
          </div>

          {/* Chat Button */}
          <button className="bg-[#E0E5EC] text-gray-800 px-4 py-2 rounded-full shadow-neumorphism hover:bg-gray-200 transition-colors">
            Chat
          </button>
        </div>

        {/* Hamburger Menu Icon (Visible on Small Screens) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible When Open) */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#E0E5EC] py-4 px-6 shadow-neumorphism">
          <div className="flex flex-col space-y-4 text-gray-800 font-medium">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#destinations" className="hover:text-blue-600 transition-colors">Destinations</a>
            <a href="#join-trip" className="hover:text-blue-600 transition-colors">Join Trip</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;