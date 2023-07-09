/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        shadow: "Shadows Into Light, cursive",
        caveat: "Caveat, cursive",
      },
      colors: {
        primary: "#fffffd",
        secondary: "#ffa69e",
      },
    },
  },
  plugins: [],
};
