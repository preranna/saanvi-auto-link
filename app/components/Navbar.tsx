"use client";

import Link from "next/link";
import { JSX, useState } from "react";

export default function Navbar(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = (): void => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black via-gray-900 to-black text-white py-4 shadow-lg border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center shadow-lg shadow-red-600/50 ring-2 ring-red-500/30">
              <span className="text-white font-black text-2xl">S</span>
            </div>

            <div>
              <h1 className="text-3xl font-black bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent tracking-tight">
                SAANVI AUTO LINK
              </h1>

              <p className="text-xs text-gray-500 tracking-widest font-light">
                Authorized TVS Dealer
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="space-x-8 hidden md:flex items-center">
            <a
              href="/"
              className="relative group text-sm font-medium tracking-wide transition-colors duration-300 hover:text-red-500 text-gray-300"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="/#models"
              className="relative group text-sm font-medium tracking-wide transition-colors duration-300 hover:text-red-500 text-gray-300"
            >
              Models
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="/#contact"
              className="relative group text-sm font-medium tracking-wide transition-colors duration-300 hover:text-red-500 text-gray-300"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <Link
              href="/book-test-ride"
              className="group px-5 py-2 bg-gradient-to-r from-red-600 to-red-700 rounded-lg text-sm font-semibold transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:shadow-lg hover:shadow-red-600/50 hover:scale-105 flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Book Test Ride
            </Link>

            <Link
              href="/book-servicing"
              className="group px-5 py-2 bg-gradient-to-r from-red-600 to-red-700 rounded-lg text-sm font-semibold transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:shadow-lg hover:shadow-red-600/50 hover:scale-105 flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
              </svg>
              Schedule Service
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-90" : ""
              }`}
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

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-0 right-0 z-40 md:hidden bg-gradient-to-b from-gray-900 to-black border-b border-red-900/30 transform transition-all duration-300 ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
          <a
            href="/"
            onClick={closeMobileMenu}
            className="block px-4 py-3 rounded-lg text-gray-300 hover:text-red-500 hover:bg-red-600/10 transition-all duration-300 font-medium"
          >
            🏠 Home
          </a>

          <a
            href="/#models"
            onClick={closeMobileMenu}
            className="block px-4 py-3 rounded-lg text-gray-300 hover:text-red-500 hover:bg-red-600/10 transition-all duration-300 font-medium"
          >
            🏍️ Models
          </a>

          <a
            href="/#contact"
            onClick={closeMobileMenu}
            className="block px-4 py-3 rounded-lg text-gray-300 hover:text-red-500 hover:bg-red-600/10 transition-all duration-300 font-medium"
          >
            📞 Contact
          </a>

          <div className="border-t border-gray-800 pt-4 space-y-3">
            <Link
              href="/book-test-ride"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg text-white font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Book Test Ride
            </Link>

            <Link
              href="/book-servicing"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg text-white font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
              </svg>
              Schedule Service
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar Spacer - Add this to prevent content from hiding under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}
