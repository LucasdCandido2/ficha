import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Nav } from '@/components/nav'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function EditSystemPage({ params }: { params: { id: string } }) {
  // TODO: Buscar dados do sistema pelo ID
  const system = {
    name: 'Dungeons & Dragons 5e',
    version: '5.0',
    description: 'Um sistema de RPG de fantasia medieval...',
    attributes: 'Força\nDestreza\nConstituição\nInteligência\nSabedoria\nCarisma',
    skills: 'Acrobacia\nArcanismo\nAtletismo\nEnganação\nFurtividade\nHistória',
    combat: 'O combate é dividido em rodadas...',
    dice: 'D20 para testes de habilidade...'
  }

  return (
    <div className="container mx-auto py-8">
      <Nav />
      
      <div className="max-w-2xl mx-auto mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Editar Sistema</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome do Sistema</Label>
                <Input 
                  id="name" 
                  defaultValue={system.name}
                  placeholder="Ex: Dungeons & Dragons 5e" 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="version">Versão</Label>
                <Input 
                  id="version" 
                  defaultValue={system.version}
                  placeholder="Ex: 5.0" 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea 
                  id="description" 
                  defaultValue={system.description}
                  placeholder="Descreva o sistema e suas principais características..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="attributes">Atributos</Label>
                <Textarea 
                  id="attributes" 
                  defaultValue={system.attributes}
                  placeholder="Liste os atributos do sistema (um por linha)..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Habilidades</Label>
                <Textarea 
                  id="skills" 
                  defaultValue={system.skills}
                  placeholder="Liste as habilidades do sistema (uma por linha)..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="combat">Regras de Combate</Label>
                <Textarea 
                  id="combat" 
                  defaultValue={system.combat}
                  placeholder="Descreva as regras de combate..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dice">Sistema de Dados</Label>
                <Textarea 
                  id="dice" 
                  defaultValue={system.dice}
                  placeholder="Descreva o sistema de dados utilizado..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline" type="button">
                  Cancelar
                </Button>
                <Button type="submit">
                  Salvar Alterações
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 