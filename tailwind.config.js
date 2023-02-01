/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-img": "url('../public/chelsea_bg.webp')",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(100%, 0, 0)" },
        },
      },
    },
  },
  plugins: [],
};
