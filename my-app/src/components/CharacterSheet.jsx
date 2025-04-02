import {calcularBonus} from '../utils/calculos';

export default function CharacterSheet({ character, config}) {
    return (
        <div>
            <h2>{config.title} - Ficha Completa</h2>
            <p><strong>Nome:</strong> {character.nomePersonagem}</p>
            <p><strong>Raça:</strong> {character.raca}</p>
            <p><strong>Classe:</strong> {character.classe}</p>
            <p><strong>Nivel:</strong> {character.nivel}</p>
            {character.atributos && (
                <div>
                    <h3>Atributos</h3>
                    {Object.entries(character.atributos).map(([KeyboardEvent,value]) => (
                        <p key={key}>
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value} (Bônus: {calcularBonus(Number(value))})
                        </p>
                    ))}
                </div>
            )}
            <p><strong>Pontos de Vida:</strong> {character.pontosVida}</p>
            <p><strong>Nivel de Magia:</strong> {character.nivelMagia}</p>
            {character.pericias && (
                <div>
                    <h3>Perícias</h3>
                    {Object.entries(character.pericias).map(([key, value]) => (
                        <p key={key}>
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value ? 'Sim' : 'Não'}
                        </p>
                    ))}
                </div>
            )}
            {character.equipamentos && (
                <div>
                    <h3>Equipamentos</h3>
                    {Object.entries(character.equipamentos).map(([key, value]) => (
                        <p key={key}>
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                        </p>
                    ))}
                </div>
            )}
            {character.habilidades && (
                <div>
                    <h3>Habilidades Especiais</h3>
                    {Object.entries(character.habilidades).map(([key, value]) => (
                        <p key={key}>
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                        </p>
                    ))}
                </div>
            )}
            {character.historico && (
                <div>
                    <h3>Histórico</h3>
                    <p>{character.historico}</p>
                </div>
            )}
            <button onClick={() => window.print()}>Imprimir</button>
            <button onClick={() => window.location.reload()}>Novo Personagem</button>
        </div>
    )
}