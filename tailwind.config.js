/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Sofia Sans Semi Condensed', 'sans-serif'],
      serif: ['Gluten', 'serif'],
      mono: ['Chewy', 'monospace'],
      lek: ['Lekton', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

