const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

// tailwind.config.js
module.exports = {
  presets: [require("@ymatuhin/ui/tailwind.config")],
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      gray: colors.gray,
      red: {
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
    fontFamily: {
      heading: ["Fira Sans Condensed", defaultTheme.fontFamily.sans],
      base: ["Fira Sans", defaultTheme.fontFamily.sans],
      mono: defaultTheme.fontFamily.mono,
    },
  },
};
