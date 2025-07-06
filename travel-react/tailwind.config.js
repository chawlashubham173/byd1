/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00BCD4',
        secondary: '#FFC107',
        dark: '#333',
      },
      fontFamily: {
        sans: ['Poppins', 'Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}