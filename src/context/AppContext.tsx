'use client';

import { createContext, useContext, useState } from 'react';

type AppContextType = {
    currentSystem: string;
    SetCurrentSystem: (system: string) => void;
    customSystems: any[];
    addNewSystem: (system: any) => void;
};

const AppContext = createContext<appContextType>({} as AppContextType);

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [currentSystem, setCurrentSystem] = useState('dnd5e');
    const [customSystems, setCustomSystems] = useState<any[]>([]);

    const addNewSystem = (system: any) => {
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