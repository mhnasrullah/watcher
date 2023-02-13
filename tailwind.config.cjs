/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      black : '#221f1f',
      red : '#e50914',
      white : '#f5f5f1',
      gray : '#292f33'
    }
  },
  plugins: [],
}
