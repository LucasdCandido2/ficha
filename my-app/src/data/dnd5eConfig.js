export const dnd5eConfig = {
    title: 'Ficha de Personagem D&D 5E',
    fields:[
        { name: 'nomePersonagem', label: 'Nome do Personagem', type: 'text' },
        { name: 'raca', label: 'Raça', type: 'text' },
        { name: 'classe', label: 'Classe', type: 'text' },
        { name: 'nivel', label: 'Nivel', type: 'number', min:1 },
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
        { name: 'pontosVida', label: 'Pontos de Vida', type: 'number', min: 1 },
        { name: 'nivelMagia', label: 'Nivel de Magia', type: 'number', min: 1 },
        { name: 'pericias', label: 'Perícias', type: 'group', fields: [
            { name: 'atletismo', label: 'Atletismo', type: 'checkbox' },
            { name: 'acrobacia', label: 'Acrobacia', type: 'checkbox' },
            { name: 'furtividade', label: 'Furtividade', type: 'checkbox' },
            { name: 'percepcao', label: 'Percepção', type: 'checkbox' },
            { name: 'intimidacao', label: 'Intimidação', type: 'checkbox' },
            { name: 'enganacao', label: 'Enganação', type: 'checkbox' }
        ]},
        { name: 'equipamentos', label: 'Equipamentos', type: 'group', fields: [
            { name: 'armas', label: 'Armas', type: 'text' },
            { name: 'armaduras', label: 'Armaduras', type: 'text' },
            { name: 'itens', label: 'Itens', type: 'text' }
        ]},
        { name: 'habilidades', label: 'Habilidades Especiais', type: 'group', fields: [
            { name: 'habilidade1', label: 'Habilidade 1', type: 'text' },
            { name: 'habilidade2', label: 'Habilidade 2', type: 'text' },
            { name: 'habilidade3', label: 'Habilidade 3', type: 'text' }
        ]},
        { name: 'historico', label: 'Histórico', type: 'textarea' }
    ]
}