/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#232b29",
        second: "#d6d3c2",
        gold: "#fbbf24",
        blue: "#60a5fa",
        cyan: "#06b6d4",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
