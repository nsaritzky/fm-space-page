/** @type {import('tailwindcss').Config} */

const pathPrefix = "/fm-space-page";
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
        "home-desktop": `url('${pathPrefix}/assets/home/background-home-desktop.jpg')`,
        "home-tablet": `url('${pathPrefix}/assets/home/background-home-tablet.jpg')`,
        "home-mobile": `url('${pathPrefix}/assets/home/background-home-mobile.jpg')`,

        "destination-desktop": `url('${pathPrefix}/assets/destination/background-destination-desktop.jpg')`,
        "destination-tablet": `url('${pathPrefix}/assets/destination/background-destination-tablet.jpg')`,
        "destination-mobile": `url('${pathPrefix}/assets/destination/background-destination-mobile.jpg')`,

        "crew-desktop": `url('${pathPrefix}/assets/crew/background-crew-desktop.jpg')`,
        "crew-tablet": `url('${pathPrefix}/assets/crew/background-crew-tablet.jpg')`,
        "crew-mobile": `url('${pathPrefix}/assets/crew/background-crew-mobile.jpg')`,

        "technology-desktop": `url('${pathPrefix}/assets/technology/background-technology-desktop.jpg')`,
        "technology-tablet": `url('${pathPrefix}/assets/technology/background-technology-tablet.jpg')`,
        "technology-mobile": `url('${pathPrefix}/assets/technology/background-technology-mobile.jpg')`,
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
