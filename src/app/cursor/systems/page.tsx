import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Nav } from '@/components/nav';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function SystemsPage() {
  return (
    <div className="container mx-auto py-8">
      <Nav />

      <div className="flex justify-between items-center mt-8 mb-4">
        <h1 className="text-2xl font-bold">Sistemas</h1>
        <Link href="/cursor/systems/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Novo Sistema
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Exemplo de sistema */}
        <Link href="/cursor/systems/dnd5e">
          <Card className="hover:bg-accent transition-colors">
            <CardHeader>
              <CardTitle>Dungeons & Dragons 5e</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Versão: 5.0</p>
                <p className="text-sm text-muted-foreground">Criador: Wizards of the Coast</p>
                <p className="text-sm text-muted-foreground">Personagens: 10</p>
                <p className="text-sm text-muted-foreground">Campanhas: 3</p>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Adicione mais sistemas aqui */}
      </div>
    </div>
  );
}
