import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Estrutura do Sistema",
  description: "Guia completo da estrutura de dados do sistema",
}

export default function StructurePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Estrutura do Sistema</h1>
      
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
  },
  "levels": {
    "experience": { "type": "points", "formula": "level * 1000" }
  },
  "combat": {
    "initiative": { "formula": "dexterity + 1d20" },
    "armorClass": { "formula": "10 + dexterity" }
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
  },
  "level": 1,
  "experience": 0
}`}
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Monstro</h3>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                {`{
  "name": "Goblin",
  "attributes": {
    "strength": 8,
    "dexterity": 14
  },
  "hitPoints": 7,
  "armorClass": 15,
  "speed": 30,
  "actions": [
    {
      "name": "Scimitar",
      "attack": "4",
      "damage": "1d6+2"
    }
  ]
}`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 