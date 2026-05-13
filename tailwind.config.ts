import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        axiom: {
          bg: "#05070c",
          card: "#0c111c",
          line: "#1f2a3d",
          cyan: "#54d6ff",
          blue: "#6d8dff",
          green: "#6cffb2"
        }
      },
      boxShadow: { glow: "0 0 40px rgba(84, 214, 255, 0.16)" }
    }
  },
  plugins: []
};
export default config;
