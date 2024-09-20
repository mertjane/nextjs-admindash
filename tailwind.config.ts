import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "custom-black": "#0C0C0C",
        "custom-orange": "#F2613F",
        "soft-indigo": "#5A67D8", // Corresponds to text-indigo-600
        'soft-white': '#FAFAFA',
      },
      backgroundImage: {
        
        'soft-gradient': 'radial-gradient(circle, rgba(90, 103, 216, 0.2) 0%, rgba(250, 250, 250, 1) 60%)',
        'card-gradient': 'linear-gradient(170deg, rgba(23,32,51,1) 18%, rgba(77,92,113,1) 100%)'
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;