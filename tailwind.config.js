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
        popupColor:
          "linear-gradient(180deg, rgba(255,228,156,1) 0%, rgba(242,171,17,1) 100%)",
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
    keyframes: {
      tada: {
        "0%": {
          transform: "scale(1);",
        },
        "10%": {
          transform: "scale(0.9) rotate(-3deg);",
        },
        "20%": {
          transform: "scale(0.9) rotate(-3deg);",
        },
        "30%": {
          transform: "scale(1.1) rotate(3deg);",
        },
        "50%": {
          transform: "scale(1.1) rotate(3deg);",
        },
        "70%": {
          transform: "scale(1.1) rotate(3deg);",
        },
        "90%": {
          transform: "scale(1.1) rotate(3deg);",
        },
        "40%": {
          transform: "scale(1.1) rotate(-3deg);",
        },
        "60%": {
          transform: "scale(1.1) rotate(-3deg);",
        },
        "80%": {
          transform: "scale(1.1) rotate(-3deg);",
        },
        "100%": {
          transform: "scale(1) rotate(0);",
        },
      },
    },
    animation: {
      tada: "tada 1s both infinite",
    },
  },
  plugins: [],
};
