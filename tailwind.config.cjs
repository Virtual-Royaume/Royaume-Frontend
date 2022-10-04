/** @type {import("tailwindcss").Config} */
module.exports = {
  purge: false,
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      "primary": "#5339DD",

      "white": "white",
      "black": "black",

      "gray": "#F2F2F2",

      "red": "#FF5555",
      "green": "#27ae60"
    },

    fontSize: { // TODO : use REM
      small: "14px",
      normal: "1rem",
      large: "48px",
      xl: "34px",
      "2xl": "60px",
      "3xl": ["80px", { lineHeight: 1 }]
    },

    extend: {}
  },
  plugins: []
};