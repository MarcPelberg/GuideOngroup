import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        guideon: {
          primary: "#003366",
          secondary: "#0066CC",
          accent: "#FF6600",
          dark: "#001122",
          light: "#F5F7FA",
        },
      },
    },
  },
  plugins: [],
};
export default config;
