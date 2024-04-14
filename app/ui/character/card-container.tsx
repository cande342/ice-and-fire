'use client'

import { useEffect, useState } from 'react';
import { getData, Character } from '@/app/lib/api';
import Link from 'next/link';

export default function CardContainer() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setCharacters(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-stretch -mx-4">
      {characters.map((character, index) => (
        <Link key={index} href={`/ui/character/${character.slug}`} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
          <article className="bg-white bg-opacity-10 p-8 rounded-lg flex flex-col h-full hover:border-gray-300">
            <h2 className="text-2xl font-bold text-gray-200 mb-2">{character.name}</h2>
            {character.house ? (
                                    <div>
                                        <span>{character.house.name}</span>
                                    </div>
                                    ) : (
                                    <span>No posee</span>
                                    )}
          </article>
        </Link>
      ))}
    </div>
  );
}
