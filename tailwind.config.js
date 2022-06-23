/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur-background.png)'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        purple: {
          300: "#7A00B3",
          500: "#540087",
          700: "#3B015F"
        },
        blue: {
          500: "#81D8F7"
        },
        orange: {
          500:"#fba94c"
        },
        red: {
          500: "#f75a68"
        },
        gray: {
          100: "#e1e1e6",
          200: "#c4c4cc",
          300: "#8d8d99",
          500: "#323238",
          600: "#29292e",
          700: "#121214",
          900: "#09090a"
        }
      }
    },
  },
  plugins: [],
}
