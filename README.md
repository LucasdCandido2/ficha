# Ficha de Personagem RPG

Sistema flexível para criação e gerenciamento de fichas de personagens de RPG.

## Características

- Criação de sistemas personalizados
- Gerenciamento de fichas de personagens
- Controle de campanhas
- Sistema de encontros
- Gerenciamento de monstros
- Inventário e recursos
- Suporte a diferentes sistemas de RPG

## Tecnologias

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL
- Auth.js

## Requisitos

- Node.js 18+
- PostgreSQL
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/ficha-personagem-rpg.git
cd ficha-personagem-rpg
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Configure o banco de dados:
```bash
npx prisma migrate dev
```

5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

## Estrutura do Projeto

```
ficha-personagem-rpg/
├── public/                     # Arquivos estáticos
└── src/                        # Raiz do código
    ├── app/                    # Páginas da aplicação
    ├── components/             # Componentes React
    ├── lib/                    # Utilitários e configurações
    ├── prisma/                 # Schema e migrações do Prisma
    └── styles/                 # Estilos globais
```

## Documentação

A documentação completa do sistema está disponível em `/docs`. Inclui:

- Visão Geral
- Criação de Sistemas
- Estrutura de Dados
- Boas Práticas
- Dicas para Criadores

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Contato

Seu Nome - [@seu-twitter](https://twitter.com/seu-twitter) - email@exemplo.com

Link do Projeto: [https://github.com/seu-usuario/ficha-personagem-rpg](https://github.com/seu-usuario/ficha-personagem-rpg)
