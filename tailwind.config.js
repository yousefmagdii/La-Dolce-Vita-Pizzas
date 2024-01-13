/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: { sans: 'Roboto Mono, monospace' },
    extend: {
      fontFamily: {
        luxurious: 'Luxurious Script, cursive',
        dance: 'Dancing Script, cursive',
        caveat: 'Caveat, cursive',
        pacifico: 'Pacifico, cursive',
      },
      animation: { 'spin-slow': 'spin 7s linear   ' },
    },
  },
  plugins: [],
};
