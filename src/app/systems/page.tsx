import Link from 'next/link';
import { Plus, BookOpen, Shield, Scroll, Wand2 } from 'lucide-react';

export default function SystemsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary">
          Sistemas de RPG
        </h1>
        <Link
          href="/systems/create"
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Novo Sistema
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* System Card */}
        <div className="card hover:shadow-xl transition-shadow">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-secondary p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Dungeons & Dragons 5e</h3>
                <p className="text-gray-600 dark:text-gray-300">Fantasia Medieval</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              O sistema mais popular de RPG de mesa, com um mundo rico em fantasia e aventura.
            </p>
            <div className="flex gap-2">
              <Link
                href="/systems/dnd5e"
                className="btn-secondary flex-1 text-center"
              >
                Explorar
              </Link>
              <button className="btn-primary flex-1">
                Criar Personagem
              </button>
            </div>
          </div>
        </div>

        {/* System Card */}
        <div className="card hover:shadow-xl transition-shadow">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-secondary p-3 rounded-full">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Pathfinder 2e</h3>
                <p className="text-gray-600 dark:text-gray-300">Fantasia Épica</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Um sistema robusto com foco em combate tático e desenvolvimento de personagens.
            </p>
            <div className="flex gap-2">
              <Link
                href="/systems/pathfinder2e"
                className="btn-secondary flex-1 text-center"
              >
                Explorar
              </Link>
              <button className="btn-primary flex-1">
                Criar Personagem
              </button>
            </div>
          </div>
        </div>

        {/* System Card */}
        <div className="card hover:shadow-xl transition-shadow">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-secondary p-3 rounded-full">
                <Wand2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Call of Cthulhu</h3>
                <p className="text-gray-600 dark:text-gray-300">Horror Cósmico</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Um sistema de investigação e horror cósmico baseado nas obras de H.P. Lovecraft.
            </p>
            <div className="flex gap-2">
              <Link
                href="/systems/call-of-cthulhu"
                className="btn-secondary flex-1 text-center"
              >
                Explorar
              </Link>
              <button className="btn-primary flex-1">
                Criar Personagem
              </button>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="card col-span-full text-center py-12">
          <Scroll className="h-12 w-12 mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-bold text-gray-600 dark:text-gray-300 mb-2">
            Nenhum sistema criado
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Comece criando seu primeiro sistema de RPG
          </p>
          <Link
            href="/systems/create"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Plus className="h-5 w-5" />
            Criar Sistema
          </Link>
        </div>
      </div>
    </div>
  );
} 