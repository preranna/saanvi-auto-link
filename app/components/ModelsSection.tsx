import { JSX } from "react";
import BikeCard, { Bike } from "./BikeCard";

export default function ModelsSection(): JSX.Element {
  const bikes: Bike[] = [
    {
      name: "TVS Apache RTR 160 4V SE",
      image:
        "https://tvsnepal.com/images/product/Apache-RTR-160-4V--SE68a6c7f93553bENGINE-&-PERFORMANCE654cad5cce4731604v_spl2036-Fat--Bike.png",
      description: "Race-inspired performance with aggressive styling.",
      link: "https://tvsnepal.com/product/apache-rtr-160-4v-se",
    },
    {
      name: "TVS Ntorq 125",
      image:
        "https://tvsnepal.com/images/product/Ntorq-XP-Red685ced33af853Ntorq-XP-red.png",
      description: "Smart scooter with Bluetooth and sporty look.",
      link: "https://tvsnepal.com/product/ntorq-xp",
    },
    {
      name: "TVS Raider 125",
      image:
        "https://tvsnepal.com/images/product/Tvs-Raider-617e385d889eetvs-raider.jpg",
      description: "Stylish commuter bike with great mileage.",
      link: "https://tvsnepal.com/product/tvs-Raider-Fi",
    },
    {
      name: "TVS Ronin",
      image:
        "https://tvsnepal.com/images/product/Tvs-Ronin-6899a6602d11fSide-view.png",
      description: "Modern-retro motorcycle with powerful engine.",
      link: "https://tvsnepal.com/ronin/",
    },
  ];

  return (
    <section id="models" className="relative bg-white py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-600 text-sm font-semibold tracking-wide inline-block mb-4">
            OUR COLLECTION
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-clip-text text-transparent">
            Popular Models
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our premium range of TVS motorcycles and scooters, crafted
            for performance and style
          </p>
        </div>

        {/* Bikes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {bikes.map((bike, index) => (
            <BikeCard key={index} bike={bike} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            {/* View All Models */}
            <a
              href="https://tvsnepal.com/shop"
              className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/30 hover:scale-105 flex items-center gap-2"
            >
              View All Models
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

            {/* Schedule Test Ride */}
            <a
              href="/book-servicing"
              className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl font-bold hover:border-red-600 hover:text-red-600 transition-all duration-300 hover:scale-105"
            >
              Schedule Servicing
            </a>
          </div>
        </div>

        {/* Features Strip */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
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
              <h4 className="font-bold text-gray-900 mb-1">Genuine Parts</h4>
              <p className="text-sm text-gray-600">100% Authentic</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Best Prices</h4>
              <p className="text-sm text-gray-600">Competitive Rates</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
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
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Expert Service</h4>
              <p className="text-sm text-gray-600">Certified Technicians</p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
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
              <h4 className="font-bold text-gray-900 mb-1">Fast Delivery</h4>
              <p className="text-sm text-gray-600">Quick Processing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
