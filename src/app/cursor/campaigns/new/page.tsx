import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Nav } from '@/components/nav'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export default function NewCampaignPage() {
  return (
    <div className="container mx-auto py-8">
      <Nav />
      
      <div className="max-w-2xl mx-auto mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Criar Nova Campanha</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome da Campanha</Label>
                <Input id="name" placeholder="Ex: A Jornada do Anel" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea 
                  id="description" 
                  placeholder="Descreva a história e o mundo da campanha..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="system">Sistema</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um sistema" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dnd5e">Dungeons & Dragons 5e</SelectItem>
                    <SelectItem value="tormenta20">Tormenta20</SelectItem>
                    <SelectItem value="pathfinder">Pathfinder</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxPlayers">Número Máximo de Jogadores</Label>
                <Input id="maxPlayers" type="number" min="1" max="10" defaultValue="4" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="difficulty">Dificuldade</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a dificuldade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Fácil</SelectItem>
                    <SelectItem value="medium">Médio</SelectItem>
                    <SelectItem value="hard">Difícil</SelectItem>
                    <SelectItem value="veryHard">Muito Difícil</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="schedule">Horário das Sessões</Label>
                <Input id="schedule" placeholder="Ex: Todo sábado às 19h" />
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline" type="button">
                  Cancelar
                </Button>
                <Button type="submit">
                  Criar Campanha
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 