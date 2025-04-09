export interface Character {
  id: string
  name: string
  level: number
  race: string
  class: string
  system: string
  campaignId?: string
  userId: string
  attributes: {
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
  }
  combatStats: {
    hp: number
    maxHp: number
    ac: number
    initiative: number
    speed: number
  }
  inventory: {
    items: Array<{
      name: string
      quantity: number
      description?: string
    }>
  }
} 