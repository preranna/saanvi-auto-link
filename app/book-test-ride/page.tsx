import { JSX } from "react";

export default function BookTestRide(): JSX.Element {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-24">
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Book Your Test Ride
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Fill in your details below and our team will contact you to schedule your TVS test ride.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-100 p-8 rounded-3xl shadow-lg">
            <form
              action="/api/book-test-ride"
              method="POST"
              className="grid grid-cols-1 gap-6"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  placeholder="01-1234567"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                />
              </div>

              {/* Bike Model */}
              <div>
                <label htmlFor="bike" className="block font-semibold mb-2">
                  Select Bike Model
                </label>
                <select
                  name="bike"
                  id="bike"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                >
                  <option value="">Choose a model</option>
                  <option value="TVS Apache RTR 160 4V SE">TVS Apache RTR 160 4V SE</option>
                  <option value="TVS Ntorq 125">TVS Ntorq 125</option>
                  <option value="TVS Raider 125">TVS Raider 125</option>
                  <option value="TVS Ronin">TVS Ronin</option>
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label htmlFor="date" className="block font-semibold mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                />
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block font-semibold mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  id="notes"
                  placeholder="Any special requests..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/30 hover:scale-105"
                >
                  Book Test Ride
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
