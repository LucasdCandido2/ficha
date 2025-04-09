'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from './theme-toggle'

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Personagens", href: "/characters" },
  { name: "Campanhas", href: "/campaigns" },
  { name: "Sistemas", href: "/systems" },
  { name: "Documentação", href: "/docs" },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-between">
      <div className="flex space-x-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === item.href ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  )
} 