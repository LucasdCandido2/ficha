export interface Character {
    system: string;
    data: {
        nomePersonagem?: string;
        [key: string]: any;
    };
    createdAt: string;
} 