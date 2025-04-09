'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import { UserMenu } from '@/components/user-menu';

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold text-accent">
              RPG System
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link
                href="/characters"
                className={`nav-link ${isActive('/characters') ? 'nav-link-active' : ''}`}
              >
                Personagens
              </Link>
              <Link
                href="/systems"
                className={`nav-link ${isActive('/systems') ? 'nav-link-active' : ''}`}
              >
                Sistemas
              </Link>
              <Link
                href="/campaigns"
                className={`nav-link ${isActive('/campaigns') ? 'nav-link-active' : ''}`}
              >
                Campanhas
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <UserMenu />
          </div>
        </div>
      </div>
    </nav>
  );
} 