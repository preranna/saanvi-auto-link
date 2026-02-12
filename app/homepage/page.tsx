import Image from "next/image";
import Link from "next/link";

export function Homepage() {
  const bikes = [
    {
      name: "TVS Apache RTR 160 4V",
      slug: "apache-rtr-160-4v",
      image:
        "https://tvsnepal.com/images/product/Apache-RTR-160-4V--SE68a6c7f93553bENGINE-&-PERFORMANCE654cad5cce4731604v_spl2036-Fat--Bike.png",
      description: "Race-inspired performance with aggressive styling.",
      link: "https://tvsnepal.com/product/apache-rtr-160-4v-se",
    },
    {
      name: "TVS Ntorq 125",
      slug: "ntorq-125",
      image:
        "https://tvsnepal.com/images/product/Ntorq-XP-Red685ced33af853Ntorq-XP-red.png",
      description: "Smart scooter with Bluetooth and sporty look.",
      link: "https://tvsnepal.com/product/ntorq-xp",
    },
    {
      name: "TVS Raider 125",
      slug: "raider-125",
      image:
        "https://tvsnepal.com/images/product/Tvs-Raider-617e385d889eetvs-raider.jpg",
      description: "Stylish commuter bike with great mileage.",
      link: "https://tvsnepal.com/product/tvs-Raider-Fi",
    },
    {
      name: "TVS Ronin",
      slug: "tvs-ronin",
      image:
        "https://tvsnepal.com/images/product/Tvs-Ronin-6899a6602d11fSide-view.png",
      description: "Modern-retro motorcycle with powerful engine.",
      link: "https://tvsnepal.com/ronin/",
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
              src="https://tvsnepal.com/images/product/RTR-160-4V-Refresh-FD628739b93ac2fRTR-160-4V-Refresh-RD628738ab4bee9RTR-160-4V-RD60c1e66c9cb7dRTR-160-4V5cf8d295e83ca160_4v.png"
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
                <a
                  href={bike.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-4 py-2 rounded hover:bg-red-600 transition inline-block"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p>📍 Kathmandu, Nepal</p>
          <p>📞 01-5902361</p>
          <p>✉️ tvsshowroom@email.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-700 text-gray-400 py-6 text-center text-sm">
        © 2026 TVS Showroom. All Rights Reserved.
      </footer>
    </main>
  );
}
