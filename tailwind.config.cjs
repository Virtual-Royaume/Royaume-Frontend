/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,svelte,ts}"],

  theme: {
    colors: {
      "primary": {
        DEFAULT: "#5339DD",
        2: "#39279C"
      },
      "secondary": {
        DEFAULT: "#C6D116",
        2: "#A5AF15"
      },

      "success": {
        DEFAULT: "#48C629",
        2: "#3DA723"
      },
      "warning": {
        DEFAULT: "#FFB22B",
        2: "#CD9024"
      },
      "error": {
        DEFAULT: "#FE5A5A",
        2: "#CF4747"
      },

      "white": "white",
      "black": "black",

      "gray": {
        DEFAULT: "#F9F9F9",
        2: "#EAEAEA",
        3: "#BABABA",
        4: "#A5A5A5"
      },

      "info": {
        DEFAULT: "#27A6AE",
        2: "#1B7076"
      },

      "red": "#FF5555",
      "green": "#27ae60",

      "transparent": "transparent"
    },

    fontSize: {
      "small": ["0.8rem", { lineHeight: 1 }],
      "normal": ["0.9rem", { lineHeight: 1 }],
      "large": ["1.1rem", { lineHeight: 1 }],
      "xl": ["2rem", { lineHeight: 1 }],
      "2xl": ["3.75rem", { lineHeight: 1 }],
      "3xl": ["5rem", { lineHeight: 1 }]
    },

    fontFamily: {
      sans: ["Inter", "sans-serif"]
    },

    extend: {
      animation: {
        "reverse-spin": "reverse-spin 1s linear infinite"
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)"
          }
        }
      }
    }
  }
};