'use client';
import { useState } from 'react';
import CharacterForm from '../components/CharacterForm';
import CharacterSheet from '../components/CharacterSheet';
import Card from "../components/Card";
import { dnd5eConfig } from '../data/dnd5eConfig';
import { vampireConfig } from '../data/vampireConfig'; //Importe a configuração do sistema Vampire: The Masquerade
//Você também pode importar configurações para outros sistemas, como Pathfinder, Starfinder, vampire, etc.

//Se desejar, defina uma interface para os dados do personagem
interface CharacterData {
  nomePersonagem?: string;
  classe?: string;
  nivel?: number;
  raca?: string;
  background?: string;
  atributos?: {
    forca?: number;
    destreza?: number;
    constituicao?: number;
    inteligencia?: number;
    sabedoria?: number;
    carisma?: number;
  };
  habilidades?: string[];
  equipamentos?: string[];
  feitiços?: string[];
}

export default function HomePage() {
  const [system, setSystem] = useState('dnd5e');
  const [character, setCharacter] = useState<CharacterData | null>(null);

  const handleSystemChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCharacter(null);
    setSystem(e.target.value);
  };

  const handleCharacterSubmit = (data: CharacterData) => {
    setCharacter(data);
  };

  //Seleciona a configuração baseada no sistema escolhido
  let config = {};
  if (system === 'dnd5e') {
    config = dnd5eConfig;
  } else if (system === 'vampire') {
    config = vampireConfig; //Use a configuração do sistema Vampire: The Masquerade
  }


  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <Card system={system}>
        <h1 className="text-3xl font-bold mb-4 text-center">Criação de Fichas de RPG</h1>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Selecione o Sistema: </label>
          <select value={system} onChange={handleSystemChange} className="bg-gray-700 text-gray-100 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="dnd5e">D&D 5E</option>
            <option value="vampire">Vampire: The Masquerade</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {!character ? (
            <CharacterForm config={config} onSubmit={handleCharacterSubmit} />
          ) : (
            <CharacterSheet character={character} config={config} />
          )}
        </div>
      </Card>
    </main>
  );


} 