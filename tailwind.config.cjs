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
        theme0: "#fff",
        theme1: "#F1F5FB",
        theme2: "#444444",
        theme3: "#e71818",
        theme4: "#0074fc",
        theme5: "#08c108",
        theme6: "#f0ad4e",
        theme7: "#8b4513",
        theme8: "#800080",
        theme9: "#ffc0cb",
      },
      colors: {
        primary: "#0070BA",
        bright: "#005893",
      },
      borderColor: {
        primary: "#F1F5FB",
        secondary: "#0070BA",
        theme0: "#fff",
        theme1: "#F1F5FB",
        theme2: "#444444",
        theme3: "#e71818",
        theme4: "#0074fc",
        theme5: "#08c108",
        theme6: "#f0ad4e",
        theme7: "#8b4513",
        theme8: "#800080",
        theme9: "#ffc0cb",
      },
    },
  },
  plugins: [],
};
