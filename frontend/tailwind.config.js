/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          green: '#22c55e',
          dark: '#111111',
          darker: '#0a0a0a',
        },
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#145231',
        },
      },
      boxShadow: {
        'neon-glow': '0 0 20px rgba(34, 197, 94, 0.5)',
        'neon-glow-lg': '0 0 40px rgba(34, 197, 94, 0.8)',
      },
      textShadow: {
        'neon': '0 0 10px rgba(34, 197, 94, 0.8)',
      },
    },
  },
  plugins: [],
}
