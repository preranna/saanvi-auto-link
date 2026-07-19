"use client";

import Image from "next/image";
import { JSX } from "react";

import ModelsSection from "./components/ModelsSection";
import Footer from "./components/ Footer";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-40 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full blur-3xl"></div>

          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-800 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full text-red-500 text-sm font-semibold tracking-wide backdrop-blur-sm">
                AUTHORIZED DEALER
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              Welcome to
              <span className="block bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent">
                TVS Showroom
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
              Explore the latest TVS bikes and scooters in Nepal with unbeatable
              offers and premium service excellence.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://tvsnepal.com/shop"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-xl font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/50 hover:scale-105 flex items-center gap-2"
              >
                Explore Models
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>

              <a
                href="#contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
              <div>
                <div className="text-3xl font-black text-red-500">15+</div>
                <div className="text-sm text-gray-400">Models Available</div>
              </div>

              <div>
                <div className="text-3xl font-black text-red-500">1000+</div>
                <div className="text-sm text-gray-400">Happy Customers</div>
              </div>

              <div>
                <div className="text-3xl font-black text-red-500">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-600/20 rounded-3xl blur-2xl"></div>

            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-red-800/20 rounded-3xl blur-2xl"></div>

            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-800">
              <Image
                src="https://tvsnepal.com/images/product/RTR-160-4V-Refresh-FD628739b93ac2fRTR-160-4V-Refresh-RD628738ab4bee9RTR-160-4V-RD60c1e66c9cb7dRTR-160-4V5cf8d295e83ca160_4v.png"
                alt="TVS Bike"
                width={500}
                height={400}
                className="rounded-2xl hover:scale-105 transition-transform duration-500"
              />

              {/* Badges */}
              <div className="absolute -top-4 -left-4 bg-red-600 text-white px-4 py-2 rounded-xl font-bold shadow-lg">
                Featured
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white text-black px-6 py-3 rounded-xl font-bold shadow-lg">
                RTR 160 4V
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Models */}
      <ModelsSection />

      {/* Contact */}
      <section
        id="contact"
        className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24 overflow-hidden"
      >
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Ready to Ride?
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Visit our showroom or reach out to us for the best deals on TVS
              bikes and scooters
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Visit */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-400">Kathmandu, Nepal</p>
            </div>

            {/* Call */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-400">01-5902361</p>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold mb-2">Email Us</h3>

              <p className="text-gray-400 break-all">
                saanviautolink@gmail.com
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href="/book-test-ride"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-xl font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/50 hover:scale-105"
            >
              Book Your Test Ride Now
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
