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
        DEFAULT: "#C5CC5C",
        2: "#9CA13F"
      },

      "success": {
        DEFAULT: "#48C629",
        2: "#3BA021"
      },
      "warning": {
        DEFAULT: "#FFB22B",
        2: "#DEA136"
      },
      "error": {
        DEFAULT: "#F34D4D",
        2: "#C33F3F"
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

      "red": "#E13131",
      "green": "#27AE60",

      "transparent": "transparent",

      "discord": {
        "primary": {
          DEFAULT: "#5865F2",
          2: "#4f5ce3"
        }
        // https://discord.com/branding if you want to add more
      }
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