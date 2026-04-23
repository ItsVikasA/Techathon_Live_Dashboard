/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0b0f14",
        panel: "#121922",
        panelSoft: "#16212c",
        textMain: "#ecf4ff",
        textMuted: "#88a0ba",
        accent: "#2de08f",
        accentDeep: "#1cbf74",
      },
      fontFamily: {
        sans: ["Sora", "Manrope", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(45,224,143,0.2), 0 20px 45px rgba(3,10,20,0.55)",
      },
      backgroundImage: {
        radialGlow:
          "radial-gradient(circle at 20% 10%, rgba(45,224,143,0.28), transparent 36%), radial-gradient(circle at 88% 0%, rgba(38,124,255,0.24), transparent 42%)",
      },
    },
  },
  plugins: [],
};
