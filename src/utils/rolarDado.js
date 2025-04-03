// rolarDado.js (correção de variável)
export function rolarDado(side = 20) {
    return Math.floor(Math.random() * side) + 1;
}