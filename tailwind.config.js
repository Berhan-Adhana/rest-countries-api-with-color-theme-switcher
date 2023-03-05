/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,jsx,js}"],

  theme: {
    extend: {
      colors: {
        dark: "#202c36",
        containerColor: "#2b3844",
        textColor: "#111517",
        boxShadow: "rgba(0, 0, 0, 0.0294384)",
      },
    },
  },
  plugins: [],
};
