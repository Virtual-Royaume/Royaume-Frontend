import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{tsx,mdx}"
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

      gray: {
        50: "#F7F7F7",
        100: "#F0F0F0",
        200: "#DEDEDE",
        300: "#CFCFCF",
        400: "#BFBFBF",
        500: "#AFAFAF",
        600: "#838384",
        700: "#515152",
        800: "#1E1E1F",
        900: "#131314",
        950: "#0C0C0D"
      },

      primary: {
        300: "#818CF8",
        500: "#6366F1",
        700: "#4F46E5"
      },

      positive: {
        300: "#86EFAC",
        500: "#22C55E",
        700: "#15803D"
      },
      danger: {
        300: "#FFBDBD",
        500: "#FF5555",
        700: "#FF0F0F"
      },
      warning: {
        300: "#FFD966",
        500: "#FFC100",
        700: "#CC9900"
      },

      media: {
        twitter: "#1D9BF0",
        discord: "#5865F2",
        linkedin: "#0A63BC",
        twitch: "#A645FF",
        instagram: "#DB2777",
        youtube: "#F70000",
        malt: "#F75954",
        github: "#000000"
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