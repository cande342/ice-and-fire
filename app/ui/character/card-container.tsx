'use client'

import { useEffect, useState } from 'react';
import { getData, Character } from '@/app/lib/api';
import Link from 'next/link';

export default function CardContainer() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);
  const [selectedQuote, setSelectedQuote] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        console.log('Fetched data:', data); // Verificar datos aquí
        setCharacters(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const handleCharacterClick = (index: number) => {
    if (selectedCharacter === index) {
      // Si ya está seleccionado, deseleccionar
      setSelectedCharacter(null);
      setSelectedQuote(null);
    } else {
      // Seleccionar nuevo personaje y una cita aleatoria
      setSelectedCharacter(index);
      const quotes = characters[index].quotes;
      if (quotes && quotes.length > 0) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setSelectedQuote(randomQuote);
      } else {
        setSelectedQuote(null);
      }
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-stretch -mx-4">
      {characters.map((character, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
          <article className="bg-white bg-opacity-10 p-8 rounded-lg flex flex-col h-full hover:border-gray-300">
            <h2
              className="text-2xl font-bold text-gray-200 mb-2 cursor-pointer"
              onClick={() => handleCharacterClick(index)}
            >
              {character.name}
            </h2>
            {character.house ? (
              <div>
                <span>{character.house.name}</span>
              </div>
            ) : (
              <span>No posee</span>
            )}
            {selectedCharacter === index && selectedQuote && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-200">Quote:</h3>
                <p className="text-gray-400">{selectedQuote}</p>
              </div>
            )}
          </article>
        </div>
      ))}
    </div>
  );
}
