import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sistema de Fichas de RPG',
  description: 'Gerencie seus personagens, campanhas e sistemas de RPG em um só lugar.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
