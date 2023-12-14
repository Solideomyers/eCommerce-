/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
import scrollbar from "tailwind-scrollbar";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImg: {
        hero: "url('./src/assets/images/herosection.svg')",
      },
    },
    fontFamily: {
      amenable: ["Amenable", "sans-serif"],
      quicksand: ["Quicksand", "sans-serif"],
    },
    gradientColorStops: (theme) => ({
      c6dcf1: "#c6dcf1",
      "7daedd": "#7daedd",
      "4a79c6": "#4a79c6",
      "222e49": "#222e49",
    }),
    keyframes: {
      reveal: {
        "0%": { opacity: "0", transform: "translateY(100px)" },
        "50%": { opacity: "1" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      enterFromRight: {
        from: { opacity: 0, transform: "translateX(200px)" },
        via: { opacity: 0, transform: "translateX(150px)" },
        to: { opacity: 1, transform: "translateX(0)" },
      },
      enterFromLeft: {
        from: { opacity: 0, transform: "translateX(-200px)" },
        to: { opacity: 1, transform: "translateX(0)" },
      },
      exitToRight: {
        from: { opacity: 1, transform: "translateX(0)" },
        to: { opacity: 0, transform: "translateX(200px)" },
      },
      exitToLeft: {
        from: { opacity: 1, transform: "translateX(0)" },
        to: { opacity: 0, transform: "translateX(-200px)" },
      },
      scaleIn: {
        from: { opacity: 0, transform: "rotateX(-10deg) scale(0.9)" },
        to: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
      },
      scaleOut: {
        from: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
        to: { opacity: 0, transform: "rotateX(-10deg) scale(0.95)" },
      },
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      fadeOut: {
        from: { opacity: 1 },
        to: { opacity: 0 },
      },
    },
    colors: {
      // brand colors
      primary: "#3583c2",
      secondary: "#e5eef9",
      "hover-primary": "#1f5385",
      "blue-500": "#3583c2",
      "blue-300": "#94c0e5",
      "blue-600": "#4a79c6",
      "blue-900": "#222e49",
      neutral: {
        100: "#f2f2f2",
        200: "#d9d9d9",
        300: "#bfbfbf",
        400: "#a6a6a6",
        500: "#8c8c8c",
        600: "#737373",
        700: "#595959",
        800: "#404040",
        900: "#252525",
      },
      "primary-light": "#AACB62",
    },
  },
  animation: {
    reveal: "reveal 1s linear",
    scaleIn: "scaleIn 200ms ease",
    scaleOut: "scaleOut 500ms ease-in-out",
    fadeIn: "fadeIn 300ms ease-in",
    fadeOut: "fadeOut 200ms ease",
    enterFromLeft: "enterFromLeft 250ms ease",
    enterFromRight: "enterFromRight 350ms ease",
    exitToLeft: "exitToLeft 250ms ease",
    exitToRight: "exitToRight 250ms ease",
  },
  screens: {
    xs: "420px",
  },

  plugins: [scrollbar],
});
