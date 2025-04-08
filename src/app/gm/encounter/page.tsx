'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Monster, Character } from '@prisma/client';

interface Participant {
  id: string;
  name: string;
  type: 'monster' | 'character';
  initiative: number;
  hp: number;
  maxHp: number;
  data: any;
}

export default function EncounterPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [currentTurn, setCurrentTurn] = useState<number>(0);
  const [isRollingInitiative, setIsRollingInitiative] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  const rollInitiative = () => {
    setIsRollingInitiative(true);
    const updatedParticipants = participants.map(participant => ({
      ...participant,
      initiative: Math.floor(Math.random() * 20) + 1 + (participant.data.stats?.dexterity || 0)
    }));

    // Ordena por iniciativa
    updatedParticipants.sort((a, b) => b.initiative - a.initiative);
    setParticipants(updatedParticipants);
    setCurrentTurn(0);
    setIsRollingInitiative(false);
  };

  const nextTurn = () => {
    setCurrentTurn((prev) => (prev + 1) % participants.length);
  };

  const updateHp = (index: number, change: number) => {
    setParticipants(prev => prev.map((p, i) => {
      if (i === index) {
        const newHp = Math.max(0, Math.min(p.maxHp, p.hp + change));
        return { ...p, hp: newHp };
      }
      return p;
    }));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Encontro de Combate</h1>

      <div className="mb-6 flex gap-4">
        <button
          onClick={rollInitiative}
          disabled={isRollingInitiative || participants.length === 0}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Rolar Iniciativa
        </button>
        <button
          onClick={nextTurn}
          disabled={participants.length === 0}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Próximo Turno
        </button>
      </div>

      <div className="grid gap-4">
        {participants.map((participant, index) => (
          <div
            key={participant.id}
            className={`p-4 rounded-lg ${
              index === currentTurn
                ? 'bg-indigo-900 border-2 border-indigo-500'
                : 'bg-gray-800'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">
                  {participant.name}
                  <span className="ml-2 text-sm text-gray-400">
                    ({participant.type})
                  </span>
                </h3>
                <p className="text-sm text-gray-300">
                  Iniciativa: {participant.initiative}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateHp(index, -1)}
                  className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded"
                >
                  -1
                </button>
                <span>
                  HP: {participant.hp}/{participant.maxHp}
                </span>
                <button
                  onClick={() => updateHp(index, 1)}
                  className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded"
                >
                  +1
                </button>
              </div>
            </div>

            {participant.type === 'monster' && (
              <div className="mt-2">
                <h4 className="font-medium">Habilidades:</h4>
                <ul className="ml-4 text-sm">
                  {participant.data.abilities?.map((ability: any, i: number) => (
                    <li key={i}>
                      <strong>{ability.name}:</strong> {ability.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 