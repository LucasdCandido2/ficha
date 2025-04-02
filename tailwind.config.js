/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}', //Ajuste esse caminho conforme a estrutura do seu projeto
    ],
    theme: {
        extend: {
            colors: {
                dnd: {
                    primary: '#9b2226',//exemplo para D&D (tons mais intensos)
                    secondary: '#f2cc8f',
                },
                vampire: {
                    primary: '#4b0082',//exemplo para Vampire (tons sombrios)
                    secondary: '#a020f0',
                },
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'sans-serif'],
                mono: ['var(--font-geist-mono)', 'monospace'],
            },
        },
    },
    plugins: [],
};