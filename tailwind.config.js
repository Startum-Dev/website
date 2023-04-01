/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Segoe UI"],
        serif: ["ui-serif", "Georgia"]
      },
      colors: {
        "text-color": "#a3a3a3",
        "transparent-white": "#3535307d",
        "faint-gold": "#40403b",
        "background-black": "#1c1b19",
        "primary-yellow": "#ffbe33",
        "primary-black": "#222831"
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
