'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function AuthError() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  useEffect(() => {
    console.error('Auth error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4 rounded-lg border p-6 text-center">
        <h1 className="text-2xl font-bold">Erro de Autenticação</h1>
        <p className="text-muted-foreground">
          {error === 'CredentialsSignin'
            ? 'Email ou senha inválidos'
            : 'Ocorreu um erro durante a autenticação'}
        </p>
        <Link
          href="/auth/signin"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          Voltar para o login
        </Link>
      </div>
    </div>
  )
} 