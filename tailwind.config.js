/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "csi-primary-bg": "#070C1D",
        "csi-secondary-bg": "#A4F0D4",
      },
      colors: {
        "csi-primary-dark": "#070C1D",
        "csi-secondary-dark": "#5254AD",
        "csi-primary-light": "#A4F0D4",
        "csi-secondary-light": "#00A9F3",
      },
    },
  },
  plugins: [],
};
