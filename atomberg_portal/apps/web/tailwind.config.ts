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
        atomberg: {
          black: "#0a0a0a",
          charcoal: "#141414",
          slate: "#1c1c1e",
          gold: "#fdb913",
          "gold-light": "#ffc933",
          "gold-dark": "#e5a50f",
          white: "#ffffff",
          muted: "#9ca3af",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        atomberg: "0 8px 32px rgba(0,0,0,0.24), 0 0 0 1px rgba(253,185,19,0.08)",
        "atomberg-lg": "0 24px 48px rgba(0,0,0,0.32)",
      },
      animation: {
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
        "slide-up": "slide-up 0.35s ease-out",
      },
      keyframes: {
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(253, 185, 19, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(253, 185, 19, 0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
