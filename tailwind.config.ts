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
        navy: {
          DEFAULT: "#0A1628",
          50: "#E8EEFF",
          100: "#C5D1F0",
          200: "#8FA5D8",
          300: "#5A7ABF",
          400: "#2E4F9A",
          500: "#0A1628",
          600: "#081220",
          700: "#060E18",
          800: "#040A10",
          900: "#020508",
        },
        brand: {
          blue: "#2563EB",
          indigo: "#4F46E5",
          light: "#F8FAFF",
          "blue-light": "#EEF2FF",
          "indigo-light": "#E0E7FF",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #0A1628 0%, #0F1E3D 50%, #0A1628 100%)",
        "blue-gradient":
          "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(79,70,229,0.05) 100%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradientX 3s ease infinite",
        "counter-up": "counterUp 2s ease-out forwards",
        "draw-line": "drawLine 1.5s ease-out forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(37,99,235,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(79,70,229,0.6)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "100%" },
          "100%": { strokeDashoffset: "0%" },
        },
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(10,22,40,0.05), 0 2px 4px -1px rgba(10,22,40,0.03)",
        "card-hover":
          "0 20px 40px -8px rgba(10,22,40,0.15), 0 8px 16px -4px rgba(37,99,235,0.1)",
        "blue-glow": "0 0 30px rgba(37,99,235,0.3)",
        "indigo-glow": "0 0 30px rgba(79,70,229,0.3)",
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
