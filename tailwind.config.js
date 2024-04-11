/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "dektop-header": "url('./assets/desktop/bg-pattern-header.svg')",
        "mobile-header": "url('./assets/mobile/bg-pattern-header.svg')",
      },
    },
  },
  plugins: [],
};
