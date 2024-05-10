/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Urbanist", "sans-serif"],
        cursive: ["Seaweed Script", "cursive"]
      }
    },
  },
  plugins: [require("daisyui")],
}

