import { calcularBonus } from '../utils/calculos';

export default function CharacterSheet({ character, config }) {
    return (
        <div className="p-6 bg-gray-800 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">{config.title} - Ficha Completa</h2>
            <p className="mb-2"><strong>Nome:</strong> {character.nomePersonagem}</p>
            <p className="mb-2"><strong>Raça:</strong> {character.raca}</p>
            <p className="mb-2"><strong>Classe:</strong> {character.classe}</p>
            <p className="mb-2"><strong>Nivel:</strong> {character.nivel}</p>
            {character.atributos && (
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Atributos</h3>
                    {Object.entries(character.atributos).map(([key, value]) => (
                        <p key={key} className="mb-1">
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                        </p>
                    ))}
                </div>
            )}
            <p className="mb-1"><strong>Pontos de Vida:</strong> {character.pontosVida}</p>
            <p className="mb-1"><strong>Nivel de Magia:</strong> {character.nivelMagia}</p>
            {character.pericias && (
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Perícias</h3>
                    {Object.entries(character.pericias).map(([key, value]) => (
                        <p key={key} className="mb-1">
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value ? 'Sim' : 'Não'}
                        </p>
                    ))}
                </div>
            )}
            {character.equipamentos && (
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Equipamentos</h3>
                    {Object.entries(character.equipamentos).map(([key, value]) => (
                        <p key={key} className="mb-1">
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                        </p>
                    ))}
                </div>
            )}
            {character.habilidades && (
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Habilidades Especiais</h3>
                    {Object.entries(character.habilidades).map(([key, value]) => (
                        <p key={key} className="mb-1">
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                        </p>
                    ))}
                </div>
            )}
            {character.historico && (
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Histórico</h3>
                    <p className="mb-1">{character.historico}</p>
                </div>
            )}
            <div className="flex space-x-4 mt-4">
                <button onClick={() => window.print()} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Imprimir</button>
                <button onClick={() => window.location.reload()} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">Novo Personagem</button>
            </div>
        </div>
    )
}