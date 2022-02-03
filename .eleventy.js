// TODO https://www.zachleat.com/web/eleventy-image/
// https://www.zachleat.com/web/eleventy-image/
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, className) {
	let sizes = [25, 320, 640, 1200, 1800]

	let metadata = await Image(src, {
		widths: sizes,
		formats: ["webp", "jpeg"],
		urlPath: "/images/",
		outputDir: "./_site/images/",
	});

	let imageAttributes = {
		sizes,
		alt,
		loading: "lazy",
		decoding: "async",
		//"class": className
	};

	// You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
	return `<div class="${className}"> ${Image.generateHTML(metadata, imageAttributes)} </div>`;
}


module.exports = function (config) {
	config.addPassthroughCopy({
		// 'src/css/_site/styles.css': './styles.css',
		'node_modules/@fortawesome/fontawesome-free/css/all.css': './fa-all.css',
		'node_modules/@fortawesome/fontawesome-free/webfonts': './webfonts',
		'src/assets': './assets'
	});

	// Shortcode for images
	config.addNunjucksAsyncShortcode("Image", imageShortcode);
	config.addLiquidShortcode("Image", imageShortcode);
	config.addJavaScriptFunction("Image", imageShortcode);

	return {
		dir: {input: 'src'},
	};
}

