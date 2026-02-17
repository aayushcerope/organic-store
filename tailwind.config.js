/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2f7f33",
        "primary-light": "#eaf0ea",
        "background-light": "#f9fbf9",
        "background-dark": "#141e15",
        "surface-dark": "#1e2a20",
        "border-dark": "#2a3d2c",
        "text-main": "#111811"
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"]
      }
    }
  },
  plugins: []
};
