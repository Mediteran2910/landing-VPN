// tailwind.config.js
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0d1f",
        foreground: "#ffffff",
        muted: "#8b9dc3",
        border: "#2c4b7c",
        accent: "#4f7cff",
        "accent-dark": "#3b5fcc",
        "accent-light": "#6b8fff",
        success: "#00d4aa",
        warning: "#ff6b35",
        error: "#ff4757",
        "blue-50": "#eff6ff",
        "blue-100": "#dbeafe",
        "blue-200": "#bfdbfe",
        "blue-300": "#93c5fd",
        "blue-400": "#60a5fa",
        "blue-500": "#3b82f6",
        "blue-600": "#2563eb",
        "blue-700": "#1d4ed8",
        "blue-800": "#1e40af",
        "blue-900": "#1e3a8a",
        "card-bg": "rgba(44, 75, 124, 0.15)",
        "card-border": "rgba(79, 124, 255, 0.2)",
        "glass-bg": "rgba(255, 255, 255, 0.03)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "background-gradient":
          "linear-gradient(135deg, #0a0d1f 0%, #1a1f3a 25%, #2d1b3d 50%, #3d2645 75%, #4a2c3a 100%)",
        "accent-gradient":
          "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
        "accent-gradient-hover":
          "linear-gradient(135deg, var(--accent-dark) 0%, var(--accent) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-left": "slideInFromLeft 0.8s ease-out",
        "slide-right": "slideInFromRight 0.8s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        glow: "glow 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: "translateY(24px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideInFromLeft: {
          from: { opacity: 0, transform: "translateX(-50px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideInFromRight: {
          from: { opacity: 0, transform: "translateX(50px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        scaleIn: {
          from: { opacity: 0, transform: "scale(0.9)" },
          to: { opacity: 1, transform: "scale(1)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 4px 20px rgba(79, 124, 255, 0.3)" },
          "50%": { boxShadow: "0 6px 30px rgba(79, 124, 255, 0.5)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.7 },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {
        ".btn-primary-shine::before": {
          content: '""',
          position: "absolute",
          top: "0",
          left: "-100%",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
          transition: "left 0.6s ease",
        },
        ".btn-primary-shine:hover::before": {
          left: "100%",
        },
        ".btn-secondary-shine::before": {
          content: '""',
          position: "absolute",
          top: "0",
          left: "-100%",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
          transition: "left 0.6s ease",
        },
        ".btn-secondary-shine:hover::before": {
          left: "100%",
        },
        ".card-shine::before": {
          content: '""',
          position: "absolute",
          top: "0",
          left: "-100%",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, transparent, rgba(79, 124, 255, 0.1), transparent)",
          transition: "left 0.6s ease",
        },
        ".card-shine:hover::before": {
          left: "100%",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
