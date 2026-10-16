import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.ts"],
  theme: {
    extend: {
      colors: {
        // Fresh grass green
        forest: { DEFAULT: "#1B5E20", 600: "#2E7D32", 100: "#DCEDDC", 50: "#F0F7EF" },
        // Pure milk white and creamy butter
        cream: { DEFAULT: "#FFFEFA", 200: "#FFF8E1", 300: "#F6EBCB" },
        // Golden butter yellow (dark is for text on light backgrounds)
        ghee: { DEFAULT: "#F9A825", light: "#FFD54F", dark: "#8A5A00" },
        ink: "#1A1A1A",
        earth: "#3B2E25",
      },
      fontFamily: {
        display: ["var(--font-display)", "Fraunces", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        wave: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-60px)" } },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(249,168,37,.55)" },
          "70%": { boxShadow: "0 0 0 14px rgba(249,168,37,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(249,168,37,0)" },
        },
        splash: {
          "0%,100%": { transform: "translateY(0) scale(1)", opacity: ".9" },
          "50%": { transform: "translateY(-18px) scale(1.06)", opacity: "1" },
        },
        rise: { from: { opacity: "0", transform: "translateY(16px)" }, to: { opacity: "1", transform: "none" } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-late": "float 7s ease-in-out 1.4s infinite",
        wave: "wave 2.8s linear infinite",
        "wave-slow": "wave 4.2s linear infinite",
        "spin-slow": "spin-slow 28s linear infinite",
        marquee: "marquee 38s linear infinite",
        "pulse-ring": "pulse-ring 2.2s ease-out infinite",
        splash: "splash 7s ease-in-out infinite",
        "splash-late": "splash 9s ease-in-out 2s infinite",
        rise: "rise .5s ease-out both",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(27,94,32,.06), 0 12px 32px -12px rgba(27,94,32,.18)",
        lift: "0 2px 4px rgba(27,94,32,.06), 0 28px 48px -20px rgba(27,94,32,.32)",
      },
    },
  },
  plugins: [],
} satisfies Config;
