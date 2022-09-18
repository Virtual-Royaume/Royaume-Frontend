/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
          xl: '1360px',
          '2xl': '1690px'
      },
    },
    extend: {
      colors: {
        primary: '#5339DD'
      }
    },
  },
  plugins: [],
}
