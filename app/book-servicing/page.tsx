"use client";

import { JSX, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Types
interface FormData {
  name: string;
  email: string;
  phone: string;
  vehicleType: string;
  model: string;
  registration: string;
  km: string;
  service: string;
  datetime: string;
  notes: string;
}

interface FormErrors {
  [key: string]: string;
}

// Constants
const BUSINESS_HOURS = {
  START: 9,
  END: 18,
  CLOSED_DAYS: [0], // Sunday
};

const MODELS = [
  "TVS Apache RTR 160 4V",
  "TVS Apache RTR 200 4V",
  "TVS Raider 125",
  "TVS Ronin",
  "TVS Ntorq 125",
  "TVS Jupiter",
  "TVS XL100",
];

const SERVICES = [
  "Periodic Service",
  "Engine Oil Change",
  "General Checkup",
  "Brake Service",
  "Chain & Sprocket Service",
  "Battery Check",
  "Engine Repair",
  "Accident Repair",
  "Insurance Claim",
];

export default function BookService(): JSX.Element {
  const router = useRouter();

  // State
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    vehicleType: "",
    model: "",
    registration: "",
    km: "",
    service: "",
    datetime: "",
    notes: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [minDateTime, setMinDateTime] = useState("");
  // Validation Methods
  const validatePhone = (phone: string): boolean => {
    return /^[9][6-9][0-9]{8}$/.test(phone);
  };
  useEffect(() => {
    const now = new Date();

    const localDateTime = new Date(
      now.getTime() - now.getTimezoneOffset() * 60000
    )
      .toISOString()
      .slice(0, 16);

    setMinDateTime(localDateTime);
  }, []);
  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateDate = (datetime: string): boolean => {
    if (!datetime) return false;

    const date = new Date(datetime);
    const now = new Date();

    // Check if past time
    if (date <= now) return false;

    // Check if closed day (Sunday)
    if (BUSINESS_HOURS.CLOSED_DAYS.includes(date.getDay())) return false;

    // Check business hours
    const hour = date.getHours();
    return hour >= BUSINESS_HOURS.START && hour < BUSINESS_HOURS.END;
  };

  const validate = (): FormErrors => {
    const error: FormErrors = {};

    if (!formData.name.trim()) {
      error.name = "Name is required";
    }

    if (!validateEmail(formData.email)) {
      error.email = "Please enter a valid email";
    }

    if (!validatePhone(formData.phone)) {
      error.phone = "Please enter a valid phone number";
    }

    if (!formData.vehicleType) {
      error.vehicleType = "Please select vehicle type";
    }

    if (!formData.model) {
      error.model = "Please select model";
    }

    if (!formData.service) {
      error.service = "Please select service type";
    }

    if (!validateDate(formData.datetime)) {
      error.datetime = "Choose a future date (Mon–Sat) between 9 AM and 6 PM";
    }

    return error;
  };

  // Event Handlers
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const submitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const validation = validate();
    setErrors(validation);

    if (Object.keys(validation).length > 0) return;

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
          vehicleType: "",
          model: "",
          registration: "",
          km: "",
          service: "",
          datetime: "",
          notes: "",
        });

        setTimeout(() => {
          router.push("/");
        }, 1500);
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-600 text-sm font-semibold tracking-wide inline-block mb-6">
              PROFESSIONAL SERVICE
            </span>
            <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-clip-text text-transparent">
              Schedule Vehicle Service
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Book your TVS bike or scooter for expert service. Our certified
              technicians will ensure your vehicle runs perfectly.
            </p>
          </div>

          {/* Form Container */}
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-red-600/5 rounded-3xl blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-red-800/5 rounded-3xl blur-2xl pointer-events-none"></div>

            <div className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-2xl rounded-3xl p-8 sm:p-10 md:p-12">
              {/* Success Message */}
              {success && (
                <div className="mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/60 p-6 flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-green-800 text-lg">
                        Service booking submitted!
                      </p>
                      <p className="text-green-700 text-sm">
                        Our team will contact you shortly to confirm.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={submitHandler} className="space-y-8">
                {/* Name */}
                <div className="group">
                  <label className="flex items-center gap-2 font-bold text-gray-900 mb-3 text-sm">
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 text-base rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent focus:bg-white transition duration-300 placeholder-gray-400"
                    required
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                      <span>⚠</span> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Email */}
                  <div className="group">
                    <label className="flex items-center gap-2 font-bold text-gray-900 mb-3 text-sm">
                      <svg
                        className="w-5 h-5 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3.5 text-base rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent focus:bg-white transition duration-300 placeholder-gray-400"
                      required
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                        <span>⚠</span> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="group">
                    <label className="flex items-center gap-2 font-bold text-gray-900 mb-3 text-sm">
                      <svg
                        className="w-5 h-5 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      Phone <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="98XXXXXXXX"
                      className="w-full px-4 py-3.5 text-base rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent focus:bg-white transition duration-300 placeholder-gray-400"
                      required
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                        <span>⚠</span> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Vehicle Type & Model Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Vehicle Type */}
                  <div className="group">
                    <label className="flex items-center gap-2 font-bold text-gray-900 mb-3 text-sm">
                      <svg
                        className="w-5 h-5 text-red-600"
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
                      Vehicle Type <span className="text-red-600">*</span>
                    </label>
                    <select
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 text-base rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent focus:bg-white transition duration-300 text-gray-700 appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23DC2626' stroke-width='2'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                        backgroundSize: "1.25rem",
                        paddingRight: "2.5rem",
                      }}
                      required
                    >
                      <option value="">Select Vehicle Type</option>
                      <option value="Bike">Bike</option>
                      <option value="Scooter">Scooter</option>
                    </select>
                    {errors.vehicleType && (
                      <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                        <span>⚠</span> {errors.vehicleType}
                      </p>
                    )}
                  </div>

                  {/* Model */}
                  <div className="group">
                    <label className="flex items-center gap-2 font-bold text-gray-900 mb-3 text-sm">
                      <svg
                        className="w-5 h-5 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20.059 11.2098A4.992 4.992 0 0019.5 4a4.99 4.99 0 00-4.5 2.5H9c-1.657 0-3 1.343-3 3s1.343 3 3 3h.5c.02.32.038.641.059.96a7 7 0 11-13.917-1.17c.094-.522.154-1.057.154-1.79 0-.976-.132-1.924-.379-2.823A4.992 4.992 0 004.5 4c2.761 0 5 2.239 5 5h5.5a4.99 4.99 0 014.5 2.5A4.99 4.99 0 0124 16c0 2.761-2.239 5-5 5-1.381 0-2.632-.558-3.535-1.465-1.316 1.316-3.135 2.133-5.165 2.133-4.14 0-7.5-3.36-7.5-7.5S4.86 7.668 9 7.668c2.03 0 3.849.817 5.165 2.133C16.368 9.558 17.619 9 19 9c2.761 0 5 2.239 5 5"
                        />
                      </svg>
                      Model <span className="text-red-600">*</span>
                    </label>
                    <select
                      name="model"
                      value={formData.model}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 text-base rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent focus:bg-white transition duration-300 text-gray-700 appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23DC2626' stroke-width='2'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                        backgroundSize: "1.25rem",
                        paddingRight: "2.5rem",
                      }}
                      required
                    >
                      <option value="">Select Model</option>
                      {MODELS.map((model) => (
                        <option key={model} value={model}>
                          {model}
                        </option>
                      ))}
                    </select>
                    {errors.model && (
                      <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                        <span>⚠</span> {errors.model}
                      </p>
                    )}
                  </div>
                </div>

                {/* Registration & KM Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Registration */}
                  <div className="group">
                    <label className="flex items-center gap-2 font-bold text-gray-900 mb-3 text-sm">
                      <svg
                        className="w-5 h-5 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Registration Number
                    </label>
                    <input
                      type="text"
                      name="registration"
                      value={formData.registration}
                      onChange={handleChange}
                      placeholder="Ba 2 Pa 1234"
                      className="w-full px-4 py-3.5 text-base rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent focus:bg-white transition duration-300 placeholder-gray-400"
                    />
                  </div>

                  {/* KM Reading */}
                  <div className="group">
                    <label className="flex items-center gap-2 font-bold text-gray-900 mb-3 text-sm">
                      <svg
                        className="w-5 h-5 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Kilometer Reading
                    </label>
                    <input
                      type="number"
                      name="km"
                      value={formData.km}
                      onChange={handleChange}
                      placeholder="Enter current KM"
                      className="w-full px-4 py-3.5 text-base rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent focus:bg-white transition duration-300 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div className="group">
                  <label className="flex items-center gap-2 font-bold text-gray-900 mb-3 text-sm">
                    <svg
                      className="w-5 h-5 text-red-600"
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Service Type <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 text-base rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent focus:bg-white transition duration-300 text-gray-700 appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23DC2626' stroke-width='2'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1.25rem",
                      paddingRight: "2.5rem",
                    }}
                    required
                  >
                    <option value="">Select Service Type</option>
                    {SERVICES.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                      <span>⚠</span> {errors.service}
                    </p>
                  )}
                </div>

                {/* Date & Time */}
                <div className="group">
                  <label className="flex items-center gap-2 font-bold text-gray-900 mb-3 text-sm">
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Preferred Date & Time{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="datetime-local"
                    name="datetime"
                    value={formData.datetime}
                    min={minDateTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-red-600 outline-none"
                  />
                  {errors.datetime && (
                    <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                      <span>⚠</span> {errors.datetime}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-2">
                    🕐 We're open Mon–Sat, 9 AM to 6 PM
                  </p>
                </div>

                {/* Notes */}
                <div className="group">
                  <label className="flex items-center gap-2 font-bold text-gray-900 mb-3 text-sm">
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe any issues or problems with your vehicle..."
                    className="w-full px-4 py-3.5 text-base rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent focus:bg-white transition duration-300 resize-none placeholder-gray-400"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-red-600/40 hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
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
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Schedule Service
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Service Info */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-center text-xs text-gray-500 uppercase tracking-wide mb-6">
                  Expert Service by Certified Technicians
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg
                        className="w-5 h-5 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Quality Parts</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg
                        className="w-5 h-5 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Quick Service</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg
                        className="w-5 h-5 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Warranty</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg
                        className="w-5 h-5 text-red-600"
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
                    </div>
                    <span className="text-sm text-gray-600">Performance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
