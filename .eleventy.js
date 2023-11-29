const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addFilter("menuBarClass", function (item) {
    // Remove the leading slash if it exists
    const normalizedPath = this.page.url.startsWith("/")
      ? this.page.url.slice(1)
      : urlPath;

    // Split the path by slash and get the first segment
    const segments = normalizedPath.split("/");
    const firstSegment = segments[0];
    if (firstSegment === item || (firstSegment === "" && item === "home")) {
      return "box-border flex h-full items-center text-white mb-[-2px] border-b-2 border-white";
    } else {
      return "box-border flex h-full items-center text-white hover:mb-[-2px] hover:border-b-2 hover:border-white/50";
    }
  });

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addFilter("slideMenuClass", function (item) {
    // Remove the leading slash if it exists
    const normalizedPath = this.page.url.startsWith("/")
      ? this.page.url.slice(1)
      : urlPath;

    // Split the path by slash and get the first segment
    const segments = normalizedPath.split("/");
    const firstSegment = segments[0];
    if (firstSegment === item || (firstSegment === "" && item === "home")) {
      return "mb-[32px] w-full border-r-2 border-white";
    } else {
      return "mb-[32px] w-full hover:border-r-2 hover:border-white/50";
    }
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    pathPrefix: "/fm-space-page/",
  };
};
