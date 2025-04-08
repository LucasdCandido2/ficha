'use client';

import { createContext, useContext, useState } from 'react';
import { RPGSystem } from '@/types/system';

interface AppContextType {
    currentSystem: string;
    setCurrentSystem: (system: string) => void; // Nome corrigido
    customSystems: RPGSystem[];
    addNewSystem: (system: RPGSystem) => void;
}

// Corrigir a criação do contexto
const AppContext = createContext<AppContextType>({} as AppContextType);

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [currentSystem, setCurrentSystem] = useState('dnd5e');
    const [customSystems, setCustomSystems] = useState<RPGSystem[]>([]);

    const addNewSystem = (system: RPGSystem) => {
        setCustomSystems([...customSystems, system]);
    };

    return (
        <AppContext.Provider value={{
            currentSystem,
            setCurrentSystem,
            customSystems,
            addNewSystem
        }}>
            {children}
        </AppContext.Provider>
    );
}

export const useApp = () => useContext(AppContext);