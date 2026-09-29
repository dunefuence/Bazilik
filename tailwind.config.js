/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        basil: {
          dark: '#1a2e22',
          deep: '#0f1f16',
          mid: '#2d4a36',
          herb: '#5a7c52',
          cream: '#f5f0e8',
          beige: '#e8dcc8',
          graphite: '#2a2a28',
          gold: '#b8995a',
        },
      },
    },
  },
  plugins: [],
};
