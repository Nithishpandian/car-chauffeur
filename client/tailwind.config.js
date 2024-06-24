/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        backgroundGray: "#262626",
        backgroundLightGray: "#252525",
        backgroundSlate: "#1C1C1C",
        backgroundLightSlate: "#303030",
        lightishGray: "#D9D9D9",
        backgroundBlack: "#151515",
        lightCholocate: "#AA8B65",
        darkCholocate: "#54493C",
      },
    },
  },
  plugins: [],
};
