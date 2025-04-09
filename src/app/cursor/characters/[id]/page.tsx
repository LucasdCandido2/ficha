'use client'

import { Nav } from '@/components/nav'
import { useParams } from 'next/navigation'

export default function CharacterDetailPage() {
  const params = useParams()
  const characterId = params?.id as string

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <Nav />
        <h1 className="text-4xl font-bold mt-8">Detalhes do Personagem {characterId}</h1>
        <p className="mt-4 text-lg">Visualize e edite os detalhes do seu personagem aqui.</p>
      </div>
    </main>
  )
} 