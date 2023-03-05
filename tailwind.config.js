/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#001128",
        "transparent-white": "#0011287d",
        "ocean-blue": "#009dc4",
        "da-green": "#006a72"
      },
      backgroundImage: {
        hero: "url('/images/backg.png')",
        bannersmall: "url('/images/smallbanner.png')"
      }
    }
  },
  plugins: []
};
