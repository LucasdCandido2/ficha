# Ficha de Personagem RPG

Um sistema completo para criação e gerenciamento de fichas de personagem e campanhas de RPG.

## Funcionalidades

### Para Jogadores
- Criação de personagens para diferentes sistemas de RPG
- Gerenciamento de fichas de personagem
- Rolagem de dados
- Participação em campanhas
- Temas personalizáveis

### Para Mestres
- Gerenciamento de campanhas
- Lista de jogadores e seus personagens
- Gerador de monstros baseado no compêndio do sistema
- Gerenciamento de encontros de combate
- Rastreamento de iniciativa e pontos de vida
- Criação de sistemas personalizados

## Tecnologias

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL
- NextAuth.js
- Jest
- React Hook Form
- Zod

## Estrutura do Projeto

```
src/
├── app/                    # Rotas da aplicação
│   ├── api/               # APIs do backend
│   ├── auth/              # Páginas de autenticação
│   └── gm/                # Páginas do mestre
├── components/            # Componentes React
├── context/              # Contextos React
├── types/                # Definições de tipos
├── utils/                # Funções utilitárias
├── config/               # Configurações
└── prisma/               # Schema do banco de dados
```

## Banco de Dados

### Modelos
- User: Usuários do sistema
- Character: Fichas de personagem
- System: Sistemas de RPG
- Campaign: Campanhas
- Compendium: Compêndios de monstros
- Monster: Monstros
- Encounter: Encontros de combate

## Configuração do Ambiente

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```
4. Execute as migrações do banco de dados:
   ```bash
   npx prisma migrate dev
   ```
5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Testes

Para executar os testes:
```bash
npm test
```

Para ver a cobertura de testes:
```bash
npm run test:coverage
```

## Guia do Mestre

### Gerenciando Campanhas
1. Acesse o painel do mestre em `/gm/dashboard`
2. Crie uma nova campanha
3. Adicione jogadores à campanha
4. Selecione o sistema de RPG

### Gerando Monstros
1. Selecione uma campanha
2. Clique em "Gerar Monstro"
3. O sistema gerará um monstro baseado no compêndio do sistema

### Gerenciando Encontros
1. Acesse a página de encontro em `/gm/encounter`
2. Adicione personagens e monstros
3. Role iniciativa
4. Gerencie turnos e pontos de vida

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes. 