import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Criação do Sistema",
  description: "Guia completo para criação de sistemas de RPG",
}

export default function CreationPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Criação do Sistema</h1>
      
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
    </div>
  )
} 