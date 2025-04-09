'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const systemSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  description: z.string().optional(),
  version: z.string().optional(),
  attributes: z.array(z.object({
    name: z.string(),
    abbreviation: z.string(),
    description: z.string().optional(),
  })),
  skills: z.array(z.object({
    name: z.string(),
    attribute: z.string(),
    description: z.string().optional(),
  })),
  levels: z.object({
    maxLevel: z.number().min(1),
    experienceTable: z.array(z.number()),
  }),
  combat: z.object({
    initiative: z.string(),
    armorClass: z.string(),
    hitPoints: z.string(),
  }),
  dice: z.object({
    default: z.string(),
    critical: z.string(),
  }),
  themes: z.object({
    primaryColor: z.string(),
    secondaryColor: z.string(),
    fontFamily: z.string(),
  }),
  rules: z.record(z.any()),
});

type SystemForm = z.infer<typeof systemSchema>;

export default function CreateSystem() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SystemForm>({
    resolver: zodResolver(systemSchema),
    defaultValues: {
      attributes: [
        { name: 'Força', abbreviation: 'FOR', description: 'Mede a força física' },
        { name: 'Destreza', abbreviation: 'DES', description: 'Mede a agilidade' },
        { name: 'Constituição', abbreviation: 'CON', description: 'Mede a resistência' },
        { name: 'Inteligência', abbreviation: 'INT', description: 'Mede o raciocínio' },
        { name: 'Sabedoria', abbreviation: 'SAB', description: 'Mede a percepção' },
        { name: 'Carisma', abbreviation: 'CAR', description: 'Mede a presença' },
      ],
      combat: {
        initiative: '1d20 + DES',
        armorClass: '10 + DES',
        hitPoints: 'CON + 1d6',
      },
      dice: {
        default: '1d20',
        critical: '20',
      },
      themes: {
        primaryColor: '#4F46E5',
        secondaryColor: '#1E293B',
        fontFamily: 'Inter',
      },
    },
  });

  const onSubmit = async (data: SystemForm) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/systems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push('/systems');
      }
    } catch (error) {
      console.error('Erro ao criar sistema:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Criar Novo Sistema</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Passo 1: Informações Básicas */}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Informações Básicas</h2>
            <div>
              <label className="block text-sm font-medium mb-1">Nome do Sistema</label>
              <input
                {...register('name')}
                className="w-full p-2 border rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Descrição</label>
              <textarea
                {...register('description')}
                className="w-full p-2 border rounded"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Versão</label>
              <input
                {...register('version')}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        )}

        {/* Passo 2: Atributos e Perícias */}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Atributos e Perícias</h2>
            <div>
              <label className="block text-sm font-medium mb-1">Atributos</label>
              {watch('attributes')?.map((_, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 mb-2">
                  <input
                    {...register(`attributes.${index}.name`)}
                    className="p-2 border rounded"
                    placeholder="Nome"
                  />
                  <input
                    {...register(`attributes.${index}.abbreviation`)}
                    className="p-2 border rounded"
                    placeholder="Abreviação"
                  />
                  <input
                    {...register(`attributes.${index}.description`)}
                    className="p-2 border rounded"
                    placeholder="Descrição"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Passo 3: Regras de Combate */}
        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Regras de Combate</h2>
            <div>
              <label className="block text-sm font-medium mb-1">Iniciativa</label>
              <input
                {...register('combat.initiative')}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Classe de Armadura</label>
              <input
                {...register('combat.armorClass')}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Pontos de Vida</label>
              <input
                {...register('combat.hitPoints')}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        )}

        {/* Passo 4: Temas e Aparência */}
        {step === 4 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Temas e Aparência</h2>
            <div>
              <label className="block text-sm font-medium mb-1">Cor Primária</label>
              <input
                type="color"
                {...register('themes.primaryColor')}
                className="w-full p-1 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Cor Secundária</label>
              <input
                type="color"
                {...register('themes.secondaryColor')}
                className="w-full p-1 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Fonte</label>
              <select
                {...register('themes.fontFamily')}
                className="w-full p-2 border rounded"
              >
                <option value="Inter">Inter</option>
                <option value="Roboto">Roboto</option>
                <option value="Open Sans">Open Sans</option>
              </select>
            </div>
          </div>
        )}

        <div className="flex justify-between">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Anterior
            </button>
          )}
          {step < 4 ? (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Próximo
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
            >
              {isSubmitting ? 'Criando...' : 'Criar Sistema'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
} 