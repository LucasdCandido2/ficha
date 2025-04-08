'use client';
import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { RPGSystem } from '@/types/system';

export default function NewSystemWizard() {
    const { addNewSystem } = useApp();
    const [newSystem, setNewSystem] = useState({
        id: '',
        name: '',
        theme: { primary: '#000000', secondary: '#ffffff' }
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newSystem.id && newSystem.name) {
            addNewSystem({
                ...newSystem,
                version: '1.0',
                title: newSystem.name, // Adicione esta linha
                fields: [],
                calculations: {},
                validationRules: {}
            } as RPGSystem);
        }
    };

    return (
        <div className="p-6 bg-gray-800 rounded-lg">
            <h2 className="text-2xl mb-4">Criar Novo Sistema</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="ID do Sistema"
                        className="bg-gray-700 p-2 rounded"
                        value={newSystem.id}
                        onChange={(e) => setNewSystem({...newSystem, id: e.target.value})}
                    />
                    <input
                        type="text"
                        placeholder="Nome do Sistema"
                        className="bg-gray-700 p-2 rounded"
                        value={newSystem.name}
                        onChange={(e) => setNewSystem({...newSystem, name: e.target.value})}
                    />
                    <div className="flex gap-2">
                        <input
                            type="color"
                            value={newSystem.theme.primary}
                            onChange={(e) => setNewSystem({...newSystem, theme: {...newSystem.theme, primary: e.target.value}})}
                        />
                        <input
                            type="color"
                            value={newSystem.theme.secondary}
                            onChange={(e) => setNewSystem({...newSystem, theme: {...newSystem.theme, secondary: e.target.value}})}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
                >
                    Salvar Sistema
                </button>
            </form>
        </div>
    );
}