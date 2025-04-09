export interface System {
  id: string
  name: string
  description: string
  version: string
  attributes: {
    name: string
    type: 'number' | 'string' | 'boolean'
    required: boolean
  }[]
  classes: {
    name: string
    description: string
    features: string[]
  }[]
  races: {
    name: string
    description: string
    traits: string[]
  }[]
} 