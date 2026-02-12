import Image from "next/image";

export function Homepage() {
  const bikes = [
    {
      name: "TVS Apache RTR 160 4V",
      image: "https://tvsnepal.com/product/apache-rtr-160-4v-se",
      description: "Race-inspired performance with aggressive styling.",
    },
    {
      name: "TVS Ntorq 125",
      image: "https://tvsnepal.com/product/ntorq-xp",
      description: "Smart scooter with Bluetooth and sporty look.",
    },
    {
      name: "TVS Raider 125",
      image: "https://tvsnepal.com/product/tvs-Raider-Fi",
      description: "Stylish commuter bike with great mileage.",
    },
    {
      name: "TVS Ronin",
      image: "https://tvsnepal.com/ronin/",
      description: "Modern-retro motorcycle with powerful engine.",
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="bg-black text-white py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-600">
            TVS Showroom - Saanvi Auto Link
          </h1>
          <div className="space-x-6 hidden md:flex">
            <a href="#" className="hover:text-red-500">
              Home
            </a>
            <a href="#" className="hover:text-red-500">
              Models
            </a>
            <a href="#" className="hover:text-red-500">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to Authorized TVS Showroom
            </h2>
            <p className="text-lg mb-6">
              Explore the latest TVS bikes and scooters in Nepal with best
              offers and service.
            </p>
            <button className="bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700 transition">
              Explore Models
            </button>
          </div>

          <div className="flex justify-center">
            <Image
              src=""
              alt="TVS Bike"
              width={500}
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-gray-600">
            We are an authorized TVS 2-wheeler dealer in Nepal offering genuine
            bikes, scooters, spare parts, EMI services and full maintenance
            support. Customer satisfaction is our priority.
          </p>
        </div>
      </section>

      {/* Models Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Models
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {bikes.map((bike, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-xl transition text-center"
              >
                <Image
                  src={bike.image}
                  alt={bike.name}
                  width={300}
                  height={200}
                  className="mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{bike.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{bike.description}</p>
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-red-600 transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p>📍 Kathmandu, Nepal</p>
          <p>📞 01-5902361</p>
          <p>✉️ tvsshowroom@email.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
        © 2026 TVS Nepal Showroom. All Rights Reserved.
      </footer>
    </main>
  );
}
