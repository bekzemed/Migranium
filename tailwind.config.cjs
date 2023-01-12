/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#F1F5FB",
        secondary: "#0070BA",
      },
      colors: {
        primary: "#0070BA",
      },
      borderColor: {
        primary: "#F1F5FB",
      },
    },
  },
  plugins: [],
};
