"use client";

import { JSX, useState } from "react";
import { useRouter } from "next/navigation";

export default function BookTestRide(): JSX.Element {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bike: "",
    datetime: "",
    notes: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const BUSINESS_START = 9; // 9AM
  const BUSINESS_END = 18; // 6PM

  // Validation functions
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) => /^[9][6-9][0-9]{8}$/.test(phone);

  const validateDateTime = (datetime: string) => {
    if (!datetime) return false;

    const selected = new Date(datetime);
    const now = new Date();
    const day = selected.getDay(); // 0 = Sunday, 6 = Saturday
    const hour = selected.getHours();

    if (selected <= now) return false; // Block past
    if (day === 0) return false; // Block Sat & Sun
    if (hour < BUSINESS_START || hour >= BUSINESS_END) return false; // Business hours

    return true;
  };

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!validateEmail(formData.email)) newErrors.email = "Invalid email.";
    if (!validatePhone(formData.phone))
      newErrors.phone = "Invalid phone number.";
    if (!formData.bike) newErrors.bike = "Please select a bike.";
    if (!validateDateTime(formData.datetime))
      newErrors.datetime = "Choose future date, Sun–Fri, between 9AM–6PM.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      setLoading(true);
      const response = await fetch("https://formspree.io/f/xvzbkvbp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
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
          datetime: "",
          notes: "",
        });

        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        alert("Failed to submit. Try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Submission error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-100 p-8 rounded-3xl shadow-lg">
            {success && (
              <p className="bg-green-100 text-green-700 p-4 rounded mb-6 text-center font-semibold">
                ✅ Test ride request submitted successfully! We will contact
                soon..
              </p>
            )}

            <form onSubmit={handleSubmit} className="grid gap-6">
              {/* Name */}
              <div>
                <label className="block font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-600"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-600"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-600"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Bike Model */}
              <div>
                <label className="block font-semibold mb-2">
                  Select Bike Model
                </label>
                <select
                  name="bike"
                  value={formData.bike}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-600"
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
                  <p className="text-red-600 text-sm mt-1">{errors.bike}</p>
                )}
              </div>

              {/* Date & Time */}
              <div>
                <label className="block font-semibold mb-2">
                  Preferred Date & Time
                </label>
                <input
                  type="datetime-local"
                  name="datetime"
                  value={formData.datetime}
                  onChange={handleChange}
                  min={new Date().toISOString().slice(0, 16)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-600"
                />
                {errors.datetime && (
                  <p className="text-red-600 text-sm mt-1">{errors.datetime}</p>
                )}
              </div>

              {/* Notes */}
              <div>
                <label className="block font-semibold mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-600"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-bold hover:scale-105 transition"
                >
                  {loading ? "Submitting..." : "Book Test Ride"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
