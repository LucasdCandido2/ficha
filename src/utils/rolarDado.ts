// rolarDado.js (correção de variável)
export function rolarDado(sides: number = 20): number {
    return Math.floor(Math.random() * sides) + 1;
}