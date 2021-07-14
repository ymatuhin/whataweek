const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: "class",
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./index.html", "{src}/**/*.{tsx,jsx,ts,js,html}"],
    mode: "all",
    preserveHtmlElements: false,
    options: {
      keyframes: true,
      variables: true,
      fontFace: true,
    },
  },
  theme: {
    fontFamily: {
      heading: ["'PT Serif'", defaultTheme.fontFamily.sans],
      base: ["'Exo 2'", defaultTheme.fontFamily.sans],
      mono: defaultTheme.fontFamily.mono,
    },
    fontSize: {
      xs: ["0.75rem"],
      sm: ["0.875rem"],
      base: ["1rem"],
      lg: ["1.125rem"],
      xl: ["1.25rem"],
      "2xl": ["1.5rem"],
      "3xl": ["1.875rem"],
      "4xl": ["2.25rem"],
      "5xl": ["3rem"],
      "6xl": ["3.75rem"],
      "7xl": ["4.5rem"],
      "8xl": ["6rem"],
      "9xl": ["8rem"],
    },
    extend: {
      lineHeight: {
        tighter: "1.125",
      },
      colors: {
        vk: "#4680c2",
        telegram: "#64a9dc",
        facebook: "#3b5998",
        twitter: "#00aced",
        viber: "#7b519d",
        whatsapp: "#65bc54",
      },
    },
  },
};
