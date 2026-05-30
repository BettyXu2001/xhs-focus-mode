/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        card: {
          bg: '#fafafa',
        },
        primary: '#ff2442',
        green: '#34c759',
      }
    },
  },
  plugins: [],
};
