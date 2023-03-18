/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    colors:{
      darkEle:"hsl(209, 23%, 22%)",
      darkBg:"hsl(207, 26%, 17%)",
     lightText: "hsl(200, 15%, 8%)",
      lightInput:"hsl(0, 0%, 52%)",
      lightBg:"hsl(0, 0%, 98%)",
      darkText:"hsl(0, 0%, 100%)",
      lightEle:"hsl(0, 0%, 100%)"
    },
    extend: {},
  },
  plugins: [],
}