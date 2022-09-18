/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xl: '900px',
        '2xl': '1420px'
      }
    },
    extend: {
      colors: {
        primary: '#5339DD',
        darkprimary: '#38259C',
        lightprimary: '#7F69F2'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
