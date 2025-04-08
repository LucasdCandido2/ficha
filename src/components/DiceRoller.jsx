import { useState } from 'react';
import { rolarDado } from '../utils/rolarDado';

export default function DiceRoller() {
    const [resultado, setResultado] = useState<number | null>(null);
    const [dado, setDado] = useState<number>(20);

    const handleRoll = () => {
        setResultado(rolarDado(dado));
    };

    return (
        <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Rolagem de Dados</h3>
            <div className="mb-3">
                <label className="block text-sm mb-1">
                    Lados do dado:
                    <input
                        type='number'
                        value={dado}
                        onChange={(e) => setDado(Math.max(2, Number(e.target.value)))}
                        min='2'
                        className="ml-2 bg-gray-700 text-gray-100 rounded px-2 py-1"
                    />
                </label>
            </div>
            <button 
                onClick={handleRoll}
                className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded"
            >
                Rolar Dado
            </button>
            {resultado && <p className="mt-2">Resultado: {resultado}</p>}
        </div>
    );
}