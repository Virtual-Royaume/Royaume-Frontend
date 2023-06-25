import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: [
    "./src/**/*.tsx"
  ],

  theme: {
    fontFamily: {
      "sans": ["Inter", "sans-serif"],
      "code": ["Source Code Pro", "sans-serif"]
    },

    colors: {
      transparent: "transparent",
      white: "white",
      black: "black",

      primary: {
        300: "#93c5fd",
        400: "#5D44E0",
        500: "#5339DD"
      },

      positive: colors.green,
      danger: colors.red,
      warning: colors.yellow,

      gray: {
        500: "#AFAFAF",
        700: "#1E1E1F",
        800: "#131314",
        900: "#0c0c0d"
      },

      external: {
        discord: "#5865F2"
      }
    },

    borderRadius: {
      DEFAULT: "0.375rem",
      full: "9999px"
    },

    container: {
      center: true,
      padding: "2rem"
    },

    boxShadow: {
      glow: "0 0 200px 100px #5339DD"
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },

      gridTemplateColumns: {
        "members": "repeat(auto-fill, minmax(5rem, 1fr))",
        "members-gray-800s": "repeat(auto-fill, minmax(20rem, 1fr))",
        "posts-gray-800s": "repeat(auto-fill, minmax(18rem, 1fr))"
      }
    }
  },

  plugins: []
} satisfies Config;