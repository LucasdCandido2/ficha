'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Card from '../components/Card';
import { Sword, BookOpen, Users } from 'lucide-react';
import { AuthForm } from '@/components/auth/auth-form';
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
        <div className="min-h-screen flex flex-col">
            <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Ficha</h1>
                    <p className="text-lg mb-8">Sistema de gerenciamento de fichas de RPG</p>
                    <AuthForm />
                </div>
            </div>
        </div>
    );
}