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
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                ...Object.entries(systemThemes).reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {})
            },
        }
    },
    plugins: [],
}