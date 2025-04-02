import { useState } from 'react';
import { rolarDado } from '../utils/rolarDado'; // Importando a função rolarDado

export default function DiceRoller() {
    const [resultado, setResultado] = useState(null);
    const [dado, setDado] = useState(20);

    const handleRoll = () => {
        setResultado(rolarDado(dado));
    };

    return (
        <div>
            <h3>Rolagem de Dados</h3>
            <div>
                <label>
                    Lados do dado:
                    <input
                        type='number'
                        value={dado}
                        onChange={(e) => setDado(Number(e.target.value))}
                        min='2'
                    />
                </label>
            </div>
            <button onClick={handleRoll}>Rolar Dado</button>
            {resultado && <p>Resultado: {resultado}</p>}
        </div>
    );
}