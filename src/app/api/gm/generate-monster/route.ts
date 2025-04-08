import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();

    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    const { campaignId } = await request.json();

    // Busca a campanha e seu compêndio
    const campaign = await prisma.campaign.findUnique({
      where: { id: campaignId },
      include: {
        system: {
          include: {
            compendia: true
          }
        }
      }
    });

    if (!campaign) {
      return NextResponse.json(
        { error: 'Campanha não encontrada' },
        { status: 404 }
      );
    }

    // Verifica se o usuário é o mestre da campanha
    if (campaign.gameMasterId !== session.user.id) {
      return NextResponse.json(
        { error: 'Apenas o mestre pode gerar monstros' },
        { status: 403 }
      );
    }

    // Pega um compêndio aleatório do sistema
    const compendium = campaign.system.compendia[
      Math.floor(Math.random() * campaign.system.compendia.length)
    ];

    if (!compendium) {
      return NextResponse.json(
        { error: 'Nenhum compêndio encontrado' },
        { status: 404 }
      );
    }

    // Gera um monstro baseado no compêndio
    const monster = await prisma.monster.create({
      data: {
        name: generateMonsterName(),
        data: generateMonsterStats(campaign.system.config),
        compendiumId: compendium.id
      }
    });

    return NextResponse.json(monster);
  } catch (error) {
    console.error('Erro ao gerar monstro:', error);
    return NextResponse.json(
      { error: 'Erro ao gerar monstro' },
      { status: 500 }
    );
  }
}

function generateMonsterName(): string {
  const prefixes = ['Antigo', 'Sombrio', 'Furioso', 'Místico', 'Corrupto'];
  const types = ['Dragão', 'Demônio', 'Gigante', 'Elemental', 'Morto-vivo'];
  const suffixes = ['das Sombras', 'do Abismo', 'da Montanha', 'do Pântano'];

  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const type = types[Math.floor(Math.random() * types.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  return `${prefix} ${type} ${suffix}`;
}

function generateMonsterStats(systemConfig: any): any {
  // Exemplo de geração de stats para D&D 5e
  return {
    level: Math.floor(Math.random() * 20) + 1,
    hp: Math.floor(Math.random() * 200) + 50,
    ac: Math.floor(Math.random() * 10) + 10,
    stats: {
      strength: Math.floor(Math.random() * 10) + 10,
      dexterity: Math.floor(Math.random() * 10) + 10,
      constitution: Math.floor(Math.random() * 10) + 10,
      intelligence: Math.floor(Math.random() * 10) + 10,
      wisdom: Math.floor(Math.random() * 10) + 10,
      charisma: Math.floor(Math.random() * 10) + 10,
    },
    abilities: [
      {
        name: 'Ataque Múltiplo',
        description: 'O monstro pode realizar dois ataques por turno.',
      },
      {
        name: 'Resistência Elemental',
        description: 'O monstro tem resistência a dano de fogo e gelo.',
      },
    ],
  };
} 