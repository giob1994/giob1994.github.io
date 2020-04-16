module.exports = function(eleventyConfig) {
    // Add a filter using the Config API
    eleventyConfig.addFilter( "myFilter", function() {});
    eleventyConfig.addPassthroughCopy("src/.");
    
    return {
        markdownTemplateEngine: "njk",
        templateFormats: ["njk", "md"]
    };
};