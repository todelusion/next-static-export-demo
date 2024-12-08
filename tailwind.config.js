/** @type {import('tailwindcss').Config} */

const { join } = require("path");

module.exports = {
  content: [
    join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "./src/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    extend: {
      fontFamily: {
        "pearl-extralight": ["FakePearl-ExtraLight", "sans-serif"],
        "pearl-light": ["FakePearl-Light", "sans-serif"],
        "pearl-regular": ["FakePearl-Regular", "sans-serif"],
        "pearl-medium": ["FakePearl-Medium", "sans-serif"],
        "pearl-semibold": ["FakePearl-SemiBold", "sans-serif"],
      },
    },
  },
};
