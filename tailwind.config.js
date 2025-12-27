/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        wow: {
            dark: '#0f1115',
            panel: '#151921',
            gold: '#FFD100',
            darkGold: '#b45309',
            accent: '#F8B700',
            lightBg: '#f9fafb',
            cardBg: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
      }
    }
  },
  plugins: [],
}