/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        navFont : [ "Matemasie", "sans-serif"],
        suisse: [
          "SuisseWorks",
          "Georgia",
          "Times",
          "Times New Roman",
          "serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
        fontWeight: {
          suisseBold: 700,
        },
        fontSize: {
          'custom-lg': ['32px', '40px'], // Font size 32px and line height 40px
        },
      },
    },
  },
  plugins: [],
}
