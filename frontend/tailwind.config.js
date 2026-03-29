/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agriculture: {
          50: '#f0faf0',
          100: '#dcf2df',
          200: '#bbe5c1',
          300: '#8dd198',
          400: '#5ab569',
          500: '#389a48', // Primary Green
          600: '#2a7c38',
          700: '#23632f',
          800: '#1f4f28',
          900: '#1a4123',
          950: '#0e2413',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
