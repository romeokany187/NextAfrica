import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode : 'class',
  theme: {
    extend: {
      colors : {
        'base-first' : '#f2f9ff',
        'base-primary': '#e3f1fa',
        'base-secondary' : '#ddf0f6',
        'green-primary' : '#03a3ad',
        'black-primary' : '#1e1c123',
        'black-secondary' : '#1d222b',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
