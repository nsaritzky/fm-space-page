/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.njk",
    "./src/**/*.md",
    ".eleventy.js",
  ],
  theme: {
    extend: {
      colors: {
        "space-black": "#0B0D17",
        "space-pale-blue": "#D0D6F9",
      },
      fontFamily: {
        bellefair: ["Bellefair"],
        barlow: ["Barlow"],
        "barlow-condensed": ["Barlow Condensed"],
      },
      backgroundImage: {
        "home-desktop": "url('/assets/home/background-home-desktop.jpg')",
        "home-tablet": "url('/assets/home/background-home-tablet.jpg')",
        "home-mobile": "url('/assets/home/background-home-mobile.jpg')",

        "destination-desktop":
          "url('/assets/destination/background-destination-desktop.jpg')",
        "destination-tablet":
          "url('/assets/destination/background-destination-tablet.jpg')",
        "destination-mobile":
          "url('/assets/destination/background-destination-mobile.jpg')",

        "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",
        "crew-tablet": "url('/assets/crew/background-crew-tablet.jpg')",
        "crew-mobile": "url('/assets/crew/background-crew-mobile.jpg')",

        "technology-desktop":
          "url('/assets/technology/background-technology-desktop.jpg')",
        "technology-tablet":
          "url('/assets/technology/background-technology-tablet.jpg')",
        "technology-mobile":
          "url('/assets/technology/background-technology-mobile.jpg')",
      },

      fontSize: {
        h1: "150px",
        h2: "100px",
        h3: "56px",
        h4: "32px",
        h5: "28px",
        sh1: "28px",
        sh2: "14px",
        nav: "16px",
      },
    },
  },
  plugins: [],
};
