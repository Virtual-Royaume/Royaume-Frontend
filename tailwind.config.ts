import type { Config } from "tailwindcss";

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

      danger: "#DD4439",
      white: {
        DEFAULT: "#FFFFFF",
        desc: "#AFAFAF"
      },
      purple: {
        DEFAULT: "#5339DD",
        glow: "rgba(83, 57, 221, .52)"
      },

      discord: "#5865F2",

      background: {
        DEFAULT: "#0c0c0d",
        header: "rgba(12, 12, 13, .5)",
        card: {
          DEFAULT: "#131314",
          hover: "#1E1E1F"
        },
        info: "#1E1E1F"
      },

      links: "#69B0EB"
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
        "members-cards": "repeat(auto-fill, minmax(20rem, 1fr))",
        "posts-cards": "repeat(auto-fill, minmax(18rem, 1fr))"
      }
    }
  },

  plugins: []
} satisfies Config;