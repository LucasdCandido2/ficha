import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Dicas para Criadores",
  description: "Dicas e truques para criar sistemas de RPG",
}

export default function TipsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Dicas para Criadores</h1>
      
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
                <p>Defina primeiro os atributos e regras básicas. Não tente implementar todas as mecânicas de uma vez.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Badge variant="secondary">2</Badge>
              </div>
              <div>
                <h4 className="font-semibold">Teste as Fórmulas</h4>
                <p>Verifique se todas as fórmulas funcionam corretamente. Teste com diferentes valores e situações.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Badge variant="secondary">3</Badge>
              </div>
              <div>
                <h4 className="font-semibold">Considere o Balanceamento</h4>
                <p>Mantenha o jogo balanceado. Evite criar habilidades ou itens muito poderosos ou muito fracos.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Badge variant="secondary">4</Badge>
              </div>
              <div>
                <h4 className="font-semibold">Documente Tudo</h4>
                <p>Mantenha documentação clara das regras. Inclua exemplos e explicações detalhadas.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Badge variant="secondary">5</Badge>
              </div>
              <div>
                <h4 className="font-semibold">Peça Feedback</h4>
                <p>Compartilhe com outros jogadores para melhorias. Aproveite diferentes perspectivas para refinar seu sistema.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 