/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#38acf9',
          500: '#0f97ee',
          600: '#027dce',
          700: '#0263a7',
          800: '#065483',
          900: '#0b486d',
        },
        indigo: {
          50: '#f3f4ff',
          100: '#e9eaff',
          200: '#d5d7fe',
          300: '#b4b7fc',
          400: '#8c8ff8',
          500: '#6d6ef2',
          600: '#5352e4',
          700: '#4642c8',
          800: '#3a36a3',
          900: '#333182',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};