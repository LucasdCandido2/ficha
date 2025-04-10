// src/app/layout.tsx
import type { Metadata } from 'next';
import { MedievalSharp } from 'next/font/google';
import { Providers } from './providers';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { ThemeProvider } from '@/components/theme-provider'

const medievalSharp = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-medieval-sharp',
  display: 'swap',
  preload: true,
});

// Metadados da aplicação
export const metadata: Metadata = {
  title: 'Ficha de RPG',
  description: 'Sistema de gerenciamento de fichas de RPG',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn('antialiased', medievalSharp.className)}>
        <ThemeProvider>
          <Providers>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
              <Footer />
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
