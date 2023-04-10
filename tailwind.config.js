/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yt-dark': '#0f0f0f',
        'search': '#121212',
        'badge': '#cc0000',
        'yt-dark2': '#272727',
        'yt-light': '#1f1f1f',
      }
    },
    screens: {
      mobile: "375px",
      // => @media (min-width: 375px) { ... }

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "768px",
      // => @media (min-width: 768px) { ... }

      desktop: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
  darkMode: "class",
};
