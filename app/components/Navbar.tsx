import { JSX } from "react";

export default function Navbar(): JSX.Element {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-black via-gray-900 to-black text-white py-4 shadow-lg border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="flex items-center space-x-3">
          <div>
            <h1 className="text-3xl font-black bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent tracking-tight">
              SAANVI AUTO LINK
            </h1>
            <p className="text-xs text-gray-500 tracking-widest font-light">
              Authorized TVS Dealer
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="space-x-8 hidden md:flex items-center">
          <a
            href="#"
            className="relative group text-sm font-medium tracking-wide transition-colors duration-300 hover:text-red-500 text-gray-300"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#models"
            className="relative group text-sm font-medium tracking-wide transition-colors duration-300 hover:text-red-500 text-gray-300"
          >
            Models
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="relative group text-sm font-medium tracking-wide transition-colors duration-300 hover:text-red-500 text-gray-300"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="px-5 py-2 bg-gradient-to-r from-red-600 to-red-700 rounded-lg text-sm font-semibold transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:shadow-lg hover:shadow-red-600/50 hover:scale-105"
          >
            Book Test Ride
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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
    </nav>
  );
}
