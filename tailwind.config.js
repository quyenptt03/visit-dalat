/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  important: true,
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
        "2xl": "1536px",
        xxl: "1920px",
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
        "raven-black": "#3D3D3D",
        white: "#FFFFFF",
        primary: "var(--primary-color)",
        "light-blue": "#DBEEFE",
        "baby-blue": "#E4F2FE",
        "bg-blue": "#F1F8FF",
        gray: "#6D6D6D",
        "dark-gray": "#474747",
      },
    },
  },
  plugins: [],
};
