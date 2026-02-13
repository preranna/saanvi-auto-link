import Image from "next/image";
import { JSX } from "react";

export interface Bike {
  name: string;
  image: string;
  description: string;
  link: string;
}

interface BikeCardProps {
  bike: Bike;
}

export default function BikeCard({ bike }: BikeCardProps): JSX.Element {
  return (
    <div
      className="group bg-gray-100 rounded-xl p-6 shadow-md 
                 hover:shadow-2xl hover:-translate-y-2 hover:scale-105
                 transition-all duration-300 ease-in-out 
                 text-center cursor-pointer"
    >
      <div className="w-full h-48 relative mb-4 overflow-hidden">
        <Image
          src={bike.image}
          alt={bike.name}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <h3 className="text-lg font-semibold mb-2">{bike.name}</h3>

      <p className="text-gray-600 text-sm mb-4">{bike.description}</p>

      <a
        href={bike.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white px-4 py-2 rounded 
                   hover:bg-red-600 transition inline-block"
      >
        View Details
      </a>
    </div>
  );
}
