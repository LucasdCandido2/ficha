# Guia de Criação e Uso do Sistema

## Visão Geral

Este sistema foi projetado para ser flexível e adaptável a diferentes sistemas de RPG. A estrutura permite que você crie e gerencie sistemas personalizados, fichas de personagens, campanhas e encontros.

## Fluxo de Criação

### 1. Criação do Sistema

Antes de criar fichas de personagens, você precisa definir um sistema. O sistema contém todas as regras e configurações específicas do seu RPG.

#### Campos do Sistema:
- **Nome**: Nome do sistema (ex: D&D 5e, Tormenta20, etc)
- **Descrição**: Breve descrição do sistema
- **Versão**: Versão do sistema
- **Atributos**: Definição dos atributos base do sistema
- **Habilidades**: Lista de habilidades disponíveis
- **Níveis**: Sistema de progressão de níveis
- **Combate**: Regras específicas de combate
- **Dados**: Sistema de dados utilizado
- **Temas**: Estilos visuais e temáticas
- **Regras**: Regras gerais do sistema

### 2. Criação do Compendium

O compendium é onde você armazena todas as informações compartilhadas do sistema, como monstros, itens e regras.

#### Campos do Compendium:
- **Nome**: Nome do compendium
- **Descrição**: Descrição do conteúdo
- **Monstros**: Lista de monstros disponíveis
- **Itens**: Lista de itens do sistema
- **Regras**: Regras específicas do compendium

### 3. Criação de Campanhas

As campanhas são onde as aventuras acontecem. Cada campanha está vinculada a um sistema específico.

#### Campos da Campanha:
- **Nome**: Nome da campanha
- **Descrição**: Descrição da história
- **Mestre**: Usuário que controla a campanha
- **Jogadores**: Lista de jogadores participantes
- **Personagens**: Fichas dos personagens da campanha
- **Encontros**: Encontros planejados

### 4. Criação de Personagens

Os personagens são criados dentro de um sistema específico e podem ser vinculados a uma campanha.

#### Campos do Personagem:
- **Nome**: Nome do personagem
- **Dados**: Informações específicas do sistema
- **Inventário**: Itens e moedas
- **Estatísticas de Combate**: HP, CA, iniciativa, etc
- **Recursos**: Recursos específicos do sistema (mana, ki, etc)

### 5. Gerenciamento de Encontros

Os encontros são onde o combate e interações acontecem.

#### Campos do Encontro:
- **Nome**: Nome do encontro
- **Descrição**: Descrição do cenário
- **Monstros**: Monstros presentes
- **Iniciativa**: Ordem de iniciativa
- **Status**: Estado do encontro (planejado, ativo, concluído)

## Estrutura de Dados

### Sistema
```json
{
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
}
```

### Personagem
```json
{
  "attributes": {
    "strength": 15,
    "dexterity": 14
  },
  "skills": {
    "acrobatics": 5
  },
  "level": 1,
  "experience": 0
}
```

## Boas Práticas

1. **Organização**: Mantenha seus sistemas e compendiums bem organizados
2. **Documentação**: Documente bem as regras e fórmulas do seu sistema
3. **Testes**: Teste as fórmulas e cálculos antes de usar em campanhas
4. **Backup**: Faça backup regular dos seus dados
5. **Colaboração**: Compartilhe sistemas com outros usuários para feedback

## Dicas para Criadores de Sistemas

1. **Comece Simples**: Defina primeiro os atributos e regras básicas
2. **Teste as Fórmulas**: Verifique se todas as fórmulas funcionam corretamente
3. **Considere o Balanceamento**: Mantenha o jogo balanceado
4. **Documente Tudo**: Mantenha documentação clara das regras
5. **Peça Feedback**: Compartilhe com outros jogadores para melhorias

## Suporte

Se precisar de ajuda ou tiver dúvidas, entre em contato com a equipe de suporte ou consulte a documentação oficial do sistema. 