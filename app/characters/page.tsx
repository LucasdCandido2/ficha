'use client'

import { Nav } from '@/components/nav'

export default function CharactersPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <Nav />
        <h1 className="text-4xl font-bold mt-8">Personagens</h1>
        <p className="mt-4 text-lg">Gerencie seus personagens aqui.</p>
      </div>
    </main>
  )
} 