'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Character } from '@/types/character';
import type { System } from '@/types/system';

interface AppContextType {
  characters: Character[];
  systems: System[];
  campaigns: unknown[];
  addCharacter: (character: Character) => void;
  addSystem: (system: System) => void;
  addCampaign: (campaign: unknown) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [systems, setSystems] = useState<System[]>([]);
  const [campaigns, setCampaigns] = useState<unknown[]>([]);

  const addCharacter = (character: Character) => {
    setCharacters([...characters, character]);
  };

  const addSystem = (system: System) => {
    setSystems([...systems, system]);
  };

  const addCampaign = (campaign: unknown) => {
    setCampaigns([...campaigns, campaign]);
  };

  return (
    <AppContext.Provider
      value={{
        characters,
        systems,
        campaigns,
        addCharacter,
        addSystem,
        addCampaign,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
