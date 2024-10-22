
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = async function(eleventyConfig) {
	// Configure Eleventy
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addPassthroughCopy('./src/assets');

	// date filter
	eleventyConfig.addFilter("postDate", (dateObj) => {
        return new Date(dateObj).toLocaleDateString('en-gb', {
            year: "numeric", month: "short",
            day: "numeric"
        });
    });

    return {
		dir: {
			input: 'src',
			output: '_site',
			includes: '_includes',
			data: '_data',
		},
		htmlTemplateEngine: 'njk',
	};
};