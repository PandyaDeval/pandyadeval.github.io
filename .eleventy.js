module.exports = eleventyConfig => {

  eleventyConfig.addPassthroughCopy("src/assets/**");
  // eleventyConfig.addPassthroughCopy("src/google6673fe9fe660921f.html");

  return {
    dir: {
      input: "src",
      output: "docs"
    }
  }
}