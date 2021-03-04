const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

// tailwind.config.js
module.exports = {
  purge: {
    content: ["./index.html", "./src/**/*.{svelte,ts,js,html}"],
    mode: "all",
    preserveHtmlElements: false,
    options: {
      variables: true,
      keyframes: true,
    },
  },
  darkMode: "class", // or 'media' or 'class'
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
    extend: {
      borderWidth: {
        1: "1px",
        10: "10px",
        12: "12px",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["visited"],
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const maxWidth = theme("maxWidth", {});
      const utilities = Object.entries(maxWidth).reduce((acc, [key, value]) => {
        acc[`.children-max-w-${key} > *`] = { maxWidth: value };
        return acc;
      }, {});
      addUtilities(utilities, { variants: ["responsive"] });
    }),
  ],
};
