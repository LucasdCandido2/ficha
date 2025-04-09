import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Documentação do Sistema',
  description: 'Guia completo para criação e uso do sistema de RPG',
}

export default function DocsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Documentação do Sistema</h1>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="creation">Criação</TabsTrigger>
          <TabsTrigger value="structure">Estrutura</TabsTrigger>
          <TabsTrigger value="best-practices">Boas Práticas</TabsTrigger>
          <TabsTrigger value="tips">Dicas</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Visão Geral do Sistema</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Este sistema foi projetado para ser flexível e adaptável a diferentes sistemas de RPG. 
                A estrutura permite que você crie e gerencie sistemas personalizados, fichas de personagens, 
                campanhas e encontros.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Sistemas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Defina as regras e mecânicas do seu RPG</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Personagens</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Crie e gerencie fichas de personagens</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Campanhas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Organize e conduza suas aventuras</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="creation">
          <Card>
            <CardHeader>
              <CardTitle>Fluxo de Criação</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="system">
                  <AccordionTrigger>Criação do Sistema</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p>Antes de criar fichas de personagens, você precisa definir um sistema.</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <Badge variant="outline">Nome</Badge>
                        <Badge variant="outline">Descrição</Badge>
                        <Badge variant="outline">Versão</Badge>
                        <Badge variant="outline">Atributos</Badge>
                        <Badge variant="outline">Habilidades</Badge>
                        <Badge variant="outline">Níveis</Badge>
                        <Badge variant="outline">Combate</Badge>
                        <Badge variant="outline">Dados</Badge>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="compendium">
                  <AccordionTrigger>Criação do Compendium</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p>O compendium é onde você armazena todas as informações compartilhadas do sistema.</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <Badge variant="outline">Monstros</Badge>
                        <Badge variant="outline">Itens</Badge>
                        <Badge variant="outline">Regras</Badge>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="campaign">
                  <AccordionTrigger>Criação de Campanhas</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p>As campanhas são onde as aventuras acontecem.</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <Badge variant="outline">Mestre</Badge>
                        <Badge variant="outline">Jogadores</Badge>
                        <Badge variant="outline">Personagens</Badge>
                        <Badge variant="outline">Encontros</Badge>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="structure">
          <Card>
            <CardHeader>
              <CardTitle>Estrutura de Dados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Sistema</h3>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    {`{
  "attributes": {
    "strength": { "name": "Força", "abbreviation": "FOR" },
    "dexterity": { "name": "Destreza", "abbreviation": "DES" }
  },
  "skills": {
    "acrobatics": { "name": "Acrobacia", "attribute": "dexterity" }
  }
}`}
                  </pre>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Personagem</h3>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    {`{
  "attributes": {
    "strength": 15,
    "dexterity": 14
  },
  "skills": {
    "acrobatics": 5
  }
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="best-practices">
          <Card>
            <CardHeader>
              <CardTitle>Boas Práticas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Badge variant="secondary">1</Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold">Organização</h4>
                    <p>Mantenha seus sistemas e compendiums bem organizados</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Badge variant="secondary">2</Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold">Documentação</h4>
                    <p>Documente bem as regras e fórmulas do seu sistema</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Badge variant="secondary">3</Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold">Testes</h4>
                    <p>Teste as fórmulas e cálculos antes de usar em campanhas</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tips">
          <Card>
            <CardHeader>
              <CardTitle>Dicas para Criadores de Sistemas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Badge variant="secondary">1</Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold">Comece Simples</h4>
                    <p>Defina primeiro os atributos e regras básicas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Badge variant="secondary">2</Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold">Teste as Fórmulas</h4>
                    <p>Verifique se todas as fórmulas funcionam corretamente</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Badge variant="secondary">3</Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold">Considere o Balanceamento</h4>
                    <p>Mantenha o jogo balanceado</p>
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