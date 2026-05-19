/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6C63FF',
          dark: '#4F46E5',
        },
        secondary: {
          DEFAULT: '#06B6D4',
          dark: '#8B5CF6',
        },
        dark: {
          DEFAULT: '#0F172A',
          lighter: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
