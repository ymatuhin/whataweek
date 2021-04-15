const colors = require("tailwindcss/colors");
const preset = require("shared/tailwind.preset");

// tailwind.config.js
module.exports = {
  presets: [preset],
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      gray: colors.gray,
      primary: {
        50: "#fcf8f5",
        100: "#fceeeb",
        200: "#fad6d5",
        300: "#f9b3b0",
        400: "#f98077",
        500: "#fa554a", // base for dark
        600: "#f23530",
        700: "#bd3430", // base
        800: "#ab212a",
        900: "#881b24",
      },
    },
  },
};
