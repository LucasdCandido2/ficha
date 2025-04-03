'use client';
import { useApp } from '@/context/AppContext';
import CharacterForm from '@/components/CharacterForm';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SystemCreator({ params }: { param : { system: string } }) {
    const { currentSystem, setCurrentSystem } = useApp();
    const router = useRouter();

    useEffect(() => {
        setCurrentSystem(params.system);
    }, [params.system]);

    return (
        <div className="container mx-auto p-4">
            <CharacterForm />
        </div>
    );
}