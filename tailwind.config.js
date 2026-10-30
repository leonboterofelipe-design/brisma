/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 950: '#071A33', 900: '#0B2545', 800: '#13315C', 700: '#1D4E89' },
        gold: { DEFAULT: '#CE9D2A', hover: '#F9DA5B', ink: '#8A6516' },
        accent: { DEFAULT: '#0E5A6B', dark: '#0A4553' },
        steel: '#4F6D8F',
        paper: '#F6F8FA',
        ink: '#17212F',
        muted: '#4A5565',
        line: '#E2E7ED',
        field: '#7A8799',
      },
      // Escala ampliada: el texto pequeño nunca baja de 14 px y el cuerpo es de 17 px.
      fontSize: {
        xs: ['0.875rem', { lineHeight: '1.5' }],
        sm: ['1rem', { lineHeight: '1.6' }],
        base: ['1.0625rem', { lineHeight: '1.7' }],
        lg: ['1.1875rem', { lineHeight: '1.65' }],
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
