/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    lineClamp: {
      7: '7',
      8: '8',
      9: '9',
      10: '10',
    }
  },
};
export const plugins = [
  require('@tailwindcss/line-clamp'),
];