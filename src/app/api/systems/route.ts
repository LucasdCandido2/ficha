import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const system = await prisma.system.create({
      data: {
        name: data.name,
        description: data.description,
        version: data.version,
        attributes: data.attributes,
        skills: data.skills,
        levels: data.levels,
        combat: data.combat,
        dice: data.dice,
        themes: data.themes,
        rules: data.rules,
      },
    });

    return NextResponse.json(system);
  } catch (error) {
    console.error('Erro ao criar sistema:', error);
    return NextResponse.json(
      { error: 'Erro ao criar sistema' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const systems = await prisma.system.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(systems);
  } catch (error) {
    console.error('Erro ao buscar sistemas:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar sistemas' },
      { status: 500 }
    );
  }
} 