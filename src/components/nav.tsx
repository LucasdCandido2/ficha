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
            href="/cursor"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === '/cursor' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Início
          </Link>
          <Link
            href="/cursor/characters"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === '/characters' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Personagens
          </Link>
          <Link
            href="/cursor/campaigns"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === '/cursor/campaigns' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Campanhas
          </Link>
          <Link
            href="/cursor/systems"
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