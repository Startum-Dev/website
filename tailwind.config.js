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
        "da-green": "#006a72",
        "primary-yellow": "#fcca03"
      },
      backgroundImage: {
        hero: "url('/images/backg.png')",
        bannersmall: "url('/images/smallbanner.png')",
        realeastatebg: "url('/images/realbanner.png')",
        manubg: "url('/images/manu.png')",
        constbg: "url('/images/const.png')",
        energybg: "url('/images/gas.png')"
      }
    }
  },
  plugins: []
};
