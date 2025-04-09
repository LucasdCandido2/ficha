'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '@/components/theme-toggle'

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === '/' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Início
          </Link>
          <Link
            href="/characters"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === '/characters' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Personagens
          </Link>
          <Link
            href="/campaigns"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === '/campaigns' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Campanhas
          </Link>
          <Link
            href="/systems"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === '/systems' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Sistemas
          </Link>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
} 