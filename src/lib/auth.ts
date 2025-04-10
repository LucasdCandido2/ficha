interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  role: 'USER' | 'ADMIN' | 'GAME_MASTER';
}

class LocalAuth {
  private static instance: LocalAuth;
  private users: User[] = [];
  private currentUser: User | null = null;

  private constructor() {
    if (typeof window !== 'undefined') {
      const savedUsers = localStorage.getItem('ficha-users');
      if (savedUsers) {
        this.users = JSON.parse(savedUsers);
      }
      const savedUser = localStorage.getItem('ficha-current-user');
      if (savedUser) {
        this.currentUser = JSON.parse(savedUser);
      }
    }
  }

  public static getInstance(): LocalAuth {
    if (!LocalAuth.instance) {
      LocalAuth.instance = new LocalAuth();
    }
    return LocalAuth.instance;
  }

  public async register(email: string, name: string, password: string): Promise<User> {
    if (this.users.some(user => user.email === email)) {
      throw new Error('User already exists');
    }

    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      password,
      role: 'USER',
    };

    this.users.push(newUser);
    this.saveUsers();
    return newUser;
  }

  public async login(email: string, password: string): Promise<User> {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    this.currentUser = user;
    this.saveCurrentUser();
    return user;
  }

  public logout(): void {
    this.currentUser = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('ficha-current-user');
    }
  }

  public getCurrentUser(): User | null {
    return this.currentUser;
  }

  private saveUsers(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ficha-users', JSON.stringify(this.users));
    }
  }

  private saveCurrentUser(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ficha-current-user', JSON.stringify(this.currentUser));
    }
  }
}

export const auth = LocalAuth.getInstance(); 