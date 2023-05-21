/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Purple': '#3e52a3',
        'Pale-blue': '#e0e8ff',
        'Bright-blue': '#3829e0',
        'Very-pale-blue': '#f5f7ff',
        'Desaturated-blue': '#7280a7',
        'Dark-blue': '#1f2f56'
      }
    },
  },
  plugins: [],
}

