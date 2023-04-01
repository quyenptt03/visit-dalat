/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // false or true
  theme: {
    extend: {
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
        "2xl": "1280px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          phone: "10px",
        },
      },
      fontFamily: {
        logo: ["Roboto", "sans-serif"],
        sans: ["Noto Sans", "sans-serif"],
        serif: ["Noto Serif", "serif"],
        eksell: ["Eksell Display", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        black: "#222222",
        white: "#FFFFFF",
        green: "#1D764A",
        "light-blue": "#DBEEFE",
      },
    },
  },
  plugins: [],
};
