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
          bg: "#030711",
          card: "#08111f",
          line: "#1f2a3d",
          cyan: "#54d6ff",
          blue: "#6d8dff",
          green: "#6cffb2",
          gold: "#f5c267"
        }
      },
      boxShadow: {
        glow: "0 0 48px rgba(84, 214, 255, 0.18)",
        logo: "0 0 70px rgba(84, 214, 255, 0.22)"
      }
    }
  },
  plugins: []
};
export default config;
