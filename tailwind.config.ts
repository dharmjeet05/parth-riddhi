import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        marigold: "#F4A300",
        saffron: "#FF7A00",
        maroon: "#7B1E2B",
        deepred: "#9E1B32",
        gold: "#C99700",
        cream: "#FFF7EC",
        henna: "#7A3B12",
        rose: "#D14D72",
        // ── V2 "Emerald & Gold" royal palette ──
        emerald: "#0B3D2E",
        emeraldDeep: "#072A20",
        emeraldSoft: "#14533D",
        champagne: "#E8D9B5",
        goldLeaf: "#D4AF37",
        ivory: "#FBF7EE",
        // ── V3 "Romantic Floral" palette ──
        blush: "#F9D8E4",
        blushDeep: "#F2A9C4",
        rosePetal: "#E06B8B",
        wine: "#8E3B54",
        sage: "#9CAF88",
        sageDeep: "#6E8B6A",
        terracotta: "#C97B63",
        petalCream: "#FFF9F5",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        gujarati: ["var(--font-gujarati)", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-2.5deg)" },
          "50%": { transform: "rotate(2.5deg)" },
        },
        swayStrand: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.04)" },
        },
        spinReverse: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        spinSlow: "spinSlow 40s linear infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        sway: "sway 5s ease-in-out infinite",
        swayStrand: "swayStrand 4s ease-in-out infinite",
        breathe: "breathe 7s ease-in-out infinite",
        spinReverse: "spinReverse 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
