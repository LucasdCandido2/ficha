import '@testing-library/jest-dom';

// Mock do next-auth
jest.mock('next-auth/react', () => ({
  useSession: () => ({
    data: null,
    status: 'unauthenticated',
  }),
  signIn: jest.fn(),
  signOut: jest.fn(),
}));

// Mock do Prisma
jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
    character: {
      findMany: jest.fn(),
      create: jest.fn(),
    },
    system: {
      findMany: jest.fn(),
      create: jest.fn(),
    },
  })),
})); 