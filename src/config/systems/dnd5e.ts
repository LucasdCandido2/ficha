import { RPGSystem } from '@/types/system';

const dnd5eConfig: RPGSystem = {
  id: 'dnd5e',
  name: 'Dungeons & Dragons 5E',
  title: 'Ficha de Personagem D&D 5E',
  version: '1.0',
  theme: {
    primary: '#9b2226',
    secondary: '#f2cc8f'
  },
  fields: [
    // Campos básicos
    { name: 'nomePersonagem', label: 'Nome do Personagem', type: 'text' },
    { name: 'raca', label: 'Raça', type: 'text' },
    { name: 'classe', label: 'Classe', type: 'text' },
    { name: 'nivel', label: 'Nivel', type: 'number', min: 1 },
    // Grupo de Atributos
    {
      name: 'atributos',
      label: 'Atributos',
      type: 'group',
      fields: [
        { name: 'forca', label: 'Força', type: 'number', min: 1 },
        { name: 'destreza', label: 'Destreza', type: 'number', min: 1 },
        { name: 'constituicao', label: 'Constituição', type: 'number', min: 1 },
        { name: 'inteligencia', label: 'Inteligência', type: 'number', min: 1 },
        { name: 'sabedoria', label: 'Sabedoria', type: 'number', min: 1 },
        { name: 'carisma', label: 'Carisma', type: 'number', min: 1 }
      ]
    },
    // **Campos adicionais conforme a versão JavaScript**
    { name: 'pontosVida', label: 'Pontos de Vida', type: 'number', min: 1 },
    { name: 'nivelMagia', label: 'Nivel de Magia', type: 'number', min: 1 },
    {
      name: 'pericias',
      label: 'Perícias',
      type: 'group',
      fields: [
        { name: 'atletismo', label: 'Atletismo', type: 'checkbox' },
        { name: 'acrobacia', label: 'Acrobacia', type: 'checkbox' },
        { name: 'furtividade', label: 'Furtividade', type: 'checkbox' },
        { name: 'percepcao', label: 'Percepção', type: 'checkbox' },
        { name: 'intimidacao', label: 'Intimidação', type: 'checkbox' },
        { name: 'enganacao', label: 'Enganação', type: 'checkbox' }
      ]
    },
    {
      name: 'equipamentos',
      label: 'Equipamentos',
      type: 'group',
      fields: [
        { name: 'armas', label: 'Armas', type: 'text' },
        { name: 'armaduras', label: 'Armaduras', type: 'text' },
        { name: 'itens', label: 'Itens', type: 'text' }
      ]
    },
    {
      name: 'habilidades',
      label: 'Habilidades Especiais',
      type: 'group',
      fields: [
        { name: 'habilidade1', label: 'Habilidade 1', type: 'text' },
        { name: 'habilidade2', label: 'Habilidade 2', type: 'text' },
        { name: 'habilidade3', label: 'Habilidade 3', type: 'text' }
      ]
    },
    { name: 'historico', label: 'Histórico', type: 'textarea' }
  ],
  // Propriedade para cálculos
  calculations: {
    // Cálculo dos modificadores de atributos
    abilityModifiers: ({ atributos }) => ({
      forca: Math.floor((atributos.forca - 10) / 2),
      destreza: Math.floor((atributos.destreza - 10) / 2),
      constituicao: Math.floor((atributos.constituicao - 10) / 2),
      inteligencia: Math.floor((atributos.inteligencia - 10) / 2),
      sabedoria: Math.floor((atributos.sabedoria - 10) / 2),
      carisma: Math.floor((atributos.carisma - 10) / 2)
    }),
    // Cálculo do bônus de proficiência baseado no nível
    proficiencyBonus: ({ nivel }) => {
      if (nivel >= 1 && nivel <= 4) return 2;
      else if (nivel >= 5 && nivel <= 8) return 3;
      else if (nivel >= 9 && nivel <= 12) return 4;
      else if (nivel >= 13 && nivel <= 16) return 5;
      else if (nivel >= 17 && nivel <= 20) return 6;
      return 0;
    }
  }
};

export default dnd5eConfig;