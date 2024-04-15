'use client'

import { useState, useEffect } from 'react';
import { getCharacterByName, CharacterName} from '@/app/lib/api';


const CharacterDetail: React.FC<{ slug: string }> = ({ slug }) => {
  const [character, setCharacter] = useState<CharacterName | null>(null);
  
  useEffect(() => {
    async function fetchCharacter() {
      try {
        const characterData = await getCharacterByName(slug);
          console.log('Datos del personaje recibidos:', characterData);
        setCharacter(characterData[0] || null);
      } catch (error) {
        console.error('Error fetching character data:', error);
      }
    }
    fetchCharacter();
  }, [slug]);
  
  if (!character) {
    return <div>No se encontraron datos del personaje</div>;
  }

  return (
    <div>
    <h1>{character.name}</h1>
    {/* No está funcionando, esto es para probar solamente */}
  </div>
  );
};


export default CharacterDetail;
