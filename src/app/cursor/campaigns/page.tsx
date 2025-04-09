import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Nav } from '@/components/nav'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

export default function CampaignsPage() {
  return (
    <div className="container mx-auto py-8">
      <Nav />
      
      <div className="flex justify-between items-center mt-8 mb-4">
        <h1 className="text-2xl font-bold">Campanhas</h1>
        <Link href="/campaigns/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nova Campanha
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Exemplo de campanha */}
        <Link href="/campaigns/1">
          <Card className="hover:bg-accent transition-colors">
            <CardHeader>
              <CardTitle>A Jornada do Anel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Sistema: D&D 5e</p>
                <p className="text-sm text-muted-foreground">Mestre: Gandalf</p>
                <p className="text-sm text-muted-foreground">Jogadores: 4</p>
                <p className="text-sm text-muted-foreground">Status: Ativa</p>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Adicione mais campanhas aqui */}
      </div>
    </div>
  )
} 