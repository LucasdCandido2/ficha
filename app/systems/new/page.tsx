import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Nav } from '@/components/nav'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function NewSystemPage() {
  return (
    <div className="container mx-auto py-8">
      <Nav />
      
      <div className="max-w-2xl mx-auto mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Criar Novo Sistema</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome do Sistema</Label>
                <Input id="name" placeholder="Ex: Dungeons & Dragons 5e" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="version">Versão</Label>
                <Input id="version" placeholder="Ex: 5.0" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea 
                  id="description" 
                  placeholder="Descreva o sistema e suas principais características..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="attributes">Atributos</Label>
                <Textarea 
                  id="attributes" 
                  placeholder="Liste os atributos do sistema (um por linha)..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Habilidades</Label>
                <Textarea 
                  id="skills" 
                  placeholder="Liste as habilidades do sistema (uma por linha)..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="combat">Regras de Combate</Label>
                <Textarea 
                  id="combat" 
                  placeholder="Descreva as regras de combate..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dice">Sistema de Dados</Label>
                <Textarea 
                  id="dice" 
                  placeholder="Descreva o sistema de dados utilizado..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline" type="button">
                  Cancelar
                </Button>
                <Button type="submit">
                  Criar Sistema
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 