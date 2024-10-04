/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customGray900: "hsl(0, 0%, 8%)",
        customGray800: "hsl(0, 0%, 12%)",
        customGray700: "hsl(0, 0%, 20%)",
      },
    },
  },
  plugins: [],
};
