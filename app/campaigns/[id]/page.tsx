import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Nav } from '@/components/nav'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Edit, Users, ScrollText, Sword, Map } from 'lucide-react'

export default function CampaignPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto py-8">
      <Nav />
      
      <div className="flex justify-between items-center mt-8 mb-4">
        <h1 className="text-2xl font-bold">A Jornada do Anel</h1>
        <Button variant="outline">
          <Edit className="mr-2 h-4 w-4" />
          Editar
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Informações Básicas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p><span className="font-medium">Sistema:</span> D&D 5e</p>
              <p><span className="font-medium">Mestre:</span> Gandalf</p>
              <p><span className="font-medium">Jogadores:</span> 4/4</p>
              <p><span className="font-medium">Dificuldade:</span> Médio</p>
              <p><span className="font-medium">Horário:</span> Todo sábado às 19h</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Descrição</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Uma jornada épica através da Terra Média para destruir o Um Anel e derrotar o Senhor das Trevas Sauron.
              Os heróis enfrentarão perigos, descobrirão segredos antigos e farão escolhas que moldarão o destino do mundo.
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="players" className="mt-8">
        <TabsList>
          <TabsTrigger value="players">
            <Users className="mr-2 h-4 w-4" />
            Jogadores
          </TabsTrigger>
          <TabsTrigger value="characters">
            <ScrollText className="mr-2 h-4 w-4" />
            Personagens
          </TabsTrigger>
          <TabsTrigger value="encounters">
            <Sword className="mr-2 h-4 w-4" />
            Encontros
          </TabsTrigger>
          <TabsTrigger value="world">
            <Map className="mr-2 h-4 w-4" />
            Mundo
          </TabsTrigger>
        </TabsList>

        <TabsContent value="players">
          <Card>
            <CardHeader>
              <CardTitle>Jogadores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Gandalf</p>
                    <p className="text-sm text-muted-foreground">Mestre</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Mensagem
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Frodo</p>
                    <p className="text-sm text-muted-foreground">Jogador</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Mensagem
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Aragorn</p>
                    <p className="text-sm text-muted-foreground">Jogador</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Mensagem
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Legolas</p>
                    <p className="text-sm text-muted-foreground">Jogador</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Mensagem
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="characters">
          <Card>
            <CardHeader>
              <CardTitle>Personagens</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Frodo Bolseiro</p>
                    <p className="text-sm text-muted-foreground">Ladino Nível 3</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Ver Ficha
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Aragorn</p>
                    <p className="text-sm text-muted-foreground">Guerreiro Nível 3</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Ver Ficha
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Legolas</p>
                    <p className="text-sm text-muted-foreground">Arqueiro Nível 3</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Ver Ficha
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="encounters">
          <Card>
            <CardHeader>
              <CardTitle>Encontros</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Ataque dos Orcs</p>
                    <p className="text-sm text-muted-foreground">Dificuldade: Médio</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Iniciar
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Encontro com Gollum</p>
                    <p className="text-sm text-muted-foreground">Dificuldade: Fácil</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Iniciar
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Batalha de Helm's Deep</p>
                    <p className="text-sm text-muted-foreground">Dificuldade: Difícil</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Iniciar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="world">
          <Card>
            <CardHeader>
              <CardTitle>Mundo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Locais Importantes</h3>
                  <div className="mt-2 space-y-2">
                    <p>• O Condado</p>
                    <p>• Valfenda</p>
                    <p>• Moria</p>
                    <p>• Lothlórien</p>
                    <p>• Mordor</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Fações</h3>
                  <div className="mt-2 space-y-2">
                    <p>• A Sociedade do Anel</p>
                    <p>• O Conselho Branco</p>
                    <p>• Os Cavaleiros de Rohan</p>
                    <p>• O Exército de Mordor</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 