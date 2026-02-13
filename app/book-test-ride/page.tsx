"use client";
import { JSX, useState } from "react";

export default function BookTestRide(): JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bike: "",
    date: "",
    notes: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState(false);

  // Validate email
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Validate phone (Nepalese format example)
  const validatePhone = (phone: string) => /^[9][6-9][0-9]{8}$/.test(phone); // e.g., 98XXXXXXXX

  // Validate date (must be future)
  const validateDate = (date: string) => {
    const today = new Date();
    const selected = new Date(date);
    return selected > today;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!validateEmail(formData.email)) newErrors.email = "Invalid email.";
    if (!validatePhone(formData.phone))
      newErrors.phone = "Invalid phone number.";
    if (!formData.bike) newErrors.bike = "Please select a bike.";
    if (!validateDate(formData.date)) newErrors.date = "Select a future date.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      const response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          bike: "",
          date: "",
          notes: "",
        });
      } else {
        alert("Failed to submit. Try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Submission error.");
    }
  };

  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-black mb-6">
          Book Your Test Ride
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Fill in your details below and our team will contact you.
        </p>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-100 p-8 rounded-3xl shadow-lg">
            {success && (
              <p className="bg-green-100 text-green-700 p-4 rounded mb-4 text-center font-semibold">
                Test ride request submitted successfully!
              </p>
            )}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                />
                {errors.name && (
                  <p className="text-red-600 mt-1 text-sm">{errors.name}</p>
                )}
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
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                />
                {errors.email && (
                  <p className="text-red-600 mt-1 text-sm">{errors.email}</p>
                )}
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
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                />
                {errors.phone && (
                  <p className="text-red-600 mt-1 text-sm">{errors.phone}</p>
                )}
              </div>

              {/* Bike Model */}
              <div>
                <label htmlFor="bike" className="block font-semibold mb-2">
                  Select Bike Model
                </label>
                <select
                  name="bike"
                  id="bike"
                  value={formData.bike}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                >
                  <option value="">Choose a model</option>
                  <option value="TVS Apache RTR 160 4V SE">
                    TVS Apache RTR 160 4V SE
                  </option>
                  <option value="TVS Ntorq 125">TVS Ntorq 125</option>
                  <option value="TVS Raider 125">TVS Raider 125</option>
                  <option value="TVS Ronin">TVS Ronin</option>
                </select>
                {errors.bike && (
                  <p className="text-red-600 mt-1 text-sm">{errors.bike}</p>
                )}
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
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                />
                {errors.date && (
                  <p className="text-red-600 mt-1 text-sm">{errors.date}</p>
                )}
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block font-semibold mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  id="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any special requests..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                  rows={4}
                />
              </div>

              {/* Submit */}
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
