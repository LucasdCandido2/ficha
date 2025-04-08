/** @type {import('tailwindcss').Config} */
const systemThemes = {
    dnd5e: {
        primary: '#9b2226',
        secondary: '#f2cc8f'
    },
    vampire: {
        primary: '#4b0082',
        secondary: '#a020f0'
    }
};

module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './public/**/*.html'
    ],
    theme: {
        extend: {
            colors: {
                'dnd-primary': systemThemes.dnd5e.primary,
                'dnd-secondary': systemThemes.dnd5e.secondary,
                'vampire-primary': systemThemes.vampire.primary,
                'vampire-secondary': systemThemes.vampire.secondary
            }
        }
    },
    plugins: [],
}