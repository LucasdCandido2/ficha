'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Castle, Skull } from 'lucide-react'

const campaigns = [
  {
    id: 'lost-mines',
    name: 'As Minas Perdidas de Phandelver',
    description: 'Uma aventura clássica de D&D 5e para iniciantes, onde os jogadores exploram as ruínas de uma antiga mina.',
    system: 'dnd5e',
    icon: Castle,
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    id: 'vampire-chicago',
    name: 'Chicago by Night',
    description: 'Uma campanha de Vampire: The Masquerade ambientada na cidade de Chicago, onde os jogadores enfrentam intrigas políticas entre os clãs.',
    system: 'vampire',
    icon: Skull,
    color: 'bg-red-500/10 text-red-500',
  },
]

export function CampaignsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {campaigns.map((campaign) => (
        <Link key={campaign.id} href={`/campaigns/${campaign.id}`}>
          <Card className="hover:bg-accent transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${campaign.color}`}>
                  <campaign.icon className="h-6 w-6" />
                </div>
                <CardTitle>{campaign.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{campaign.description}</p>
              <p className="text-xs text-muted-foreground mt-2">
                Sistema: {campaign.system === 'dnd5e' ? 'D&D 5e' : 'Vampire: The Masquerade'}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
} 