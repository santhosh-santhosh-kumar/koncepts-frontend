/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: ['responsive', 'hover', 'focus'],
      fontFamily:{
        "Heading":["Merriweather","serif"],
        "ContentText":["Loto","sans-serif"],
        "Comma":["Monoton","serif"],
      },
      colors:{
        "darkblue":"#0a2b6d",
        "myyellow":"#f8d100"
      },
      container:{
        padding:{
          DEFAULT:"1rem",
            sm: "2rem",
            md: "4rem",
            xl: "5rem",
            "2xl": "6rem",
        }
      }
    },
  },
  plugins: [],
}

