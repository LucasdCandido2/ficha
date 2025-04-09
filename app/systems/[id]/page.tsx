import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Nav } from '@/components/nav'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function SystemPage({ params }: { params: { id: string } }) {
  // TODO: Buscar dados do sistema pelo ID
  const system = {
    name: 'Dungeons & Dragons 5e',
    version: '5.0',
    description: 'Um sistema de RPG de fantasia medieval...',
    attributes: ['Força', 'Destreza', 'Constituição', 'Inteligência', 'Sabedoria', 'Carisma'],
    skills: ['Acrobacia', 'Arcanismo', 'Atletismo', 'Enganação', 'Furtividade', 'História'],
    combat: 'O combate é dividido em rodadas...',
    dice: 'D20 para testes de habilidade...'
  }

  return (
    <div className="container mx-auto py-8">
      <Nav />
      
      <div className="max-w-4xl mx-auto mt-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{system.name}</h1>
          <div className="space-x-2">
            <Link href={`/systems/${params.id}/edit`}>
              <Button variant="outline">Editar</Button>
            </Link>
            <Button variant="destructive">Excluir</Button>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações Gerais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Versão</h3>
                  <p>{system.version}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Descrição</h3>
                  <p className="whitespace-pre-line">{system.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Atributos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {system.attributes.map((attr) => (
                  <div key={attr} className="p-4 border rounded-lg">
                    <h3 className="font-semibold">{attr}</h3>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Habilidades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {system.skills.map((skill) => (
                  <div key={skill} className="p-4 border rounded-lg">
                    <h3 className="font-semibold">{skill}</h3>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Regras de Combate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-line">{system.combat}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sistema de Dados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-line">{system.dice}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 