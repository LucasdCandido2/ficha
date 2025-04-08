'use client';
import { useState, useEffect } from 'react';
import { useApp } from '@/context/AppContext';

export default function CharacterList() {
    const { currentSystem } = useApp();
    const [characters, setCharacters] = useState<any[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem('rpg-characters');
        if (saved) {
            setCharacters(JSON.parse(saved));
        }
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Personagens Salvos</h1>
            <div className="grid gap-4">
                {characters.map((char, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded">
                        <h2 className="text-xl font-semibold">
                            {char.data.nomePersonagem || 'Personagem sem nome'}
                        </h2>
                        <p className="text-gray-400">
                            Sistema: {char.system}
                        </p>
                        <p className="text-sm text-gray-500">
                            Criado em: {new Date(char.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}