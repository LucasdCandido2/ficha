'use client'

import { Nav } from '@/components/nav'
import { SystemsGrid } from '@/components/systems-grid'
import { CampaignsGrid } from '@/components/campaigns-grid'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <Nav />
        <div className="mt-8">
          <h1 className="text-4xl font-bold">Bem-vindo ao Sistema de Fichas de RPG</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Gerencie seus personagens, campanhas e sistemas de RPG em um só lugar.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Sistemas Disponíveis</h2>
          <SystemsGrid />
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Campanhas em Andamento</h2>
          <CampaignsGrid />
        </div>
      </div>
    </main>
  )
} 