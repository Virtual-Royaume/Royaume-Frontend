import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem"
    },
    colors: {
      background: {
        DEFAULT: "#0c0c0d",
        header: "rgba(12, 12, 13, .5)",
        card: "#131314"
      },
      white: {
        DEFAULT: "#FFFFFF",
        desc: "#AFAFAF"
      },
      discord: "#5865F2",
      purple: {
        DEFAULT: "#5339DD",
        glow: "rgba(83, 57, 221, .52)"
      }
    },
    fontFamily: {
      "sans": ["Inter", "sans-serif"]
    },
    boxShadow: {
      glow: "0 0 200px 100px #5339DD"
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config;