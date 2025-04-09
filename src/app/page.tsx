'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Card from '../components/Card';
import { Sword, BookOpen, Users } from 'lucide-react';
// import router from 'next/router';

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

export default function Home() {
    const router = useRouter();

    const handleNewSystem = () => {
        console.log('Novo sistema clicado');
        router.push('/create-system');
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-primary text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-accent">
                            RPG System
                        </h1>
                        <p className="text-xl md:text-2xl mb-8">
                            Gerencie suas campanhas, personagens e sistemas de RPG em um só lugar
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link
                                href="/auth/signup"
                                className="btn-primary text-lg px-8 py-3"
                            >
                                Começar Agora
                            </Link>
                            <Link
                                href="/systems"
                                className="btn-secondary text-lg px-8 py-3"
                            >
                                Explorar Sistemas
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-primary">
                        Recursos Principais
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card p-6 text-center">
                            <Sword className="h-12 w-12 mx-auto mb-4 text-accent" />
                            <h3 className="text-xl font-bold mb-2">Personagens</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Crie e gerencie seus personagens com facilidade. Mantenha todas as suas fichas organizadas e acessíveis.
                            </p>
                        </div>
                        <div className="card p-6 text-center">
                            <BookOpen className="h-12 w-12 mx-auto mb-4 text-accent" />
                            <h3 className="text-xl font-bold mb-2">Sistemas</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Explore diferentes sistemas de RPG e encontre o que melhor se adapta ao seu estilo de jogo.
                            </p>
                        </div>
                        <div className="card p-6 text-center">
                            <Users className="h-12 w-12 mx-auto mb-4 text-accent" />
                            <h3 className="text-xl font-bold mb-2">Campanhas</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Organize suas campanhas, gerencie jogadores e mantenha o controle da história.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-secondary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Pronto para começar sua aventura?
                    </h2>
                    <p className="text-xl mb-8">
                        Junte-se a milhares de jogadores e mestres que já estão usando nosso sistema.
                    </p>
                    <Link
                        href="/auth/signup"
                        className="btn-primary text-lg px-8 py-3"
                    >
                        Criar Conta Gratuita
                    </Link>
                </div>
            </section>
        </div>
    );
}