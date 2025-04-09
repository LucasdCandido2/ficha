'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dice5, Droplets } from 'lucide-react'

const systems = [
  {
    id: 'dnd5e',
    name: 'Dungeons & Dragons 5e',
    description: 'O sistema de RPG mais popular do mundo, com foco em fantasia medieval e aventuras épicas.',
    icon: Dice5,
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    id: 'vampire',
    name: 'Vampire: The Masquerade',
    description: 'Um jogo de horror pessoal onde você interpreta um vampiro lutando para manter sua humanidade.',
    icon: Droplets,
    color: 'bg-red-500/10 text-red-500',
  },
]

export function SystemsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {systems.map((system) => (
        <Link key={system.id} href={`/systems/${system.id}`}>
          <Card className="hover:bg-accent transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${system.color}`}>
                  <system.icon className="h-6 w-6" />
                </div>
                <CardTitle>{system.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{system.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
} 