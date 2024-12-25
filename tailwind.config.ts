import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'bounce-smooth': {
          '0%': {
            transform: 'translateY(0)', // Start at the original position
          },
          '50%': {
            transform: 'translateY(-10px)', // Move 10px up at mid-way
          },
          '100%': {
            transform: 'translateY(0)', // End back to the original position
          },
        },
      },
      animation: {
        'bounce-smooth': 'bounce-smooth 0.5s ease-in-out', // 0.5s duration, smooth easing
      },
    },
    fontFamily: {
      main: ["Epilogue"],
      sub: ["Inter"],
    }
  },
  plugins: [],
} satisfies Config;
