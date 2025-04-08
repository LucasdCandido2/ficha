'use client';

import { useApp } from '@/context/AppContext';
import CharacterForm from '@/components/CharacterForm';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { RPGSystem } from '@/types/system';

// Atualize a tipagem para que `params` seja uma Promise
interface PageProps {
  params: Promise<{ system: string }>;
}

// Função para carregar a configuração do sistema dinamicamente
const getSystemConfig = async (systemId: string): Promise<RPGSystem> => {
  try {
    const module = await import(`@/config/systems/${systemId}`);
    return module.default;
  } catch (error) {
    throw new Error(`Sistema ${systemId} não encontrado`);
  }
};

export default function SystemCreator({ params }: PageProps) {
  // Desembrulha a Promise dos parâmetros usando o hook experimental React.use()
  const resolvedParams = React.use(params);
  
  const { setCurrentSystem } = useApp();
  const router = useRouter();
  const [config, setConfig] = useState<RPGSystem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        // Agora usamos o `resolvedParams.system`, que já é o valor desembrulhado
        const systemConfig = await getSystemConfig(resolvedParams.system);
        setConfig(systemConfig);
        setCurrentSystem(resolvedParams.system);
      } catch (error) {
        console.error(error);
        router.push('/'); // Redireciona para a home se o sistema não for encontrado
      } finally {
        setIsLoading(false);
      }
    };

    loadConfig();
  }, [resolvedParams.system, setCurrentSystem, router]);

  // Função para lidar com o envio do formulário (salvando localmente)
  const handleSubmit = (data: any) => {
    try {
      // Recupera os personagens salvos no localStorage
      const savedCharacters = JSON.parse(localStorage.getItem('rpg-characters') || '[]');

      const newCharacter = {
        system: resolvedParams.system,
        data,
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem('rpg-characters', JSON.stringify([...savedCharacters, newCharacter]));

      // Redireciona para a lista de personagens
      router.push('/characters');
    } catch (error) {
      console.error("Erro ao salvar personagem:", error);
      alert("Erro ao salvar personagem!");
    }
  };

  // Enquanto carrega a configuração, mostra um spinner
  if (isLoading) {
    return (
      <div className="container mx-auto p-4 text-center">
        <div
          className="animate-spin inline-block w-8 border-4 border-current border-t-transparent text-indigo-600 rounded-full"
          role="status"
        >
          <span className="sr-only">Carregando...</span>
        </div>
      </div>
    );
  }

  // Se a configuração não for encontrada, exibe uma mensagem de erro
  if (!config) {
    return (
      <div className="container mx-auto p-4 text-red-500">
        Sistema não encontrado
      </div>
    );
  }

  // Renderiza o formulário com a configuração carregada
  return (
    <div className="container mx-auto p-4">
      <CharacterForm config={config} onSubmit={handleSubmit} />
    </div>
  );
}
