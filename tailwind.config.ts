import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.ts"],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: "#1B4332", 600: "#2D6A4F", 100: "#DCE8E0", 50: "#EEF4F0" },
        cream: { DEFAULT: "#FDFCF7", 200: "#FAF6ED", 300: "#F2EADA" },
        ghee: { DEFAULT: "#D4A373", light: "#E9C46A", dark: "#A8743F" },
        ink: "#1A1A1A",
        earth: "#2C2523",
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
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-late": "float 7s ease-in-out 1.4s infinite",
        wave: "wave 2.8s linear infinite",
        "wave-slow": "wave 4.2s linear infinite",
        "spin-slow": "spin-slow 28s linear infinite",
        marquee: "marquee 38s linear infinite",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(27,67,50,.06), 0 12px 32px -12px rgba(27,67,50,.18)",
        lift: "0 2px 4px rgba(27,67,50,.06), 0 28px 48px -20px rgba(27,67,50,.32)",
      },
    },
  },
  plugins: [],
} satisfies Config;
