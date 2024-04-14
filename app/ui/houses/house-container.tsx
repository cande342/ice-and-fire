'use client'
import { useEffect, useState } from 'react';
import { getHouse,
    House
} from "@/app/lib/api";// Importa el tipo House
import Image from 'next/image';

const HouseContainer: React.FC = () => {
  const [houses, setHouses] = useState<House[]>([]); // Estado para almacenar las casas

  useEffect(() => {
    // Llama a la función getHouse para obtener las casas y actualiza el estado
    getHouse()
      .then((data) => setHouses(data))
      .catch((error) => console.error('Error fetching houses:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {houses.map((house, index) => (
        <div key={index} className="bg-white bg-opacity-10 p-4 rounded-lg flex flex-col h-full">
          <Image src={`/houses/${house.slug}.jpg`} alt={house.name} className="mb-2" width={250} height={300}/>
          <div className="text-gray-600 mb-2">
            <strong>{house.name}</strong>
          </div>
          <div className="text-sm text-gray-400 mb-2">
            {house.members && house.members.length > 0 ? (
                <div>
                <strong>Some members:</strong>
                <ul>
                    {house.members.map((member, index) => (
                    <li key={index}>{member.name}</li>
                    ))}
                </ul>
                </div>
            ) : (
                <span>No members</span>
            )}
            </div>
        </div>
      ))}
    </div>
  );
};

export default HouseContainer;
