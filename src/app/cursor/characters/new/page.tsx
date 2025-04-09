import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Nav } from '@/components/nav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function NewCharacterPage() {
  return (
    <div className="container mx-auto py-8">
      <Nav />

      <div className="max-w-2xl mx-auto mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Criar Novo Personagem</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome do Personagem</Label>
                <Input id="name" placeholder="Ex: Gandalf" />
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
                <Label htmlFor="campaign">Campanha</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma campanha" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Nenhuma</SelectItem>
                    <SelectItem value="campaign1">A Jornada do Anel</SelectItem>
                    <SelectItem value="campaign2">Aventuras em Faerun</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="race">Raça</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma raça" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="human">Humano</SelectItem>
                    <SelectItem value="elf">Elfo</SelectItem>
                    <SelectItem value="dwarf">Anão</SelectItem>
                    <SelectItem value="halfling">Halfling</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="class">Classe</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma classe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wizard">Mago</SelectItem>
                    <SelectItem value="fighter">Guerreiro</SelectItem>
                    <SelectItem value="rogue">Ladino</SelectItem>
                    <SelectItem value="cleric">Clérigo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="level">Nível</Label>
                <Input id="level" type="number" min="1" max="20" defaultValue="1" />
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline" type="button">
                  Cancelar
                </Button>
                <Button type="submit">Criar Personagem</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
