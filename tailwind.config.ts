import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#FFFFFF',
          text: '#000000',
          primary: '#FFD700',
          secondary: '#00008B',
          accent: '#FFA500',
        },
        dark: {
          background: '#1A1A1A',
          text: '#FFFFFF',
          primary: '#00008B',
          secondary: '#FFD700',
          accent: '#FFA500',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}

export default config 