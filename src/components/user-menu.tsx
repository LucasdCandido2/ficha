'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { User, LogIn, LogOut } from 'lucide-react';

export function UserMenu() {
  const { data: session } = useSession();

  return (
    <div className="relative">
      {session ? (
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <User className="h-5 w-5 text-accent" />
            <span className="hidden md:inline">{session.user?.name}</span>
          </div>
          <button
            onClick={() => signOut()}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Sair"
          >
            <LogOut className="h-5 w-5 text-accent" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => signIn()}
          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-secondary transition-colors"
          aria-label="Entrar"
        >
          <LogIn className="h-5 w-5 text-accent" />
          <span className="hidden md:inline">Entrar</span>
        </button>
      )}
    </div>
  );
} 