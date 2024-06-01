/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#197FE6",
        headingColor: "#F3F4F6",
        smallTextColor: "#F3F4F6",
      },
      width: {
        '120': '60rem', // 120/4 = 30rem
      },
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif'],
      },
      fontWeight: {
        'semibold': 600,
      },
    },
  },
  plugins: [],
};
