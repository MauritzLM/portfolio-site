
module.exports = async function(eleventyConfig) {
	// Configure Eleventy
    eleventyConfig.addPassthroughCopy('./src/assets');

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