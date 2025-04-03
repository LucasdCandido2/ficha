'use cliente';
import Link from 'next/link';
import Card from '../components/Card';

const systems = [
    {
        id: 'dnd5e',
        name: 'Dungeons & Dragons 5E',
        description: 'Sistema classico de fantasia medieval',
        color: 'bg-dnd-primary'
    },
    {
        id: 'vampire',
        name: 'Vampire: The Masquerade',
        description: 'RPG de horror pessoal e conspiração',
        color: 'bg-vampire-primary'
    }
];

export default function LandingPage() {
    const handleNewSystem = () => {
        //Logica temporaria - pode ser um modal ou redirecionamento
        console.log('Novo sistema clicado');
    };
    return (
        <main className="min-h-screen bg-gray-900 text-gray-100 p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">Escolha Seu Sitema RPG</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {systems.map((system) => (
                        <Link
                            key={system.id}
                            href={`/creator/${system.id}`}
                            className={`${system.color} p-6 rounded-lg transform transition hover:scale-105`}
                        >
                            <h2 className="text-2xl font-bold mb-2">{system.name}</h2>
                            <p className="text-gray-200">{system.description}</p>
                        </Link>
                    ))}
                </div>
                <div className="text-center">
                    <button
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
                        // onClick={handleNewSystem}
                    >
                        + Criar Novo Sistema
                    </button>
                </div>
            </div>
        </main>
    );
}