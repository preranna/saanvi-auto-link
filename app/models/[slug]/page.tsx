import { notFound } from "next/navigation";

const bikes = [
  {
    name: "TVS Apache RTR 160 4V",
    slug: "apache-rtr-160-4v",
    description: "Race-inspired performance with aggressive styling.",
    price: "Rs. 3,25,900",
  },
  {
    name: "TVS Ntorq 125",
    slug: "ntorq-125",
    description: "Smart scooter with Bluetooth and sporty look.",
    price: "Rs. 2,85,900",
  },
  {
    name: "TVS Raider 125",
    slug: "raider-125",
    description: "Stylish commuter bike with great mileage.",
    price: "Rs. 2,70,900",
  },
  {
    name: "TVS Ronin",
    slug: "tvs-ronin",
    description: "Modern-retro motorcycle with powerful engine.",
    price: "Rs. 4,50,900",
  },
];

export default function BikeDetail({ params }: { params: { slug: string } }) {
  const bike = bikes.find((b) => b.slug === params.slug);

  if (!bike) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4">{bike.name}</h1>
        <p className="text-gray-600 mb-4">{bike.description}</p>
        <p className="text-xl font-semibold text-red-600 mb-6">{bike.price}</p>

        <button className="bg-black text-white px-6 py-3 rounded hover:bg-red-600 transition">
          Book Now
        </button>
      </div>
    </div>
  );
}
