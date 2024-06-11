export interface Character {
  name: string;
  slug: string;
  house: {
    slug: string;
    name: string;
  }[];
}

export type CharacterName = {
  name: string;
  house: {
      slug: string;
      name: string;
  }[];
  quotes: string[];
}

export type House = {
  slug: string;
  name: string;
  members: {
    name: string;
    slug: string;
  }[];
};

export async function getData(): Promise<Character[]> {
  try {
    const res = await fetch('https://api.gameofthronesquotes.xyz/v1/characters');
    if (!res.ok) {
      throw new Error('No se pudo obtener los datos');
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function getHouse(): Promise<House[]> {
  try {
    const res = await fetch('https://api.gameofthronesquotes.xyz/v1/houses');
    if (!res.ok) {
      throw new Error('No se pudo obtener los datos');
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function getCharacterByName(name: string): Promise<CharacterName[]> {
  try {
    const res = await fetch(`https://api.gameofthronesquotes.xyz/v1/character/${name}`);
    if (!res.ok) {
      throw new Error('No se pudo obtener los datos');
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
