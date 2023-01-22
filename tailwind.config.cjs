/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#F1F5FB",
        secondary: "#0070BA",
        list: "#84a5ba33",
      },
      colors: {
        primary: "#0070BA",
        bright: "#005893",
      },
      borderColor: {
        primary: "#F1F5FB",
      },
    },
  },
  plugins: [],
};
