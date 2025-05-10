/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#39a7f8',
          500: '#1089eb',
          600: '#0271d2',
          700: '#0258a7',
          800: '#064b89',
          900: '#0a3e71',
        },
        teal: {
          50: '#f0fdfd',
          100: '#ccfafe',
          200: '#99f0fd',
          300: '#5de5fa',
          400: '#22d0f2',
          500: '#0bb3dd',
          600: '#088eba',
          700: '#0a7297',
          800: '#0e5f7b',
          900: '#114f66',
        },
        orange: {
          50: '#fff8ed',
          100: '#ffefd3',
          200: '#ffdaa6',
          300: '#ffbf6e',
          400: '#ff9836',
          500: '#ff7c11',
          600: '#ff6307',
          700: '#cc4508',
          800: '#a1360e',
          900: '#822f10',
        },
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'pulse': 'pulse 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};