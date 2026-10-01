/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 950: '#071A33', 900: '#0B2545', 800: '#13315C', 700: '#1D4E89' },
        gold: { DEFAULT: '#CE9D2A', hover: '#F9DA5B' },
        accent: { DEFAULT: '#0E5A6B', dark: '#0A4553' },
        steel: '#4F6D8F',
        paper: '#F6F8FA',
        ink: '#17212F',
        muted: '#5C6877',
        line: '#E2E7ED',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
