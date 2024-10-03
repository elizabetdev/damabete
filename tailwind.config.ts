import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syncopate: ["var(--font-syncopate)"],
        marker: ["var(--font-permanentMarker)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
