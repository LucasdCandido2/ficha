import Link from 'next/link';
import { Plus, Map, Users, Calendar, Sword } from 'lucide-react';

export default function CampaignsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary">
          Minhas Campanhas
        </h1>
        <Link
          href="/campaigns/create"
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Nova Campanha
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Campaign Card */}
        <div className="card hover:shadow-xl transition-shadow">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-secondary p-3 rounded-full">
                <Map className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">A Jornada do Anel</h3>
                <p className="text-gray-600 dark:text-gray-300">D&D 5e</p>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                <span className="text-gray-600 dark:text-gray-300">4 Jogadores</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                <span className="text-gray-600 dark:text-gray-300">Toda Quinta, 20h</span>
              </div>
              <div className="flex items-center gap-2">
                <Sword className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                <span className="text-gray-600 dark:text-gray-300">Nível 3-5</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Uma jornada épica através de terras mágicas em busca do Anel do Poder.
            </p>
            <div className="flex gap-2">
              <Link
                href="/campaigns/1"
                className="btn-secondary flex-1 text-center"
              >
                Ver Detalhes
              </Link>
              <button className="btn-primary flex-1">
                Gerenciar
              </button>
            </div>
          </div>
        </div>

        {/* Campaign Card */}
        <div className="card hover:shadow-xl transition-shadow">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-secondary p-3 rounded-full">
                <Map className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Cidade dos Deuses</h3>
                <p className="text-gray-600 dark:text-gray-300">Pathfinder 2e</p>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                <span className="text-gray-600 dark:text-gray-300">5 Jogadores</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                <span className="text-gray-600 dark:text-gray-300">Todo Sábado, 15h</span>
              </div>
              <div className="flex items-center gap-2">
                <Sword className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                <span className="text-gray-600 dark:text-gray-300">Nível 1-3</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Uma investigação sobrenatural em uma cidade onde os deuses caminham entre os mortais.
            </p>
            <div className="flex gap-2">
              <Link
                href="/campaigns/2"
                className="btn-secondary flex-1 text-center"
              >
                Ver Detalhes
              </Link>
              <button className="btn-primary flex-1">
                Gerenciar
              </button>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="card col-span-full text-center py-12">
          <Map className="h-12 w-12 mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-bold text-gray-600 dark:text-gray-300 mb-2">
            Nenhuma campanha criada
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Comece criando sua primeira campanha
          </p>
          <Link
            href="/campaigns/create"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Plus className="h-5 w-5" />
            Criar Campanha
          </Link>
        </div>
      </div>
    </div>
  );
} 