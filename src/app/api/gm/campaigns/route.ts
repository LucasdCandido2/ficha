import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const session = await getServerSession();

    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    const campaigns = await prisma.campaign.findMany({
      where: {
        gameMaster: {
          email: session.user.email
        }
      },
      include: {
        players: {
          select: {
            id: true,
            name: true,
            characters: {
              where: {
                campaignId: {
                  not: null
                }
              }
            }
          }
        },
        system: {
          select: {
            id: true,
            name: true,
            compendia: {
              select: {
                id: true,
                name: true
              }
            }
          }
        }
      }
    });

    return NextResponse.json(campaigns);
  } catch (error) {
    console.error('Erro ao buscar campanhas:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar campanhas' },
      { status: 500 }
    );
  }
} 