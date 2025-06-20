/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./store/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors: { 
          "border-color": '#C4C4C4',
          "[color:var(--main-color)] ": '#E57C29', 
          "hover-color": "#00000033",
          "hover-shadow": "0px 8px 24px 0px",
          "warning-color": "#F3DE6D",
          "gray900": "#191C1F",
          "gray600": "#5F6C72",
        },
        fontFamily: {
        inter: ["Inter", "sans-serif"],
        publicSans: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

