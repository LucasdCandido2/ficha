//src/data/vampireConfig.js
export const vampireConfig = {
    title: 'Ficha de Personagem - Vampire: The Masquerade',
    fields: [
        { name: 'nomePersonagem', label: 'Nome do Personagem', type: 'text' },
        { name: 'jogador', label: 'Nome do Jogador', type: 'text' },
        { name: 'clan', label: 'Clã', type: 'text' },
        { name: 'natureza', label: 'Natureza', type: 'text' },
        { name: 'comportamento', label: 'Comportamento', type: 'text' },
        { name: 'geracao', label: 'Geração', type: 'number', min: 1 },
        //Atributos - Vampire trabalha com tres grupos de atributos: Físicos, Sociais e Mentais
        {
            name: 'atributosFisicos',
            label: 'Atributos Fisicos',
            type: 'group',
            fields: [
                { name: 'forca', label: 'Força', type: 'Number', min: 1, max: 5 },
                { name: 'destreza', label: 'Destreza', type: 'number', min: 1, max: 5 },
                { name: 'vigor', label: 'Vigor', type: 'number', min: 1, max: 5 }
            ]
        },
        {
            name: 'atributosSociais',
            label: 'Atributos Sociais',
            type: 'group',
            fields: [
                { name: 'carisma', label: 'Carisma', type: 'number', min: 1, max: 5 },
                { name: 'manipulacao', label: 'Manipulação', type: 'number', min: 1, max: 5 },
                { name: 'aparencia', label: 'Aparência', type: 'number', min: 1, max: 5 }
            ]
        },
        {
            name: 'atributosMentais',
            label: 'Atributos Mentais',
            type: 'group',
            fields: [
                { name: 'percepcao', label: 'Percepção', type: 'number', min: 1, max: 5 },
                { name: 'inteligencia', label: 'Inteligência', type: 'number', min: 1, max: 5 },
                { name: 'raciocinio', label: 'Raciocínio', type: 'number', min: 1, max: 5 }
            ]
        },
        //Habilidades - Vampire trabalha com tres grupos, de habilidades: Talentos, Perícias e Conhecimentos
        {
            name: 'talentos',
            label: 'Talentos',
            type: 'group',
            fields: [
                { name: 'esportes', label: 'Esportes', type: 'number', min: 1, max: 5 },
                { name: 'luta', label: 'Luta', type: 'number', min: 1, max: 5 },
                { name: 'briga', label: 'Briga', type: 'number', min: 1, max: 5 },
                { name: 'lideranca', label: 'Liderança', type: 'number', min: 1, max: 5 },
                { name: 'intimidacao', label: 'Intimidação', type: 'number', min: 1, max: 5 },
                { name: 'empatia', label: 'Empatia', type: 'number', min: 1, max: 5 },
                { name: 'persuasao', label: 'Persuasão', type: 'number', min: 1, max: 5 },
                { name: 'subterfugio', label: 'Subterfúgio', type: 'number', min: 1, max: 5 }
            ]
        },
        {
            name: 'habilidades',
            label: 'Habilidades',
            type: 'group',
            fields: [
                { name: 'armasBrancas', label: 'Armas Brancas', type: 'number', min: 1, max: 5 },
                { name: 'armasDeFogo', label: 'Armas de Fogo', type: 'number', min: 1, max: 5 },
                { name: 'furtividade', label: 'Furtividade', type: 'number', min: 1, max: 5 },
                { name: 'sobrevivencia', label: 'Sobrevivência', type: 'number', min: 1, max: 5 },
                { name: 'conducao', label: 'Condução', type: 'number', min: 1, max: 5 },
                { name: 'manipulacaoDeObjetos', label: 'Manipulação de Objetos', type: 'number', min: 1, max: 5 },
                { name: 'oficiosManuais', label: 'Ofícios Manuais', type: 'number', min: 1, max: 5 },
                { name: 'tecnologia', label: 'Tecnologia', type: 'number', min: 1, max: 5 },
                { name: 'computador', label: 'Computador', type: 'number', min: 1, max: 5 },
                { name: 'conhecimentoEspecifico', label: 'Conhecimento Específico', type: 'number', min: 1, max: 5 },
                { name: 'conhecimentoGeral', label: 'Conhecimento Geral', type: 'number', min: 1, max: 5 },
                { name: 'linguistica', label: 'Linguística', type: 'number', min: 1, max: 5 },
                { name: 'educacao', label: 'Educação', type: 'number', min: 1, max: 5 },
                { name: 'direito', label: 'Direito', type: 'number', min: 1, max: 5 },
                { name: 'politica', label: 'Política', type: 'number', min: 1, max: 5 },
                { name: 'financas', label: 'Finanças', type: 'number', min: 1, max: 5 },
                { name: 'etica', label: 'Ética', type: 'number', min: 1, max: 5 }
            ]
        },
        {
            name: 'conhecimentos',
            label: 'Conhecimentos',
            type: 'group',
            fields: [
                { name: 'ciencias', label: 'Ciências', type: 'number', min: 1, max: 5 },
                { name: 'humanas', label: 'Humanas', type: 'number', min: 1, max: 5 },
                { name: 'naturais', label: 'Naturais', type: 'number', min: 1, max: 5 },
                { name: 'sociais', label: 'Sociais', type: 'number', min: 1, max: 5 },
                { name: 'tecnologiaAvancada', label: 'Tecnologia Avançada', type: 'number', min: 1, max: 5 },
                { name: 'tecnologiaComum', label: 'Tecnologia Comum', type: 'number', min: 1, max: 5 },
                { name: 'tecnologiaAntiga', label: 'Tecnologia Antiga', type: 'number', min: 1, max: 5 },
                { name: 'tecnologiaFuturista', label: 'Tecnologia Futurista', type: 'number', min: 1, max: 5 },
                { name: 'tecnologiaAlienigena', label: 'Tecnologia Alienígena', type: 'number', min: 1, max: 5 },
                { name: 'tecnologiaMagica', label: 'Tecnologia Mágica', type: 'number', min: 1, max: 5 },
                { name: 'tecnologiaPsicologica', label: 'Tecnologia Psicológica', type: 'number', min: 1, max: 5 },
                { name: 'tecnologiaBiologica', label: 'Tecnologia Biológica', type: 'number', min: 1, max: 5 },
                { name: 'tecnologiaQuimica', label: 'Tecnologia Química', type: 'number', min: 1, max: 5 },
                { name: 'tecnologiaFisica', label: 'Tecnologia Física', type: 'number', min: 1, max: 5 },
                { name: 'tecnologiaMatematica', label: 'Tecnologia Matemática', type: 'number', min: 1, max: 5 }
            ]
        },
        {
            name: 'disciplinas',
            label: 'Disciplinas',
            type: 'group',
            fields: [
                { name: 'disciplina1', label: 'Disciplina 1', type: 'text' },
                { name: 'disciplina2', label: 'Disciplina 2', type: 'text' },
                { name: 'disciplina3', label: 'Disciplina 3', type: 'text' }
            ]
        },
        {
            name: 'virtudes',
            label: 'Virtudes',
            type: 'group',
            fields: [
                { name: 'honestidade', label: 'Honestidade', type: 'number', min: 1, max: 5 },
                { name: 'justica', label: 'Justiça', type: 'number', min: 1, max: 5 },
                { name: 'coragem', label: 'Coragem', type: 'number', min: 1, max: 5 },
                { name: 'lealdade', label: 'Lealdade', type: 'number', min: 1, max: 5 },
                { name: 'compreensao', label: 'Compreensão', type: 'number', min: 1, max: 5 },
                { name: 'responsabilidade', label: 'Responsabilidade', type: 'number', min: 1, max: 5 },
                { name: 'bondade', label: 'Bondade', type: 'number', min: 1, max: 5 },
                { name: 'sabedoria', label: 'Sabedoria', type: 'number', min: 1, max: 5 },
                { name: 'humildade', label: 'Humildade', type: 'number', min: 1, max: 5 },
                { name: 'perdao', label: 'Perdão', type: 'number', min: 1, max: 5 },
                { name: 'tolerancia', label: 'Tolerância', type: 'number', min: 1, max: 5 },
                { name: 'comunicacao', label: 'Comunicação', type: 'number', min: 1, max: 5 },
                { name: 'empatia', label: 'Empatia', type: 'number', min: 1, max: 5 },
                { name: 'generosidade', label: 'Generosidade', type: 'number', min: 1, max: 5 },
                { name: 'respeito', label: 'Respeito', type: 'number', min: 1, max: 5 },
                { name: 'honra', label: 'Honra', type: 'number', min: 1, max: 5 },
                { name: 'integridade', label: 'Integridade', type: 'number', min: 1, max: 5 },
                { name: 'fidelidade', label: 'Fidelidade', type: 'number', min: 1, max: 5 },
            ]
        },
        {
            name: 'defeitos',
            label: 'Defeitos',
            type: 'group',
            fields: [
                { name: 'defeito1', label: 'Defeito 1', type: 'text' },
                { name: 'defeito2', label: 'Defeito 2', type: 'text' },
                { name: 'defeito3', label: 'Defeito 3', type: 'text' }
            ]
        },
        { name: 'pontosSangue', label: 'Pontos de Sangue', type: 'number', min: 0 },
        { name: 'pontosVitae', label: 'Pontos de Vitae', type: 'number', min: 0 },
        { name: 'pontosDeExperiencia', label: 'Pontos de Experiência', type: 'number', min: 0 },
        { name: 'historico', label: 'Histórico', type: 'textarea' },
        { name: 'observacoes', label: 'Observações', type: 'textarea' },
        { name: 'imagem', label: 'Imagem do Personagem', type: 'file' },
        { name: 'dataCriacao', label: 'Data de Criação', type: 'date' },
        { name: 'dataAtualizacao', label: 'Data de Atualização', type: 'date' },
        { name: 'status', label: 'Status', type: 'select', options: ['Ativo', 'Inativo'] }
    ]
}