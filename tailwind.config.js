/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
         boxShadow: {
        '3xl': '0 75px 100px -15px rgba(0, 0, 0, 0.3)',
      },
    colors: {
      primary: {
        light: "#3b4559",
        DEFAULT: "#0a162f",
        dark: "rgb(6 182 212 / var(--tw-text-opacity))",
        text: "#dfe0e1",
        "text-light": "rgb(148 163 184 / var(--tw-text-opacity))",
      },
    },
    lineClamp: {
      7: "7",
      8: "8",
      9: "9",
      10: "10",
    },
  },
};
export const plugins = [require("@tailwindcss/line-clamp")];
