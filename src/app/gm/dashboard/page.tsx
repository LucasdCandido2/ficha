'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Campaign, Character, Monster } from '@prisma/client';

interface CampaignWithDetails extends Campaign {
  players: {
    id: string;
    name: string;
    characters: Character[];
  }[];
}

export default function GMDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [campaigns, setCampaigns] = useState<CampaignWithDetails[]>([]);
  const [selectedCampaign, setSelectedCampaign] = useState<string>('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [isGeneratingMonster, setIsGeneratingMonster] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    } else if (session?.user?.id) {
      fetchCampaigns();
    }
  }, [session, status, router]);

  const fetchCampaigns = async () => {
    try {
      const response = await fetch('/api/gm/campaigns');
      const data = await response.json();
      setCampaigns(data);
      if (data.length > 0) {
        setSelectedCampaign(data[0].id);
      }
    } catch (error) {
      console.error('Erro ao buscar campanhas:', error);
    }
  };

  const handleGenerateMonster = async () => {
    if (!selectedCampaign) return;

    setIsGeneratingMonster(true);
    try {
      const response = await fetch('/api/gm/generate-monster', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          campaignId: selectedCampaign,
        }),
      });
      const monster = await response.json();
      setMonsters((prev) => [...prev, monster]);
    } catch (error) {
      console.error('Erro ao gerar monstro:', error);
    } finally {
      setIsGeneratingMonster(false);
    }
  };

  const selectedCampaignData = campaigns.find((c) => c.id === selectedCampaign);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Painel do Mestre</h1>

      {/* Seletor de Campanha */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-2">Campanha</label>
        <select
          value={selectedCampaign}
          onChange={(e) => setSelectedCampaign(e.target.value)}
          className="w-full p-2 bg-gray-700 rounded"
        >
          {campaigns.map((campaign) => (
            <option key={campaign.id} value={campaign.id}>
              {campaign.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Lista de Jogadores */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Jogadores</h2>
          <div className="bg-gray-800 rounded-lg p-4">
            {selectedCampaignData?.players.map((player) => (
              <div key={player.id} className="mb-4 last:mb-0">
                <h3 className="text-lg font-medium">{player.name}</h3>
                <div className="ml-4">
                  {player.characters.map((character) => (
                    <div key={character.id} className="text-sm text-gray-300">
                      {character.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gerador de Monstros */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Monstros</h2>
          <div className="bg-gray-800 rounded-lg p-4">
            <button
              onClick={handleGenerateMonster}
              disabled={isGeneratingMonster || !selectedCampaign}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded mb-4 disabled:opacity-50"
            >
              {isGeneratingMonster ? 'Gerando...' : 'Gerar Monstro'}
            </button>

            <div className="space-y-4">
              {monsters.map((monster) => (
                <div key={monster.id} className="bg-gray-700 p-3 rounded">
                  <h4 className="font-medium">{monster.name}</h4>
                  <pre className="text-sm mt-2 overflow-x-auto">
                    {JSON.stringify(monster.data, null, 2)}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 