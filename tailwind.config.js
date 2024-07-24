/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        main: "1200px",
      },
      colors: {
        main: "rgb(250 204 21 / var(--tw-bg-opacity))",
      },
      backgroundColor: {
        main: "rgb(250 204 21 / var(--tw-bg-opacity))",
      },
      backgroundImage: {
        blurColor:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
      },
    },
    screens: {
      phone: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      tablet: { min: "640px", max: "1023px" },
      // => @media (min-width: 640px) and (max-width: 1023px) { ... }

      laptop: { min: "1024px" },
      // => @media (min-width: 1024px) and (max-width: 1279px) { ... }
    },
  },
  plugins: [],
};
