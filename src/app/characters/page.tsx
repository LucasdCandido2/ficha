'use client';
import { useState, useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Character } from '@/types/character';
import Link from 'next/link';
import { Plus, Sword } from 'lucide-react';

export default function CharactersPage() {
    const { currentSystem } = useApp();
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem('rpg-characters');
        if (saved) {
            setCharacters(JSON.parse(saved));
        }
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-primary">
                    Meus Personagens
                </h1>
                <Link
                    href="/characters/create"
                    className="btn-primary flex items-center gap-2"
                >
                    <Plus className="h-5 w-5" />
                    Novo Personagem
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Character Card */}
                <div className="card hover:shadow-xl transition-shadow">
                    <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-secondary p-3 rounded-full">
                                <Sword className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary">Nome do Personagem</h3>
                                <p className="text-gray-600 dark:text-gray-300">Sistema RPG</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-300">Nível</span>
                                <span className="font-medium">5</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-300">Classe</span>
                                <span className="font-medium">Guerreiro</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-300">Raça</span>
                                <span className="font-medium">Humano</span>
                            </div>
                        </div>
                        <div className="mt-6 flex gap-2">
                            <Link
                                href="/characters/1"
                                className="btn-secondary flex-1 text-center"
                            >
                                Ver Detalhes
                            </Link>
                            <button className="btn-primary flex-1">
                                Editar
                            </button>
                        </div>
                    </div>
                </div>

                {/* Empty State */}
                <div className="card col-span-full text-center py-12">
                    <Sword className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <h3 className="text-xl font-bold text-gray-600 dark:text-gray-300 mb-2">
                        Nenhum personagem criado
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                        Comece criando seu primeiro personagem
                    </p>
                    <Link
                        href="/characters/create"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <Plus className="h-5 w-5" />
                        Criar Personagem
                    </Link>
                </div>
            </div>
        </div>
    );
}