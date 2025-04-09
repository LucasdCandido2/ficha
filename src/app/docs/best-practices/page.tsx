import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Boas Práticas",
  description: "Guia de boas práticas para criação de sistemas de RPG",
}

export default function BestPracticesPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Boas Práticas</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Recomendações para Criadores de Sistemas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Badge variant="secondary">1</Badge>
              </div>
              <div>
                <h4 className="font-semibold">Organização</h4>
                <p>Mantenha seus sistemas e compendiums bem organizados. Use nomes descritivos e categorias lógicas para facilitar a navegação.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Badge variant="secondary">2</Badge>
              </div>
              <div>
                <h4 className="font-semibold">Documentação</h4>
                <p>Documente bem as regras e fórmulas do seu sistema. Inclua exemplos e explicações claras para facilitar o entendimento.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Badge variant="secondary">3</Badge>
              </div>
              <div>
                <h4 className="font-semibold">Testes</h4>
                <p>Teste as fórmulas e cálculos antes de usar em campanhas. Verifique se os resultados estão dentro do esperado.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Badge variant="secondary">4</Badge>
              </div>
              <div>
                <h4 className="font-semibold">Backup</h4>
                <p>Faça backup regular dos seus dados. Mantenha cópias de segurança em locais diferentes.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Badge variant="secondary">5</Badge>
              </div>
              <div>
                <h4 className="font-semibold">Colaboração</h4>
                <p>Compartilhe sistemas com outros usuários para feedback. Aproveite a comunidade para melhorar seu sistema.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 